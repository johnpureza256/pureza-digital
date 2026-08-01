// FAQ content. Shared by the FAQ accordion and the FAQPage JSON-LD in page.tsx.
export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "What is foundation client pricing?",
    a: "While Pureza Digital builds its early local client portfolio, a small number of Ashburton and Canterbury businesses can get their website at reduced foundation pricing. It isn't a cut-down service — you get the same design quality and the same process, and because we're building our reputation on these first projects, you'll typically get a more hands-on experience than you would from a busier agency. In exchange, we ask for two things: honest feedback along the way, and — only if you're happy with the result — permission to feature the completed project in our portfolio and a short testimonial. Once our foundation spots are filled, pricing moves to standard rates, so it genuinely is a limited window.",
  },
  {
    q: "My business has no website at all. Is that a problem?",
    a: "Not at all — businesses starting from zero are exactly who we work with most. Many of our conversations start with a business that runs entirely on a Facebook page, a Google listing, or word-of-mouth. We handle the whole process end to end: registering or connecting your domain, setting up hosting, planning the pages, and guiding you through what content is needed (often it's as simple as a conversation about your business plus some photos). You don't need to prepare anything technical, and you won't be left to figure things out alone — we translate everything into plain language and keep the steps simple.",
  },
  {
    q: "Will a website guarantee me more leads?",
    a: "No — and you should be cautious of anyone who promises guaranteed leads, because no honest web designer can control how many people need your services in a given month. What a good website does is remove the friction between attention and action: when someone hears about you through Google, Facebook, or a recommendation, they almost always look you up before making contact. If they find nothing, or something outdated, some of them quietly move on. A clear, professional site with obvious ways to call, book, or enquire means the interest you already generate has somewhere to land. We build every page around that next step — but we'll never dress that up as a guarantee.",
  },
  {
    q: "Do I have to host my website with you?",
    a: "No. Our hosting and care plans are optional. They exist because most local business owners don't want to think about SSL certificates, backups, software updates, or what to do when something breaks — a care plan means all of that is quietly handled, and you have one person to message when you want something changed. But if you'd rather manage hosting yourself or use another provider, that's completely fine: we'll build the site in a way that makes it straightforward to host elsewhere, and we'll help with the handover rather than making it difficult.",
  },
  {
    q: "How long does it take to launch?",
    a: "A Starter Website is typically live within 1–2 weeks of our first conversation. Local Business Websites usually take 2–3 weeks, and Growth Websites 3–4 weeks, mostly depending on how quickly content, photos, and feedback come together — that's usually the biggest factor in any timeline, so if you're responsive, things move fast. Before any work begins you'll get a clear, written timeline along with your fixed quote, and we'll keep you updated at each stage so you're never wondering where things are at.",
  },
  {
    q: "How does payment work?",
    a: "Simply and in writing, before anything starts. Starter Websites ($497) are paid upfront. Larger projects are split 50% upfront and 50% before launch — which means you see and approve the finished website before making the final payment. Monthly care plans are billed through Stripe with secure checkout, and you can cancel anytime with 30 days' notice — no lock-in contracts. Every project begins with a fixed written quote, so the price you agree to is the price you pay. If something outside the original scope comes up mid-project, we'll quote it separately before doing the work, never after.",
  },
  {
    q: "What's not included in a website project?",
    a: "We'd rather be upfront about this than surprise you later. A standard quote doesn't include professional photography (though we'll happily work with photos you have or arrange a photographer at cost), paid advertising or ad management, logo design (available, but quoted separately), or advanced custom software. Copywriting is included within the agreed scope — we write and refine your pages, but a full content marketing programme is a separate conversation. Domain names and any third-party software your site needs (like a booking system subscription) are billed separately at cost. Revisions are generous but defined in your quote rather than unlimited — that's what keeps our fixed pricing honest.",
  },
  {
    q: "Who owns the website once it's built?",
    a: "You do — fully. Once the project is paid for, the domain name, the design, the content, and the images all belong to your business. There are no lock-in contracts, no held-hostage domains, and no proprietary platform you can't leave. If you ever want to move the site to another host, hand it to a different developer, or manage it yourself, everything comes with you and we'll help make the transition smooth. We'd rather keep your business by doing good work than by making it hard to leave.",
  },
];
