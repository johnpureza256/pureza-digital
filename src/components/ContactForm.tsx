"use client";

import { useId, useState } from "react";

type Status = "idle" | "sending" | "code" | "verifying" | "sent" | "error";

const field =
  "block w-full rounded-none border border-[var(--ink)] bg-[#FAF8F4] px-4 py-3.5 text-[16px] leading-[1.5] outline-none focus:shadow-[inset_0_0_0_1px_var(--ink)] aria-[invalid=true]:border-[#9B2C1F]";

function Label({ htmlFor, children, required }: { htmlFor: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-[15px]">
      {children}
      <span className="muted ml-2 text-[13px]">{required ? "(required)" : "(optional)"}</span>
    </label>
  );
}

function SendButton({ busy, children }: { busy: boolean; children: React.ReactNode }) {
  return (
    <button
      type="submit"
      disabled={busy}
      className="group relative inline-flex h-[64px] min-w-[150px] items-center justify-center overflow-hidden rounded-full border border-[var(--ink)] px-10 transition-transform duration-200 active:scale-[0.97] disabled:cursor-progress disabled:opacity-60"
    >
      <span
        aria-hidden
        className="absolute inset-0 origin-bottom scale-y-0 bg-[var(--ink)] transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:scale-y-100 group-focus-visible:scale-y-100"
      />
      <span className="display relative text-[21px] group-hover:text-[var(--ground)] group-focus-visible:text-[var(--ground)]">
        {children}
      </span>
    </button>
  );
}

/**
 * Name, email, company, message. The server emails a six-digit code to the
 * address given, and the enquiry is only delivered once that code comes back,
 * so nothing reaches the inbox from an address its sender doesn't own.
 */
export default function ContactForm() {
  const id = useId();
  const [form, setForm] = useState({ name: "", email: "", businessName: "", message: "", company: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const [code, setCode] = useState("");
  const [codeError, setCodeError] = useState("");
  const [resent, setResent] = useState(false);

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submitDetails = async () => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.ok) throw new Error(data.error || "That didn't send. Please try again.");
    setToken(data.token || "");
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setStatus("sending");
    try {
      await submitDetails();
      setCode("");
      setCodeError("");
      setStatus("code");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "That didn't send. Please try again.");
    }
  };

  const onVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (code.replace(/\D/g, "").length !== 6) {
      setCodeError("Enter the six-digit code from the email.");
      return;
    }
    setStatus("verifying");
    setCodeError("");
    try {
      const res = await fetch("/api/contact/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, code }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        if (data.expired) {
          setStatus("error");
          setError(data.error || "That code has expired. Please send the form again.");
          return;
        }
        setStatus("code");
        setCodeError(data.error || "That code doesn't match. Check the email and try again.");
        return;
      }
      setStatus("sent");
    } catch {
      setStatus("code");
      setCodeError("That didn't go through. Please try again.");
    }
  };

  const onResend = async () => {
    setCodeError("");
    setCode("");
    setResent(false);
    try {
      await submitDetails();
      setResent(true);
    } catch (err) {
      setCodeError(err instanceof Error ? err.message : "Couldn't send a new code. Please try again.");
    }
  };

  if (status === "sent") {
    return (
      <div role="status" className="max-w-[44ch]">
        <p className="display text-[clamp(28px,2.8vw,40px)] leading-[1.15]">Thank you.</p>
        <p className="mt-4 text-[17px]">
          Your message is with us. We&rsquo;ll reply within two working days.
        </p>
      </div>
    );
  }

  if (status === "code" || status === "verifying") {
    return (
      <form onSubmit={onVerify} noValidate className="max-w-[44ch]">
        <p className="text-[17px]">
          We&rsquo;ve emailed a six-digit code to <strong className="font-medium">{form.email}</strong>. Enter it
          here to send your message.
        </p>
        <div className="mt-8">
          <Label htmlFor={`${id}-code`} required>
            Code
          </Label>
          <input
            id={`${id}-code`}
            name="code"
            inputMode="numeric"
            autoComplete="one-time-code"
            maxLength={7}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            aria-invalid={codeError ? true : undefined}
            aria-describedby={`${id}-code-msg`}
            className={`${field} max-w-[220px] text-[22px] tracking-[0.3em] tabular-nums`}
          />
          <p id={`${id}-code-msg`} aria-live="polite" className="mt-2 min-h-[1.5em] text-[14px] text-[#9B2C1F]">
            {codeError}
          </p>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-8">
          <SendButton busy={status === "verifying"}>{status === "verifying" ? "Sending" : "Confirm"}</SendButton>
          <button type="button" onClick={onResend} className="line-link meta text-[14px]">
            Send a new code
          </button>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="line-link meta muted text-[14px]"
          >
            Edit message
          </button>
        </div>
        <p aria-live="polite" className="meta muted mt-4 min-h-[1.5em]">
          {resent ? "A new code is on its way." : ""}
        </p>
      </form>
    );
  }

  const invalid = status === "error" && !!error;

  return (
    <form onSubmit={onSubmit} className="grid gap-7" aria-describedby={`${id}-error`}>
      <div className="hidden" aria-hidden>
        <label htmlFor={`${id}-hp`}>Leave this empty</label>
        <input id={`${id}-hp`} name="company" tabIndex={-1} autoComplete="off" value={form.company} onChange={set} />
      </div>

      <div className="grid gap-7 md:grid-cols-2 md:gap-[var(--gutter)]">
        <div>
          <Label htmlFor={`${id}-name`} required>
            Name
          </Label>
          <input id={`${id}-name`} name="name" required autoComplete="name" value={form.name} onChange={set} className={field} />
        </div>
        <div>
          <Label htmlFor={`${id}-email`} required>
            Email
          </Label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={set}
            className={field}
          />
        </div>
      </div>

      <div>
        <Label htmlFor={`${id}-co`}>Company</Label>
        <input
          id={`${id}-co`}
          name="businessName"
          autoComplete="organization"
          value={form.businessName}
          onChange={set}
          className={field}
        />
      </div>

      <div>
        <Label htmlFor={`${id}-msg`} required>
          Message
        </Label>
        <textarea
          id={`${id}-msg`}
          name="message"
          required
          rows={6}
          maxLength={5000}
          value={form.message}
          onChange={set}
          className={field}
        />
      </div>

      <p id={`${id}-error`} aria-live="polite" className="min-h-[1.5em] text-[15px] text-[#9B2C1F]" data-invalid={invalid}>
        {invalid ? error : ""}
      </p>

      <div className="-mt-4">
        <SendButton busy={status === "sending"}>{status === "sending" ? "Sending" : "Send"}</SendButton>
      </div>
    </form>
  );
}
