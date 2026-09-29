// The programme: every project the site shows, in running order.
//
// This file is the single source of truth. The home programme, the /work
// index, each /work/[slug] page and the sitemap all read from here.
//
// Every project is self-initiated concept work. `concept: true` is what puts
// the quiet "Concept" label on the work, and it must stay true until a project
// is genuinely commissioned. Never invent a client, a result or a quote.

export type Still = { src: string; w: number; h: number; alt: string };

export type Project = {
  slug: string;
  number: string;
  title: string;
  industry: string;
  year: string;
  concept: boolean;
  /** One line, set in the display face. */
  line: string;
  /** The project's own ground. The page takes it while the project is in view. */
  ground: string;
  ink: string;
  /** Secondary text on the ground; checked at 4.5:1 or better. */
  muted: string;
  /** How the poster is composed on the home programme. */
  variant: "flight" | "strip" | "night" | "overlap";
  poster: {
    /** Autoplaying loop, or a scroll-scrubbed film for the "flight" variant. */
    video: string;
    /** Portrait cut for phones, when one exists. */
    videoMobile?: string;
    still: string;
    alt: string;
  };
  desktop: Still[];
  mobile: Still[];
  brief: string;
  approach: string;
  made: string;
  /** Shown as "Visit the concept" only once the concept is deployed. */
  liveUrl?: string;
};

const D = { w: 2000, h: 1250 };
const M = { w: 780, h: 1688 };

export const PROJECTS: Project[] = [
  {
    slug: "oriel",
    number: "01",
    title: "Oriel",
    industry: "Architecture",
    year: "2026",
    concept: true,
    line: "A residential practice, told as a flight over the land it builds on.",
    ground: "#0F151C",
    ink: "#E9E4DA",
    muted: "#A7A196",
    variant: "flight",
    poster: {
      video: "/work/oriel/flight.mp4",
      videoMobile: "/work/oriel/flight-m.mp4",
      still: "/work/oriel/flight-poster.jpg",
      alt: "Film still: a concrete and glass house on a schist ridge above an alpine lake at blue hour.",
    },
    desktop: [
      { src: "/work/oriel/desktop-1.jpg", ...D, alt: "Oriel home page: 'Built from the ground it stands on' over the lakeside house at dusk." },
      { src: "/work/oriel/desktop-2.jpg", ...D, alt: "Oriel: inside the Ridge House, schist and glass facing the lake." },
      { src: "/work/oriel/desktop-3.jpg", ...D, alt: "Oriel: the Clearing House, set among native forest." },
      { src: "/work/oriel/desktop-4.jpg", ...D, alt: "Oriel: the process, walk, draw, model, build." },
    ],
    mobile: [
      { src: "/work/oriel/mobile-1.jpg", ...M, alt: "Oriel on a phone: the opening of the flythrough." },
      { src: "/work/oriel/mobile-3.jpg", ...M, alt: "Oriel on a phone: inside, at the hearth." },
      { src: "/work/oriel/mobile-4.jpg", ...M, alt: "Oriel on a phone: Black Sand House, Piha." },
    ],
    brief:
      "A concept for a residential architecture studio that designs one house for one piece of ground. Its clients are choosing an architect for the most personal thing they will ever build, and they take minutes, not seconds, to decide.",
    approach:
      "Let the visitor arrive before reading a word. The page opens as a single continuous flight, scrubbed by the scroll, across the lake, around the house and in through the glass. Only then does the editorial begin: four houses, each shown rising out of the string lines that set it out on its site.",
    made:
      "A static site on a hand-built scroll engine with a five-part film, generated and chained frame to frame, plus a separate portrait cut for phones. Type, colour and a single ember line for the set-out string carry the rest.",
  },
  {
    slug: "halden",
    number: "02",
    title: "Halden",
    industry: "Retail",
    year: "2026",
    concept: true,
    line: "Heavyweight streetwear, sold like a well-made catalogue.",
    ground: "#E9E7E3",
    ink: "#111111",
    muted: "#55534F",
    variant: "strip",
    poster: {
      video: "/work/halden/scroll.mp4",
      still: "/work/halden/scroll-poster.jpg",
      alt: "Recording: scrolling the Halden storefront from the wordmark hero into the collection.",
    },
    desktop: [
      { src: "/work/halden/desktop-1.jpg", ...D, alt: "Halden home page: the wordmark with a model walking through it." },
      { src: "/work/halden/desktop-2.jpg", ...D, alt: "Halden: the men, women and kids band above the new-season feature." },
      { src: "/work/halden/desktop-3.jpg", ...D, alt: "Halden: 'Room to move', the new-season feature, over the trust row." },
      { src: "/work/halden/desktop-4.jpg", ...D, alt: "Halden: the wordmark hero above the category band." },
    ],
    mobile: [
      { src: "/work/halden/mobile-1.jpg", ...M, alt: "Halden on a phone: the opening wordmark." },
      { src: "/work/halden/mobile-3.jpg", ...M, alt: "Halden on a phone: category band." },
      { src: "/work/halden/mobile-4.jpg", ...M, alt: "Halden on a phone: new-season feature." },
    ],
    brief:
      "A concept storefront for a label making heavyweight basics and workwear shapes for men, women and kids. The clothes are plain on purpose, so the shop has to make weight, cut and fabric visible without shouting.",
    approach:
      "Treat the store like a printed catalogue: a wordmark big enough to walk through, black-and-white photography, and a strict grid that lets a boxy tee and a canvas jacket read as considered objects. Everything a shopper needs is exactly where they expect it.",
    made:
      "A full Next.js storefront: product cards with colourways, a cart drawer that keeps its contents after the tab closes, a wishlist, search, account and help pages, and a styleguide documenting every component.",
  },
  {
    slug: "yexing",
    number: "03",
    title: "Yèxíng",
    industry: "Editorial",
    year: "2026",
    concept: true,
    line: "A night-city field guide in which the street signage is the interface.",
    ground: "#120F0D",
    ink: "#F1DFB8",
    muted: "#A89E92",
    variant: "night",
    poster: {
      video: "/work/yexing/scroll.mp4",
      still: "/work/yexing/scroll-poster.jpg",
      alt: "Recording: scrolling Yèxíng from the rainy Zhongshan Road opening to the live signboard of places open tonight.",
    },
    desktop: [
      { src: "/work/yexing/desktop-1.jpg", ...D, alt: "Yèxíng home page: 'A field guide to Shanghai after dark' beside a lightbox masthead." },
      { src: "/work/yexing/desktop-2.jpg", ...D, alt: "Yèxíng: 'Tonight on the street', a row of lit and unlit signboards." },
      { src: "/work/yexing/desktop-3.jpg", ...D, alt: "Yèxíng: 'The Road After Rain', a story with a numbered walk." },
      { src: "/work/yexing/desktop-4.jpg", ...D, alt: "Yèxíng: the street map of places open late, and seven issues, seven weathers." },
    ],
    mobile: [
      { src: "/work/yexing/mobile-1.jpg", ...M, alt: "Yèxíng on a phone: the masthead lightbox." },
      { src: "/work/yexing/mobile-2.jpg", ...M, alt: "Yèxíng on a phone: the Shanghai clock and what is open now." },
      { src: "/work/yexing/mobile-4.jpg", ...M, alt: "Yèxíng on a phone: Also in Issue 07." },
    ],
    brief:
      "夜行 Yèxíng, 'walking at night', is a concept for a quarterly guide to Shanghai after dark: long-form stories, a guide to places open late and an archive of issues, all started from a single photograph of Zhongshan Road in the rain.",
    approach:
      "Organise the city by the hour and the street rather than by category. The signage becomes the interface: parchment lightboxes, enamel street plates and neon that lights only for what is actually open, measured against Shanghai time.",
    made:
      "A multi-page Next.js publication with stories, eighteen places on a stylised street map that stays in sync with the list, an 'open now' filter, an issues archive, a styleguide and correct Chinese throughout.",
  },
  {
    slug: "baga",
    number: "04",
    title: "Baga",
    industry: "Hospitality",
    year: "2026",
    concept: true,
    line: "A Filipino grill house on Karangahape Road, led by smoke and charcoal.",
    ground: "#DD6630",
    ink: "#140C08",
    muted: "#2A1207",
    variant: "overlap",
    poster: {
      video: "/work/baga/scroll.mp4",
      still: "/work/baga/scroll-poster.jpg",
      alt: "Recording: scrolling Baga from the 'Street food, slow fired' opening into the grill menu.",
    },
    desktop: [
      { src: "/work/baga/desktop-1.jpg", ...D, alt: "Baga home page: 'Street food, slow fired' over chicken on the grill." },
      { src: "/work/baga/desktop-2.jpg", ...D, alt: "Baga: 'From the grill, and the street', the menu." },
      { src: "/work/baga/desktop-3.jpg", ...D, alt: "Baga: Uling, hardwood charcoal banked to a glow." },
      { src: "/work/baga/desktop-4.jpg", ...D, alt: "Baga: the kamayan feast laid out on banana leaves." },
    ],
    mobile: [
      { src: "/work/baga/mobile-1.jpg", ...M, alt: "Baga on a phone: the opening." },
      { src: "/work/baga/mobile-2.jpg", ...M, alt: "Baga on a phone: chicken inasal and pork BBQ." },
      { src: "/work/baga/mobile-5.jpg", ...M, alt: "Baga on a phone: Uling, the charcoal." },
    ],
    brief:
      "A concept for an inihaw house in Auckland serving the grills of Bacolod and Manila: chicken inasal, pork BBQ, isaw and halo-halo. It needed to feel like the food: hot, generous and unmistakably Filipino.",
    approach:
      "Lead with the fire. Close-up grill photography, an ember accent used only where heat is, and a menu that reads like a street stall's board. The story of the charcoal, the basting and the dipping sauces does the selling, so the page never has to.",
    made:
      "A one-page Next.js site: a looping hero film, a menu with dish details, the charcoal story in stages, a sawsawan dipping-sauce section, kamayan feasts and a reservation form.",
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

export function nextProject(slug: string) {
  const i = PROJECTS.findIndex((p) => p.slug === slug);
  return PROJECTS[(i + 1) % PROJECTS.length];
}
