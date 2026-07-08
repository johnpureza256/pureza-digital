import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import NoWebsiteYet from "@/components/NoWebsiteYet";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import FreeAuditCTA from "@/components/FreeAuditCTA";
import WhatHappensNext from "@/components/WhatHappensNext";
import WhatWeNeed from "@/components/WhatWeNeed";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <TrustBar />
      <NoWebsiteYet />
      <WhoThisIsFor />
      <Portfolio />
      <Services />
      <Pricing />
      <FreeAuditCTA />
      <WhatHappensNext />
      <WhatWeNeed />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
