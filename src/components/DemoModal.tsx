"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import type { CaseStudy } from "@/data/caseStudies";

// Full-screen live-demo preview. The actual built demo is served as static
// HTML from /public/<slug>/, loaded in an iframe so visitors can try it
// without leaving the site. Shared by the /work hub and the home teaser.
export default function DemoModal({
  study,
  onClose,
}: {
  study: CaseStudy;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
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
        role="dialog"
        aria-modal="true"
        aria-label={`${study.title} live demo`}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
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
              style={{ backgroundColor: study.palette }}
            />
            <span
              className="text-white/80 text-sm tracking-[0.15em] uppercase"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {study.title}
            </span>
            <span className="text-white/30 text-xs" style={{ fontFamily: "var(--font-inter)" }}>
              Live Demo
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={study.demo}
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
              aria-label="Close demo"
              className="w-9 h-9 border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A96E]"
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
            src={study.demo}
            title={`${study.title} demo`}
            className="w-full h-full"
            style={{ border: "none" }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
