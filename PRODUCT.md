# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Prospective clients reviewing the studio.** Founders, marketing leads and owners of
  businesses in New Zealand and overseas. They are choosing who to trust with a website, digital
  product or interactive piece. They arrive from a referral, a search or a shared link, often
  comparing two or three studios side by side, and they judge craft from the work before they
  read anything.
- **Local New Zealand businesses** remain welcome. The site has to feel approachable to them
  without being pitched at them.

## Product Purpose

The website of Pureza Digital, an independent design and development studio. It exists to show
the work and to start a conversation. Success is a considered enquiry from someone who has
looked at the work first.

## Positioning

An independent studio, not a local website builder. Design-led and technically capable: it
covers strategy, web design, development, interactive experiences and digital products, and
takes on a few projects at a time. The work carries the argument, so the studio stays quiet and
lets each project be its own world.

## Operating Context

- Routes: home (selected work), `/work` index, `/work/[slug]` case studies, `/contact`,
  `/privacy`, `/terms`.
- The contact form posts to `/api/contact` and uses a double opt-in step. The sender types back a
  6-digit code emailed through Resend, and only then does the enquiry reach
  `hello@purezadigital.com`. The signed HMAC token keeps it stateless.
- Deployed on Vercel.

## Capabilities and Constraints

- Next.js 14 App Router, React 18, Tailwind v4, framer-motion.
- Contact email: `hello@purezadigital.com`. The site shows no phone number.
- The free audit, package pricing and foundation-client offer are **retired** from the site.

## Brand Commitments

- Name: **Pureza Digital**.
- Location: **Christchurch, New Zealand**, working internationally. The site no longer mentions
  Ashburton.
- Studio voice ("we"). No founder names, bios or portraits on the site.
- The brand-asset gold PD logo and its "Digital solutions. Real results." tagline belong to the
  old world and are not used.

## Evidence on Hand

- Four self-initiated concept projects, each a complete working site:
  - **Oriel**: residential architecture concept, static HTML with a scroll-scrubbed flythrough
    (`demos/oriel`).
  - **Yèxíng 夜行**: night-city editorial field guide to Shanghai concept, Next.js
    (`demos/yexing`).
  - **Halden**: heavyweight streetwear storefront concept, Next.js (`demos/halden`).
  - **Baga**: Filipino charcoal grill on Karangahape Road, Auckland concept, Next.js
    (`demos/baga`).
- **Every one of them is a concept and is labelled "Concept"** wherever it appears. The site
  has no real client work, testimonials, client logos, awards, press or metrics, and must not
  invent any.

## Product Principles

1. The work leads. The studio is the frame, not the picture.
2. Say less and mean it. No sales language, no repeated calls to action, no over-explaining.
3. Honest by default. Concepts are named as concepts; claims stay provable.
4. Craft is the proof. Motion, type and performance have to be as considered as the projects
   shown.

## Accessibility & Inclusion

WCAG 2.2 AA. Full keyboard access and visible focus. `prefers-reduced-motion` removes scroll
scrubbing, pinning and wipes, and content stays visible without JavaScript-driven reveals.
