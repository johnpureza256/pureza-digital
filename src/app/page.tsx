import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import NoWebsiteYet from "@/components/NoWebsiteYet";
import About from "@/components/About";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Portfolio from "@/components/Portfolio";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <NoWebsiteYet />
      <Pricing />
      <Services />
      <Portfolio />
      <HowItWorks />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
