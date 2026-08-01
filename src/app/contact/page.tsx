import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact — Start a Conversation",
  description:
    "Get in touch with Pureza Digital. Tell us about your business and we'll reply within 24 hours. Phone 021 284 2008 · hello@purezadigital.com · Ashburton, New Zealand.",
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactPage() {
  return (
    <main>
      <Nav />
      <h1 className="sr-only">Contact Pureza Digital</h1>
      <div className="pt-16 lg:pt-20">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
