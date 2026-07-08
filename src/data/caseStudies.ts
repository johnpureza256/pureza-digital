// Case study content for portfolio demo projects.
// These are demo concepts — copy stays honest about that throughout.

export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  businessType: string;
  summary: string;
  accent: string;
  demo: string;
  thumb: string;
  problem: string;
  goal: string;
  designDirection: string;
  features: string[];
  journey: { step: string; detail: string }[];
  tech: string[];
  couldImprove: string[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "plainsong-espresso",
    title: "Plainsong Espresso",
    category: "Café & Hospitality",
    businessType: "Independent café",
    summary:
      "A warm, editorial café website designed to turn 'where should we get coffee?' into a decided visit — menu, atmosphere, and location answered in one scroll.",
    accent: "#C99A4E",
    demo: "/plainsong-espresso/index.html",
    thumb: "/portfolio/plainsong-espresso.jpg",
    problem:
      "Most local cafés live on a Facebook page and a Google listing. Opening hours are buried in comments, the menu is a photo of a chalkboard from two years ago, and there's nothing that communicates what the place actually feels like. Visitors deciding between two cafés pick the one they can picture themselves in.",
    goal:
      "Give a café a single page that answers the three questions every potential customer has — what do you serve, what's it like inside, and when are you open — while making the brand feel as considered as the coffee.",
    designDirection:
      "Editorial and unhurried. A warm roast-brown palette pulled from coffee itself, serif headlines with generous whitespace, and photography treated like a magazine spread rather than a grid of thumbnails. The menu is designed as a piece of typography — not a PDF download — so it's readable on a phone in the queue.",
    features: [
      "Full menu as fast, readable text — no PDF, no pinch-zooming",
      "Opening hours and location visible without scrolling hunt",
      "Atmosphere-first photography layout",
      "Mobile-first design for the 'coffee near me' moment",
      "Scroll-triggered reveals that stay out of the way",
      "One-tap directions and contact",
    ],
    journey: [
      { step: "Discovers", detail: "Someone searches 'café near me' or gets a recommendation and taps through." },
      { step: "Evaluates", detail: "Within seconds they see the menu, the room, and the vibe — enough to picture the visit." },
      { step: "Decides", detail: "Hours confirm it's open; one tap opens directions. The decision is made before a competitor loads." },
    ],
    tech: ["Hand-coded HTML / CSS / JS", "No heavy frameworks — loads fast on café wifi and rural mobile", "Responsive, mobile-first layout"],
    couldImprove: [
      "Fewer 'are you open?' phone calls interrupting service",
      "A menu that's updatable in minutes, not reprinted",
      "A stronger first impression than a Facebook page for first-time visitors",
      "Somewhere for press, reviews, and word-of-mouth to point to",
    ],
  },
  {
    slug: "rotary-ashburton",
    title: "Rotary Club of Ashburton",
    category: "Community Organisation",
    businessType: "Community service club",
    summary:
      "A modern digital presence for one of Mid Canterbury's most established community organisations — built to make joining, donating, and attending feel approachable.",
    accent: "#17458F",
    demo: "/rotary-ashburton/index.html",
    thumb: "/portfolio/rotary-ashburton.jpg",
    problem:
      "Long-standing community organisations often have decades of impact but a web presence that hasn't kept pace. Prospective members can't easily find what the club actually does, when it meets, or how to get involved — so interest quietly evaporates.",
    goal:
      "Communicate community impact clearly, make meeting times and contact details impossible to miss, and lower the barrier for a curious visitor to become a member or supporter.",
    designDirection:
      "Established but not dusty. Rotary's own blue and gold, used with modern spacing and typography so the club reads as active and welcoming rather than historical. Impact is shown through concrete projects, not slogans.",
    features: [
      "Clear 'what we do' project showcase",
      "Meeting times, venue, and contact prominent on every page",
      "Multi-page structure for projects, membership, and history",
      "Accessible, readable typography for an all-ages audience",
      "Responsive layout across desktop and mobile",
    ],
    journey: [
      { step: "Arrives curious", detail: "A prospective member hears about the club and looks it up." },
      { step: "Sees the impact", detail: "Real local projects answer 'what would I actually be part of?'" },
      { step: "Takes a step", detail: "Meeting details and a friendly contact path make turning up feel easy." },
    ],
    tech: ["React", "Tailwind CSS", "Multi-page architecture"],
    couldImprove: [
      "A membership pipeline that doesn't depend on word-of-mouth alone",
      "A credible destination for grant applications and partners to review",
      "Less admin answering the same questions about meetings and events",
    ],
  },
  {
    slug: "mainline-plumbing",
    title: "Mainline Plumbing",
    category: "Trades & Services",
    businessType: "Local plumbing business",
    summary:
      "A single-page trades website engineered around one outcome: turning an urgent visitor into a phone call in under ten seconds.",
    accent: "#3B82F6",
    demo: "/mainline-plumbing/index.html",
    thumb: "/portfolio/mainline-plumbing.jpg",
    problem:
      "When a pipe bursts, nobody browses. They search, skim, and call the first plumber who looks legitimate and answers. A tradie with no website — or a dated one — loses those calls to whoever ranks nearby with a tap-to-call button, regardless of who's actually better at the job.",
    goal:
      "Build a site where the phone number is the hero: reachable in one tap from any point on the page, wrapped in just enough trust signals (services, service area, credentials) to make calling feel safe.",
    designDirection:
      "Confident and industrial. Deep navy with a bright trustworthy blue, bold condensed headings, and zero decorative fluff between the visitor and the call button. Every scroll section re-earns the tap: services, proof, area covered, call again.",
    features: [
      "Persistent tap-to-call — the number is never more than one thumb away",
      "Services listed in plain language, not trade jargon",
      "Trust-focused layout: service area, experience, guarantees",
      "Scroll-triggered animation that adds polish without slowing the page",
      "Optimised to load fast on mobile data — where urgent searches happen",
    ],
    journey: [
      { step: "Emergency hits", detail: "Water where it shouldn't be. They search 'plumber Ashburton' on their phone." },
      { step: "Skims for legitimacy", detail: "Real services, local area, professional presentation — thirty seconds of scanning says 'safe to call'." },
      { step: "Calls", detail: "Tap-to-call from wherever they are on the page. Job won before competitors' sites finish loading." },
    ],
    tech: ["Hand-coded HTML / CSS / JS", "Animation tuned for low-end mobiles", "Single-page, call-first architecture"],
    couldImprove: [
      "More of the urgent, high-value calls that currently go to competitors",
      "A professional first impression that backs up word-of-mouth referrals",
      "Fewer tyre-kicker enquiries — the site pre-answers the basics",
    ],
  },
  {
    slug: "crunch-republic",
    title: "Crunch Republic",
    category: "Food & Hospitality",
    businessType: "Korean fried chicken restaurant",
    summary:
      "An appetite-first landing page built to do one thing: make you hungry enough to order — flavours front and centre, friction nowhere.",
    accent: "#CBA15A",
    demo: "/crunch-republic/index.html",
    thumb: "/portfolio/crunch-republic.jpg",
    problem:
      "Takeaway decisions are impulse decisions. A restaurant whose online presence is a text-only listing or an out-of-date menu photo loses the moment — the customer's craving gets captured by whichever competitor shows them the food.",
    goal:
      "Lead with the food. Every flavour photographed and named, the menu structured for fast scanning, and the path from 'that looks good' to ordering kept as short as possible.",
    designDirection:
      "Rich gold-on-charcoal that makes the food photography glow. Bold display type with the energy of the brand, a flavour-led menu showcase rather than a price list, and pacing designed like an appetite: hook, build, order.",
    features: [
      "Flavour-first menu showcase with dedicated photography per item",
      "Gold-on-charcoal palette that flatters food imagery",
      "Fast, mobile-first build for hungry-right-now visitors",
      "Clear ordering and location details at every decision point",
      "Brand personality carried through every section — not a template with photos dropped in",
    ],
    journey: [
      { step: "Craving strikes", detail: "They're deciding what's for dinner and someone mentions Korean fried chicken." },
      { step: "Sees the flavours", detail: "Six glistening options with names and heat levels. The decision stops being 'if' and becomes 'which'." },
      { step: "Orders", detail: "Location, hours, and ordering info right where the appetite peaks." },
    ],
    tech: ["Hand-coded HTML / CSS / JS", "Optimised food photography (WebP)", "Mobile-first single page"],
    couldImprove: [
      "More walk-ins and orders captured at the moment of craving",
      "A menu that can grow with new flavours without a redesign",
      "A brand presence that matches the quality of the food",
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
