"use client";

import { useEffect, useState } from "react";

/**
 * prefers-reduced-motion, read only after hydration. The server cannot know the
 * preference, so the first client render must match the server's (motion on);
 * the real value arrives one effect later and follows live changes.
 */
export function useReducedMotionSafe() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduce(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduce;
}
