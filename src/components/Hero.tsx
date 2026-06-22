"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const MARQUEE_ITEMS = [
  "Web Design",
  "AI Automation",
  "Digital Strategy",
  "AI Widgets",
  "Brand Identity",
  "Custom Dev",
  "Web Design",
  "AI Automation",
  "Digital Strategy",
  "AI Widgets",
  "Brand Identity",
  "Custom Dev",
];

export default function Hero() {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!orbRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      // Preserve the -50% horizontal centering while adding parallax offset
      orbRef.current.style.transform = `translate(calc(-50% + ${x}px), ${y}px)`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-dvh flex flex-col overflow-hidden bg-[#0A0A0A]">
      {/* ── Halo: a warm light source blooming from the top-center ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top-edge bloom — the brightest point of the halo */}
        <div
          className="absolute inset-x-0 top-0 h-[55%]"
          style={{
            background:
              "radial-gradient(62% 100% at 50% -8%, rgba(232,201,138,0.20) 0%, rgba(201,169,110,0.10) 32%, transparent 72%)",
          }}
        />
        {/* Wide ambient wash that wraps the headline */}
        <div
          className="absolute left-1/2 top-[-22%] -translate-x-1/2 w-[150%] h-[115%]"
          style={{
            background:
              "radial-gradient(46% 46% at 50% 42%, rgba(201,169,110,0.13) 0%, rgba(201,169,110,0.04) 38%, transparent 68%)",
          }}
        />
        {/* Focused, parallax core glow */}
        <div
          ref={orbRef}
          className="absolute left-1/2 top-[14%] -translate-x-1/2 w-[840px] h-[520px] transition-transform duration-700 ease-out"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(232,201,138,0.22) 0%, rgba(201,169,110,0.09) 42%, transparent 72%)",
            filter: "blur(56px)",
          }}
        />
      </div>

      {/* Grid overlay — masked so it fades into the halo */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,169,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(75% 65% at 50% 30%, #000 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(75% 65% at 50% 30%, #000 30%, transparent 80%)",
        }}
      />

      {/* Bottom vignette — settles the halo back into pure black */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%]"
        style={{ background: "linear-gradient(to bottom, transparent, #0A0A0A 88%)" }}
      />

      {/* Floating accent shapes */}
      <motion.div
        animate={{ y: [0, -16, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[8%] w-24 h-24 border border-[#C9A96E]/15 hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 12, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[30%] left-[6%] w-16 h-16 border border-[#C9A96E]/10 hidden lg:block"
      />
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[35%] left-[12%] w-1.5 h-1.5 rounded-full bg-[#C9A96E] hidden lg:block"
      />
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute top-[55%] right-[15%] w-1 h-1 rounded-full bg-[#C9A96E] hidden lg:block"
      />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pt-32 pb-24 text-center max-w-6xl mx-auto w-full">
        {/* SEO H1 (visually hidden, read by search engines & screen readers) */}
        <h1 className="sr-only">
          Pureza Digital — Web Design &amp; Development in Ashburton, NZ
        </h1>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2.5 border border-[#C9A96E]/30 px-4 py-2 mb-10 bg-[#C9A96E]/5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] animate-pulse-gold" />
          <span
            className="text-[#C9A96E] text-xs tracking-[0.25em] uppercase"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Based in New Zealand · Available Worldwide
          </span>
        </motion.div>

        {/* Headline (decorative — primary H1 is the visually-hidden one above) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(3rem,8vw,7rem)] font-bold leading-[1.05] tracking-tight mb-8"
          style={{ fontFamily: "var(--font-playfair)" }}
          aria-hidden="true"
        >
          Websites That{" "}
          <em className="not-italic animate-shimmer glow-gold-text">
            Grow
          </em>
          <br />
          <span className="text-white/90">
            Businesses
            <em className="not-italic text-[#C9A96E]">.</em>
          </span>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="text-[#A0A0A0] text-lg md:text-xl leading-relaxed max-w-2xl mb-12"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Professional websites, AI automation, and digital systems designed to help businesses attract more customers, save time, and grow online. — Based in Ashburton. Built for businesses across New Zealand.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <a
            href="#contact"
            className="btn-cta btn-cta--gold group relative inline-flex justify-center px-10 py-4 bg-[#C9A96E] text-[#0A0A0A] text-sm font-semibold tracking-[0.15em] uppercase overflow-hidden"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <span className="absolute inset-0 bg-[#E8C98A] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            <span className="relative flex items-center gap-2">
              Start a Project
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </a>

          <a
            href="#work"
            className="btn-cta btn-cta--outline group flex items-center gap-2 px-8 py-4 border border-white/15 text-white/70 text-sm tracking-[0.12em] uppercase hover:border-white/40 hover:text-white"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            View Our Work
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200 opacity-60" />
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex items-center gap-10 mt-20 border-t border-white/8 pt-10"
        >
          {[
            { value: "100%", label: "Client Satisfaction" },
            { value: "NZ+", label: "Global Ready" },
            { value: "24h", label: "Response Time" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-2xl md:text-3xl font-bold text-[#C9A96E] mb-1"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {stat.value}
              </div>
              <div
                className="text-[#6B6B6B] text-xs tracking-[0.15em] uppercase"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#6B6B6B] hover:text-[#C9A96E] transition-colors cursor-pointer"
      >
        <span className="text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-inter)" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.a>

      {/* Marquee strip */}
      <div className="relative z-10 border-t border-white/5 py-5 overflow-hidden">
        <div className="animate-marquee flex gap-16 whitespace-nowrap">
          {MARQUEE_ITEMS.map((item, i) => (
            <span
              key={i}
              className="text-xs tracking-[0.3em] uppercase text-[#3A3A3A] flex items-center gap-16"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {item}
              <span className="inline-block w-1 h-1 rounded-full bg-[#C9A96E]/40" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
