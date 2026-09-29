import Link from "next/link";
import { EMAIL } from "@/lib/schema";
import { Lockup } from "./Logo";

const INK = { ground: "#151413", ink: "#F3F0EA", muted: "#A39E95" };

/**
 * The close. The footer arrives on paper and fades to ink once it is well into
 * view (see data-close in GroundController and [data-footer] in globals.css),
 * so the page ends on black with the address as the last word.
 */
export default function SiteFooter({ address = true }: { address?: boolean }) {
  return (
    <footer
      data-ground={INK.ground}
      data-ink={INK.ink}
      data-muted={INK.muted}
      data-close
      data-footer
      className={`frame relative pb-10 md:pb-12 ${address ? "pt-[18vh]" : "pt-[10vh]"}`}
    >
      {address && (
        <>
          <a
            href={`mailto:${EMAIL}`}
            className="line-link display text-[clamp(30px,7.2vw,112px)] leading-[1.05] [overflow-wrap:anywhere]"
          >
            {EMAIL}
          </a>
        </>
      )}

      <div className={`footer-muted grid-12 meta gap-y-8 ${address ? "mt-[16vh]" : ""}`}>
        <div className="col-span-12 md:col-span-4">
          <Lockup title="Pureza Digital" className="footer-ink mb-6 text-[13px]" />
          <p>
            Christchurch, New Zealand
            <br />
            Working internationally
          </p>
        </div>
        <ul className="col-span-6 md:col-span-2 md:col-start-7">
          {[
            ["Work", "/work"],
            ["Studio", "/#studio"],
            ["Contact", "/contact"],
          ].map(([label, href]) => (
            <li key={href}>
              <Link href={href} className="line-link hover:text-[var(--footer-ink)] focus-visible:text-[var(--footer-ink)]">
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="col-span-6 md:col-span-3 md:col-start-10 md:text-right">
          <li>&copy; {new Date().getFullYear()} Pureza Digital</li>
          <li>
            <Link href="/privacy" className="line-link hover:text-[var(--footer-ink)] focus-visible:text-[var(--footer-ink)]">
              Privacy
            </Link>
          </li>
          <li>
            <Link href="/terms" className="line-link hover:text-[var(--footer-ink)] focus-visible:text-[var(--footer-ink)]">
              Terms
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
