import { NextResponse } from "next/server";
import {
  SIGNING_SECRET,
  signSubmission,
  codeForToken,
  sendCodeEmail,
  rateLimit,
  type Submission,
} from "@/lib/contact";

export const runtime = "nodejs";

type Payload = Partial<Submission> & { company?: string }; // company = honeypot

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY || !SIGNING_SECRET) {
      console.error("Contact not configured (RESEND_API_KEY / signing secret missing)");
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
      return NextResponse.json({ ok: true, pending: true, token: "" });
    }

    // Best-effort rate limit per IP (5 / hour per warm instance).
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (!rateLimit(`contact:${ip}`)) {
      return NextResponse.json(
        { ok: false, error: "Too many attempts. Please try again later or email hello@purezadigital.com." },
        { status: 429 }
      );
    }

    const sub: Submission = {
      name: (body.name || "").trim(),
      businessName: (body.businessName || "").trim(),
      email: (body.email || "").trim(),
      phone: (body.phone || "").trim(),
      currentPresence: (body.currentPresence || "").trim(),
      preferredContact: (body.preferredContact || "").trim(),
      interest: (body.interest || "").trim(),
      message: (body.message || "").trim(),
    };

    if (!sub.name || !sub.businessName || !sub.email || !sub.message) {
      return NextResponse.json(
        { ok: false, error: "Please fill in your name, business name, email, and a message." },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sub.email)) {
      return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
    }
    if (sub.message.length > 5000) {
      return NextResponse.json({ ok: false, error: "Message is too long." }, { status: 400 });
    }

    // Double opt-in: don't notify yet — email a 6-digit code the sender types
    // back. The signed token (returned to the client) carries the submission;
    // the code proves they own the email.
    const token = signSubmission(sub);
    const code = codeForToken(token);
    const sent = await sendCodeEmail(sub, code);

    if (!sent.ok) {
      console.error("Code email failed:", sent.status, sent.data);
      return NextResponse.json(
        { ok: false, error: "We couldn't send your confirmation code. Please email hello@purezadigital.com directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, pending: true, token });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again in a moment." },
      { status: 500 }
    );
  }
}
