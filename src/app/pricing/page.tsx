import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import FreeAuditCTA from "@/components/FreeAuditCTA";
import FAQ from "@/components/FAQ";
import { FAQS } from "@/data/faqs";
import { SITE_URL, faqSchema, graph, jsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Packages & Pricing — Websites from $497",
  description:
    "Transparent website packages for local businesses: Starter from $497, Local Business from $997, Growth from $1,997, plus monthly care plans and add-ons. Fixed quotes, no surprises.",
  alternates: { canonical: `${SITE_URL}/pricing` },
};

export default function PricingPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(graph(faqSchema(FAQS))) }}
      />
      <Nav />
      <h1 className="sr-only">
        Website packages and pricing for local businesses in Ashburton and New Zealand
      </h1>
      <div className="pt-16 lg:pt-20">
        <Pricing />
      </div>
      <FreeAuditCTA />
      <FAQ />
      <Footer />
    </main>
  );
}
