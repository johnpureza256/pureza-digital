import ProjectPoster from "@/components/work/ProjectPoster";
import SiteFooter from "@/components/frame/SiteFooter";
import { PROJECTS } from "@/data/projects";

const PAPER = { ground: "#F3F0EA", ink: "#151413", muted: "#6E6960" };

const CAPABILITIES = [
  "Strategy",
  "Web design",
  "Development",
  "Interactive experiences",
  "Digital products",
];

// The house is quiet so the work can be loud: one sentence, the programme of
// four posters, a short studio note and the address.
export default function Home() {
  return (
    <main id="main">
      <section
        data-ground={PAPER.ground}
        data-ink={PAPER.ink}
        data-muted={PAPER.muted}
        className="frame grid-12 content-end pb-[7svh]"
        style={{ minHeight: "calc(88svh)", paddingTop: "calc(var(--nav-h) + 8svh)" }}
      >
        <h1 className="display col-span-12 text-[clamp(36px,4.9vw,84px)] md:col-span-11">
          <span className="rise"><span style={{ ["--i" as string]: 0 }}>Pureza Digital is an independent</span></span>
          <span className="rise"><span style={{ ["--i" as string]: 1 }}>design and development studio</span></span>
          <span className="rise"><span style={{ ["--i" as string]: 2 }}><em>in Christchurch, New Zealand.</em></span></span>
        </h1>
        <p className="meta muted col-span-12 mt-8 md:col-span-2 md:col-start-11 md:mt-0 md:self-end md:text-right">
          Working internationally
          <br />
          Selected work, 2026
        </p>
      </section>

      <div aria-label="Selected work" role="region">
        {PROJECTS.map((p) => (
          <ProjectPoster key={p.slug} project={p} total={PROJECTS.length} />
        ))}
      </div>

      <section
        id="studio"
        aria-labelledby="studio-title"
        data-ground={PAPER.ground}
        data-ink={PAPER.ink}
        data-muted={PAPER.muted}
        className="frame grid-12 gap-y-14 py-[22vh]"
      >
        <h2 id="studio-title" className="sr-only">
          Studio
        </h2>
        <p className="display col-span-12 text-[clamp(28px,3.6vw,56px)] leading-[1.12] md:col-span-9">
          We&rsquo;re a small, independent studio. We design and build websites, digital products and
          interactive experiences, <em>from the first strategy conversation to the last line of code.</em>
        </p>
        <div className="col-span-12 grid grid-cols-1 gap-y-10 md:col-span-6 md:col-start-7 md:grid-cols-2 md:gap-x-[var(--gutter)]">
          <ul className="text-[17px] leading-[1.6]">
            {CAPABILITIES.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <p className="muted max-w-[34ch] text-[17px] leading-[1.6]">
            We take on a few projects at a time, for businesses in New Zealand and further afield.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
