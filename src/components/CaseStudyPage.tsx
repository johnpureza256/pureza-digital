"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check, ExternalLink } from "lucide-react";
import type { CaseStudy } from "@/data/caseStudies";
import { CASE_STUDIES } from "@/data/caseStudies";
import Footer from "./Footer";

const EASE = [0.22, 1, 0.36, 1] as const;

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <span className="w-8 h-px bg-[#C9A96E]" />
      <span
        className="text-[#C9A96E] text-xs tracking-[0.3em] uppercase"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {children}
      </span>
    </div>
  );
}

export default function CaseStudyPage({ study }: { study: CaseStudy }) {
  const others = CASE_STUDIES.filter((c) => c.slug !== study.slug).slice(0, 2);

  return (
    <main className="bg-[#0A0A0A] text-white min-h-screen">
      {/* Minimal top bar — case studies are reading pages, not the homepage */}
      <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#0A0A0A]/90 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 text-[#9A9A9A] hover:text-white text-xs tracking-[0.15em] uppercase transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A96E]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform duration-200" />
            Pureza Digital
          </Link>
          <a
            href={study.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#C9A96E] hover:text-[#E8C98A] text-xs tracking-[0.15em] uppercase transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A96E]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            View Live Demo
            <ExternalLink size={13} />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-20 lg:pt-28 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 70% 50% at 50% 0%, ${study.accent}12 0%, transparent 65%)`,
          }}
        />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>Case Study — Demo Concept</SectionLabel>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.08] tracking-tight mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {study.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-[#A0A0A0] text-lg leading-relaxed max-w-2xl mb-10"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {study.summary}
          </motion.p>

          {/* Meta row */}
          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap gap-x-12 gap-y-4 pb-12 border-b border-white/[0.08]"
          >
            {[
              ["Business Type", study.businessType],
              ["Category", study.category],
              ["Project", "Demo concept build"],
            ].map(([label, value]) => (
              <div key={label}>
                <dt
                  className="text-[#5A5A5A] text-xs tracking-[0.15em] uppercase mb-1"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {label}
                </dt>
                <dd
                  className="text-white text-sm"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </section>

      {/* Screenshot */}
      <section className="max-w-5xl mx-auto px-6 lg:px-12 mb-24">
        <motion.a
          href={study.demo}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
          className="group relative block aspect-[16/9] overflow-hidden border border-white/10 hover:border-white/25 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A96E]"
          aria-label={`Open ${study.title} live demo`}
        >
          <Image
            src={study.thumb}
            alt={`${study.title} website design`}
            fill
            priority
            sizes="(min-width: 1024px) 960px, 100vw"
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-50 group-hover:opacity-20 transition-opacity duration-500" />
          <span
            className="absolute bottom-5 right-5 inline-flex items-center gap-2 px-4 py-2 bg-black/70 backdrop-blur-sm border border-white/15 text-white text-xs tracking-[0.15em] uppercase"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Open Live Demo
            <ExternalLink size={12} />
          </span>
        </motion.a>
      </section>

      {/* Problem / Goal */}
      <section className="max-w-5xl mx-auto px-6 lg:px-12 mb-24">
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="p-8 lg:p-10 border border-white/[0.07] bg-[#0C0C0C]"
          >
            <h2
              className="text-2xl font-bold text-white mb-5"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              The Problem
            </h2>
            <p
              className="text-[#8A8A8A] text-sm leading-[1.8]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {study.problem}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.12, ease: EASE }}
            className="p-8 lg:p-10 border border-[#C9A96E]/20 bg-gradient-to-br from-[#C9A96E]/[0.04] to-transparent"
          >
            <h2
              className="text-2xl font-bold text-[#C9A96E] mb-5"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              The Goal
            </h2>
            <p
              className="text-[#A8A8A8] text-sm leading-[1.8]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {study.goal}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Design direction */}
      <section className="max-w-5xl mx-auto px-6 lg:px-12 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <SectionLabel>Design Direction</SectionLabel>
          <p
            className="text-xl lg:text-2xl text-white leading-[1.6] max-w-3xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {study.designDirection}
          </p>
        </motion.div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-6 lg:px-12 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <SectionLabel>What Was Built</SectionLabel>
        </motion.div>
        <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-5 mt-2">
          {study.features.map((f, i) => (
            <motion.li
              key={f}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.05, ease: EASE }}
              className="flex items-start gap-4"
            >
              <span className="mt-0.5 w-5 h-5 shrink-0 border border-[#C9A96E]/40 bg-[#C9A96E]/10 flex items-center justify-center">
                <Check size={11} className="text-[#C9A96E]" strokeWidth={2.5} />
              </span>
              <span
                className="text-[#B8B8B8] text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {f}
              </span>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Customer journey */}
      <section className="max-w-5xl mx-auto px-6 lg:px-12 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <SectionLabel>The Customer Journey</SectionLabel>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6 mt-2">
          {study.journey.map((j, i) => (
            <motion.div
              key={j.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
              className="relative p-7 border border-white/[0.07] bg-[#0C0C0C]"
            >
              <span
                className="text-[#C9A96E] text-xs font-semibold tracking-[0.2em] block mb-3"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                0{i + 1}
              </span>
              <h3
                className="text-lg font-bold text-white mb-3"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {j.step}
              </h3>
              <p
                className="text-[#8A8A8A] text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {j.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech + what this could improve */}
      <section className="max-w-5xl mx-auto px-6 lg:px-12 mb-24">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <SectionLabel>Technology</SectionLabel>
            <ul className="space-y-3 mt-2">
              {study.tech.map((t) => (
                <li
                  key={t}
                  className="text-[#8A8A8A] text-sm leading-relaxed pl-4 border-l border-[#C9A96E]/30"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          >
            <SectionLabel>What a Site Like This Could Improve</SectionLabel>
            <ul className="space-y-4 mt-2">
              {study.couldImprove.map((c) => (
                <li key={c} className="flex items-start gap-4">
                  <ArrowUpRight size={15} className="mt-0.5 shrink-0 text-[#C9A96E]" />
                  <span
                    className="text-[#B8B8B8] text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {c}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="max-w-5xl mx-auto px-6 lg:px-12 mb-24">
        <p
          className="text-[#5A5A5A] text-xs leading-relaxed border border-white/[0.06] bg-white/[0.015] p-5 max-w-2xl"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          This project is a demo concept created by Pureza Digital to
          demonstrate what a modern website could look like for a local
          business of this kind. It is not a commissioned client project, and
          any resemblance to existing businesses is illustrative.
        </p>
      </section>

      {/* CTA */}
      <section className="relative border-t border-white/[0.06] py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(201,169,110,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.15] mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Want something like this
            <br />
            <span className="text-[#C9A96E]">for your business?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[#8A8A8A] text-sm lg:text-base leading-relaxed max-w-xl mx-auto mb-10"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Tell us about your business and we&rsquo;ll show you what a modern
            website could look like for you — including a free review of your
            current online presence.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <Link
              href="/#contact"
              className="btn-cta btn-cta--gold group relative inline-flex items-center gap-3 px-10 py-4 bg-[#C9A96E] text-[#0A0A0A] text-sm font-semibold tracking-[0.15em] uppercase overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A96E]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <span className="absolute inset-0 bg-[#E8C98A] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              <span className="relative flex items-center gap-2">
                Start a Conversation
                <ArrowUpRight
                  size={15}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                />
              </span>
            </Link>
          </motion.div>

          {/* Other case studies */}
          {others.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-16 pt-10 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-x-10 gap-y-3"
            >
              <span
                className="text-[#5A5A5A] text-xs tracking-[0.2em] uppercase"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                More case studies
              </span>
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/work/${o.slug}`}
                  className="group inline-flex items-center gap-2 text-[#9A9A9A] hover:text-[#C9A96E] text-sm transition-colors duration-200"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  <span className="group-hover:underline underline-offset-4">{o.title}</span>
                  <ArrowUpRight size={13} />
                </Link>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
