"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";
import type { Project } from "@/data/projects";
import { WipeLink } from "@/components/frame/RouteWipe";
import LoopVideo from "./LoopVideo";
import { Phone, Screen } from "./Shot";

/**
 * One show in the programme.
 *
 * The poster rises from the bottom edge with its label band already showing,
 * opens from an inset sheet on the wall to full bleed, and pins beneath the
 * identity band. Then the project's second sheet is laid over it. Each
 * project composes that second sheet its own way (see `variant`).
 */
export default function ProjectPoster({ project, total }: { project: Project; total: number }) {
  const section = useRef<HTMLElement>(null);
  const hold = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotionSafe();

  // A: the poster entering, bottom edge to pinned. B: the pinned hold.
  const { scrollYProgress: enter } = useScroll({ target: section, offset: ["start end", "start start"] });
  const { scrollYProgress: pinned } = useScroll({ target: hold, offset: ["start end", "end end"] });

  const side = useTransform(enter, [0, 1], [6, 0]);
  const clipPath = useTransform(side, (s) => `inset(0% ${s}% 0% ${s}%)`);
  // The label band moves in with the clip so its ends are never cut off.
  const bandPad = useTransform(side, (s) => `calc(var(--margin) + ${s}%)`);
  const scale = useTransform(pinned, [0, 1], [1.08, 1]);
  const film = useTransform([enter, pinned] as MotionValue<number>[], ([a, b]: number[]) => a * 0.3 + b * 0.7);

  const href = `/work/${project.slug}`;
  const holdHeight = project.variant === "flight" ? "115vh" : "45vh";

  return (
    <section
      ref={section}
      id={project.slug}
      aria-labelledby={`${project.slug}-title`}
      data-ground={project.ground}
      data-ink={project.ink}
      data-muted={project.muted}
      data-index={project.number}
      className="relative"
      style={{ color: project.ink }}
    >
      {/* The poster */}
      <div className="sticky overflow-hidden" style={{ top: "var(--nav-h)", height: "calc(100svh - var(--nav-h))" }}>
        <motion.div
          className="pointer-events-none absolute inset-0 z-20 flex flex-col"
          style={{ clipPath: reduce ? undefined : clipPath, backgroundColor: project.ground }}
        >
          <Band project={project} total={total} pad={reduce ? undefined : bandPad} />
          <div className="relative min-h-0 flex-1 overflow-hidden">
            <motion.div className="absolute inset-0 origin-top" style={{ scale: reduce ? 1 : scale }}>
              <PosterMedia project={project} film={film} reduce={!!reduce} />
            </motion.div>
          </div>
        </motion.div>
        <WipeLink
          href={href}
          color={project.ground}
          data-cursor="View"
          aria-label={`${project.title}, ${project.industry}: view project`}
          className="absolute inset-0 z-10 focus-visible:outline-offset-[-6px]"
        >
          <span className="sr-only">View project</span>
        </WipeLink>
      </div>

      <div ref={hold} aria-hidden style={{ height: holdHeight }} />

      {/* The second sheet, laid over the pinned poster */}
      {/* Painted with the live ground, so its tail follows the page back to paper. */}
      <div className="relative z-20 pb-24 pt-[14vh] md:pb-[20vh]" style={{ backgroundColor: "var(--ground)" }}>
        <div className="frame grid-12 gap-y-8">
          <p className="display col-span-12 text-[clamp(28px,3.9vw,60px)] leading-[1.08] md:col-span-9">
            {project.line}
          </p>
          <div className="meta col-span-12 md:col-span-3 md:col-start-7">
            <WipeLink href={href} color={project.ground} className="line-link line-link--rest text-[15px]">
              View project
            </WipeLink>
          </div>
        </div>
        <Composition project={project} />
      </div>
    </section>
  );
}

function Band({ project, total, pad }: { project: Project; total: number; pad?: MotionValue<string> }) {
  return (
    <motion.div
      className="frame grid-12 meta shrink-0 items-baseline py-4 md:py-5"
      style={{ color: project.ink, paddingLeft: pad, paddingRight: pad }}
    >
      <span className="col-span-2 tabular-nums md:col-span-1">
        {project.number}
        <span className="sr-only"> of {total}</span>
      </span>
      <h2
        id={`${project.slug}-title`}
        className="display col-span-7 text-[clamp(26px,2.9vw,44px)] leading-none md:col-span-5"
      >
        {project.title}
      </h2>
      <span className="hidden md:col-span-3 md:col-start-7 md:block">{project.industry}</span>
      <span className="hidden md:col-span-1 md:block">{project.year}</span>
      {project.concept && (
        <span className="col-span-3 justify-self-end md:col-span-2" style={{ color: project.muted }}>
          Concept
        </span>
      )}
      {/* Phones: industry and year take a second line under the name. */}
      <span className="col-span-10 col-start-3 mt-1 md:hidden">
        {project.industry}, {project.year}
      </span>
    </motion.div>
  );
}

function PosterMedia({ project, film, reduce }: { project: Project; film: MotionValue<number>; reduce: boolean }) {
  const phoneStill = project.mobile[0];

  if (project.variant === "flight" && !reduce) {
    return <ScrubFilm project={project} progress={film} />;
  }

  return (
    <>
      {/* Phones get the project's own phone screen rather than a cropped desktop. */}
      <Image
        src={project.variant === "flight" ? project.poster.still : phoneStill.src}
        alt={project.variant === "flight" ? project.poster.alt : phoneStill.alt}
        fill
        sizes="100vw"
        className="object-cover object-top md:hidden"
      />
      <div className="absolute inset-0 hidden md:block">
        <LoopVideo
          src={project.poster.video}
          poster={project.poster.still}
          label={project.poster.alt}
          className="h-full w-full object-cover object-top"
          controlClassName="pointer-events-auto absolute bottom-4 right-[var(--margin)] z-20 bg-[var(--ground)] px-3 py-1.5 text-[var(--ink)]"
        />
      </div>
    </>
  );
}

/** Oriel's flythrough, driven by the scroll instead of the clock. */
function ScrubFilm({ project, progress }: { project: Project; progress: MotionValue<number> }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [src, setSrc] = useState<string | null>(null);
  const frame = useRef(0);

  useEffect(() => {
    const narrow = window.matchMedia("(max-width: 767px)").matches;
    setSrc(narrow && project.poster.videoMobile ? project.poster.videoMobile : project.poster.video);
  }, [project]);

  useMotionValueEvent(progress, "change", (p) => {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const v = ref.current;
      if (!v || !v.duration || Number.isNaN(v.duration)) return;
      const t = Math.min(v.duration - 0.05, Math.max(0, p * v.duration));
      if (Math.abs(v.currentTime - t) > 0.01) v.currentTime = t;
    });
  });

  return (
    <video
      ref={ref}
      src={src ?? undefined}
      poster={project.poster.still}
      muted
      playsInline
      preload="auto"
      aria-label={project.poster.alt}
      className="h-full w-full object-cover"
    />
  );
}

/** The second sheet: each project composes its own. */
function Composition({ project }: { project: Project }) {
  const [d1, d2, d3, d4] = project.desktop;
  const [m1, m2, m3] = project.mobile;

  if (project.variant === "flight") {
    return (
      <div className="frame grid-12 mt-12 md:mt-[12vh] items-start gap-y-10">
        <Screen still={d1} sizes="(min-width: 768px) 72vw, 100vw" className="col-span-12 md:col-span-9" />
        <div className="col-span-12 grid grid-cols-2 gap-[var(--gutter)] md:col-span-3 md:grid-cols-1 md:gap-y-[6vw]">
          <Phone still={m1} sizes="(min-width: 768px) 22vw, 45vw" className="md:mt-[18vh]" />
          <Phone still={m3} sizes="(min-width: 768px) 22vw, 45vw" className="mt-[8vh] md:mt-0" />
        </div>
      </div>
    );
  }

  if (project.variant === "strip") return <Strip project={project} />;

  if (project.variant === "night") {
    return (
      <div className="frame mt-12 md:mt-[12vh]">
        <div className="grid-12 items-start gap-y-6">
          <Phone still={m1} sizes="(min-width: 768px) 24vw, 45vw" className="col-span-6 md:col-span-3" />
          <Phone still={m2} sizes="(min-width: 768px) 24vw, 45vw" className="col-span-6 mt-[10vh] md:col-span-3 md:col-start-5 md:mt-[16vh]" />
          <Phone still={m3} sizes="(min-width: 768px) 24vw, 45vw" className="col-span-6 col-start-4 md:col-span-3 md:col-start-9 md:mt-[5vh]" />
        </div>
        <div className="grid-12 mt-[14vh]">
          <Screen still={d2} sizes="(min-width: 768px) 75vw, 100vw" className="col-span-12 md:col-span-9 md:col-start-4" />
        </div>
      </div>
    );
  }

  // overlap: a full-bleed screen with a phone laid across its lower edge
  return (
    <div className="mt-12 md:mt-[12vh]">
      <Screen still={d3} sizes="100vw" />
      {/* Desktop: the phone just catches the still's bottom edge, below its
          lettering. Phones: the still is too small to share, so the phone takes
          its own row. */}
      <div className="frame grid-12 mt-10 md:-mt-[5vw]">
        <Phone still={m1} sizes="(min-width: 768px) 22vw, 50vw" className="col-span-6 col-start-4 md:col-span-3 md:col-start-9" />
      </div>
      <div className="frame grid-12 mt-[10vh]">
        <Screen still={d4} sizes="(min-width: 768px) 58vw, 100vw" className="col-span-12 md:col-span-7" />
      </div>
    </div>
  );
}

/** Halden: a catalogue strip that drifts against the scroll. */
function Strip({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotionSafe();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["6%", "-42%"]);
  const [, d2, d3, d4] = project.desktop;
  const [m1, m2, m3] = project.mobile;

  return (
    <div ref={ref} className="mt-12 md:mt-[12vh] overflow-hidden">
      <motion.div
        className="flex w-max items-end gap-[var(--gutter)] pl-[var(--margin)]"
        style={{ x: reduce ? 0 : x }}
      >
        <Screen still={d4} sizes="60vw" className="!w-[min(78vw,980px)]" />
        <Phone still={m1} sizes="24vw" className="w-[min(40vw,300px)]" />
        <Screen still={d2} sizes="60vw" className="!w-[min(78vw,980px)]" />
        <Phone still={m3} sizes="24vw" className="w-[min(40vw,300px)]" />
        <Screen still={d3} sizes="60vw" className="!w-[min(78vw,980px)]" />
        <Phone still={m2} sizes="24vw" className="w-[min(40vw,300px)]" />
      </motion.div>
    </div>
  );
}
