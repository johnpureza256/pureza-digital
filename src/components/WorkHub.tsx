"use client";

import { forwardRef, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { CASE_STUDIES, activeNiches, type CaseStudy, type Niche } from "@/data/caseStudies";
import DemoModal from "./DemoModal";
import SectionGlow from "./SectionGlow";

const EASE = [0.22, 1, 0.36, 1] as const;

type Filter = Niche | "All";

const WorkCard = forwardRef<
  HTMLElement,
  {
    study: CaseStudy;
    index: number;
    onOpenDemo: (s: CaseStudy) => void;
  }
>(function WorkCard({ study, index, onOpenDemo }, ref) {
  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.3), ease: EASE }}
      className={`group relative flex flex-col border border-white/[0.07] bg-gradient-to-br ${study.bg} overflow-hidden hover:border-white/15 transition-colors duration-500`}
    >
      {/* Accent wash — each build carries its own colour so the grid never
          reads as one flat monochrome wall */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${study.accent}12 0%, transparent 60%)` }}
      />

      {/* Thumbnail — opens the live demo */}
      <button
        onClick={() => onOpenDemo(study)}
        aria-label={`Preview the ${study.title} live demo`}
        className="group/img relative aspect-[16/10] w-full overflow-hidden border-b border-white/[0.07] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A96E]"
      >
        <Image
          src={study.thumb}
          alt={`${study.title} website design`}
          fill
          sizes="(min-width: 1024px) 560px, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-[600ms] ease-out group-hover/img:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-70 group-hover/img:opacity-30 transition-opacity duration-500" />
        {/* Play affordance */}
        <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-3.5 py-2 bg-black/65 backdrop-blur-sm border border-white/15 text-white/90 text-[11px] tracking-[0.15em] uppercase translate-y-2 opacity-0 group-hover/img:translate-y-0 group-hover/img:opacity-100 transition-all duration-300"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          <Play size={11} className="fill-current" />
          Live Preview
        </span>
      </button>

      {/* Body */}
      <div className="relative flex flex-1 flex-col p-6 lg:p-7">
        <div className="mb-3 flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: study.accent }} />
          <span
            className="text-[11px] tracking-[0.2em] uppercase"
            style={{ fontFamily: "var(--font-inter)", color: study.accent }}
          >
            {study.niche}
          </span>
          <span className="text-white/20 text-[11px]">·</span>
          <span
            className="text-[#6B6B6B] text-[11px] tracking-wide"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {study.businessType}
          </span>
        </div>

        <h3
          className="text-2xl font-bold text-white mb-3 leading-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {study.title}
        </h3>

        <p
          className="text-[#8A8A8A] text-sm leading-relaxed mb-6 flex-1"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {study.summary}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 border border-white/[0.08] text-[#6B6B6B] text-[11px] tracking-wide"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between gap-4 pt-5 border-t border-white/[0.06]">
          <button
            onClick={() => onOpenDemo(study)}
            className="group/btn inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A96E]"
            style={{ fontFamily: "var(--font-inter)", color: study.accent }}
          >
            View Demo
            <ArrowUpRight
              size={13}
              className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
            />
          </button>
          <Link
            href={`/work/${study.slug}`}
            className="group/cs inline-flex items-center gap-1.5 text-[#8A8A8A] hover:text-white text-xs tracking-[0.15em] uppercase transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A96E]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <span className="group-hover/cs:underline underline-offset-4">Case Study</span>
            <ArrowUpRight size={12} className="group-hover/cs:translate-x-0.5 group-hover/cs:-translate-y-0.5 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
});
WorkCard.displayName = "WorkCard";

export default function WorkHub({
  featured = false,
  limit,
}: {
  /** Featured mode: hides filters, shows a "view all work" link (home teaser). */
  featured?: boolean;
  /** Cap the number of cards shown (defaults to 3 in featured mode). */
  limit?: number;
}) {
  const [filter, setFilter] = useState<Filter>("All");
  const [activeDemo, setActiveDemo] = useState<CaseStudy | null>(null);
  const niches = useMemo(() => activeNiches(), []);

  const cap = limit ?? (featured ? 3 : undefined);
  const visible = useMemo(() => {
    const base = filter === "All" ? CASE_STUDIES : CASE_STUDIES.filter((c) => c.niche === filter);
    return cap ? base.slice(0, cap) : base;
  }, [filter, cap]);

  return (
    <>
      <section
        id="work"
        className="relative bg-[#0A0A0A] py-24 lg:py-32 overflow-hidden"
      >
        <SectionGlow position={featured ? "right" : "center"} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 lg:mb-16">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-px bg-[#C9A96E]" />
                <span
                  className="text-[#C9A96E] text-xs tracking-[0.3em] uppercase"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {featured ? "Selected Work" : "The Work"}
                </span>
              </div>
              <h2
                className="text-[clamp(2.25rem,5vw,3.75rem)] font-bold leading-[1.1]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Demo builds, one
                <br />
                <span className="text-[#C9A96E]">per kind of business.</span>
              </h2>
            </div>
            <p
              className="text-[#6B6B6B] text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Real, working websites built to show what Pureza Digital can do for
              each type of local business. Client projects join them here as
              foundation clients launch.
            </p>
          </div>

          {/* Filters (hub only) */}
          {!featured && niches.length > 1 && (
            <div className="mb-10 flex flex-wrap gap-2.5">
              {(["All", ...niches] as Filter[]).map((n) => {
                const isActive = filter === n;
                return (
                  <button
                    key={n}
                    onClick={() => setFilter(n)}
                    aria-pressed={isActive}
                    className={`btn-cta px-4 py-2 text-xs tracking-[0.12em] uppercase border transition-colors duration-200 cursor-pointer ${
                      isActive
                        ? "border-[#C9A96E] bg-[#C9A96E] text-[#0A0A0A]"
                        : "border-white/12 text-[#9A9A9A] hover:border-[#C9A96E]/50 hover:text-white"
                    }`}
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {n}
                  </button>
                );
              })}
            </div>
          )}

          {/* Grid */}
          <motion.div layout className="grid gap-6 sm:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {visible.map((study, i) => (
                <WorkCard key={study.slug} study={study} index={i} onOpenDemo={setActiveDemo} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Footer link / CTA */}
          <div className="mt-14 text-center">
            {featured ? (
              <Link
                href="/work"
                className="btn-cta btn-cta--outline group inline-flex items-center gap-2.5 px-8 py-3.5 border border-[#C9A96E]/40 text-[#C9A96E] text-xs tracking-[0.15em] uppercase hover:border-[#C9A96E]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                See every build
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </Link>
            ) : (
              <>
                <p
                  className="text-white text-lg lg:text-xl leading-relaxed max-w-xl mx-auto mb-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Don&rsquo;t see your trade yet?
                </p>
                <p
                  className="text-[#6B6B6B] text-sm mb-6 max-w-md mx-auto"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Send your business name and we&rsquo;ll build a free homepage
                  concept for it — no cost, no obligation.
                </p>
                <Link
                  href="/free-audit"
                  className="btn-cta btn-cta--gold group inline-flex items-center gap-2.5 px-9 py-4 bg-[#C9A96E] text-[#0A0A0A] text-sm font-semibold tracking-[0.15em] uppercase"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Claim a Free Homepage Concept
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

      {activeDemo && <DemoModal study={activeDemo} onClose={() => setActiveDemo(null)} />}
    </>
  );
}
