import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CASE_STUDIES, getCaseStudy } from "@/data/caseStudies";
import CaseStudyPage from "@/components/CaseStudyPage";
import { SITE_URL, breadcrumbSchema, graph, jsonLd } from "@/lib/schema";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const study = getCaseStudy(params.slug);
  if (!study) return {};
  const title = `${study.title} — Case Study`;
  const url = `${SITE_URL}/work/${study.slug}`;
  return {
    title,
    description: study.summary,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | Pureza Digital`,
      description: study.summary,
      url,
      type: "article",
      images: [{ url: study.thumb }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Pureza Digital`,
      description: study.summary,
      images: [study.thumb],
    },
  };
}

export default function Page({ params }: Props) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();

  const url = `${SITE_URL}/work/${study.slug}`;

  // These are demo concepts rather than delivered client work, so they are
  // marked up as CreativeWork — not as a Review or a client testimonial.
  const caseStudySchema = {
    "@type": "CreativeWork",
    "@id": `${url}#case-study`,
    url,
    name: study.title,
    headline: `${study.title} — Case Study`,
    abstract: study.summary,
    description: study.problem,
    image: `${SITE_URL}${study.thumb}`,
    genre: study.category,
    creator: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-NZ",
    keywords: [study.category, study.businessType, ...study.tech].join(", "),
  };

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Work", url: `${SITE_URL}/#work` },
    { name: study.title, url },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(graph(caseStudySchema, breadcrumbs)),
        }}
      />
      <CaseStudyPage study={study} />
    </>
  );
}
