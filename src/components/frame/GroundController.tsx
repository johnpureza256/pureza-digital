"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export type GroundDetail = { index: string | null };

/**
 * The page takes the colour of whatever crosses the middle of the viewport.
 *
 * Any element carrying data-ground / data-ink / data-muted is a candidate. The
 * controller writes those values to :root, and body's background-color
 * transition does the rest. Elements with data-index also report the
 * programme counter to the identity band.
 */
export default function GroundController() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-ground]"));
    if (!els.length) return;

    const apply = (el: HTMLElement) => {
      root.style.setProperty("--ground", el.dataset.ground!);
      root.style.setProperty("--ink", el.dataset.ink!);
      root.style.setProperty("--muted", el.dataset.muted!);
      window.dispatchEvent(
        new CustomEvent<GroundDetail>("pd:ground", { detail: { index: el.dataset.index ?? null } })
      );
    };

    // Start from whatever is under the middle line right now, so a route that
    // opens on a project's ground never flashes the house paper first.
    const mid = window.innerHeight / 2;
    const current =
      els.find((el) => {
        const r = el.getBoundingClientRect();
        return r.top <= mid && r.bottom >= mid;
      }) ?? els[0];
    apply(current);

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) apply(e.target as HTMLElement);
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
