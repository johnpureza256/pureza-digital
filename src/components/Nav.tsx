"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the nav link for the section currently in view
  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveSection(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="group cursor-pointer flex items-center"
            aria-label="Pureza Digital — back to top"
          >
            <span
              className="text-white/95 text-[15px] tracking-[0.34em] uppercase transition-colors duration-300 group-hover:text-[#E8C98A]"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 500 }}
            >
              Pureza Digital
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-9">
            {links.map((link, i) => {
              const isActive = activeSection === link.href;
              return (
                <li key={link.label}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    aria-current={isActive ? "true" : undefined}
                    className="group relative flex items-baseline gap-1.5 text-sm tracking-[0.12em] uppercase cursor-pointer"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {/* Editorial index */}
                    <span
                      className={`text-[10px] tabular-nums transition-colors duration-300 ${
                        isActive
                          ? "text-[#C9A96E]"
                          : "text-[#5A5A5A] group-hover:text-[#C9A96E]/70"
                      }`}
                    >
                      0{i + 1}
                    </span>
                    {/* Label — color shift only, no underline (minimal) */}
                    <span
                      className={`transition-colors duration-200 ${
                        isActive
                          ? "text-white"
                          : "text-[#A0A0A0] group-hover:text-white"
                      }`}
                    >
                      {link.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleLinkClick("#contact")}
              className="btn-cta btn-cta--outline group relative px-6 py-2.5 border border-[#C9A96E] text-[#C9A96E] text-sm tracking-[0.12em] uppercase overflow-hidden hover:text-[#0A0A0A] cursor-pointer"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <span className="absolute inset-0 bg-[#C9A96E] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              <span className="relative">Start a Project</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#0A0A0A]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-10"
          >
            {links.map((link, i) => {
              const isActive = activeSection === link.href;
              return (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  onClick={() => handleLinkClick(link.href)}
                  aria-current={isActive ? "true" : undefined}
                  className={`flex items-baseline gap-3 text-3xl font-light tracking-[0.15em] uppercase transition-colors cursor-pointer ${
                    isActive ? "text-[#C9A96E]" : "text-white/80 hover:text-[#C9A96E]"
                  }`}
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  <span
                    className="text-sm tabular-nums text-[#C9A96E]/60"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    0{i + 1}
                  </span>
                  {link.label}
                </motion.button>
              );
            })}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              onClick={() => handleLinkClick("#contact")}
              className="btn-cta btn-cta--outline mt-4 px-10 py-4 border border-[#C9A96E] text-[#C9A96E] text-sm tracking-[0.2em] uppercase cursor-pointer"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Start a Project
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
