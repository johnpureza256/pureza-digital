import { NextResponse } from "next/server";

export const runtime = "nodejs";

// Where enquiry notifications are delivered, and what address mail is sent from.
// Override via env vars in production if you ever change these.
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "purezadigitalnz@gmail.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "Pureza Digital <hello@purezadigital.com>";

const BUDGET_LABELS: Record<string, string> = {
  "under-2k": "Under $2,000",
  "2k-5k": "$2,000 – $5,000",
  "5k-10k": "$5,000 – $10,000",
  "10k+": "$10,000+",
};

type Payload = {
  name?: string;
  email?: string;
  budget?: string;
  message?: string;
  company?: string; // honeypot — real users never fill this
};

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function sendEmail(opts: {
  apiKey: string;
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
}) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${opts.apiKey}`,
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

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { ok: false, error: "Email service isn't configured yet. Please email hello@purezadigital.com directly." },
        { status: 500 }
      );
    }

    const body = (await req.json().catch(() => null)) as Payload | null;
    if (!body) {
      return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
    }

    // Spam protection: bots fill the hidden honeypot field. Silently accept & drop.
    if (body.company && body.company.trim() !== "") {
      return NextResponse.json({ ok: true });
    }

    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const message = (body.message || "").trim();
    const budget = (body.budget || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Please fill in your name, email, and a message." },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }
    if (message.length > 5000) {
      return NextResponse.json({ ok: false, error: "Message is too long." }, { status: 400 });
    }

    const budgetLabel = BUDGET_LABELS[budget] || "Not specified";
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

    // 1) Notification to you
    const notify = await sendEmail({
      apiKey,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New enquiry from ${name}`,
      text:
        `New contact form submission\n\n` +
        `Name: ${name}\nEmail: ${email}\nBudget: ${budgetLabel}\n\nMessage:\n${message}\n`,
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;color:#111">
          <h2 style="margin:0 0 16px">New enquiry from your website</h2>
          <table style="width:100%;border-collapse:collapse;font-size:14px">
            <tr><td style="padding:6px 0;color:#666;width:90px">Name</td><td style="padding:6px 0"><strong>${safeName}</strong></td></tr>
            <tr><td style="padding:6px 0;color:#666">Email</td><td style="padding:6px 0"><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
            <tr><td style="padding:6px 0;color:#666">Budget</td><td style="padding:6px 0">${escapeHtml(budgetLabel)}</td></tr>
          </table>
          <div style="margin-top:16px;padding:16px;background:#f6f6f6;border-radius:8px;font-size:14px;line-height:1.6">${safeMessage}</div>
          <p style="margin-top:16px;font-size:12px;color:#999">Reply directly to this email to respond to ${safeName}.</p>
        </div>`,
    });

    if (!notify.ok) {
      console.error("Resend notify failed:", notify.status, notify.data);
      return NextResponse.json(
        { ok: false, error: "We couldn't send your message right now. Please email hello@purezadigital.com directly." },
        { status: 502 }
      );
    }

    // 2) Auto-reply to the sender (best effort — don't fail the request if this errors)
    try {
      await sendEmail({
        apiKey,
        to: email,
        subject: "Thanks for reaching out — Pureza Digital",
        text:
          `Hi ${name},\n\nThanks for getting in touch with Pureza Digital. ` +
          `I've received your message and will get back to you within 24 hours.\n\n` +
          `Here's a copy of what you sent:\n"${message}"\n\n— John, Pureza Digital\nhello@purezadigital.com`,
        html: `
          <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;color:#111">
            <h2 style="margin:0 0 12px">Thanks for reaching out 👋</h2>
            <p style="font-size:14px;line-height:1.6">Hi ${safeName},</p>
            <p style="font-size:14px;line-height:1.6">Thanks for getting in touch with <strong>Pureza Digital</strong>. I've received your message and will get back to you within <strong>24 hours</strong>.</p>
            <p style="font-size:14px;line-height:1.6;color:#666">Here's a copy of what you sent:</p>
            <div style="padding:14px;background:#f6f6f6;border-radius:8px;font-size:14px;line-height:1.6;color:#333">${safeMessage}</div>
            <p style="font-size:14px;line-height:1.6;margin-top:16px">— John, Pureza Digital<br><a href="mailto:hello@purezadigital.com">hello@purezadigital.com</a></p>
          </div>`,
      });
    } catch (e) {
      console.error("Auto-reply failed (non-fatal):", e);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again in a moment." },
      { status: 500 }
    );
  }
}
