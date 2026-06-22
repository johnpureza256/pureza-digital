"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, BrainCircuit, Bot, ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    number: "01",
    icon: Code2,
    title: "Website Design & Development",
    tagline:
      "Modern websites built to help businesses look professional, build trust, and generate more enquiries.",
    description:
      "We design and develop fast, mobile-friendly websites that are tailored to your business and built with performance, usability, and long-term growth in mind. From simple landing pages to complete business websites, we focus on creating digital assets that help your business stand out online.",
    features: [
      "Custom Website Design",
      "Website Development",
      "Responsive & Mobile-First Design",
      "Landing Pages",
      "Website Hosting & Maintenance",
      "SEO-Ready Foundations",
    ],
  },
  {
    number: "02",
    icon: BrainCircuit,
    title: "Custom Web Applications",
    tagline:
      "Powerful web-based tools designed to streamline operations, improve efficiency, and solve business problems.",
    description:
      "We build custom web applications tailored to your business requirements. Whether you need a client portal, booking system, internal dashboard, inventory tracker, or business management platform, we create solutions that save time and support growth.",
    features: [
      "Client Portals",
      "Booking & Scheduling Systems",
      "Business Dashboards",
      "Inventory Management Systems",
      "Internal Business Tools",
      "Custom Database Applications",
    ],
  },
  {
    number: "03",
    icon: Bot,
    title: "Digital Solutions & Business Automation",
    tagline:
      "Practical automation solutions that reduce manual work, improve consistency, and support business growth.",
    description:
      "As Pureza Digital continues to grow, we're expanding into business automation and AI-powered solutions that help businesses save time and operate more efficiently.",
    features: [
      "Business Process Automation",
      "Lead Capture & Enquiry Systems",
      "Workflow Automation",
      "AI Automation Solutions",
      "Custom Digital Workflows",
      { label: "Future AI-Powered Systems", tag: "Coming soon" },
    ],
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="relative bg-[#0A0A0A] py-32 lg:py-40 overflow-hidden">
      {/* Subtle bg accent */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.04] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #C9A96E 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
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
            Three core disciplines, one seamless experience. Everything you need
            to build, automate, and grow online.
          </motion.p>
        </div>

        {/* Services grid */}
        <div ref={ref} className="grid lg:grid-cols-3 gap-px bg-white/5">
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
                className="text-[#6B6B6B] text-sm leading-relaxed mb-8"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {service.description}
              </p>

              {/* Feature list */}
              <ul className="space-y-2.5 mb-10">
                {service.features.map((f) => {
                  const label = typeof f === "string" ? f : f.label;
                  const tag = typeof f === "string" ? null : f.tag;
                  return (
                    <li
                      key={label}
                      className="flex items-center gap-3 text-[#5A5A5A] text-xs tracking-wide"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      <span className="w-3 h-px bg-[#C9A96E]/50 shrink-0" />
                      {label}
                      {tag && (
                        <span className="ml-1 px-1.5 py-0.5 text-[0.6rem] tracking-[0.1em] uppercase text-[#C9A96E] border border-[#C9A96E]/30 rounded-sm leading-none">
                          {tag}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
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
      </div>
    </section>
  );
}
