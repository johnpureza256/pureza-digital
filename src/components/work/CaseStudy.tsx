import Image from "next/image";
import type { Project } from "@/data/projects";
import { nextProject } from "@/data/projects";
import { WipeLink } from "@/components/frame/RouteWipe";
import LoopVideo from "./LoopVideo";
import { Phone, Screen } from "./Shot";

function Passage({ label, children, ink }: { label: string; children: React.ReactNode; ink: string }) {
  return (
    <div className="frame grid-12 gap-y-4 py-[14vh]">
      <h2 className="meta col-span-12 md:col-span-3" style={{ color: ink }}>
        {label}
      </h2>
      <p className="col-span-12 max-w-[58ch] text-[clamp(18px,1.45vw,22px)] leading-[1.6] md:col-span-6 md:col-start-7">
        {children}
      </p>
    </div>
  );
}

export default function CaseStudy({ project }: { project: Project }) {
  const next = nextProject(project.slug);
  const [d1, d2, d3, d4] = project.desktop;
  const [m1, m2, m3] = project.mobile;
  const film = project.variant === "flight";

  return (
    <article
      data-ground={project.ground}
      data-ink={project.ink}
      data-muted={project.muted}
      style={{ color: project.ink }}
    >
      <header className="frame" style={{ paddingTop: "calc(var(--nav-h) + 16vh)" }}>
        <h1 className="display text-[clamp(72px,13vw,208px)] leading-[0.88]">{project.title}</h1>
        <div className="grid-12 meta mt-6 gap-y-2" style={{ color: project.muted }}>
          <span className="col-span-2 tabular-nums md:col-span-1">{project.number}</span>
          <span className="col-span-6 md:col-span-3 md:col-start-7">{project.industry}</span>
          <span className="col-span-2 md:col-span-1">{project.year}</span>
          {project.concept && <span className="col-span-2 justify-self-end md:col-span-2">Concept</span>}
        </div>
        <div className="grid-12 mt-10 pb-[10vh]">
          <p className="display col-span-12 text-[clamp(24px,2.6vw,40px)] leading-[1.15] md:col-span-6 md:col-start-7">
            <em>{project.line}</em>
          </p>
        </div>
      </header>

      <div className="relative aspect-[4/5] w-full overflow-hidden md:aspect-[16/9]">
        {film ? (
          <>
            <LoopVideo
              src={project.poster.video}
              poster={project.poster.still}
              label={project.poster.alt}
              className="absolute inset-0 hidden h-full w-full object-cover md:block"
              controlClassName="absolute bottom-4 right-[var(--margin)] z-10 hidden px-3 py-1.5 md:inline-block"
            />
            <Image
              src={project.poster.still}
              alt={project.poster.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover md:hidden"
            />
          </>
        ) : (
          <>
            <div className="absolute inset-0 hidden md:block">
              <LoopVideo
                src={project.poster.video}
                poster={project.poster.still}
                label={project.poster.alt}
                className="h-full w-full object-cover object-top"
                controlClassName="absolute bottom-4 right-[var(--margin)] z-10 px-3 py-1.5"
              />
            </div>
            <Image src={m1.src} alt={m1.alt} fill priority sizes="100vw" className="object-cover object-top md:hidden" />
          </>
        )}
      </div>

      <Passage label="Brief" ink={project.muted}>
        {project.brief}
      </Passage>

      <div className="frame">
        <Screen still={d1} sizes="100vw" />
      </div>

      <Passage label="Approach" ink={project.muted}>
        {project.approach}
      </Passage>

      <div className="frame grid-12 items-start gap-y-8">
        <Phone still={m1} sizes="(min-width: 768px) 24vw, 45vw" className="col-span-6 md:col-span-3 md:col-start-2" />
        <Phone still={m2} sizes="(min-width: 768px) 24vw, 45vw" className="col-span-6 mt-[10vh] md:col-span-3 md:col-start-6 md:mt-[18vh]" />
        <Phone still={m3} sizes="(min-width: 768px) 24vw, 45vw" className="col-span-6 col-start-4 md:col-span-3 md:col-start-10 md:mt-[6vh]" />
      </div>

      <div className="frame grid-12 mt-[16vh] gap-y-[var(--gutter)]">
        <Screen still={d2} sizes="(min-width: 768px) 66vw, 100vw" className="col-span-12 md:col-span-8" />
        <Screen still={d3} sizes="(min-width: 768px) 66vw, 100vw" className="col-span-12 md:col-span-8 md:col-start-5 md:-mt-[12vw]" />
      </div>

      <Passage label="What we made" ink={project.muted}>
        {project.made}
      </Passage>

      <div className="frame">
        <Screen still={d4} sizes="100vw" />
        {project.liveUrl && (
          <p className="meta mt-8">
            <a href={project.liveUrl} className="line-link line-link--rest text-[15px]" target="_blank" rel="noreferrer">
              Visit the concept
            </a>
          </p>
        )}
      </div>

      <WipeLink
        href={`/work/${next.slug}`}
        color={next.ground}
        data-cursor="Next"
        className="group mt-[20vh] block"
        aria-label={`Next project: ${next.title}`}
      >
        <div
          data-ground={next.ground}
          data-ink={next.ink}
          data-muted={next.muted}
          className="frame grid-12 items-end gap-y-10 pb-[12vh] pt-[16vh]"
          style={{ backgroundColor: next.ground, color: next.ink }}
        >
          <div className="col-span-12 md:col-span-6">
            <p className="meta" style={{ color: next.muted }}>
              Next project
            </p>
            <p className="display mt-4 text-[clamp(64px,10vw,160px)] leading-[0.9] transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:translate-x-3">
              {next.title}
            </p>
            <p className="meta mt-6" style={{ color: next.muted }}>
              {next.industry}, {next.year}
            </p>
          </div>
          <div className="relative col-span-12 aspect-[16/10] overflow-hidden md:col-span-6">
            <Image
              src={next.desktop[0].src}
              alt=""
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </WipeLink>
    </article>
  );
}
