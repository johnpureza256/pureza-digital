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
      orbRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToWork = () => {
    document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-dvh flex flex-col overflow-hidden bg-[#0A0A0A]">
      {/* Background orb */}
      <div
        ref={orbRef}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none transition-transform duration-700 ease-out"
        style={{
          background:
            "radial-gradient(circle, rgba(201,169,110,0.08) 0%, rgba(201,169,110,0.03) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,169,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
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

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(3rem,8vw,7rem)] font-bold leading-[1.05] tracking-tight mb-8"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Websites That{" "}
          <em className="not-italic animate-shimmer glow-gold-text">
            Convert.
          </em>
          <br />
          <span className="text-white/90">Automations That</span>
          <br />
          <span className="text-white/90">
            Scale
            <em className="not-italic text-[#C9A96E]">.</em>
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="text-[#A0A0A0] text-lg md:text-xl leading-relaxed max-w-2xl mb-12"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Premium web design, AI automation, and intelligent digital solutions
          for ambitious businesses — from Ashburton to the world.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <button
            onClick={scrollToContact}
            className="group relative px-10 py-4 bg-[#C9A96E] text-[#0A0A0A] text-sm font-semibold tracking-[0.15em] uppercase overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,169,110,0.35)] cursor-pointer"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <span className="absolute inset-0 bg-[#E8C98A] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            <span className="relative flex items-center gap-2">
              Start a Project
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </button>

          <button
            onClick={scrollToWork}
            className="group flex items-center gap-2 px-8 py-4 border border-white/15 text-white/70 text-sm tracking-[0.12em] uppercase hover:border-white/40 hover:text-white transition-all duration-300 cursor-pointer"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            View Our Work
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200 opacity-60" />
          </button>
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
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        onClick={scrollToAbout}
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
      </motion.button>

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
