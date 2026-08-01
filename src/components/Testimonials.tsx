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
    <section id="foundation" className="relative bg-[#080808] py-32 lg:py-40 overflow-hidden">
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
            Foundation Clients
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
          Foundation Client
          <br />
          <span className="text-[#C9A96E]">Opportunity</span>
        </motion.h2>

        {TESTIMONIALS.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-3xl mx-auto text-center"
          >
            <p
              className="text-xl lg:text-2xl text-white leading-[1.5] mb-8"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Pureza Digital is currently accepting a small number of
              foundation clients at{" "}
              <span className="text-[#C9A96E]">reduced pricing</span>.
            </p>
            <p
              className="text-[#8A8A8A] text-sm lg:text-base leading-relaxed max-w-xl mx-auto mb-10"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              In exchange, we&rsquo;re looking for three things: honest feedback
              along the way, permission to feature the finished project in our
              portfolio, and — only if you&rsquo;re happy with the result — a
              short testimonial. Same design quality, same process, more
              hands-on attention, lower entry price. Once the spots are filled,
              pricing moves to standard rates.
            </p>
            <a
              href="/free-audit"
              className="btn-cta btn-cta--outline group/cta inline-flex items-center gap-3 px-7 py-3.5 border border-[#C9A96E]/30 text-[#C9A96E] text-xs tracking-[0.18em] uppercase hover:border-[#C9A96E]/70 hover:bg-[#C9A96E]/[0.06]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <span>Apply to Become a Foundation Client</span>
              <ArrowUpRight
                size={14}
                className="group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform duration-200"
              />
            </a>
          </motion.div>
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
