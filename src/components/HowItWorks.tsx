"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Search, PenTool, Code2, Rocket, LifeBuoy, ArrowUpRight } from "lucide-react";
import SectionGlow from "./SectionGlow";

const STEPS = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description:
      "We discuss your business, goals, target customers, and what your website needs to achieve.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Design",
    description:
      "A custom website concept is created around your brand, message, and customer journey.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Development",
    description:
      "Your website is built to be fast, responsive, SEO-friendly, and easy for customers to use.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch",
    description:
      "Once everything is reviewed and approved, your website is connected to your domain and launched online.",
  },
  {
    number: "05",
    icon: LifeBuoy,
    title: "Support",
    description:
      "Ongoing updates, improvements, and support are available so your website stays sharp as your business grows.",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function HowItWorks() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="how-it-works"
      className="relative bg-[#080808] py-32 lg:py-40 overflow-hidden"
    >
      {/* Ambient glow for depth */}
      <SectionGlow position="left" />
      {/* Fine grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#C9A96E 1px, transparent 1px), linear-gradient(90deg, #C9A96E 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 75%)",
        }}
      />

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
            Process
          </span>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20 lg:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
            className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            How It
            <br />
            <span className="text-[#C9A96E]">Works</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[#6B6B6B] max-w-md leading-relaxed text-sm lg:text-base"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            A simple, transparent process designed to turn your idea into a
            professional website that helps your business grow.
          </motion.p>
        </div>

        {/* Steps timeline */}
        <div className="relative">
          {/* Animated progress line that draws in on scroll */}
          <div className="absolute left-[31px] lg:left-[39px] top-10 bottom-10 w-px bg-white/[0.06]">
            <motion.div
              initial={reduceMotion ? { scaleY: 1 } : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.6, ease: EASE }}
              style={{ originY: 0 }}
              className="absolute inset-0 bg-gradient-to-b from-[#C9A96E]/60 via-[#C9A96E]/30 to-transparent"
            />
          </div>

          <div className="flex flex-col">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                className="group relative flex items-start gap-6 lg:gap-10"
              >
                {/* Icon node */}
                <div className="relative z-10 shrink-0 py-6 lg:py-7">
                  {/* Glow ring on hover */}
                  <div className="absolute inset-x-0 top-6 lg:top-7 w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-[#C9A96E]/0 group-hover:bg-[#C9A96E]/10 blur-xl transition-all duration-500" />
                  <div className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-[#0B0B0B] border border-[#C9A96E]/25 flex items-center justify-center group-hover:border-[#C9A96E]/70 group-hover:scale-105 transition-all duration-400">
                    {/* Top-edge highlight for depth */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/[0.06] to-transparent" />
                    <step.icon
                      size={24}
                      className="relative text-[#C9A96E] group-hover:scale-110 transition-transform duration-400"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 min-w-0 relative my-3 lg:my-4 p-6 lg:p-8 border border-white/[0.06] bg-gradient-to-br from-white/[0.025] to-transparent group-hover:border-[#C9A96E]/20 group-hover:from-[#C9A96E]/[0.04] transition-all duration-400 overflow-hidden">
                  {/* Gold top line on hover */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#C9A96E]/0 via-[#C9A96E]/50 to-[#C9A96E]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Giant ghost numeral */}
                  <span
                    className="pointer-events-none select-none absolute -top-4 right-2 text-[7rem] lg:text-[9rem] leading-none font-bold text-white/[0.025] group-hover:text-[#C9A96E]/[0.06] transition-colors duration-500"
                    style={{ fontFamily: "var(--font-playfair)" }}
                    aria-hidden
                  >
                    {step.number}
                  </span>

                  <div className="relative flex items-baseline gap-4 mb-3">
                    <span
                      className="text-[#C9A96E] text-sm font-semibold tracking-[0.2em]"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {step.number}
                    </span>
                    <h3
                      className="text-2xl lg:text-3xl font-bold text-white leading-snug"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p
                    className="relative text-[#8A8A8A] text-sm lg:text-base leading-relaxed max-w-2xl"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16 lg:mt-20 flex flex-col sm:flex-row sm:items-center gap-5 pl-0 lg:pl-[79px]"
        >
          <p
            className="text-[#6B6B6B] text-sm lg:text-base"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Ready to begin? It all starts with a conversation.
          </p>
          <a
            href="#contact"
            className="group/cta inline-flex items-center gap-2 self-start sm:self-auto text-[#C9A96E] text-xs tracking-[0.15em] uppercase"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <span className="group-hover/cta:underline underline-offset-4">
              Start Your Project
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
