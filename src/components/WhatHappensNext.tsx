"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Send, SearchCheck, Lightbulb, PackageCheck, FileCheck2, ArrowUpRight } from "lucide-react";
import SectionGlow from "./SectionGlow";

const EASE = [0.22, 1, 0.36, 1] as const;

const STEPS = [
  {
    icon: Send,
    title: "Send your business name or link",
    detail: "That's genuinely all we need to get started — a name, a website, or a Facebook page.",
  },
  {
    icon: SearchCheck,
    title: "We review your online presence",
    detail: "We look at how customers currently find you and where they drop off.",
  },
  {
    icon: Lightbulb,
    title: "You get 3–5 practical suggestions",
    detail: "Useful either way — whether you work with us or not.",
  },
  {
    icon: PackageCheck,
    title: "If it makes sense, we recommend a package",
    detail: "No pressure, no lock-in — just what fits your business and budget.",
  },
  {
    icon: FileCheck2,
    title: "You get a fixed quote before any work starts",
    detail: "The price you agree to is the price you pay.",
  },
];

export default function WhatHappensNext() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="what-happens-next"
      className="relative bg-[#0A0A0A] py-24 lg:py-36 overflow-hidden"
    >
      <SectionGlow position="left" />

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
            The Process
          </span>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
            className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            What Happens After
            <br />
            <span className="text-[#C9A96E]">You Contact Us?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[#6B6B6B] max-w-md leading-relaxed text-sm lg:text-base"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            No sales call traps, no obligations. Here&rsquo;s exactly what
            happens when you get in touch.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          <div className="absolute left-[19px] lg:left-[23px] top-8 bottom-8 w-px bg-white/[0.06]">
            <motion.div
              initial={reduceMotion ? { scaleY: 1 } : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.4, ease: EASE }}
              style={{ originY: 0 }}
              className="absolute inset-0 bg-gradient-to-b from-[#C9A96E]/60 via-[#C9A96E]/30 to-transparent"
            />
          </div>

          <ol className="flex flex-col gap-2">
            {STEPS.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
                className="group relative flex items-start gap-5 lg:gap-8 py-4"
              >
                <span className="relative z-10 w-10 h-10 lg:w-12 lg:h-12 shrink-0 rounded-full bg-[#0B0B0B] border border-[#C9A96E]/25 flex items-center justify-center group-hover:border-[#C9A96E]/60 transition-colors duration-300">
                  <step.icon size={17} className="text-[#C9A96E]" strokeWidth={1.5} />
                </span>
                <div className="pt-1 lg:pt-2">
                  <h3
                    className="text-white text-base lg:text-lg font-semibold mb-1"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    <span className="text-[#C9A96E] mr-2" style={{ fontFamily: "var(--font-inter)" }}>
                      {i + 1}.
                    </span>
                    {step.title}
                  </h3>
                  <p
                    className="text-[#7A7A7A] text-sm leading-relaxed max-w-xl"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {step.detail}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 lg:mt-16 flex flex-col sm:flex-row sm:items-center gap-5 pl-0 lg:pl-[80px]"
        >
          <p
            className="text-[#6B6B6B] text-sm lg:text-base"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Ready when you are — it starts with one message.
          </p>
          <a
            href="#contact"
            className="group/cta inline-flex items-center gap-2 self-start sm:self-auto text-[#C9A96E] text-xs tracking-[0.15em] uppercase"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <span className="group-hover/cta:underline underline-offset-4">
              Send a Message
            </span>
            <ArrowUpRight
              size={14}
              className="group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform duration-200"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
