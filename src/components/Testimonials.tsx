"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionGlow from "./SectionGlow";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  initials: string;
};

// Real client testimonials will be added here as they come in.
const TESTIMONIALS: Testimonial[] = [];

export default function Testimonials() {
  return (
    <section className="relative bg-[#080808] py-32 lg:py-40 overflow-hidden">
      <SectionGlow position="center" />

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

        {TESTIMONIALS.length === 0 ? (
          <div className="relative">
            {/* Featured editorial statement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-3xl mx-auto text-center"
            >
              <div
                className="text-[7rem] lg:text-[9rem] text-[#C9A96E]/12 font-serif leading-none mb-2 select-none"
                aria-hidden
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                &ldquo;
              </div>
              <p
                className="text-2xl lg:text-4xl text-white leading-[1.3] -mt-8 lg:-mt-12 mb-8"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Every great partnership starts with a first client.
                <br className="hidden lg:block" />{" "}
                <span className="text-[#C9A96E]">Yours could be the first story told here.</span>
              </p>
              <p
                className="text-[#8A8A8A] text-sm lg:text-base leading-relaxed max-w-xl mx-auto mb-10"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Pureza Digital is taking on a small number of foundation clients —
                businesses we&rsquo;ll work with closely to deliver results worth
                talking about.
              </p>
              <a
                href="#contact"
                className="btn-cta btn-cta--outline group/cta inline-flex items-center gap-3 px-7 py-3.5 border border-[#C9A96E]/30 text-[#C9A96E] text-xs tracking-[0.18em] uppercase hover:border-[#C9A96E]/70 hover:bg-[#C9A96E]/[0.06]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                <span>Become a Foundation Client</span>
                <ArrowUpRight
                  size={14}
                  className="group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform duration-200"
                />
              </a>
            </motion.div>

            {/* Ghost placeholder cards — where future stories will live */}
            <div className="grid lg:grid-cols-3 gap-6 mt-20" aria-hidden>
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="p-8 border border-dashed border-white/[0.07] bg-white/[0.012]"
                >
                  <div
                    className="text-5xl text-[#C9A96E]/10 font-serif leading-none mb-6 select-none"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    &ldquo;
                  </div>
                  <div className="space-y-2.5 mb-8">
                    <div className="h-2 rounded-full bg-white/[0.05] w-full" />
                    <div className="h-2 rounded-full bg-white/[0.05] w-[92%]" />
                    <div className="h-2 rounded-full bg-white/[0.05] w-[78%]" />
                  </div>
                  <div className="flex items-center gap-4 pt-6 border-t border-white/[0.05]">
                    <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.06]" />
                    <div className="space-y-2">
                      <div className="h-2 rounded-full bg-white/[0.06] w-24" />
                      <div className="h-2 rounded-full bg-white/[0.04] w-16" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
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
        )}
      </div>
    </section>
  );
}
