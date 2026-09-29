"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getLenis } from "./SmoothScroll";

type Go = (href: string, color: string) => void;
const WipeContext = createContext<Go | null>(null);

const DURATION = 700;

/**
 * The project transition: a sheet in the destination's ground rises over the
 * page, the route changes underneath it, and it lifts away off the top. The
 * case study opens on the same colour, so it reads as one continuous move.
 */
export function RouteWipeProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [color, setColor] = useState("transparent");
  const [phase, setPhase] = useState<"idle" | "cover" | "reveal">("idle");
  const target = useRef<string | null>(null);

  const go = useCallback<Go>(
    (href, c) => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce || phase !== "idle") {
        router.push(href);
        return;
      }
      router.prefetch(href);
      target.current = href;
      setColor(c);
      setPhase("cover");
      window.setTimeout(() => router.push(href), DURATION);
    },
    [phase, router]
  );

  // The new route has rendered under the sheet: reset scroll, then lift it.
  useEffect(() => {
    if (phase !== "cover" || !target.current) return;
    if (pathname !== target.current.split("#")[0]) return;
    getLenis()?.scrollTo(0, { immediate: true, force: true });
    window.scrollTo(0, 0);
    const t = window.setTimeout(() => setPhase("reveal"), 120);
    return () => window.clearTimeout(t);
  }, [pathname, phase]);

  // Once the sheet has lifted off the top, park it below the page again.
  useEffect(() => {
    if (phase !== "reveal") return;
    const t = window.setTimeout(() => {
      setPhase("idle");
      target.current = null;
    }, DURATION);
    return () => window.clearTimeout(t);
  }, [phase]);

  const transform =
    phase === "cover" ? "translateY(0%)" : phase === "reveal" ? "translateY(-100%)" : "translateY(100%)";

  return (
    <WipeContext.Provider value={go}>
      {children}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[80]"
        style={{
          backgroundColor: color,
          transform,
          visibility: phase === "idle" ? "hidden" : "visible",
          transition:
            phase === "idle" ? "none" : `transform ${DURATION}ms var(--ease-in-out-quart)`,
        }}
      />
    </WipeContext.Provider>
  );
}

/** An ordinary link that travels through the wipe when it can. */
export function WipeLink({
  href,
  color,
  children,
  className,
  ...rest
}: {
  href: string;
  color: string;
  children: React.ReactNode;
  className?: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "color">) {
  const go = useContext(WipeContext);
  return (
    <a
      href={href}
      className={className}
      onClick={(e) => {
        if (!go || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        go(href, color);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
