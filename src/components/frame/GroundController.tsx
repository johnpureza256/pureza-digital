"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export type GroundDetail = { index: string | null };

/**
 * Colour follows the work, on two lines.
 *
 * - The page line (middle of the viewport) sets --ground / --ink / --muted,
 *   which paint the body behind everything: the wall a poster hangs on.
 * - The band line (the identity band's bottom edge) sets --band-*, so the
 *   band always matches whatever is directly beneath it and never sits on a
 *   different colour from the sheet under it.
 *
 * A section marked data-wall is see-through: it shows the body, so while one
 * is under the band, the band follows the page line instead of the section's
 * nominal colour, fading at the body's pace.
 *
 * When the page line reaches an element marked data-close (the footer),
 * :root gets data-closing, so sections that opt in (the studio note) fade
 * to ink with the page instead of meeting the footer at a hard edge.
 *
 * Candidates are elements with data-ground / data-ink / data-muted. Where
 * they nest (a next-project panel inside a case study), the innermost one
 * that crosses the line wins, which is the last one in document order.
 */
export default function GroundController() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-ground]"));
    if (!els.length) return;

    let pageEl: HTMLElement | null = null;
    let bandOnWall = false;

    const paint = (prefix: "" | "band-", el: HTMLElement) => {
      root.style.setProperty(`--${prefix}ground`, el.dataset.ground!);
      root.style.setProperty(`--${prefix}ink`, el.dataset.ink!);
      root.style.setProperty(`--${prefix}muted`, el.dataset.muted!);
    };

    const set = (prefix: "" | "band-", el: HTMLElement) => {
      if (prefix === "band-") {
        bandOnWall = el.dataset.wall !== undefined;
        root.style.setProperty("--band-fade", bandOnWall ? "700ms" : "180ms");
        paint("band-", bandOnWall && pageEl ? pageEl : el);
        return;
      }
      pageEl = el;
      paint("", el);
      root.toggleAttribute("data-closing", el.dataset.close !== undefined);
      if (bandOnWall) paint("band-", el);
      window.dispatchEvent(
        new CustomEvent<GroundDetail>("pd:ground", { detail: { index: el.dataset.index ?? null } })
      );
    };

    const crossing = (y: number) =>
      els.filter((el) => {
        const r = el.getBoundingClientRect();
        return r.top <= y && r.bottom > y;
      });

    const watch = (prefix: "" | "band-", lineY: () => number) => {
      const hits = new Set<HTMLElement>();
      let current: HTMLElement | null = null;
      const pick = () => {
        const inner = els.filter((el) => hits.has(el)).pop();
        if (inner && inner !== current) {
          current = inner;
          set(prefix, inner);
        }
      };

      // Start from what is under the line right now, so a route that opens
      // on a project's ground never flashes the house paper first.
      const start = crossing(lineY()).pop() ?? els[0];
      current = start;
      set(prefix, start);

      let io: IntersectionObserver | null = null;
      const observe = () => {
        io?.disconnect();
        hits.clear();
        const y = Math.round(lineY());
        const below = Math.max(0, window.innerHeight - y - 1);
        io = new IntersectionObserver(
          (entries) => {
            for (const e of entries) {
              if (e.isIntersecting) hits.add(e.target as HTMLElement);
              else hits.delete(e.target as HTMLElement);
            }
            pick();
          },
          { rootMargin: `-${y}px 0px -${below}px 0px`, threshold: 0 }
        );
        els.forEach((el) => io!.observe(el));
      };
      observe();
      return { observe, disconnect: () => io?.disconnect() };
    };

    const navH = () =>
      parseInt(getComputedStyle(root).getPropertyValue("--nav-h"), 10) || 64;
    const page = watch("", () => window.innerHeight / 2);
    const band = watch("band-", () => navH());

    // The lines are pixel positions, so they move with the viewport.
    let t = 0;
    const onResize = () => {
      window.clearTimeout(t);
      t = window.setTimeout(() => {
        page.observe();
        band.observe();
      }, 150);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      window.clearTimeout(t);
      page.disconnect();
      band.disconnect();
    };
  }, [pathname]);

  return null;
}
