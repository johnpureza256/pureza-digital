import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import SiteFooter from "@/components/frame/SiteFooter";
import { EMAIL, SITE_URL } from "@/lib/schema";

const PAPER = { ground: "#F3F0EA", ink: "#151413", muted: "#6E6960" };

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Pureza Digital, an independent design and development studio in Christchurch, New Zealand, working internationally. hello@purezadigital.com",
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactPage() {
  return (
    <main
      id="main"
      data-ground={PAPER.ground}
      data-ink={PAPER.ink}
      data-muted={PAPER.muted}
    >
      <div className="relative w-full overflow-hidden" style={{ marginTop: "var(--nav-h)", height: "min(58svh, 62vw)" }}>
        <Image
          src="/work/oriel/still-pool.jpg"
          alt="Film still from the Oriel concept: an infinity pool and glass house above an alpine lake at dusk."
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_60%]"
        />
      </div>

      <section className="frame pb-[18vh] pt-[12vh]">
        <h1 className="display text-[clamp(72px,11vw,176px)] leading-[0.9]">Contact</h1>

        <div className="grid-12 mt-[9vh] gap-y-16">
          <div className="col-span-12 text-[17px] leading-[1.6] md:col-span-5">
            <p className="muted">New projects and general enquiries</p>
            <p className="mt-1">
              <a href={`mailto:${EMAIL}`} className="line-link line-link--rest">
                {EMAIL}
              </a>
            </p>
            <p className="mt-10">
              Christchurch, New Zealand
              <br />
              <span className="muted">Working internationally</span>
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <ContactForm />
          </div>
        </div>
      </section>

      <SiteFooter address={false} />
    </main>
  );
}
