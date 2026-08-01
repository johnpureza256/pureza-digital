import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import NoWebsiteYet from "@/components/NoWebsiteYet";
import WhatWeNeed from "@/components/WhatWeNeed";
import WhatHappensNext from "@/components/WhatHappensNext";
import { SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Services — Websites, Hosting & Lead Systems",
  description:
    "What Pureza Digital delivers for local businesses: starter and multi-page websites, hosting and maintenance, and booking, form, and lead systems — with a clear, fixed-quote process.",
  alternates: { canonical: `${SITE_URL}/services` },
};

export default function ServicesPage() {
  return (
    <main>
      <Nav />
      <h1 className="sr-only">
        Web design, development, hosting, and lead systems for local New Zealand businesses
      </h1>
      <div className="pt-16 lg:pt-20">
        <Services />
      </div>
      <NoWebsiteYet />
      <WhatWeNeed />
      <WhatHappensNext />
      <Footer />
    </main>
  );
}
