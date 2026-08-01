import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FreeAuditCTA from "@/components/FreeAuditCTA";
import WhatHappensNext from "@/components/WhatHappensNext";
import Contact from "@/components/Contact";
import { SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Get a Free Website Audit",
  description:
    "Send your business name and a link, and we'll review your website, Facebook page, or Google listing and reply with 3–5 practical improvements — free, whether or not you work with us.",
  alternates: { canonical: `${SITE_URL}/free-audit` },
};

export default function FreeAuditPage() {
  return (
    <main>
      <Nav />
      <h1 className="sr-only">
        Get a free website audit for your local business
      </h1>
      <div className="pt-16 lg:pt-20">
        {/* On this page the CTA scrolls down to the form rather than linking away */}
        <FreeAuditCTA ctaHref="#contact" />
      </div>
      <WhatHappensNext />
      <Contact />
      <Footer />
    </main>
  );
}
