"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import Footer from "./Footer";

/** Content model — keeps each legal page declarative and consistently styled. */
export type LegalBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "contact" };

export interface LegalSection {
  heading: string;
  blocks: LegalBlock[];
}

export interface LegalPageProps {
  /** Small uppercase label above the title, e.g. "Legal". */
  eyebrow: string;
  /** First part of the title, rendered in white. */
  titleLead: string;
  /** Last word(s) of the title, rendered in gold. */
  titleAccent: string;
  /** e.g. "June 2026". */
  lastUpdated: string;
  /** Lead paragraphs shown before the numbered sections. */
  intro: string[];
  sections: LegalSection[];
}

const CONTACT = {
  email: "purezadigitalnz@gmail.com",
  phone: "+64 21 284 2008",
  location: "Ashburton, Canterbury, New Zealand",
};

const TABS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

function ContactCard() {
  const rows = [
    { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: Phone, label: "Phone", value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s+/g, "")}` },
    { icon: MapPin, label: "Location", value: CONTACT.location, href: null as string | null },
  ];

  return (
    <div className="mt-6 border border-white/8 bg-[#111111] p-7 space-y-6">
      <p
        className="text-white font-semibold text-sm tracking-wide"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        Pureza Digital
      </p>
      {rows.map((row) => (
        <div key={row.label} className="flex items-center gap-5">
          <div className="w-10 h-10 border border-[#C9A96E]/25 flex items-center justify-center flex-shrink-0">
            <row.icon size={15} className="text-[#C9A96E]" strokeWidth={1.5} />
          </div>
          <div>
            <div
              className="text-[#3A3A3A] text-xs tracking-[0.15em] uppercase mb-0.5"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {row.label}
            </div>
            {row.href ? (
              <a
                href={row.href}
                className="text-white text-sm hover:text-[#C9A96E] transition-colors"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {row.value}
              </a>
            ) : (
              <span
                className="text-white text-sm"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {row.value}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function Block({ block }: { block: LegalBlock }) {
  if (block.type === "paragraph") {
    return (
      <p
        className="text-[#A0A0A0] text-[0.95rem] leading-[1.85]"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {block.text}
      </p>
    );
  }

  if (block.type === "list") {
    return (
      <ul className="space-y-2.5">
        {block.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3.5 text-[#A0A0A0] text-[0.95rem] leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <span className="mt-[0.6em] w-1.5 h-1.5 flex-shrink-0 bg-[#C9A96E]/70 rotate-45" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  return <ContactCard />;
}

export default function LegalPage({
  eyebrow,
  titleLead,
  titleAccent,
  lastUpdated,
  intro,
  sections,
}: LegalPageProps) {
  const pathname = usePathname();

  return (
    <main className="bg-[#0A0A0A] min-h-screen">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0A0A0A]/90 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 border border-[#C9A96E] flex items-center justify-center group-hover:bg-[#C9A96E]/10 transition-colors duration-300">
              <span
                className="text-[#C9A96E] font-bold text-sm tracking-widest"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                PD
              </span>
            </div>
            <span
              className="text-white font-medium text-sm tracking-[0.2em] uppercase hidden sm:block"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Pureza Digital
            </span>
          </Link>

          <Link
            href="/"
            className="group flex items-center gap-2 text-[#A0A0A0] hover:text-[#C9A96E] text-xs tracking-[0.15em] uppercase transition-colors duration-200"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform duration-200" />
            Back to site
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,169,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-4xl mx-auto px-6 lg:px-12 pt-20 pb-16 lg:pt-28 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="w-8 h-px bg-[#C9A96E]" />
            <span
              className="text-[#C9A96E] text-xs tracking-[0.3em] uppercase"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {eyebrow}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {titleLead} <span className="text-[#C9A96E]">{titleAccent}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-[#6B6B6B] text-xs tracking-[0.2em] uppercase"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Last Updated: {lastUpdated}
          </motion.p>

          {/* Tabs */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-12 flex flex-wrap gap-3"
          >
            {TABS.map((tab) => {
              const active = pathname === tab.href;
              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  aria-current={active ? "page" : undefined}
                  className={`px-5 py-2.5 text-xs tracking-[0.15em] uppercase border transition-colors duration-200 ${
                    active
                      ? "border-[#C9A96E] text-[#C9A96E] bg-[#C9A96E]/5"
                      : "border-white/10 text-[#6B6B6B] hover:text-white hover:border-white/25"
                  }`}
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {tab.label}
                </Link>
              );
            })}
          </motion.nav>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="space-y-5 mb-16 max-w-2xl"
        >
          {intro.map((text, i) => (
            <p
              key={i}
              className="text-[#C9C9C9] text-[1.05rem] leading-[1.85]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {text}
            </p>
          ))}
        </motion.div>

        {/* Sections */}
        <div className="space-y-14">
          {sections.map((section, i) => (
            <motion.section
              key={section.heading}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="scroll-mt-28"
            >
              <div className="flex items-baseline gap-4 mb-5">
                <span
                  className="text-[#C9A96E]/50 text-sm tabular-nums"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2
                  className="text-2xl lg:text-[1.75rem] font-semibold text-white leading-tight"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {section.heading}
                </h2>
              </div>
              <div className="space-y-4 pl-0 sm:pl-9">
                {section.blocks.map((block, j) => (
                  <Block key={j} block={block} />
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </article>

      <Footer />
    </main>
  );
}
