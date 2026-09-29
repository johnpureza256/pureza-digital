import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROJECTS, getProject } from "@/data/projects";
import CaseStudy from "@/components/work/CaseStudy";
import SiteFooter from "@/components/frame/SiteFooter";
import { SITE_URL, breadcrumbSchema, graph, jsonLd } from "@/lib/schema";

type Props = { params: { slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const p = getProject(params.slug);
  if (!p) return {};
  const url = `${SITE_URL}/work/${p.slug}`;
  const description = `${p.line} A ${p.industry.toLowerCase()} concept designed and built by Pureza Digital.`;
  return {
    title: p.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${p.title} | Pureza Digital`,
      description,
      url,
      type: "article",
      images: [{ url: p.desktop[0].src, width: p.desktop[0].w, height: p.desktop[0].h }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${p.title} | Pureza Digital`,
      description,
      images: [p.desktop[0].src],
    },
  };
}

export default function Page({ params }: Props) {
  const p = getProject(params.slug);
  if (!p) notFound();

  const url = `${SITE_URL}/work/${p.slug}`;
  // Concept work, so it is marked up as a CreativeWork by the studio: never as
  // client work, a review or a testimonial.
  const work = {
    "@type": "CreativeWork",
    "@id": `${url}#work`,
    url,
    name: p.title,
    abstract: p.line,
    description: p.brief,
    image: `${SITE_URL}${p.desktop[0].src}`,
    genre: p.industry,
    creator: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-NZ",
  };
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Work", url: `${SITE_URL}/work` },
    { name: p.title, url },
  ]);

  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(graph(work, breadcrumbs)) }} />
      <CaseStudy project={p} />
      <SiteFooter />
    </main>
  );
}
