---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: ["src/app/work","src/app/contact"]
---

# Surface brief: Home (and site frame)

Scope: `/` plus the shared frame (nav, footer, ground controller, route wipe) that `/work`, `/work/[slug]` and `/contact` inherit. Mode: **Experience**. The work leads from the first viewport; the interface recedes.

Audience: clients comparing independent studios who judge craft from the work first. Job: see the work, understand what kind of studio this is, reach contact without being sold to. Proof: four concept projects (Oriel, Yèxíng, Halden, Baga), each labelled Concept. Constraints: no invented clients or claims, no CTA blocks, Christchurch, "we".

## Direction contract

THESIS: Pureza is the Kunsthalle: a fixed, quiet house identity running a programme of shows. Each project is a new show that gets its own full-bleed poster, pasted over the last. We refuse the category default of a white page with a vertical stack of captioned thumbnails fading in.

OWN-WORLD: Warm off-white paper (#F3F0EA), near-black ink (#151413), and no house accent. Bodoni Moda display, upright with italic turns; Hanken Grotesk for small metadata. A fixed identity band (wordmark · programme counter 01/04 · nav) never reflows. Each project's poster commits its own ground at full surface. Asymmetry is law: text anchors to column 1 or 7 and nothing is centred. No cards, pills, icons or glows.

STORY: Visitors meet the institution in one sentence, then walk the programme: four posters, each its own world with a label band (number, name, industry, year, Concept). A short studio note says what we do; the close is an email address. They leave believing this studio makes considered, expressive work, and write in.

FIRST VIEWPORT: Off-white. Identity band across the top: the wordmark "Pureza Digital" at left in Bodoni (~20px) and Work · Studio · Contact at right. Empty upper half. Lower left, cols 1–9, the statement at clamp(40px, 6.2vw, 104px): "An independent design and development studio" / *"in Christchurch, New Zealand."* in italic. Cols 10–12, bottom-aligned small metadata: Working internationally / Programme 2026, four works. The bottom ~14% is the Oriel poster's top edge, inset from the page margins, with its label band "01 Oriel — Architecture — 2026 — Concept" visible. There is no primary action; contact lives in the band.

FORM: Kunsthalle Poster Programme, position 3 of 7 on the grounded list; seed key a42f8dac. Signature interaction: the poster paste. Each project's poster rises from the bottom edge (its label band already visible, telegraphing it) and lays over the previous one; its clip opens from an inset sheet to full bleed as it pins, and the page ground takes the poster's colour. The counter in the band ticks 01→04 without reflowing. Motion lands once and holds, with no ambient loops in the frame. On click, the project's ground wipes up and the case study opens on the same sheet.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved
- Live URLs for the concepts: none deployed yet, so "Visit the concept" stays hidden until they are.
