"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import SectionGlow from "./SectionGlow";

const EASE = [0.22, 1, 0.36, 1] as const;

const AUDIT_INCLUDES = [
  "First impression review",
  "Mobile experience check",
  "Contact & enquiry flow check",
  "Trust signals review",
  "3–5 practical improvement ideas",
  "A recommended next step",
];

export default function FreeAuditCTA() {
  return (
    <section
      id="free-audit"
      className="relative bg-[#080808] py-24 lg:py-32 overflow-hidden"
    >
      <SectionGlow position="center" intensity="soft" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative border border-[#C9A96E]/30 bg-[#C9A96E]/[0.04] p-8 lg:p-14 overflow-hidden"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(60% 100% at 0% 50%, rgba(201,169,110,0.08) 0%, transparent 70%)",
            }}
          />

          <div className="relative grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-20 lg:items-center">
            <div>
              <div
                className="text-[#C9A96E] text-xs tracking-[0.25em] uppercase mb-4"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Free Website Audit
              </div>
              <h2
                className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-white mb-4 leading-snug"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Not sure where to start?
                <br />
                <span className="text-[#C9A96E]">Start with a free audit.</span>
              </h2>
              <p
                className="text-[#9A9A9A] text-sm leading-relaxed max-w-lg mb-8"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Send us your business name and a link to your website, Facebook
                page, or Google listing. We&rsquo;ll review it and reply with
                practical suggestions — whether or not you work with us.
              </p>

              <a
                href="#contact"
                className="btn-cta btn-cta--gold group relative inline-flex justify-center w-full sm:w-auto px-10 py-4 bg-[#C9A96E] text-[#0A0A0A] text-sm font-semibold tracking-[0.15em] uppercase overflow-hidden"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                <span className="absolute inset-0 bg-[#E8C98A] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                <span className="relative flex items-center gap-2">
                  Get My Free Audit
                  <ArrowRight
                    size={15}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </span>
              </a>
              <p
                className="text-[#6B6B6B] text-xs mt-3"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                No cost. No obligation.
              </p>
            </div>

            {/* What the audit includes */}
            <div className="lg:border-l lg:border-[#C9A96E]/15 lg:pl-12">
              <h3
                className="text-white text-sm font-semibold tracking-[0.15em] uppercase mb-6"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Your free audit includes
              </h3>
              <ul className="space-y-3.5">
                {AUDIT_INCLUDES.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.1 + i * 0.06, ease: EASE }}
                    className="flex items-start gap-3.5"
                  >
                    <span className="mt-0.5 w-5 h-5 shrink-0 border border-[#C9A96E]/40 bg-[#C9A96E]/10 flex items-center justify-center">
                      <Check size={11} className="text-[#C9A96E]" strokeWidth={2.5} />
                    </span>
                    <span
                      className="text-[#B8B8B8] text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
