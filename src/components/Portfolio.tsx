"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    number: "01",
    title: "Triangle Espresso",
    category: "Concept Project",
    description:
      "A modern café website designed to showcase quality coffee, local hospitality, and a welcoming customer experience. Featuring custom branding, responsive design, and an elegant menu experience inspired by the craftsmanship behind every cup.",
    tags: ["HTML / CSS / JS", "Brand Design", "Editorial"],
    accent: "#C99A4E",
    bg: "from-[#1A0E06] to-[#0A0A0A]",
    demo: "/triangle-espresso/index.html",
    palette: "#241813",
  },
  {
    number: "02",
    title: "Rotary Club of Ashburton",
    category: "Concept Project",
    description:
      "A modern digital presence for one of Mid Canterbury's most established community organisations. Designed to improve accessibility, communicate community impact, and make it easier for members and visitors to engage with the club.",
    tags: ["React", "Tailwind CSS", "Multi-page"],
    accent: "#17458F",
    bg: "from-[#040D1A] to-[#0A0A0A]",
    demo: "/rotary-ashburton/index.html",
    palette: "#17458F",
  },
  {
    number: "03",
    title: "Pals Plumbing",
    category: "Concept Project",
    description:
      "A premium single-page website for a local Ashburton plumbing business, built to turn visitors into phone calls. Featuring smooth scroll-triggered animations, a trust-focused design system, and a mobile-first tap-to-call experience optimised to load fast on any device.",
    tags: ["HTML / CSS / JS", "Animation", "Local Business"],
    accent: "#3B82F6",
    bg: "from-[#040A1A] to-[#0A0A0A]",
    demo: "/pals-plumbing/index.html",
    palette: "#1E40AF",
  },
];

function DemoModal({ project, onClose }: { project: typeof PROJECTS[0]; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex flex-col"
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      >
        {/* Top bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="flex items-center justify-between px-6 py-4 flex-shrink-0"
        >
          <div className="flex items-center gap-4">
            <div
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: project.palette }}
            />
            <span
              className="text-white/80 text-sm tracking-[0.15em] uppercase"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {project.title}
            </span>
            <span className="text-white/30 text-xs" style={{ fontFamily: "var(--font-inter)" }}>
              Live Demo
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white/50 hover:text-white/90 text-xs tracking-wide transition-colors duration-200"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <ExternalLink size={12} />
              Open in new tab
            </a>
            <button
              onClick={onClose}
              className="w-9 h-9 border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all duration-200"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>

        {/* iframe */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 mx-6 mb-6 border border-white/10 overflow-hidden bg-white"
          style={{ borderRadius: 2 }}
        >
          <iframe
            src={project.demo}
            title={`${project.title} demo`}
            className="w-full h-full"
            style={{ border: "none" }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Portfolio() {
  const [activeDemo, setActiveDemo] = useState<typeof PROJECTS[0] | null>(null);

  return (
    <>
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
              Recent Projects
              <br />
              <span className="text-[#C9A96E]">We&apos;re Proud Of</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#6B6B6B] text-sm max-w-xs leading-relaxed"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              A selection of websites and digital experiences I&apos;ve designed and developed for businesses and organisations in Mid Canterbury.
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
                className={`group relative border border-white/6 bg-gradient-to-br ${project.bg} p-8 lg:p-12 overflow-hidden hover:border-white/12 transition-all duration-500`}
              >
                {/* Hover gradient */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(ellipse at 0% 50%, ${project.accent}08 0%, transparent 60%)` }}
                />

                <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                  {/* Left */}
                  <div className="flex items-start gap-8">
                    <span
                      className="text-4xl font-bold text-[#1A1A1A] select-none mt-1 group-hover:text-[#2A2A2A] transition-colors duration-500 hidden md:block"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {project.number}
                    </span>
                    <div className="flex-1">
                      <div
                        className="text-xs tracking-[0.2em] uppercase mb-2"
                        style={{ fontFamily: "var(--font-inter)", color: project.accent }}
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

                    <button
                      onClick={() => setActiveDemo(project)}
                      className="group/btn flex items-center gap-3 px-6 py-3 border text-xs tracking-[0.15em] uppercase transition-all duration-300"
                      style={{
                        fontFamily: "var(--font-inter)",
                        borderColor: `${project.accent}30`,
                        color: project.accent,
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = `${project.accent}80`;
                        (e.currentTarget as HTMLElement).style.backgroundColor = `${project.accent}0D`;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = `${project.accent}30`;
                        (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                      }}
                    >
                      View Demo
                      <ArrowUpRight
                        size={13}
                        className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                      />
                    </button>
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
            <a
              href="#contact"
              className="group relative inline-block px-10 py-4 border border-[#C9A96E]/40 text-[#C9A96E] text-sm tracking-[0.15em] uppercase overflow-hidden hover:border-[#C9A96E] transition-colors duration-300"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <span className="absolute inset-0 bg-[#C9A96E]/5 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              <span className="relative flex items-center gap-2">
                Start Your Project
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Demo modal */}
      {activeDemo && (
        <DemoModal project={activeDemo} onClose={() => setActiveDemo(null)} />
      )}
    </>
  );
}
