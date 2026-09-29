"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { GroundDetail } from "./GroundController";
import { PROJECTS } from "@/data/projects";

const LINKS = [
  { label: "Work", href: "/work" },
  { label: "Studio", href: "/#studio" },
  { label: "Contact", href: "/contact" },
];

/**
 * The identity band. It never reflows: the wordmark, the programme counter and
 * the three links hold their places while the ground changes beneath them.
 */
export default function SiteNav() {
  const pathname = usePathname();
  const [index, setIndex] = useState<string | null>(null);

  useEffect(() => {
    const on = (e: Event) => setIndex((e as CustomEvent<GroundDetail>).detail.index);
    window.addEventListener("pd:ground", on);
    return () => window.removeEventListener("pd:ground", on);
  }, []);

  const n = index ? parseInt(index, 10) : 0;
  const total = String(PROJECTS.length).padStart(2, "0");

  return (
    <header
      className="frame fixed inset-x-0 top-0 z-[60] text-[var(--band-ink)]"
      style={{
        height: "var(--nav-h)",
        backgroundColor: "var(--band-ground)",
        // The band tracks a physical edge, so it switches almost with it; a long
        // fade would lag behind the sheet and show a grey band.
        transition:
          "background-color var(--band-fade, 180ms) var(--ease-out-expo), color var(--band-fade, 180ms) var(--ease-out-expo)",
      }}
    >
      <a
        href="#main"
        className="meta absolute left-[var(--margin)] top-3 -translate-y-24 bg-[var(--band-ink)] px-3 py-2 text-[var(--band-ground)] focus-visible:translate-y-0"
      >
        Skip to content
      </a>
      <nav aria-label="Primary" className="grid-12 h-full items-center">
        <Link
          href="/"
          className="line-link display col-span-6 justify-self-start text-[19px] leading-none tracking-[-0.01em] md:col-span-4 md:text-[21px]"
        >
          Pureza Digital
        </Link>

        {/* Programme counter: only while a project holds the page. */}
        <p
          aria-hidden
          className="meta col-span-2 col-start-7 hidden tabular-nums md:block"
          style={{ opacity: n ? 1 : 0, transition: "opacity 500ms var(--ease-out-expo)" }}
        >
          <span className="digit-roll">
            <span style={{ transform: `translateY(-${Math.max(0, n - 1) * 1.45}em)` }}>
              {PROJECTS.map((p) => (
                <span key={p.number} className="block h-[1.45em]">
                  {p.number}
                </span>
              ))}
            </span>
          </span>
          <span className="text-[var(--band-muted)]"> / {total}</span>
        </p>

        <ul className="meta col-span-6 flex justify-end gap-5 md:col-span-3 md:col-start-10 md:gap-8">
          {LINKS.map((l) => {
            const active = l.href === "/work" ? pathname.startsWith("/work") : pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className="line-link text-[14px]"
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
