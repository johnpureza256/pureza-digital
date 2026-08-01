"use client";

import { motion } from "framer-motion";
import { Check, Minus, ArrowUpRight } from "lucide-react";
import SectionGlow from "./SectionGlow";

const EASE = [0.22, 1, 0.36, 1] as const;

const FOR = [
  "You rely mostly on Facebook or word-of-mouth",
  "Your website is outdated, unclear, or missing",
  "You want more calls, bookings, orders, or enquiries",
  "You want someone to handle the technical side",
  "You value clear communication and fixed quotes",
];

const NOT_FOR = [
  "You want the cheapest possible website",
  "You are unwilling to provide basic business information",
  "You expect guaranteed leads from a website alone",
  "You need large enterprise software",
  "You want unlimited revisions without clear scope",
];

export default function WhoThisIsFor() {
  return (
    <section
      id="fit"
      className="relative bg-[#080808] py-32 lg:py-40 overflow-hidden"
    >
      <SectionGlow position="right" intensity="soft" />

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
            Is This You?
          </span>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
            className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Built for Some
            <br />
            <span className="text-[#C9A96E]">Businesses, Not All</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[#6B6B6B] max-w-md leading-relaxed text-sm lg:text-base"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            We do our best work for a specific kind of local business. Being
            upfront about that saves us both time.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-6">
          {/* This is for you — the louder panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="relative p-8 lg:p-10 border border-[#C9A96E]/25 bg-gradient-to-br from-[#C9A96E]/[0.05] to-transparent overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#C9A96E]/0 via-[#C9A96E]/60 to-[#C9A96E]/0" />
            <h3
              className="text-xl lg:text-2xl font-bold text-white mb-8"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              This is for you if&hellip;
            </h3>
            <ul className="space-y-4">
              {FOR.map((line, i) => (
                <motion.li
                  key={line}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.1 + i * 0.06, ease: EASE }}
                  className="flex items-start gap-4"
                >
                  <span className="mt-0.5 w-5 h-5 shrink-0 border border-[#C9A96E]/40 bg-[#C9A96E]/10 flex items-center justify-center">
                    <Check size={11} className="text-[#C9A96E]" strokeWidth={2.5} />
                  </span>
                  <span
                    className="text-[#C8C8C8] text-sm lg:text-[0.95rem] leading-relaxed"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {line}
                  </span>
                </motion.li>
              ))}
            </ul>

            <a
              href="/contact"
              className="group/fit mt-10 inline-flex items-center gap-2 text-[#C9A96E] text-xs tracking-[0.15em] uppercase focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A96E]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <span className="group-hover/fit:underline underline-offset-4">
                Sounds like you? Start a conversation
              </span>
              <ArrowUpRight
                size={14}
                className="group-hover/fit:translate-x-0.5 group-hover/fit:-translate-y-0.5 transition-transform duration-200"
              />
            </a>
          </motion.div>

          {/* Not for — deliberately quieter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.12, ease: EASE }}
            className="p-8 lg:p-10 border border-white/[0.07] bg-[#0C0C0C]"
          >
            <h3
              className="text-xl lg:text-2xl font-bold text-[#8A8A8A] mb-8"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              We may not be the right fit for everyone.
            </h3>
            <ul className="space-y-4">
              {NOT_FOR.map((line, i) => (
                <motion.li
                  key={line}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.2 + i * 0.06, ease: EASE }}
                  className="flex items-start gap-4"
                >
                  <span className="mt-0.5 w-5 h-5 shrink-0 border border-white/10 flex items-center justify-center">
                    <Minus size={11} className="text-[#5A5A5A]" strokeWidth={2.5} />
                  </span>
                  <span
                    className="text-[#7A7A7A] text-sm lg:text-[0.95rem] leading-relaxed"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {line}
                  </span>
                </motion.li>
              ))}
            </ul>

            <p
              className="mt-10 pt-8 border-t border-white/[0.06] text-[#5A5A5A] text-xs leading-relaxed"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              We&rsquo;d rather tell you now than waste your time. If you&rsquo;re
              not sure which side you land on, send a message anyway — we&rsquo;ll
              give you a straight answer.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
