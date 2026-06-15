"use client";

import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    quote:
      "Working with Pureza Digital was completely different to any agency we'd tried before. We got direct access to the person building our site — and the result speaks for itself. Enquiries went up immediately.",
    author: "Sarah M.",
    role: "Dental Clinic Owner, Canterbury",
    initials: "SM",
  },
  {
    quote:
      "The AI automation workflow John built for us saves around 8 hours a week. Our leads are pre-qualified before we even speak to them. The ROI was evident within the first month.",
    author: "Chris T.",
    role: "Director, Trade Company",
    initials: "CT",
  },
  {
    quote:
      "I expected a website. I got a business asset. The AI chatbot handles enquiries around the clock and the design is something our competitors can't match. Couldn't recommend more highly.",
    author: "Lena P.",
    role: "Property Developer, Auckland",
    initials: "LP",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-[#080808] py-32 lg:py-40 overflow-hidden">
      {/* Decorative */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none opacity-[0.03]"
        style={{
          background: "radial-gradient(ellipse, #C9A96E 0%, transparent 70%)",
          filter: "blur(60px)",
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
            Testimonials
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1] mb-20"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          What Clients
          <br />
          <span className="text-[#C9A96E]">Actually Say</span>
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group p-8 border border-white/6 bg-[#0E0E0E] hover:border-[#C9A96E]/20 transition-all duration-400 relative"
            >
              {/* Gold quote mark */}
              <div
                className="text-7xl text-[#C9A96E]/15 font-serif leading-none mb-6 group-hover:text-[#C9A96E]/25 transition-colors duration-400 select-none"
                aria-hidden
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                &ldquo;
              </div>

              <p
                className="text-[#A0A0A0] text-sm leading-relaxed mb-8 italic"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {t.quote}
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-white/6">
                <div className="w-10 h-10 bg-[#C9A96E]/10 border border-[#C9A96E]/25 flex items-center justify-center">
                  <span
                    className="text-[#C9A96E] text-xs font-semibold"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {t.initials}
                  </span>
                </div>
                <div>
                  <div
                    className="text-white text-sm font-semibold"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {t.author}
                  </div>
                  <div
                    className="text-[#5A5A5A] text-xs mt-0.5"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
