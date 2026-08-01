import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import About from "@/components/About";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import Testimonials from "@/components/Testimonials";
import { SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About — The Studio Behind Pureza Digital",
  description:
    "Pureza Digital is a small Ashburton studio helping New Zealand local businesses compete online with modern, professional websites — each one designed around the business behind it, never from a template.",
  alternates: { canonical: `${SITE_URL}/about` },
};

export default function AboutPage() {
  return (
    <main>
      <Nav />
      <h1 className="sr-only">
        About Pureza Digital — a hands-on Ashburton web design studio building
        custom websites, not templates
      </h1>
      <div className="pt-16 lg:pt-20">
        <About />
      </div>
      <WhoThisIsFor />
      <Testimonials />
      <Footer />
    </main>
  );
}
