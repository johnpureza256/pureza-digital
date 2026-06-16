"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative border-t border-white/6 bg-[#080808] py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 border border-[#C9A96E] flex items-center justify-center">
                <span
                  className="text-[#C9A96E] font-bold text-sm tracking-widest"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  PD
                </span>
              </div>
              <span
                className="text-white font-medium text-sm tracking-[0.2em] uppercase"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Pureza Digital
              </span>
            </div>
            <p
              className="text-[#3A3A3A] text-xs leading-relaxed max-w-xs"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Boutique web design & AI automation studio.
              <br />
              Ashburton, New Zealand · Available Worldwide.
            </p>
          </motion.div>

          {/* Nav */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap gap-8"
          >
            {[
              ["About", "/#about"],
              ["Services", "/#services"],
              ["Work", "/#work"],
              ["Contact", "/#contact"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="text-[#3A3A3A] hover:text-[#C9A96E] text-xs tracking-[0.2em] uppercase transition-colors duration-200 cursor-pointer"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {label}
              </Link>
            ))}
          </motion.nav>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-12 pt-8 border-t border-white/5"
        >
          <p
            className="text-[#2A2A2A] text-xs"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            &copy; {YEAR} Pureza Digital. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link
              href="/privacy"
              className="text-[#3A3A3A] hover:text-[#C9A96E] text-xs tracking-[0.15em] uppercase transition-colors duration-200"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[#3A3A3A] hover:text-[#C9A96E] text-xs tracking-[0.15em] uppercase transition-colors duration-200"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Terms of Service
            </Link>
            <p
              className="text-[#2A2A2A] text-xs"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Designed &amp; built by{" "}
              <span className="text-[#C9A96E]/60">Pureza Digital</span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
