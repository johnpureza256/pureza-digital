// Shared logic for the contact/enquiry flow.
//
// Double opt-in: a submission is NOT delivered to the inbox until the person
// clicks a confirmation link sent to the email they entered. The submission
// travels inside an HMAC-signed, short-lived token in that link, so no
// database is needed — the token is the record.

import crypto from "node:crypto";

export const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "hello@purezadigital.com";
export const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "Pureza Digital <hello@purezadigital.com>";

// Signing key for confirmation tokens. Prefer a dedicated VERIFY_SECRET; fall
// back to the Resend key (already a strong secret) so the flow works without
// extra config. Both being empty is treated as "not configured".
export const SIGNING_SECRET =
  process.env.VERIFY_SECRET || process.env.RESEND_API_KEY || "";

export const TOKEN_TTL_MS = 30 * 60 * 1000; // 30 minutes

export const INTEREST_LABELS: Record<string, string> = {
  "free-audit": "Free Website Audit",
  starter: "Starter Website from $497",
  "local-business": "Local Business Website from $997",
  growth: "Growth Website from $1,997",
  hosting: "Hosting & Maintenance",
  "not-sure": "Not sure yet",
};

export const CONTACT_METHOD_LABELS: Record<string, string> = {
  email: "Email",
  phone: "Phone call",
  text: "Text message",
};

export type Submission = {
  name: string;
  businessName: string;
  email: string;
  phone?: string;
  currentPresence?: string;
  preferredContact?: string;
  interest?: string;
  message: string;
};

export function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ── Confirmation token ────────────────────────────────────────────────────
function b64url(buf: Buffer) {
  return buf.toString("base64url");
}

export function signSubmission(sub: Submission): string {
  const payload = b64url(Buffer.from(JSON.stringify({ ...sub, iat: Date.now() })));
  const sig = b64url(crypto.createHmac("sha256", SIGNING_SECRET).update(payload).digest());
  return `${payload}.${sig}`;
}

/** Returns the submission if the token is authentic and unexpired, else null. */
export function verifySubmissionToken(token: string): Submission | null {
  if (!SIGNING_SECRET) return null;
  const [payload, sig] = token.split(".");
  if (!payload || !sig) return null;

  const expected = b64url(crypto.createHmac("sha256", SIGNING_SECRET).update(payload).digest());
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;

  let data: Submission & { iat?: number };
  try {
    data = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
  } catch {
    return null;
  }
  if (!data.iat || Date.now() - data.iat > TOKEN_TTL_MS) return null;

  const { iat: _iat, ...sub } = data;
  return sub as Submission;
}

/**
 * The 6-digit code the user must type back. Derived server-side from the token
 * via a keyed HMAC, so it's deterministic for a given token but impossible to
 * compute without SIGNING_SECRET — only someone who received the email knows it.
 * Domain-separated ("code:") so it never collides with the token signature.
 */
export function codeForToken(token: string): string {
  const payload = token.split(".")[0] || "";
  const digest = crypto.createHmac("sha256", SIGNING_SECRET).update(`code:${payload}`).digest();
  const n = digest.readUInt32BE(0) % 1_000_000;
  return String(n).padStart(6, "0");
}

/** Constant-time compare of a user-entered code against the expected one. */
export function codeMatches(token: string, input: string): boolean {
  const expected = codeForToken(token);
  const clean = (input || "").replace(/\D/g, "");
  if (clean.length !== 6) return false;
  const a = Buffer.from(clean);
  const b = Buffer.from(expected);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

// ── Email sending (Resend) ────────────────────────────────────────────────
export async function sendEmail(opts: {
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { ok: false, status: 500, data: { error: "no api key" } };

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [opts.to],
      subject: opts.subject,
      html: opts.html,
      text: opts.text,
      ...(opts.replyTo ? { reply_to: opts.replyTo } : {}),
    }),
  });
  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, status: res.status, data };
}

// ── Email bodies ──────────────────────────────────────────────────────────

/** Sent to the person who filled the form — a 6-digit code they type back. */
export function sendCodeEmail(sub: Submission, code: string) {
  const safeName = escapeHtml(sub.name);
  const spaced = code.split("").join(" ");
  return sendEmail({
    to: sub.email,
    subject: `${code} is your Pureza Digital confirmation code`,
    text:
      `Hi ${sub.name},\n\n` +
      `Your confirmation code is: ${code}\n\n` +
      `Enter it on the form to send your enquiry. The code expires in 30 minutes. ` +
      `If you didn't fill in our form, you can ignore this email.\n\n` +
      `— Pureza Digital`,
    html: `
      <div style="font-family:Arial,Helvetica,sans-serif;max-width:520px;margin:0 auto;color:#111">
        <h2 style="margin:0 0 12px">One quick step 👋</h2>
        <p style="font-size:14px;line-height:1.6">Hi ${safeName},</p>
        <p style="font-size:14px;line-height:1.6">Enter this code back on the form to send your enquiry to <strong>Pureza Digital</strong>:</p>
        <div style="margin:22px 0;text-align:center">
          <div style="display:inline-block;background:#faf7f0;border:1px solid #e6ddc7;border-radius:10px;padding:16px 26px;font-size:30px;font-weight:700;letter-spacing:0.35em;color:#0A0A0A">${spaced}</div>
        </div>
        <p style="font-size:12px;line-height:1.6;color:#888">This code expires in 30 minutes. If you didn&rsquo;t fill in our form, you can safely ignore this email — nothing will be sent.</p>
      </div>`,
  });
}

/** Sent to Pureza Digital once the enquiry is confirmed. */
export function sendNotificationEmail(sub: Submission) {
  const interestLabel = INTEREST_LABELS[sub.interest || ""] || "Not specified";
  const contactMethodLabel = CONTACT_METHOD_LABELS[sub.preferredContact || ""] || "Not specified";
  const safeName = escapeHtml(sub.name);
  const safeEmail = escapeHtml(sub.email);
  const safeMessage = escapeHtml(sub.message).replace(/\n/g, "<br>");

  const rows: { label: string; value: string }[] = [];
  if (sub.businessName) rows.push({ label: "Business", value: sub.businessName });
  if (sub.phone) rows.push({ label: "Phone", value: sub.phone });
  if (sub.currentPresence) rows.push({ label: "Current site", value: sub.currentPresence });
  if (sub.preferredContact) rows.push({ label: "Prefers", value: contactMethodLabel });
  const rowsHtml = rows
    .map(
      (r) =>
        `<tr><td style="padding:6px 0;color:#666">${escapeHtml(r.label)}</td><td style="padding:6px 0">${escapeHtml(r.value)}</td></tr>`
    )
    .join("");
  const rowsText = rows.map((r) => `${r.label}: ${r.value}`).join("\n");

  return sendEmail({
    to: TO_EMAIL,
    replyTo: sub.email,
    subject: `New (confirmed) enquiry from ${sub.name}`,
    text:
      `Confirmed contact form submission\n\n` +
      `Name: ${sub.name}\nEmail: ${sub.email}\n` +
      (rowsText ? `${rowsText}\n` : "") +
      `Interested in: ${interestLabel}\n\nMessage:\n${sub.message}\n`,
    html: `
      <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;color:#111">
        <h2 style="margin:0 0 4px">New enquiry from your website</h2>
        <p style="margin:0 0 16px;font-size:12px;color:#2e7d32">✓ Email address confirmed by the sender</p>
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          <tr><td style="padding:6px 0;color:#666;width:90px">Name</td><td style="padding:6px 0"><strong>${safeName}</strong></td></tr>
          <tr><td style="padding:6px 0;color:#666">Email</td><td style="padding:6px 0"><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
          ${rowsHtml}
          <tr><td style="padding:6px 0;color:#666">Interested in</td><td style="padding:6px 0">${escapeHtml(interestLabel)}</td></tr>
        </table>
        <div style="margin-top:16px;padding:16px;background:#f6f6f6;border-radius:8px;font-size:14px;line-height:1.6">${safeMessage}</div>
        <p style="margin-top:16px;font-size:12px;color:#999">Reply directly to this email to respond to ${safeName}.</p>
      </div>`,
  });
}

/** Sent to the person once confirmed — the "we've got it" reassurance. */
export function sendAutoReplyEmail(sub: Submission) {
  const safeName = escapeHtml(sub.name);
  const safeMessage = escapeHtml(sub.message).replace(/\n/g, "<br>");
  return sendEmail({
    to: sub.email,
    subject: "Thanks — your enquiry is confirmed (Pureza Digital)",
    text:
      `Hi ${sub.name},\n\nThanks for confirming. Your enquiry is now with us and we'll get back to you within 24 hours.\n\n` +
      `Here's a copy of what you sent:\n"${sub.message}"\n\n— John, Pureza Digital\nhello@purezadigital.com`,
    html: `
      <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;color:#111">
        <h2 style="margin:0 0 12px">You&rsquo;re all set ✓</h2>
        <p style="font-size:14px;line-height:1.6">Hi ${safeName},</p>
        <p style="font-size:14px;line-height:1.6">Thanks for confirming. Your enquiry is now with us and we&rsquo;ll get back to you within <strong>24 hours</strong>.</p>
        <p style="font-size:14px;line-height:1.6;color:#666">Here&rsquo;s a copy of what you sent:</p>
        <div style="padding:14px;background:#f6f6f6;border-radius:8px;font-size:14px;line-height:1.6;color:#333">${safeMessage}</div>
        <p style="font-size:14px;line-height:1.6;margin-top:16px">— John, Pureza Digital<br><a href="mailto:hello@purezadigital.com">hello@purezadigital.com</a></p>
      </div>`,
  });
}

// ── Best-effort in-memory rate limiter (per warm instance) ─────────────────
const HITS = new Map<string, number[]>();
export function rateLimit(key: string, limit = 5, windowMs = 60 * 60 * 1000): boolean {
  const now = Date.now();
  const arr = (HITS.get(key) || []).filter((t) => now - t < windowMs);
  if (arr.length >= limit) {
    HITS.set(key, arr);
    return false;
  }
  arr.push(now);
  HITS.set(key, arr);
  return true;
}
