// Structured data (JSON-LD) for the site.

export const SITE_URL = "https://purezadigital.com";
export const SITE_NAME = "Pureza Digital";

export const TITLE = "Pureza Digital, independent digital studio";
export const DESCRIPTION =
  "Pureza Digital is an independent design and development studio in Christchurch, New Zealand, working internationally on websites, digital products and interactive experiences.";

export const EMAIL = "hello@purezadigital.com";

// Stable @id anchors so nodes can reference each other across the @graph.
const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

/**
 * The studio. ProfessionalService is a LocalBusiness subtype; the address
 * carries only the locality because there is no walk-in premises. No phone,
 * prices or hours are published because the site shows none of them.
 */
export const organizationSchema = {
  "@type": ["ProfessionalService", "Organization"],
  "@id": ORG_ID,
  name: SITE_NAME,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/pureza-logo-mark.png`,
    width: 256,
    height: 256,
  },
  image: `${SITE_URL}/pureza-logo-mark.png`,
  description: DESCRIPTION,
  email: EMAIL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Christchurch",
    addressRegion: "Canterbury",
    addressCountry: "NZ",
  },
  areaServed: { "@type": "Country", name: "New Zealand" },
  knowsAbout: [
    "Digital strategy",
    "Web design",
    "Web development",
    "Interactive experiences",
    "Digital products",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "new business",
    email: EMAIL,
    availableLanguage: ["en"],
  },
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: SITE_NAME,
  description: DESCRIPTION,
  publisher: { "@id": ORG_ID },
  inLanguage: "en-NZ",
};

/** Wraps nodes in a single @graph so Google resolves the @id cross-references. */
export function graph(...nodes: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(trail: { name: string; url: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** Serialize for dangerouslySetInnerHTML, escaping the `</script>` sequence. */
export function jsonLd(data: object) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
