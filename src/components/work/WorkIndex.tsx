"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";
import { PROJECTS } from "@/data/projects";
import { WipeLink } from "@/components/frame/RouteWipe";

/**
 * The programme as a typographic index. On a fine pointer, the hovered
 * project's poster travels with the cursor; on touch, each row carries its
 * own image instead.
 */
export default function WorkIndex() {
  const reduce = useReducedMotionSafe();
  const [active, setActive] = useState<number | null>(null);
  const [fine, setFine] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 30 });
  const sy = useSpring(y, { stiffness: 260, damping: 30 });

  useEffect(() => {
    setFine(window.matchMedia("(pointer: fine)").matches);
  }, []);

  return (
    <div
      onPointerMove={(e) => {
        x.set(e.clientX);
        y.set(e.clientY);
      }}
      onPointerLeave={() => setActive(null)}
    >
      <ol className="border-b border-[var(--ink)]/15">
        {PROJECTS.map((p, i) => (
          <li key={p.slug} className="border-t border-[var(--ink)]/15">
            <WipeLink
              href={`/work/${p.slug}`}
              color={p.ground}
              onPointerEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              className="group grid-12 items-baseline gap-y-4 py-7 md:py-9"
            >
              <span className="meta col-span-2 tabular-nums md:col-span-1">{p.number}</span>
              <span className="display col-span-10 text-[clamp(40px,6.4vw,104px)] leading-[0.95] transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:translate-x-3 md:col-span-5">
                {p.title}
              </span>
              <span className="meta col-span-6 col-start-3 md:col-span-3 md:col-start-7">{p.industry}</span>
              <span className="meta col-span-2 md:col-span-1">{p.year}</span>
              <span className="meta muted col-span-2 justify-self-end md:col-span-2">
                {p.concept ? "Concept" : ""}
              </span>
              {!fine && (
                <span className="relative col-span-12 mt-3 block aspect-[16/10] overflow-hidden md:hidden">
                  <Image src={p.desktop[0].src} alt="" fill sizes="100vw" className="object-cover object-top" />
                </span>
              )}
            </WipeLink>
          </li>
        ))}
      </ol>

      {fine && (
        <motion.div
          aria-hidden
          className="pointer-events-none fixed left-0 top-0 z-[50] hidden md:block"
          style={{ x: reduce ? x : sx, y: reduce ? y : sy }}
        >
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.slug}
              className="absolute left-6 top-6 w-[min(30vw,440px)] overflow-hidden"
              initial={false}
              animate={{
                opacity: active === i ? 1 : 0,
                clipPath: active === i ? "inset(0% 0% 0% 0%)" : "inset(0% 0% 100% 0%)",
              }}
              transition={{ duration: reduce ? 0 : 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src={p.desktop[0].src}
                alt=""
                width={p.desktop[0].w}
                height={p.desktop[0].h}
                sizes="30vw"
                className="block h-auto w-full"
              />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
