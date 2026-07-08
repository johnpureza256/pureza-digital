"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Shapes,
  ListChecks,
  Clock,
  Camera,
  Share2,
  Globe,
  Heart,
  ArrowUpRight,
} from "lucide-react";
import SectionGlow from "./SectionGlow";

const EASE = [0.22, 1, 0.36, 1] as const;

const ITEMS = [
  { icon: Building2, label: "Business name & contact details" },
  { icon: Shapes, label: "Your logo, if you have one" },
  { icon: ListChecks, label: "Your services or menu" },
  { icon: Clock, label: "Opening hours" },
  { icon: Camera, label: "Photos, if available" },
  { icon: Share2, label: "Social media links" },
  { icon: Globe, label: "Domain details, if you already own one" },
  { icon: Heart, label: "A few examples of websites you like" },
];

export default function WhatWeNeed() {
  return (
    <section
      id="what-we-need"
      className="relative bg-[#0A0A0A] py-32 lg:py-40 overflow-hidden"
    >
      <SectionGlow position="left" intensity="soft" />

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
            Getting Started
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
            What We&rsquo;ll
            <br />
            <span className="text-[#C9A96E]">Need From You</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[#6B6B6B] max-w-md leading-relaxed text-sm lg:text-base"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Building your website is a team effort. A few simple things from you
            help us get it right the first time — nothing technical required.
          </motion.p>
        </div>

        {/* Checklist grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06]">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
              className="group bg-[#0A0A0A] p-6 lg:p-7 hover:bg-[#0E0D0B] transition-colors duration-300"
            >
              <div className="w-10 h-10 border border-[#C9A96E]/25 flex items-center justify-center mb-5 group-hover:border-[#C9A96E]/60 transition-colors duration-300">
                <item.icon
                  size={16}
                  className="text-[#C9A96E]"
                  strokeWidth={1.5}
                />
              </div>
              <p
                className="text-[#B8B8B8] text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Reassurance */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6 border border-[#C9A96E]/20 bg-[#C9A96E]/[0.04] p-8 lg:p-10"
        >
          <p
            className="flex-1 text-white text-base lg:text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Don&rsquo;t have everything ready? That&rsquo;s okay —{" "}
            <span className="text-[#C9A96E]">we&rsquo;ll help you work through it.</span>
          </p>
          <a
            href="#contact"
            className="group/cta inline-flex items-center gap-2 self-start sm:self-auto text-[#C9A96E] text-xs tracking-[0.15em] uppercase focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A96E]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <span className="group-hover/cta:underline underline-offset-4">
              Start with a chat
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
