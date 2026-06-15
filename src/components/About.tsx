"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Globe, Zap } from "lucide-react";

const VALUES = [
  {
    icon: Sparkles,
    title: "Crafted, Not Templated",
    body: "Every pixel is intentional. No page builders, no cookie-cutter themes — just bespoke design built around your goals.",
  },
  {
    icon: Globe,
    title: "Local Roots, Global Reach",
    body: "Based in Ashburton, New Zealand — built to serve clients from Auckland to Amsterdam.",
  },
  {
    icon: Zap,
    title: "Results-Driven",
    body: "Beautiful design is only half the equation. Everything I build is optimised to convert, perform, and grow.",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };
  const item = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
  };

  return (
    <section id="about" className="relative bg-[#0A0A0A] py-32 lg:py-40 overflow-hidden">
      {/* Decorative line */}
      <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#C9A96E]/20 to-transparent hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-20"
        >
          <span className="w-8 h-px bg-[#C9A96E]" />
          <span
            className="text-[#C9A96E] text-xs tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            About
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          {/* Left: Text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1] mb-8"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              The Studio
              <br />
              <span className="text-[#C9A96E]">Behind the Work</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-5 text-[#A0A0A0] leading-relaxed"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <p>
                
              </p>
              <p>
                I combine sharp visual design with a deep understanding of how
                people actually use the web. The result: websites that don&apos;t
                just look expensive — they perform.
              </p>
              <p>
                I&apos;m proud to be building from New Zealand while serving clients
                across the globe. If you want a partner who genuinely cares about
                your results, let&apos;s talk.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 pt-10 border-t border-white/8 flex gap-12"
            >
              {[
                { n: "5+", label: "Projects" },
                { n: "NZ", label: "Based" },
                { n: "∞", label: "Ambition" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    className="text-3xl font-bold text-[#C9A96E]"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {s.n}
                  </div>
                  <div
                    className="text-[#6B6B6B] text-xs tracking-[0.15em] uppercase mt-0.5"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Values cards */}
          <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="space-y-4"
          >
            {VALUES.map((v) => (
              <motion.div
                key={v.title}
                variants={item}
                className="group p-6 border border-white/6 bg-[#111111] hover:border-[#C9A96E]/30 hover:bg-[#C9A96E]/5 transition-all duration-400"
              >
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 border border-[#C9A96E]/30 flex items-center justify-center flex-shrink-0 group-hover:border-[#C9A96E]/60 transition-colors duration-300">
                    <v.icon size={16} className="text-[#C9A96E]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3
                      className="text-white font-semibold mb-2 text-sm tracking-wide"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {v.title}
                    </h3>
                    <p
                      className="text-[#6B6B6B] text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {v.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
