import type { Metadata } from "next";
import WorkIndex from "@/components/work/WorkIndex";
import SiteFooter from "@/components/frame/SiteFooter";
import { PROJECTS } from "@/data/projects";
import { SITE_URL, breadcrumbSchema, graph, jsonLd } from "@/lib/schema";

const URL = `${SITE_URL}/work`;
const PAPER = { ground: "#F3F0EA", ink: "#151413", muted: "#6E6960" };

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work by Pureza Digital: Oriel, Halden, Yèxíng and Baga. Websites and digital experiences designed and built by the studio.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Work | Pureza Digital",
    description: "Selected work by Pureza Digital, an independent design and development studio.",
    url: URL,
    type: "website",
  },
};

export default function WorkPage() {
  const collection = {
    "@type": "CollectionPage",
    "@id": `${URL}#collection`,
    url: URL,
    name: "Work | Pureza Digital",
    hasPart: PROJECTS.map((p) => ({
      "@type": "CreativeWork",
      name: p.title,
      url: `${SITE_URL}/work/${p.slug}`,
      genre: p.industry,
    })),
  };
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Work", url: URL },
  ]);

  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(graph(collection, breadcrumbs)) }}
      />
      <section
        data-ground={PAPER.ground}
        data-ink={PAPER.ink}
        data-muted={PAPER.muted}
        className="frame pb-[20vh]"
        style={{ paddingTop: "calc(var(--nav-h) + 18vh)" }}
      >
        <div className="grid-12 mb-[10vh] items-end gap-y-6">
          <h1 className="display col-span-12 text-[clamp(64px,11vw,176px)] leading-[0.9] md:col-span-7">Work</h1>
          <p className="muted col-span-12 max-w-[36ch] text-[17px] leading-[1.6] md:col-span-4 md:col-start-7">
            Four self-initiated concepts, each designed and built in full by the studio.
          </p>
        </div>
        <WorkIndex />
      </section>
      <SiteFooter />
    </main>
  );
}
