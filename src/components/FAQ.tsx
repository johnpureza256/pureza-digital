"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import SectionGlow from "./SectionGlow";

const FAQS = [
  {
    q: "What is foundation client pricing?",
    a: "While Pureza Digital builds its early local client portfolio, selected Ashburton and Canterbury businesses can get their website at reduced foundation pricing. You get the same quality of work — in return, we ask for honest feedback and, if you're happy, permission to feature the project and a testimonial.",
  },
  {
    q: "My business has no website at all. Is that a problem?",
    a: "Not at all — businesses starting from zero are exactly who we work with most. We handle the whole process: domain, hosting, structure, and content guidance. You don't need to prepare anything technical; a conversation about your business is enough to get started.",
  },
  {
    q: "Will a website guarantee me more leads?",
    a: "No — and you should be wary of anyone who guarantees that. What a good website does is make your business easier to find, easier to trust, and easier to contact, so the attention you already get from Google, word-of-mouth, and social media has somewhere to land. We build every site around clear calls to action so the next step is always obvious.",
  },
  {
    q: "Do I have to host my website with you?",
    a: "No. Our hosting and care plans are optional — they're the easiest way to keep your site fast, secure, and up to date, but if you'd rather host elsewhere, we'll set the site up so that's straightforward.",
  },
  {
    q: "How long does it take to launch?",
    a: "A Starter Website is typically live within 1–2 weeks. Local Business and Growth Websites usually take 2–4 weeks, depending on how quickly content and feedback come together. You'll get a clear timeline before we start.",
  },
  {
    q: "Who owns the website once it's built?",
    a: "You do. Once the project is paid for, the domain, design, and content are yours. There are no lock-in contracts — if you ever want to move the site or work with someone else, everything comes with you.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-[#0A0A0A] py-32 lg:py-40 overflow-hidden">
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
            FAQ
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-24 items-start">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1] lg:sticky lg:top-32"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Common
            <br />
            <span className="text-[#C9A96E]">Questions</span>
          </motion.h2>

          <div className="border-t border-white/8">
            {FAQS.map((faq, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="border-b border-white/8"
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="group w-full flex items-center justify-between gap-6 py-6 text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A96E]"
                  >
                    <span
                      className={`text-base lg:text-lg font-semibold transition-colors duration-200 ${
                        isOpen ? "text-[#C9A96E]" : "text-white group-hover:text-[#E8C98A]"
                      }`}
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {faq.q}
                    </span>
                    <Plus
                      size={18}
                      className={`shrink-0 text-[#C9A96E] transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p
                          className="text-[#9A9A9A] text-sm leading-relaxed pb-7 pr-10"
                          style={{ fontFamily: "var(--font-inter)" }}
                        >
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
