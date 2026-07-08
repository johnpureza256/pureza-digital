import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CASE_STUDIES, getCaseStudy } from "@/data/caseStudies";
import CaseStudyPage from "@/components/CaseStudyPage";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const study = getCaseStudy(params.slug);
  if (!study) return {};
  return {
    title: `${study.title} — Case Study | Pureza Digital`,
    description: study.summary,
    openGraph: {
      title: `${study.title} — Case Study | Pureza Digital`,
      description: study.summary,
      images: [{ url: study.thumb }],
    },
  };
}

export default function Page({ params }: Props) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();
  return <CaseStudyPage study={study} />;
}
