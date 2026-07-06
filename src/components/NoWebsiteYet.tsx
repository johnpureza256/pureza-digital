"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionGlow from "./SectionGlow";

export default function NoWebsiteYet() {
  return (
    <section id="no-website" className="relative bg-[#080808] py-28 lg:py-36 overflow-hidden">
      <SectionGlow position="center" intensity="soft" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
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
            The Missing Piece
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 lg:items-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            No Proper
            <br />
            <span className="text-[#C9A96E]">Website Yet?</span>
          </motion.h2>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-[#A0A0A0] leading-relaxed text-base lg:text-lg mb-10"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Many local businesses already get attention through Google,
              Facebook, word-of-mouth, referrals, or walk-ins — but when
              customers look them up, there is no clear website to explain the
              business, show services, build trust, or make the next step easy.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              href="#contact"
              className="btn-cta btn-cta--gold group relative inline-flex justify-center px-10 py-4 bg-[#C9A96E] text-[#0A0A0A] text-sm font-semibold tracking-[0.15em] uppercase overflow-hidden"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <span className="absolute inset-0 bg-[#E8C98A] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              <span className="relative flex items-center gap-2">
                Request a Free Website Audit
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
