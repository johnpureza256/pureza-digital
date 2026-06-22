"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Sparkles, Globe, Zap } from "lucide-react";
import SectionGlow from "./SectionGlow";

const TEAM = [
  {
    name: "John Pureza",
    role: "Founder",
    photo: "/team/john-pureza.jpg",
    // Crop focal point within the source image (object-position)
    objectPosition: "center",
  },
  {
    name: "Hamish Ramsay",
    role: "Founding Partner",
    photo: "/team/hamish-ramsay.jpg",
    // Tall portrait — anchor higher up the photo so the head sits lower/centered in the circle
    objectPosition: "center 8%",
  },
];

const VALUES = [
  {
    icon: Sparkles,
    title: "Crafted For Your Business",
    body: "Every website is built around your business, goals, and customers. No generic templates. No unnecessary complexity.",
  },
  {
    icon: Globe,
    title: "Local Knowledge, Modern Technology",
    body: "Based in Ashburton and focused on helping New Zealand businesses compete online with modern websites and AI-powered systems.",
  },
  {
    icon: Zap,
    title: "Built To Deliver Results",
    body: "A great website should do more than look good. Every project is designed to build trust, generate enquiries, and support business growth.",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };
  const item = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
  };

  return (
    <section id="about" className="relative bg-[#0A0A0A] py-32 lg:py-40 overflow-hidden">
      <SectionGlow position="right" />
      {/* Decorative line */}
      <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#C9A96E]/20 to-transparent hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-20"
        >
          <span className="w-8 h-px bg-[#C9A96E]" />
          <span
            className="text-[#C9A96E] text-xs tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            About
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          {/* Left: Text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1] mb-8"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Meet
              <br />
              <span className="text-[#C9A96E]">The Team</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-5 text-[#A0A0A0] leading-relaxed"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <p>
                
              </p>
              <p>
                We&apos;re John Pureza and Hamish Ramsay, the founding team behind Pureza Digital.
              </p>
              <p>
                Pureza Digital helps businesses create modern websites that build trust, attract customers, and support long-term growth.
              </p>
              <p>
                Founded in Ashburton, New Zealand, we&apos;re a small team passionate about helping local businesses compete online with professional design, strong branding, and practical digital solutions.
              </p>
              <p>
                We work closely with each client to create websites that not only look great, but help achieve real business goals.
              </p>
              <p>
                Whether you&apos;re a café, tradie, contractor, retailer, or service business, we&apos;re here to <b>help you build a stronger online presence and stand out from the competition.</b>
              </p>

            </motion.div>

            {/* Founder photos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-12 flex gap-8 sm:gap-12"
            >
              {TEAM.map((member) => (
                <div key={member.name} className="flex items-center gap-4">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border border-[#C9A96E]/30 flex-shrink-0">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                      style={{ objectPosition: member.objectPosition }}
                    />
                  </div>
                  <div>
                    <div
                      className="text-white font-semibold text-sm"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {member.name}
                    </div>
                    <div
                      className="text-[#C9A96E] text-xs tracking-[0.15em] uppercase mt-0.5"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {member.role}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 pt-10 border-t border-white/8 flex gap-12"
            >
              {[
                { n: "10+", label: "Projects Built" },
                { n: "100%", label: "NZ Based" },
                { n: "∞", label: "Ambition" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    className="text-3xl font-bold text-[#C9A96E]"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {s.n}
                  </div>
                  <div
                    className="text-[#6B6B6B] text-xs tracking-[0.15em] uppercase mt-0.5"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Values cards */}
          <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="space-y-4"
          >
            {VALUES.map((v) => (
              <motion.div
                key={v.title}
                variants={item}
                className="group p-6 border border-white/6 bg-[#111111] hover:border-[#C9A96E]/30 hover:bg-[#C9A96E]/5 transition-all duration-400"
              >
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 border border-[#C9A96E]/30 flex items-center justify-center flex-shrink-0 group-hover:border-[#C9A96E]/60 transition-colors duration-300">
                    <v.icon size={16} className="text-[#C9A96E]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3
                      className="text-white font-semibold mb-2 text-sm tracking-wide"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {v.title}
                    </h3>
                    <p
                      className="text-[#6B6B6B] text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {v.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
