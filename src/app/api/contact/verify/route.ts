import { NextResponse } from "next/server";
import {
  verifySubmissionToken,
  codeMatches,
  sendNotificationEmail,
  sendAutoReplyEmail,
  rateLimit,
} from "@/lib/contact";

export const runtime = "nodejs";

// The form posts { token, code } here. Only when the code matches — proving the
// sender received the email — do we deliver the enquiry and the auto-reply.
export async function POST(req: Request) {
  try {
    const body = (await req.json().catch(() => null)) as { token?: string; code?: string } | null;
    const token = (body?.token || "").trim();
    const code = (body?.code || "").trim();

    // Limit guesses per IP so a 6-digit code can't be brute-forced.
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (!rateLimit(`verify:${ip}`, 10, 15 * 60 * 1000)) {
      return NextResponse.json(
        { ok: false, error: "Too many attempts. Please wait a few minutes and try again." },
        { status: 429 }
      );
    }

    const sub = verifySubmissionToken(token);
    if (!sub) {
      return NextResponse.json(
        { ok: false, error: "That code has expired. Please send the form again to get a new one.", expired: true },
        { status: 410 }
      );
    }

    if (!codeMatches(token, code)) {
      return NextResponse.json(
        { ok: false, error: "That code doesn't match. Check the email and try again." },
        { status: 400 }
      );
    }

    const notify = await sendNotificationEmail(sub);
    if (!notify.ok) {
      console.error("Notification email failed after code verify:", notify.status, notify.data);
      return NextResponse.json(
        { ok: false, error: "We confirmed your code but couldn't deliver the enquiry. Please email hello@purezadigital.com directly." },
        { status: 502 }
      );
    }

    // Reassurance to the sender — best effort, never blocks confirmation.
    try {
      await sendAutoReplyEmail(sub);
    } catch (e) {
      console.error("Auto-reply failed (non-fatal):", e);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Verify route error:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again in a moment." },
      { status: 500 }
    );
  }
}
