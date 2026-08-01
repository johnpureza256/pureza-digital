"use client";

import { motion } from "framer-motion";

// Honest, concrete signals a studio with no clients yet can still stand
// behind — each is a promise about how we work, not a claim we can't back.
const ITEMS = [
  "Ashburton based · NZ owned",
  "A free concept before you commit",
  "Fixed quotes — no surprises",
  "Every enquiry answered in 24 hours",
];

export default function TrustBar() {
  return (
    <div className="relative bg-[#080808] border-y border-white/[0.06] py-5 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-wrap items-center justify-center gap-x-3 gap-y-2"
      >
        {ITEMS.map((item, i) => (
          <span key={item} className="flex items-center gap-3">
            <span
              className="text-[#9A9A9A] text-xs sm:text-sm tracking-[0.1em] uppercase"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {item}
            </span>
            {i < ITEMS.length - 1 && (
              <span className="w-1 h-1 rounded-full bg-[#C9A96E]/50" aria-hidden />
            )}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
