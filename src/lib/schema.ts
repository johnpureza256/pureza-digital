// Structured data (JSON-LD) for the site.
//
// Pureza Digital is a service-area business: no storefront, no walk-in trade.
// Per Google's guidance the address therefore carries no streetAddress, and no
// openingHoursSpecification is published — project hours vary per engagement,
// and publishing invented hours risks a mismatch penalty against the Google
// Business Profile.

export const SITE_URL = "https://purezadigital.com";
export const SITE_NAME = "Pureza Digital";

export const TITLE = "Pureza Digital | Web Design & Development in Ashburton NZ";
export const DESCRIPTION =
  "Pureza Digital helps local businesses in Ashburton, New Zealand build modern websites, landing pages, hosting, maintenance, and digital solutions that create trust and attract customers.";

export const TELEPHONE = "+64-21-284-2008";
export const EMAIL = "hello@purezadigital.com";

// Stable @id anchors so nodes can reference each other across the @graph.
const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

/** Areas the business actually serves, focused first. */
const AREA_SERVED = [
  { "@type": "City", name: "Ashburton" },
  { "@type": "AdministrativeArea", name: "Canterbury" },
  { "@type": "Country", name: "New Zealand" },
];

/** Grounded in the tiers listed in Pricing.tsx. */
const OFFER_CATALOG = {
  "@type": "OfferCatalog",
  name: "Web design and development services",
  itemListElement: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Starter Website",
        description:
          "A single-page website for businesses starting from zero — domain, hosting setup, and a clear path for customers to make contact.",
        serviceType: "Web design",
      },
      price: "497",
      priceCurrency: "NZD",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Local Business Website",
        description:
          "A multi-page website for established local businesses, built around the questions customers ask before they get in touch.",
        serviceType: "Web design",
      },
      price: "997",
      priceCurrency: "NZD",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Growth Website",
        description:
          "A larger website with booking, forms, and lead systems for businesses ready to convert more of the attention they already earn.",
        serviceType: "Web development",
      },
      price: "1997",
      priceCurrency: "NZD",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Hosting & Maintenance",
        description:
          "Optional monthly care plans covering hosting, SSL, backups, software updates, and content changes.",
        serviceType: "Website maintenance",
      },
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "49",
        priceCurrency: "NZD",
        unitCode: "MON",
      },
    },
  ],
};

/**
 * The business itself. ProfessionalService is a LocalBusiness subtype, which is
 * what earns local-pack and knowledge-panel eligibility that plain Organization
 * does not.
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
  telephone: TELEPHONE,
  email: EMAIL,
  priceRange: "$497–$1,997 NZD",
  currenciesAccepted: "NZD",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ashburton",
    addressRegion: "Canterbury",
    addressCountry: "NZ",
  },
  areaServed: AREA_SERVED,
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: -43.9035,
      longitude: 171.7459,
    },
    geoRadius: "150000",
  },
  knowsAbout: [
    "Web design",
    "Web development",
    "Website hosting",
    "Website maintenance",
    "Landing pages",
    "Local SEO",
  ],
  hasOfferCatalog: OFFER_CATALOG,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: TELEPHONE,
    email: EMAIL,
    areaServed: "NZ",
    availableLanguage: ["en"],
  },
  // sameAs intentionally omitted: no verified social profiles exist yet.
  // Add them here (Facebook / Instagram / LinkedIn) once live.
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
