"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Store, Server, CalendarCheck, ArrowUpRight } from "lucide-react";
import SectionGlow from "./SectionGlow";

const SERVICES = [
  {
    number: "01",
    icon: Code2,
    title: "Starter Websites",
    tagline:
      "A simple, professional one-page website that gives your business a real home online.",
    description:
      "Built for businesses starting from nothing — or replacing a Facebook page or outdated site. One clear page that explains what you do, shows your services, and makes it easy for customers to call or enquire.",
    features: [
      "One-page custom design",
      "Business overview & services",
      "Click-to-call & enquiry form",
      "Mobile-first & fast-loading",
      "Basic SEO setup",
    ],
  },
  {
    number: "02",
    icon: Store,
    title: "Local Business Websites",
    tagline:
      "Complete multi-page websites that build trust, explain your services clearly, and make enquiring easy.",
    description:
      "For businesses ready to stand out locally. A full website with dedicated pages for your services, work, and story — designed around how your customers actually decide who to call.",
    features: [
      "Home, about & services pages",
      "Gallery, work or menu page",
      "Google Maps & location details",
      "Contact forms & call buttons",
      "SEO foundations",
    ],
  },
  {
    number: "03",
    icon: Server,
    title: "Hosting & Maintenance",
    tagline:
      "Keep your website fast, secure, and up to date — without having to think about it.",
    description:
      "Monthly care plans that cover hosting, backups, software updates, minor monthly updates, and support for website-related issues. You run the business; we look after the website.",
    features: [
      "Managed hosting & SSL",
      "Backups & software updates",
      "Uptime monitoring",
      "Minor monthly updates",
      "Support for website-related issues",
    ],
  },
  {
    number: "04",
    icon: CalendarCheck,
    title: "Booking, Forms & Lead Systems",
    tagline:
      "Make it easy for customers to book, order, and enquire — and easy for you to follow up.",
    description:
      "Practical add-ons that turn website visits into action: booking and scheduling setup, enquiry and quote forms, menu or order pages, and simple lead tracking so nothing slips through the cracks.",
    features: [
      "Booking & scheduling setup",
      "Enquiry & quote forms",
      "Menu / order pages",
      "Lead capture & tracking",
      "Simple follow-up automations",
    ],
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="relative bg-[#0A0A0A] py-32 lg:py-40 overflow-hidden">
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
            Services
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
            What We
            <br />
            <span className="text-[#C9A96E]">Deliver</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[#6B6B6B] max-w-sm leading-relaxed text-sm lg:text-base"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Everything a local business needs to get online, look professional,
            and make it easy for customers to take the next step.
          </motion.p>
        </div>

        {/* Services grid */}
        <div ref={ref} className="grid sm:grid-cols-2 gap-px bg-white/5">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-[#0A0A0A] p-10 hover:bg-[#111111] transition-colors duration-400 overflow-hidden"
            >
              {/* Hover border effect */}
              <div className="absolute inset-0 border border-[#C9A96E]/0 group-hover:border-[#C9A96E]/20 transition-all duration-500 pointer-events-none" />

              {/* Gold line top */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/0 to-transparent group-hover:via-[#C9A96E]/50 transition-all duration-500 pointer-events-none" />

              {/* Number */}
              <span
                className="text-[#1A1A1A] text-7xl font-bold absolute top-6 right-8 leading-none select-none group-hover:text-[#C9A96E]/8 transition-colors duration-400"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {service.number}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 border border-[#C9A96E]/25 flex items-center justify-center mb-8 group-hover:border-[#C9A96E]/60 transition-colors duration-300">
                <service.icon size={20} className="text-[#C9A96E]" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3
                className="text-xl font-bold text-white mb-4 leading-snug"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {service.title}
              </h3>
              <p
                className="text-[#9A9A9A] text-sm leading-relaxed mb-4"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {service.tagline}
              </p>
              <p
                className="hidden lg:block text-[#6B6B6B] text-sm leading-relaxed mb-8"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {service.description}
              </p>

              {/* Feature list */}
              <ul className="space-y-2.5 mb-10">
                {service.features.map((f) => (
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

              {/* CTA */}
              <a
                href="/contact"
                className="flex items-center gap-2 text-[#C9A96E] text-xs tracking-[0.15em] uppercase group/btn w-fit"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                <span className="group-hover/btn:underline underline-offset-4">Enquire</span>
                <ArrowUpRight
                  size={13}
                  className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200"
                />
              </a>
            </motion.div>
          ))}
        </div>

        {/* De-emphasised: custom builds still available on request */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#6B6B6B] text-xs mt-6"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Need something more custom — a portal, dashboard, or web app?{" "}
          <a href="/contact" className="text-[#C9A96E] hover:underline underline-offset-4">
            Get in touch
          </a>{" "}
          and we&apos;ll scope it with you.
        </motion.p>
      </div>
    </section>
  );
}
