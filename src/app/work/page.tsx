import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WorkHub from "@/components/WorkHub";
import { CASE_STUDIES } from "@/data/caseStudies";
import { SITE_URL, breadcrumbSchema, graph, jsonLd } from "@/lib/schema";

const SITE_URL_WORK = `${SITE_URL}/work`;

export const metadata: Metadata = {
  title: "Our Work — Demo Website Builds by Niche",
  description:
    "Real, working demo websites Pureza Digital has built for cafés, tradies, community groups, and more — one per kind of local business. Preview each live.",
  alternates: { canonical: SITE_URL_WORK },
  openGraph: {
    title: "Our Work | Pureza Digital",
    description:
      "Demo website builds for local businesses across hospitality, trades, community, and more — preview each one live.",
    url: SITE_URL_WORK,
    type: "website",
  },
};

export default function WorkPage() {
  const collection = {
    "@type": "CollectionPage",
    "@id": `${SITE_URL_WORK}#collection`,
    url: SITE_URL_WORK,
    name: "Our Work — Pureza Digital",
    description:
      "Demo website builds for local businesses, one per kind of business.",
    hasPart: CASE_STUDIES.map((c) => ({
      "@type": "CreativeWork",
      name: c.title,
      url: `${SITE_URL}/work/${c.slug}`,
      genre: c.category,
    })),
  };
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Work", url: SITE_URL_WORK },
  ]);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(graph(collection, breadcrumbs)) }}
      />
      <Nav />
      <h1 className="sr-only">
        Our work — demo website builds for local businesses across New Zealand
      </h1>
      <div className="pt-16 lg:pt-20">
        <WorkHub />
      </div>
      <Footer />
    </main>
  );
}
