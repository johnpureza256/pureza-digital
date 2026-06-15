"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    number: "01",
    title: "Ashburton Dental Studio",
    category: "Web Design & Development",
    description:
      "A premium dental clinic website with online booking, service pages, and a calming, trust-building design that increased new patient enquiries.",
    tags: ["Next.js", "Custom Design", "Booking Integration"],
    accent: "#C9A96E",
    bg: "from-[#1A1208] to-[#0A0A0A]",
  },
  {
    number: "02",
    title: "Canterbury Trade Co.",
    category: "Web Design + AI Automation",
    description:
      "B2B trade website paired with an AI-driven lead qualification workflow — automating follow-ups and cutting response time from days to minutes.",
    tags: ["Web Design", "AI Workflow", "CRM Integration"],
    accent: "#C9A96E",
    bg: "from-[#0A0A14] to-[#0A0A0A]",
  },
  {
    number: "03",
    title: "Pacific Property Group",
    category: "AI Chatbot + Website",
    description:
      "A real estate brand site with an embedded AI assistant that pre-qualifies buyers, answers property questions, and books viewings 24/7.",
    tags: ["Real Estate", "AI Widget", "Lead Gen"],
    accent: "#C9A96E",
    bg: "from-[#0A1408] to-[#0A0A0A]",
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="relative bg-[#0A0A0A] py-32 lg:py-40">
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
            Selected Work
          </span>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Projects We&apos;re
            <br />
            <span className="text-[#C9A96E]">Proud Of</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#6B6B6B] text-sm max-w-xs leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            A growing portfolio of premium digital experiences, each built from scratch.
          </motion.p>
        </div>

        {/* Projects */}
        <div className="space-y-4">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative border border-white/6 bg-gradient-to-br ${project.bg} p-8 lg:p-12 overflow-hidden hover:border-[#C9A96E]/25 transition-all duration-500 cursor-default`}
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-[#C9A96E]/0 group-hover:bg-[#C9A96E]/3 transition-all duration-500" />

              <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                {/* Left */}
                <div className="flex items-start gap-8">
                  <span
                    className="text-4xl font-bold text-[#1A1A1A] select-none mt-1 group-hover:text-[#C9A96E]/20 transition-colors duration-500 hidden md:block"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {project.number}
                  </span>
                  <div className="flex-1">
                    <div
                      className="text-[#C9A96E] text-xs tracking-[0.2em] uppercase mb-2"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {project.category}
                    </div>
                    <h3
                      className="text-2xl lg:text-3xl font-bold text-white mb-3"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-[#6B6B6B] text-sm leading-relaxed max-w-xl"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Right */}
                <div className="flex flex-col items-start lg:items-end gap-6 flex-shrink-0">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 border border-white/10 text-[#6B6B6B] text-xs tracking-wide"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="w-10 h-10 border border-[#C9A96E]/20 flex items-center justify-center group-hover:border-[#C9A96E]/60 group-hover:bg-[#C9A96E]/10 transition-all duration-300">
                    <ArrowUpRight size={16} className="text-[#C9A96E]" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p
            className="text-[#6B6B6B] text-sm mb-6"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Your project could be next.
          </p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative px-10 py-4 border border-[#C9A96E]/40 text-[#C9A96E] text-sm tracking-[0.15em] uppercase overflow-hidden hover:border-[#C9A96E] transition-colors duration-300 cursor-pointer"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <span className="absolute inset-0 bg-[#C9A96E]/5 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            <span className="relative flex items-center gap-2">
              Start Your Project
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
