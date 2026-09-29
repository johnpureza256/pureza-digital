"use client";

import { useEffect } from "react";
import Lenis from "lenis";

let instance: Lenis | null = null;

/** The running Lenis instance, or null under reduced motion / before mount. */
export function getLenis() {
  return instance;
}

export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      lerp: 0.09,
      smoothWheel: true,
      // Touch keeps the platform's own scrolling.
      syncTouch: false,
      anchors: {
        offset: -parseInt(getComputedStyle(document.documentElement).getPropertyValue("--nav-h") || "72", 10),
      },
    });
    instance = lenis;

    let frame = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      instance = null;
    };
  }, []);

  return null;
}
