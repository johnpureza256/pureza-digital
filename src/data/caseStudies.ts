// Case study content for portfolio demo projects.
// These are demo concepts — copy stays honest about that throughout.
//
// This file is the single source of truth for case-study/portfolio data.
// The /work hub, the home-page featured teaser, and each /work/[slug] page
// all read from here — nothing should re-declare project data elsewhere.

export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  businessType: string;
  niche: Niche; // filter bucket for the /work hub
  summary: string;
  accent: string; // bright brand colour — gradients, links, headings
  palette: string; // solid marker colour — demo-modal dot, card accent dot
  bg: string; // gradient utility classes for the card background
  tags: string[]; // short chips shown on cards
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

// Filter buckets for the /work hub. Keep this list short and human —
// these are the words a local business owner would use for their own trade.
export const NICHES = [
  "Hospitality",
  "Trades",
  "Community",
  "Retail",
  "Health & Beauty",
  "Professional",
] as const;

export type Niche = (typeof NICHES)[number];

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "plainsong-espresso",
    title: "Plainsong Espresso",
    category: "Café & Hospitality",
    businessType: "Independent café",
    niche: "Hospitality",
    summary:
      "A warm, editorial café website designed to turn 'where should we get coffee?' into a decided visit — menu, atmosphere, and location answered in one scroll.",
    accent: "#C99A4E",
    palette: "#241813",
    bg: "from-[#1A0E06] to-[#0A0A0A]",
    tags: ["HTML / CSS / JS", "Brand Design", "Editorial"],
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
    niche: "Community",
    summary:
      "A modern digital presence for one of Mid Canterbury's most established community organisations — built to make joining, donating, and attending feel approachable.",
    accent: "#17458F",
    palette: "#17458F",
    bg: "from-[#040D1A] to-[#0A0A0A]",
    tags: ["React", "Tailwind CSS", "Multi-page"],
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
    niche: "Trades",
    summary:
      "A single-page trades website engineered around one outcome: turning an urgent visitor into a phone call in under ten seconds.",
    accent: "#3B82F6",
    palette: "#1E40AF",
    bg: "from-[#040A1A] to-[#0A0A0A]",
    tags: ["HTML / CSS / JS", "Animation", "Local Business"],
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
    slug: "styles-and-smiles",
    title: "Styles & Smiles",
    category: "Hair & Beauty",
    businessType: "Independent hair salon",
    niche: "Health & Beauty",
    summary:
      "A booking-first site for a one-chair Ashburton salon — service menu, real gallery, and the stylist's own story, built so a scroll ends in an appointment.",
    accent: "#2564C7",
    palette: "#2564C7",
    bg: "from-[#060C18] to-[#0A0A0A]",
    tags: ["HTML / CSS / JS", "Booking-first", "Brand Design"],
    demo: "/styles-and-smiles/index.html",
    thumb: "/portfolio/styles-and-smiles.jpg",
    problem:
      "A great local stylist often lives entirely inside a Facebook page and a full appointment book. New clients can't see the price of a cut, what the work actually looks like, or how to book without sending a message and waiting. Every bit of friction is a booking that goes to the salon down the road.",
    goal:
      "Turn a personal, referral-driven salon into something a stranger can trust in one visit — a clear service menu with prices, a gallery of real work, and a booking path that takes a tap, not a DM.",
    designDirection:
      "Fresh, bright, and personal. A soft blue palette that feels clean rather than clinical, generous photography of finished cuts, and the stylist front-and-centre so the site feels like the person, not a franchise. The service menu reads like a price list you'd actually trust.",
    features: [
      "Service menu with plain prices — cut, restyle, blow wave, men's and kids'",
      "Gallery of real finished work, not stock",
      "A 'your stylist' section that builds personal trust",
      "One-tap booking and Facebook link",
      "Opening hours (Wed–Sun) visible up front",
      "Mobile-first — most salon browsing happens on a phone",
    ],
    journey: [
      { step: "Hears the name", detail: "A friend recommends the salon or they spot it on Facebook and look for more." },
      { step: "Sizes it up", detail: "Prices, real photos, and the stylist's face answer 'is this for me?' in seconds." },
      { step: "Books", detail: "One tap to request an appointment — no message-and-wait, no phone tag." },
    ],
    tech: ["Hand-coded HTML / CSS / JS", "Booking-oriented single page", "Responsive, mobile-first layout"],
    couldImprove: [
      "Fewer back-and-forth booking messages eating into chair time",
      "New clients who arrive already knowing the prices and the style",
      "A professional home base that outlasts any one social platform",
    ],
  },
  {
    slug: "monster-chicken",
    title: "Seoul Fire",
    category: "Food & Hospitality",
    businessType: "Korean fried chicken shop",
    niche: "Hospitality",
    summary:
      "A loud, order-now take on Korean fried chicken — siren red, a heat scale, and delivery-app buttons dropped exactly where the appetite peaks.",
    accent: "#FF3D14",
    palette: "#FF3D14",
    bg: "from-[#1A0604] to-[#0A0A0A]",
    tags: ["HTML / CSS / JS", "Delivery-first", "Bold Brand"],
    demo: "/monster-chicken-2/index.html",
    thumb: "/portfolio/monster-chicken.jpg",
    problem:
      "For a fast, order-now food brand, a tasteful menu isn't enough — the site has to shout, and it has to hand the customer straight to whatever ordering app they already use. A quiet page loses the impulse order to whoever's louder and one tap closer to checkout.",
    goal:
      "Make the crave undeniable and the order effortless. Lead with heat, crunch, and colour; name every glaze; and put Uber Eats and Bopple buttons exactly where the decision gets made.",
    designDirection:
      "The opposite end of the spectrum from an editorial, restrained take — proof that a fast, order-now food brand needs a site that shouts. Siren red and high-energy: a 'pick your Seoul heat' scale, six named glazes shot up close, and ordering buttons that never make you hunt.",
    features: [
      "High-energy red identity built to interrupt a scroll",
      "'Pick your heat' scale that turns browsing into choosing",
      "Six glazes, each photographed and named",
      "Delivery-app ordering (Uber Eats, Bopple) at the decision point",
      "Find-us and hours for walk-in and pickup",
      "Fast, image-optimised, mobile-first build",
    ],
    journey: [
      { step: "Gets hit by it", detail: "The red and the crunch stop the scroll — this isn't a quiet menu listing." },
      { step: "Picks a heat", detail: "The glaze lineup and heat scale turn 'should we?' into 'which one?'" },
      { step: "Orders in a tap", detail: "Delivery-app buttons are right there — no searching, no drop-off." },
    ],
    tech: ["Hand-coded HTML / CSS / JS", "Optimised food photography (WebP)", "Delivery-app integration links"],
    couldImprove: [
      "More impulse orders captured before the craving cools",
      "A brand that stands out in a crowded delivery-app list",
      "Menu and glazes that update without a rebuild",
    ],
  },
  {
    slug: "thicket",
    title: "Thicket",
    category: "Retail",
    businessType: "Plant & garden shop",
    niche: "Retail",
    summary:
      "An independent plant shop that needed to feel like more than a market stall — a warm, editorial site that turns 'is it worth the trip across town?' into a planned visit.",
    accent: "#5FA574",
    palette: "#274B38",
    bg: "from-[#0A1710] to-[#0A0A0A]",
    tags: ["HTML / CSS / JS", "Brand Design", "Retail"],
    demo: "/thicket/index.html",
    thumb: "/portfolio/thicket.jpg",
    problem:
      "A small independent shop competes with big-box garden centres and online sellers on convenience it can't match — but wins on range, advice, and character it has no way to show. Without a site, a first-time or younger plant buyer can't tell what's stocked, whether the shop is even open, or why it beats driving to the chain store, so they don't make the trip.",
    goal:
      "Give an independent plant shop a home that does what the chain stores can't: show the character, make the in-store help (the free potting bar) a reason to visit, and turn a curious browser into someone who plans a trip across town.",
    designDirection:
      "Warm, editorial, and unmistakably independent — the opposite of a fluorescent-lit big-box aisle. A deep-forest-and-clay palette on warm paper, a characterful serif, a greenhouse-arch hero, and nursery-tag section labels drawn from the shop's own world. Product categories are labelled by the light and water they actually want, so the site gives advice before you arrive.",
    features: [
      "'What's in store' categories, each labelled by real light & water needs",
      "The free potting bar made a signature reason to visit",
      "Opening hours and East Street location impossible to miss",
      "Gift angle for the non-plant-person buying a present",
      "Hand-illustrated, fully self-contained — loads fast, never renders broken",
      "Mobile-first for the 'plant shop near me' search",
    ],
    journey: [
      { step: "Gets curious", detail: "New to plants, or new to town — they want somewhere local that isn't the big-box store." },
      { step: "Sees the character", detail: "Range, honest care labels, and the free potting bar make it feel worth the trip." },
      { step: "Plans the visit", detail: "Hours and location are right there; the decision to go becomes a plan, not a maybe." },
    ],
    tech: ["Hand-coded HTML / CSS / JS", "Custom SVG illustration — no stock photography", "Self-contained, mobile-first single page"],
    couldImprove: [
      "More planned visits from buyers who'd otherwise default to the chain store",
      "A home for the shop that outlasts an Instagram feed",
      "Fewer 'are you open / do you have…' messages to answer",
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}

// Niches that actually have at least one study — used to build filter chips
// so the hub never shows an empty category.
export function activeNiches(): Niche[] {
  return NICHES.filter((n) => CASE_STUDIES.some((c) => c.niche === n));
}
