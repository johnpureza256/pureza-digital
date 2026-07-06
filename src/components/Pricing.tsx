"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import SectionGlow from "./SectionGlow";

const TIERS = [
  {
    name: "Landing Page",
    price: "$1,500",
    priceNote: "from",
    tagline:
      "One sharp, fast page that gets your business online and generating enquiries.",
    features: [
      "Custom single-page design",
      "Mobile-first & fast-loading",
      "Contact / enquiry form",
      "Basic SEO setup",
      "Live in 1–2 weeks",
    ],
    featured: false,
  },
  {
    name: "Business Website",
    price: "$3,500",
    priceNote: "from",
    tagline:
      "A complete website built to win trust, rank locally, and turn visitors into customers.",
    features: [
      "Multi-page custom design",
      "Brand-matched look & feel",
      "SEO-ready structure",
      "Analytics set up for you",
      "Hosting & maintenance available",
      "Live in 2–3 weeks",
    ],
    featured: true,
    tag: "Most popular",
  },
  {
    name: "Web Apps & Automation",
    price: "Let's talk",
    priceNote: null,
    tagline:
      "Booking systems, client portals, dashboards, and automation — scoped and quoted per project.",
    features: [
      "Booking & scheduling systems",
      "Client portals & dashboards",
      "Business process automation",
      "Fixed quote before work begins",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-[#0A0A0A] py-32 lg:py-40 overflow-hidden">
      <SectionGlow position="right" />

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
            Pricing
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
            What It
            <br />
            <span className="text-[#C9A96E]">Costs</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[#6B6B6B] max-w-sm leading-relaxed text-sm lg:text-base"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Honest starting points so you know what to expect. Every project
            gets a fixed quote before any work begins — no surprises.
          </motion.p>
        </div>

        {/* Tiers */}
        <div className="grid lg:grid-cols-3 gap-px bg-white/5">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative p-10 transition-colors duration-400 overflow-hidden ${
                tier.featured ? "bg-[#111009]" : "bg-[#0A0A0A] hover:bg-[#111111]"
              }`}
            >
              {/* Featured border + top line */}
              <div
                className={`absolute inset-0 pointer-events-none transition-all duration-500 border ${
                  tier.featured
                    ? "border-[#C9A96E]/35"
                    : "border-[#C9A96E]/0 group-hover:border-[#C9A96E]/20"
                }`}
              />
              <div
                className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent to-transparent transition-all duration-500 pointer-events-none ${
                  tier.featured
                    ? "via-[#C9A96E]/70"
                    : "via-[#C9A96E]/0 group-hover:via-[#C9A96E]/50"
                }`}
              />

              {tier.tag && (
                <span
                  className="absolute top-6 right-6 px-2.5 py-1 text-[0.6rem] tracking-[0.2em] uppercase text-[#0A0A0A] bg-[#C9A96E] leading-none"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {tier.tag}
                </span>
              )}

              <h3
                className="text-xl font-bold text-white mb-6 leading-snug"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {tier.name}
              </h3>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-6">
                {tier.priceNote && (
                  <span
                    className="text-[#6B6B6B] text-xs tracking-[0.15em] uppercase"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {tier.priceNote}
                  </span>
                )}
                <span
                  className="text-4xl font-bold text-[#C9A96E]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {tier.price}
                </span>
              </div>

              <p
                className="text-[#9A9A9A] text-sm leading-relaxed mb-8"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {tier.tagline}
              </p>

              <ul className="space-y-2.5 mb-10">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 text-[#5A5A5A] text-xs tracking-wide"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    <span className="w-3 h-px bg-[#C9A96E]/50 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="flex items-center gap-2 text-[#C9A96E] text-xs tracking-[0.15em] uppercase group/btn w-fit"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                <span className="group-hover/btn:underline underline-offset-4">
                  Get a free quote
                </span>
                <ArrowUpRight
                  size={13}
                  className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200"
                />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#6B6B6B] text-xs mt-6"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          All prices in NZD. Not sure which fits? Send a message and we&apos;ll
          point you in the right direction — even if that&apos;s not us.
        </motion.p>

        {/* Foundation client offer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-16 border border-[#C9A96E]/30 bg-[#C9A96E]/[0.04] p-10 lg:p-12 overflow-hidden"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(60% 100% at 0% 50%, rgba(201,169,110,0.08) 0%, transparent 70%)",
            }}
          />
          <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <div
                className="text-[#C9A96E] text-xs tracking-[0.25em] uppercase mb-4"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Foundation Client Offer — 3 Spots
              </div>
              <h3
                className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-snug"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                See your homepage before you spend a dollar.
              </h3>
              <p
                className="text-[#9A9A9A] text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                We&apos;re taking on three foundation clients at founding-client
                pricing. Tell us about your business and we&apos;ll design a free
                homepage concept — if you love it, we build the rest. If not,
                you owe nothing and keep the ideas.
              </p>
            </div>
            <a
              href="#contact"
              className="btn-cta btn-cta--gold group relative inline-flex justify-center px-10 py-4 bg-[#C9A96E] text-[#0A0A0A] text-sm font-semibold tracking-[0.15em] uppercase overflow-hidden shrink-0 self-start lg:self-auto"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <span className="absolute inset-0 bg-[#E8C98A] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              <span className="relative flex items-center gap-2">
                Claim a Spot
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
