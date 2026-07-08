"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import SectionGlow from "./SectionGlow";

const PACKAGES = [
  {
    name: "Starter Website",
    subtitle: "For businesses with no proper website yet.",
    price: "$497",
    tagline:
      "A simple one-page website for businesses that need a professional online presence.",
    features: [
      "Mobile-first design",
      "Business overview",
      "Services / menu section",
      "Contact details",
      "Enquiry form",
      "Click-to-call button",
      "Basic SEO setup",
    ],
    featured: false,
  },
  {
    name: "Local Business Website",
    subtitle:
      "For businesses that need a stronger online presence and clearer enquiry flow.",
    price: "$997",
    tagline:
      "A complete 4–5 page website for businesses that want stronger trust, clearer services, and better enquiry flow.",
    features: [
      "Home, about & services pages",
      "Gallery, work or menu page",
      "Contact page with Google Maps",
      "Contact form",
      "Click-to-call buttons",
      "Basic SEO foundations",
    ],
    featured: true,
    tag: "Most popular",
  },
  {
    name: "Growth Website",
    subtitle:
      "For businesses that want stronger copy, lead tracking, and long-term growth foundations.",
    price: "$1,997",
    tagline:
      "A higher-value website for businesses that want stronger copy, multiple service pages, lead tracking, and long-term growth foundations.",
    features: [
      "6–8 custom pages",
      "Stronger copywriting",
      "Analytics setup",
      "Lead capture",
      "CRM / enquiry tracking",
      "Post-launch support",
    ],
    featured: false,
  },
];

const CARE_PLANS = [
  {
    name: "Basic Care",
    price: "$49",
    features: [
      "Fast, secure hosting",
      "SSL certificate",
      "Backups & software updates",
      "Uptime monitoring",
    ],
    featured: false,
    // Stripe Payment Link for this plan. Leave "" to fall back to the contact link.
    stripeUrl: "https://buy.stripe.com/dRm28r48YfC7f6H5nj7N604",
  },
  {
    name: "Standard Care",
    price: "$99",
    features: [
      "Everything in Basic",
      "Minor monthly updates",
      "Support for website-related issues",
      "Monthly health check",
    ],
    featured: true,
    tag: "Recommended",
    stripeUrl: "https://buy.stripe.com/9B6cN58pedtZgaL9Dz7N603",
  },
  {
    name: "Growth Care",
    price: "$199",
    features: [
      "Everything in Standard",
      "Larger monthly update allowance",
      "Priority support",
      "Quarterly improvement review",
    ],
    featured: false,
    stripeUrl: "https://buy.stripe.com/bJe5kD0WM3Tp2jVcPL7N602",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

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
            Packages
          </span>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
            className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Website Packages
            <br />
            <span className="text-[#C9A96E]">for Local Businesses</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[#6B6B6B] max-w-sm leading-relaxed text-sm lg:text-base"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Foundation client pricing is available for selected Ashburton and
            Canterbury businesses while Pureza Digital builds its early local
            client portfolio.
          </motion.p>
        </div>

        {/* Packages */}
        <div className="grid lg:grid-cols-3 gap-px bg-white/5">
          {PACKAGES.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: EASE }}
              className={`group relative p-10 transition-colors duration-400 overflow-hidden ${
                tier.featured ? "bg-[#111009]" : "bg-[#0A0A0A] hover:bg-[#111111]"
              }`}
            >
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
                className="text-xl font-bold text-white mb-2 leading-snug"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {tier.name}
              </h3>

              <p
                className="text-[#C9A96E]/80 text-xs leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {tier.subtitle}
              </p>

              <div className="flex items-baseline gap-2 mb-6">
                <span
                  className="text-[#6B6B6B] text-xs tracking-[0.15em] uppercase"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  from
                </span>
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
                  Get started
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
          All prices in NZD. Every project gets a fixed quote before any work
          begins — no surprises.
        </motion.p>

        {/* Hosting & Website Care */}
        <div className="mt-24">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="text-2xl lg:text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Hosting &amp; Website Care
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#6B6B6B] text-sm leading-relaxed max-w-xl mb-12"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Keep your website fast, secure, and up to date after launch. Care
            plans cover hosting, minor monthly updates, and support for
            website-related issues.
          </motion.p>

          <div className="grid sm:grid-cols-3 gap-px bg-white/5">
            {CARE_PLANS.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                className={`relative p-8 overflow-hidden ${
                  plan.featured ? "bg-[#111009]" : "bg-[#0A0A0A]"
                }`}
              >
                <div
                  className={`absolute inset-0 pointer-events-none border ${
                    plan.featured ? "border-[#C9A96E]/35" : "border-transparent"
                  }`}
                />
                {plan.tag && (
                  <span
                    className="absolute top-5 right-5 px-2.5 py-1 text-[0.6rem] tracking-[0.2em] uppercase text-[#0A0A0A] bg-[#C9A96E] leading-none"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {plan.tag}
                  </span>
                )}
                <h4
                  className="text-lg font-bold text-white mb-4"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {plan.name}
                </h4>
                <div className="flex items-baseline gap-1 mb-6">
                  <span
                    className="text-3xl font-bold text-[#C9A96E]"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {plan.price}
                  </span>
                  <span
                    className="text-[#6B6B6B] text-xs tracking-wide"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    /month
                  </span>
                </div>
                <ul className="space-y-2.5 mb-8">
                  {plan.features.map((f) => (
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

                {plan.stripeUrl ? (
                  <a
                    href={plan.stripeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/pay relative inline-flex w-full items-center justify-center gap-2 px-6 py-3 text-xs font-semibold tracking-[0.15em] uppercase overflow-hidden transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A96E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] ${
                      plan.featured
                        ? "bg-[#C9A96E] text-[#0A0A0A]"
                        : "border border-[#C9A96E]/40 text-[#C9A96E] hover:border-[#C9A96E]/70"
                    }`}
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {plan.featured && (
                      <span className="absolute inset-0 bg-[#E8C98A] translate-x-[-101%] group-hover/pay:translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                    )}
                    <span className="relative flex items-center gap-2">
                      Subscribe
                      <ArrowUpRight
                        size={13}
                        className="group-hover/pay:translate-x-0.5 group-hover/pay:-translate-y-0.5 transition-transform duration-200"
                      />
                    </span>
                  </a>
                ) : (
                  <a
                    href="#contact"
                    className={`group/pay relative inline-flex w-full items-center justify-center gap-2 px-6 py-3 text-xs font-semibold tracking-[0.15em] uppercase transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A96E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] ${
                      plan.featured
                        ? "bg-[#C9A96E] text-[#0A0A0A] hover:bg-[#E8C98A]"
                        : "border border-[#C9A96E]/40 text-[#C9A96E] hover:border-[#C9A96E]/70"
                    }`}
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    <span className="flex items-center gap-2">
                      Get started
                      <ArrowUpRight
                        size={13}
                        className="group-hover/pay:translate-x-0.5 group-hover/pay:-translate-y-0.5 transition-transform duration-200"
                      />
                    </span>
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#6B6B6B] text-xs leading-relaxed mt-6 max-w-xl"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Secure checkout powered by Stripe. Custom website projects are
            invoiced separately after proposal approval.
          </motion.p>

          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            href="#contact"
            className="mt-8 flex items-center gap-2 text-[#C9A96E] text-xs tracking-[0.15em] uppercase group/care w-fit"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <span className="group-hover/care:underline underline-offset-4">
              Ask About Website Care
            </span>
            <ArrowUpRight
              size={13}
              className="group-hover/care:translate-x-0.5 group-hover/care:-translate-y-0.5 transition-transform duration-200"
            />
          </motion.a>
        </div>

        {/* Free audit offer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: EASE }}
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
                Free Website Audit
              </div>
              <h3
                className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-snug"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Not sure where to start? Get a free website audit.
              </h3>
              <p
                className="text-[#9A9A9A] text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Tell us about your business and we&apos;ll review your current
                website and online presence — or put together a free demo
                preview of what a new one could look like. No cost, no
                obligation.
              </p>
            </div>
            <a
              href="#contact"
              className="btn-cta btn-cta--gold group relative inline-flex justify-center px-10 py-4 bg-[#C9A96E] text-[#0A0A0A] text-sm font-semibold tracking-[0.15em] uppercase overflow-hidden shrink-0 self-start lg:self-auto"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <span className="absolute inset-0 bg-[#E8C98A] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              <span className="relative flex items-center gap-2">
                Get My Free Audit
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
