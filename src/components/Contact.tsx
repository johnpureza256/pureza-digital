"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
    company: "", // honeypot — hidden from real users
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  const inputClass =
    "w-full bg-[#111111] border border-white/8 text-white placeholder-[#3A3A3A] px-5 py-4 text-sm focus:outline-none focus:border-[#C9A96E]/50 transition-colors duration-200";

  const labelClass =
    "block text-[#6B6B6B] text-xs tracking-[0.15em] uppercase mb-2";

  return (
    <section id="contact" className="relative bg-[#0A0A0A] py-32 lg:py-40 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,169,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="w-8 h-px bg-[#C9A96E]" />
          <span
            className="text-[#C9A96E] text-xs tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Contact
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
          {/* Left */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1] mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Let&apos;s Build
              <br />
              <span className="text-[#C9A96E]">Something Great</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-[#6B6B6B] leading-relaxed text-sm mb-14"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Whether you have a detailed brief or just a rough idea, I&apos;d love to
              hear about your project. Reach out and I&apos;ll get back to you within
              24 hours.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="space-y-6"
            >
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "purezadigitalnz@gmail.com",
                  href: "mailto:hello@purezadigital.com",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Ashburton, New Zealand",
                  href: null,
                },
                {
                  icon: Clock,
                  label: "Response Time",
                  value: "Within 24 hours",
                  href: null,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-5">
                  <div className="w-10 h-10 border border-[#C9A96E]/25 flex items-center justify-center flex-shrink-0">
                    <item.icon size={15} className="text-[#C9A96E]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div
                      className="text-[#3A3A3A] text-xs tracking-[0.15em] uppercase mb-0.5"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white text-sm hover:text-[#C9A96E] transition-colors"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span
                        className="text-white text-sm"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {status === "sent" ? (
              <div className="flex flex-col items-start justify-center h-full gap-4">
                <div className="w-16 h-16 border border-[#C9A96E] flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3
                  className="text-2xl font-bold text-white"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Message Received
                </h3>
                <p
                  className="text-[#6B6B6B] text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Thanks for reaching out. I&apos;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot: hidden from humans, bots tend to fill it */}
                <div className="absolute left-[-9999px] top-0 h-0 w-0 overflow-hidden" aria-hidden="true">
                  <label htmlFor="company">Company (leave blank)</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className={labelClass}
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                      style={{ fontFamily: "var(--font-inter)" }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className={labelClass}
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="jane@company.com"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                      style={{ fontFamily: "var(--font-inter)" }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className={labelClass}
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className={`${inputClass} cursor-pointer`}
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    <option value="" disabled>Select a range</option>
                    <option value="under-2k">Under $2,000</option>
                    <option value="2k-5k">$2,000 – $5,000</option>
                    <option value="5k-10k">$5,000 – $10,000</option>
                    <option value="10k+">$10,000+</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={labelClass}
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Tell Me About Your Project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="What are you looking to build? Any existing brand assets, deadline, or special requirements?"
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                    style={{ fontFamily: "var(--font-inter)" }}
                  />
                </div>

                {status === "error" && (
                  <div
                    role="alert"
                    className="border border-red-500/30 bg-red-500/10 text-red-300 text-sm px-5 py-4"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group relative w-full py-5 bg-[#C9A96E] text-[#0A0A0A] text-sm font-semibold tracking-[0.2em] uppercase overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,169,110,0.25)] disabled:opacity-60 cursor-pointer"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  <span className="absolute inset-0 bg-[#E8C98A] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                  <span className="relative flex items-center justify-center gap-2">
                    {status === "sending" ? (
                      <>
                        <span className="w-4 h-4 border-2 border-[#0A0A0A]/30 border-t-[#0A0A0A] rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight
                          size={15}
                          className="group-hover:translate-x-1 transition-transform duration-200"
                        />
                      </>
                    )}
                  </span>
                </button>

                <p
                  className="text-[#3A3A3A] text-xs text-center"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  No spam, ever. I&apos;ll only use your details to discuss your project.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
