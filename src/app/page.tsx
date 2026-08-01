import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import WorkHub from "@/components/WorkHub";
import Testimonials from "@/components/Testimonials";
import FreeAuditCTA from "@/components/FreeAuditCTA";
import Footer from "@/components/Footer";

// The home page is deliberately short: state the promise (Hero), back it with
// honest signals (TrustBar), prove it with the work (WorkHub), make the offer
// (foundation-client + free audit). Everything deeper lives on its own route.
export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <TrustBar />
      <WorkHub featured />
      <Testimonials />
      <FreeAuditCTA />
      <Footer />
    </main>
  );
}
