import Link from "next/link";
import SiteFooter from "./frame/SiteFooter";
import { EMAIL } from "@/lib/schema";

/** Content model: keeps each legal page declarative and consistently set. */
export type LegalBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "contact" };

export interface LegalSection {
  heading: string;
  blocks: LegalBlock[];
}

export interface LegalPageProps {
  /** Retained for callers; the page no longer shows a label above the title. */
  eyebrow?: string;
  titleLead: string;
  titleAccent: string;
  /** e.g. "June 2026". */
  lastUpdated: string;
  intro: string[];
  sections: LegalSection[];
}

const PAPER = { ground: "#F3F0EA", ink: "#151413", muted: "#6E6960" };

const DOCS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

function Block({ block }: { block: LegalBlock }) {
  if (block.type === "paragraph") return <p>{block.text}</p>;
  if (block.type === "list") {
    return (
      <ul className="list-disc space-y-1.5 pl-5 marker:text-[var(--muted)]">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  return (
    <p>
      Pureza Digital
      <br />
      <a href={`mailto:${EMAIL}`} className="line-link line-link--rest">
        {EMAIL}
      </a>
      <br />
      Christchurch, New Zealand
    </p>
  );
}

export default function LegalPage({ titleLead, titleAccent, lastUpdated, intro, sections }: LegalPageProps) {
  const title = `${titleLead} ${titleAccent}`;
  const current = DOCS.find((d) => d.label === title)?.href;

  return (
    <main id="main" data-ground={PAPER.ground} data-ink={PAPER.ink} data-muted={PAPER.muted}>
      <article className="frame pb-[18vh]" style={{ paddingTop: "calc(var(--nav-h) + 16vh)" }}>
        <div className="grid-12 gap-y-6">
          <h1 className="display col-span-12 text-[clamp(52px,7.5vw,120px)] leading-[0.95] md:col-span-9">{title}</h1>
          <div className="meta muted col-span-12 flex flex-wrap gap-x-8 gap-y-2 md:col-span-6">
            <span>Last updated {lastUpdated}</span>
            {DOCS.filter((d) => d.href !== current).map((d) => (
              <Link key={d.href} href={d.href} className="line-link line-link--rest">
                {d.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid-12 mt-[10vh]">
          <div className="col-span-12 max-w-[64ch] space-y-5 text-[17px] leading-[1.7] md:col-span-6 md:col-start-7">
            {intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        {sections.map((s, i) => (
          <section key={s.heading} className="grid-12 mt-[8vh] gap-y-4">
            <h2 className="display col-span-12 text-[clamp(24px,2.2vw,32px)] leading-[1.15] md:col-span-5">
              <span className="meta muted mr-3 align-middle tabular-nums">{String(i + 1).padStart(2, "0")}</span>
              {s.heading}
            </h2>
            <div className="col-span-12 max-w-[64ch] space-y-4 text-[17px] leading-[1.7] md:col-span-6 md:col-start-7">
              {s.blocks.map((b, j) => (
                <Block key={j} block={b} />
              ))}
            </div>
          </section>
        ))}
      </article>
      <SiteFooter />
    </main>
  );
}
