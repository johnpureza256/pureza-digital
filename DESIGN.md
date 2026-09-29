---
name: Pureza Digital
description: The Kunsthalle. A fixed, quiet house identity running a programme of shows, each project pasted over the last as its own full-bleed poster.
colors:
  paper: "#F3F0EA"
  ink: "#151413"
  muted: "#6E6960"
  ink-muted: "#A39E95"
  field-paper: "#FAF8F4"
  error-oxide: "#9B2C1F"
typography:
  display:
    fontFamily: "Bodoni Moda, Didot, Bodoni 72, Georgia, serif"
    fontSize: "clamp(36px, 4.9vw, 84px)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.028em"
    fontVariation: "opsz auto"
  display-title:
    fontFamily: "Bodoni Moda, Didot, Bodoni 72, Georgia, serif"
    fontSize: "clamp(72px, 13vw, 208px)"
    fontWeight: 400
    lineHeight: 0.88
    letterSpacing: "-0.028em"
  headline:
    fontFamily: "Bodoni Moda, Didot, Bodoni 72, Georgia, serif"
    fontSize: "clamp(64px, 11vw, 176px)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "-0.028em"
  headline-index:
    fontFamily: "Bodoni Moda, Didot, Bodoni 72, Georgia, serif"
    fontSize: "clamp(40px, 6.4vw, 104px)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.028em"
  title-line:
    fontFamily: "Bodoni Moda, Didot, Bodoni 72, Georgia, serif"
    fontSize: "clamp(28px, 3.9vw, 60px)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.028em"
  title-band:
    fontFamily: "Bodoni Moda, Didot, Bodoni 72, Georgia, serif"
    fontSize: "clamp(26px, 2.9vw, 44px)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.028em"
  wordmark:
    fontFamily: "Bodoni Moda, Didot, Bodoni 72, Georgia, serif"
    fontSize: "21px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
  body-passage:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(18px, 1.45vw, 22px)"
    fontWeight: 400
    lineHeight: 1.6
  body-reading:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "0.005em"
  label-nav:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "0.005em"
rounded:
  none: "0px"
  device: "clamp(14px, 1.8vw, 26px)"
  send-pill: "9999px"
spacing:
  margin-sm: "20px"
  margin-md: "40px"
  margin-lg: "64px"
  gutter-sm: "16px"
  gutter-md: "20px"
  nav-h-sm: "64px"
  nav-h-md: "72px"
  band-y-sm: "16px"
  band-y-md: "20px"
components:
  identity-band:
    backgroundColor: "var(--ground)"
    textColor: "var(--ink)"
    typography: "{typography.label-nav}"
    rounded: "{rounded.none}"
    height: "{spacing.nav-h-md}"
  poster-label-band:
    backgroundColor: "var(--ground)"
    textColor: "var(--ink)"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "20px 64px"
  button-send:
    backgroundColor: "transparent"
    textColor: "var(--ink)"
    typography: "{typography.wordmark}"
    rounded: "{rounded.send-pill}"
    padding: "0 40px"
    height: "64px"
  button-send-hover:
    backgroundColor: "var(--ink)"
    textColor: "var(--ground)"
    rounded: "{rounded.send-pill}"
  input-field:
    backgroundColor: "{colors.field-paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "14px 16px"
  line-link:
    backgroundColor: "transparent"
    textColor: "var(--ink)"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 0 2px 0"
  recording-control:
    backgroundColor: "var(--ground)"
    textColor: "var(--ink)"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "6px 12px"
  phone-screen:
    rounded: "{rounded.device}"
---

# Design System: Pureza Digital

## Overview

**Creative North Star: "The Kunsthalle"**

Pureza Digital is built as a small public gallery with a fixed house identity and a changing programme. The house is warm paper, near-black ink, a Didone wordmark and a thin band of metadata. It has no colour of its own. Each project is a show: it arrives as a full-bleed poster with its own ground, rises from the bottom edge with its label band already visible, opens from an inset sheet to full bleed, and is pasted over the last. While a show holds the viewport, the whole page, including the identity band, takes that show's ground, ink and muted colour. When the programme ends, the house paper returns and the close is an email address set in the display face on ink.

Density is low and deliberate. A viewport usually holds one idea: one sentence, one poster, one passage. Type is either large and looked at (Bodoni Moda, upright with italic turns) or small and read (Hanken Grotesk metadata at 13px). There is almost nothing in between, and there are no cards, chips, icons, glows or gradients. Motion lands once and holds: a line rises, a clip opens, a ground changes, a sheet wipes. Nothing loops in the frame; only the work's own recordings move, and those can always be paused.

The build rejects the category default of a white page with a vertical stack of captioned thumbnails fading in, and rejects a house accent colour. The contrast between a quiet frame and loud, self-coloured work is the point.

**Key Characteristics:**
- No house accent: paper, ink and muted only; colour comes from the work.
- The page ground follows the project crossing the viewport middle.
- A fixed identity band that never reflows, painted with the live ground.
- Asymmetric 12-column grid; text anchors to column 1 or column 7; nothing is centred.
- Bodoni Moda display with optical sizing, Hanken Grotesk metadata.
- Radius 0 everywhere except phone screens and the Send pill.
- Motion is scroll-scrubbed or one-shot, never ambient, and collapses under reduced motion.

## Colors

A warm-neutral house of three values; every other colour on the page belongs to a project and is borrowed while that project is on the wall.

### Neutral
- **Gallery Paper** (paper): the house ground. Home hero, studio note, /work, /contact, legal pages. Declared on `:root` as `--ground` and in Tailwind as `--color-paper`.
- **Printer's Ink** (ink): the house text colour and the ground of the close. Also the Send button's hover fill, the form field stroke, the selection highlight and the text caret.
- **Wall-Label Stone** (muted): secondary text on paper: meta rows, "(optional)" hints, the Concept tag, the counter total.
- **Ink-Side Stone** (ink-muted): secondary text in the ink footer, where Wall-Label Stone would fail contrast. Footer links brighten to paper on hover and focus.
- **Field Paper** (field-paper): a half-step lighter than the ground, used only as the fill of form inputs so they read as places to write.

### Functional
- **Oxide** (error-oxide): form error and code-mismatch messages, and the invalid field stroke. It is a status colour, not an accent, and never appears outside a failed state.

### Programme grounds (data, not house tokens)
Each project in `src/data/projects.ts` carries its own `ground`, `ink` and `muted`. At the time of writing: Oriel blue-hour night, Halden catalogue grey, Yèxíng lamplit black with parchment ink, Baga charcoal orange with ember-brown ink. `projects.ts` is canonical; these are not reusable tokens and must not be referenced outside their own project. Each project's `muted` is checked at 4.5:1 or better against its ground.

### Named Rules
**The No House Accent Rule.** The house frame is paper, ink and muted, and nothing else. Colour enters only from the work, via each project's `ground`/`ink`/`muted`, written to `:root` by GroundController when an element carrying `data-ground` crosses the middle of the viewport. Do not introduce a brand accent, a link colour, or a highlight hue.

**The Every Section Declares Its Ground Rule.** Every new full-width section must carry `data-ground`, `data-ink` and `data-muted` (house sections use the paper triple; the footer uses the ink triple). A section without them inherits whatever the last one set, and the page will show the wrong world.

**The Borrowed Colour Rule.** Anything painted in project colour reads `var(--ground)`, `var(--ink)` or `var(--muted)`, or the project's own values from data. Never hard-code a project hex in a component.

## Typography

**Display Font:** Bodoni Moda, with the `opsz` axis, `font-optical-sizing: auto` (fallback Didot, Bodoni 72, Georgia, serif)
**Body Font:** Hanken Grotesk (fallback Helvetica Neue, Arial, sans-serif)

**Character:** A high-contrast Didone that stays crisp at 21px and hair-fine at 200px, paired with a quiet grotesk that does the reading and the labelling. Both load through `next/font` as `--font-bodoni` and `--font-hanken`.

### Hierarchy
- **Display** (400, `clamp(36px, 4.9vw, 84px)`, 1.02, -0.028em): the home statement only. Three lines, the last in italic, each rising once.
- **Display Title** (400, `clamp(72px, 13vw, 208px)`, 0.88): a case study's project name.
- **Headline** (400, `clamp(64px, 11vw, 176px)`, 0.9): page names such as Work and Contact; legal titles run slightly smaller (`clamp(52px, 7.5vw, 120px)`).
- **Headline Index** (400, `clamp(40px, 6.4vw, 104px)`, 0.95): project names in the /work index; the next-project close runs at `clamp(64px, 10vw, 160px)`.
- **Title Line** (400, `clamp(28px, 3.9vw, 60px)`, 1.08): each project's one line on the home programme and the studio note. The footer address uses the same face at `clamp(30px, 7.2vw, 112px)`, 1.05.
- **Title Band** (400, `clamp(26px, 2.9vw, 44px)`, 1): the project name inside a poster's label band.
- **Wordmark** (400, 19px phones / 21px from 768px, -0.01em): "Pureza Digital" in the identity band.
- **Body** (Hanken 400, 16px, 1.7): base text. Reading passages step up to `clamp(18px, 1.45vw, 22px)`/1.6 at max 58ch; legal and studio text run at 17px/1.7 at max 64ch.
- **Label** (Hanken 400, 13px, 1.45, +0.005em, sentence case): all metadata: band rows, counter, footer columns, Concept tags, passage labels. Nav links 14px; standalone action links ("View project") 15px.

### Named Rules
**The Two Voices Rule.** Type is either display (Bodoni, looked at) or label (Hanken, read). Do not add a middle weight, a bold, or a third family. Emphasis in display is an italic turn, never weight.

**The No Kicker Rule.** Nothing sits above a heading. There are no eyebrows, kickers or overlines. Metadata rows (number, industry, year, Concept) sit on or below the title baseline. (LegalPage still accepts an `eyebrow` prop for callers, and deliberately renders nothing.)

**The Tabular Counter Rule.** Project numbers and the programme counter use `tabular-nums`, set on those spans only, never on running text.

## Layout

A 12-column grid (`.grid-12`) inside page margins (`.frame`). Margins are 20px on phones, 40px from 768px and 64px from 1280px; gutters are 16px, then 20px from 768px. The identity band is 64px tall, then 72px from 768px, and every page's top padding is computed from it (`calc(var(--nav-h) + 16vh)` for page titles).

Vertical rhythm is measured in viewport height, not a spacing scale: case study passages sit in 14vh of air, the studio note in 22vh, the footer opens with 18vh. A viewport holds one thing.

On phones most spans collapse to 12 columns; the poster's label band keeps number, name and Concept on one row and drops industry and year to a second line beneath the name. Phones are shown the project's own phone screen as the poster rather than a cropped desktop.

### Named Rules
**The Asymmetry Law.** Text anchors to column 1 or column 7 of the 12-column grid. Secondary blocks (passages, legal body, the contact form, the second-sheet action) start at column 7; primary headings start at column 1. Nothing is centred, ever: no centred headings, no centred blocks, no `mx-auto` content columns.

**The One Thing Per Viewport Rule.** Sections are sized in vh so a single statement, poster or passage holds the screen. Do not stack several small sections into one viewport.

## Elevation & Depth

The system is flat. Depth comes from stacking sheets, not shadows: posters pin under the identity band and the next sheet is laid over them (`z-20` over the pinned poster), the route wipe is a full-screen sheet in the destination ground (`z-80`), the identity band sits at `z-60`, the cursor label at `z-70`. There is exactly one shadow, and it belongs to hardware.

### Shadow Vocabulary
- **Device lift** (`box-shadow: 0 1px 2px rgb(10 8 6 / 0.10), 0 12px 32px -8px rgb(10 8 6 / 0.28), 0 40px 80px -24px rgb(10 8 6 / 0.30)`): phone screens only, so they read as objects held above the ground.

### Named Rules
**The Paste, Not Float Rule.** Layers are pasted over one another like posters on a wall. Do not add shadows to screens, sections, buttons or inputs.

## Shapes

Hard rectangles. Desktop screens are shown flat, with no browser chrome, frame or radius. Posters clip with `inset()` rectangles. Form fields are square-cornered with a 1px ink stroke. The index uses ink hairlines at 15% opacity between rows.

### Named Rules
**The Hardware Radius Rule.** Only device (phone) screens are rounded (`clamp(14px, 1.8vw, 26px)`): the radius belongs to the hardware, not to the page. Everything else is radius 0. The Send button's outlined pill is the single sanctioned exception, carried from the client reference. Do not add rounded cards, tags, badges or images.

## Components

### Identity Band (SiteNav)
The house identity, fixed across the top. The wordmark sits at column 1, the programme counter at column 7 (768px and up), and Work · Studio · Contact end at column 12. It is painted with `var(--ground)` and `var(--ink)`, so it changes colour with the page over the same 700ms, and it never reflows: nothing in it changes width, wraps, or collapses into a menu. The counter appears only while a project holds the page; its digits roll vertically by `translateY` in `em` (one 1.45em row per project), next to a muted "/ 04" total. Links use the line-link underline; the current route holds its underline via `aria-current="page"`. A skip link slides in on focus.

### Poster (ProjectPoster)
The signature component. A sticky full-height sheet under the band, with the label band on top and the project's media beneath. As it enters, its clip scrubs from `inset(0 6% 0 6%)` to full bleed and the label band's padding tracks the clip so its ends are never cut. While pinned, the media scales from 1.08 to 1. The whole poster is a single link to the case study, with the cursor label "View". Then the second sheet, painted with `var(--ground)`, is laid over it: the project's line in the display face (cols 1–9), a "View project" link (col 7), and a composition chosen by `variant`:
- **flight**: a scroll-scrubbed film (Oriel), a large screen with two phones beside it.
- **strip**: a catalogue strip of alternating screens and phones that drifts horizontally against the scroll (6% to -42%).
- **night**: three staggered phones, then a screen offset to column 4.
- **overlap**: a full-bleed screen with a phone laid across its lower edge.

### Label Band
Number (col 1) · name in Title Band (cols 2–6) · industry (col 7) · year (col 10) · Concept in the project's muted colour (end of row). Label type throughout, baseline-aligned.

### Buttons
- **Shape:** outlined pill (9999px radius), 64px tall, minimum 150px wide, 1px ink stroke.
- **Send (the only button with a fill state):** transparent at rest with the label in the display face at 21px. On hover and focus-visible, an ink fill scales up from the bottom (`scaleY` 0 to 1, 500ms ease-out-expo) and the label turns to the ground colour. Pressed state scales to 0.97. Busy state is 60% opacity with a progress cursor.
- **Everything else is a line-link**, not a button: type only, with a 1px underline that draws in from the left on hover and focus (600ms) and retracts to the right. Resting links in running text (`line-link--rest`) keep the underline at 35% opacity. Pressed state drops to 60% opacity.

### Inputs / Fields
- **Style:** square corners, 1px ink stroke, Field Paper fill, 16px text (never smaller, to prevent mobile zoom), 14px by 16px padding. Labels sit above in 15px body with a muted "(required)" or "(optional)".
- **Focus:** the stroke doubles through an inset 1px ink ring.
- **Error:** the stroke and message turn Oxide; messages live in `aria-live` regions that reserve their height.
- **Code step:** the six-digit field is 22px, tracked at 0.3em, tabular.

### Recording Control (LoopVideo)
Every moving recording carries a visible Pause/Play control in the label face, bottom right at the page margin, on a ground-coloured plate. Recordings are muted, loop, load nothing until near view, play only while intersecting the viewport, and never autoplay under reduced motion.

### Phone Screen (Shot)
A phone screenshot clipped to the device radius with the Device lift shadow. Desktop screens (`Screen`) are the same image treatment with no radius, frame or shadow.

### Work Index
The programme as a list of type: ink hairlines between rows, number, name in Headline Index, industry, year and Concept on one baseline. On hover the name nudges 12px to the right. On fine pointers the hovered project's first screen follows the cursor, revealed by a top-down clip (550ms); on touch each row carries its own image instead.

### Cursor Label
An 84px paper disc with ink label text ("View", "Next") that follows fine pointers over project media on a spring. Disabled on touch and under reduced motion; the system cursor stays everywhere else.

### Close (SiteFooter)
The page ends on ink: the email address as the last word in the display face, then three label columns (location at col 1, site links at col 7, copyright and legal at col 10, right-aligned).

### Motion

Motion is part of the frame, so it is documented with the components rather than as a token group.

- **Easing:** `--ease-out-expo` `cubic-bezier(0.16, 1, 0.3, 1)` for arrivals and state changes; `--ease-in-out-quart` `cubic-bezier(0.76, 0, 0.24, 1)` for the route wipe.
- **Hero line rise:** each line translates up from 105% over 1100ms, staggered 110ms after a 120ms delay. This is the only entrance motion on type.
- **Poster paste:** clip-path inset and media scale, scrubbed by scroll position, not by time.
- **Ground change:** body and identity band transition `background-color` and `color` over 700ms. This is the only transition on a property other than transform, opacity or clip.
- **Route wipe:** a sheet in the destination's ground translates from 100% to 0% over 700ms, the route changes beneath it, then it lifts to -100%. The case study opens on the same colour.
- **Smooth scroll:** Lenis at lerp 0.09 on wheel input; touch keeps native scrolling.

**The Lands Once Rule.** Motion arrives and holds. There are no ambient loops in the frame, no parallax on type, and no fade-in-on-scroll reveals.

**The Reduced Motion Rule.** Under `prefers-reduced-motion`, everything collapses: no Lenis, no clip scrub or scale, no strip drift, no wipe (the route changes directly), no cursor label, recordings do not autoplay, and the global rule shortens every animation and transition to 0.01ms. Components read the preference through the hydration-safe `useReducedMotionSafe` hook in `src/lib/useReducedMotionSafe.ts`. Never use framer-motion's `useReducedMotion`; it caused a hydration mismatch in this build.

## Do's and Don'ts

### Do:
- **Do** keep the house frame to paper (#F3F0EA), ink (#151413) and muted (#6E6960), and let colour arrive only through a project's `ground`/`ink`/`muted`.
- **Do** put `data-ground`, `data-ink` and `data-muted` on every new full-width section.
- **Do** anchor text to column 1 or column 7 of the 12-column grid, inside the 20/40/64px margins and 16/20px gutters.
- **Do** keep the identity band fixed, ground-painted and non-reflowing; roll the counter digits by `translateY` in `em`.
- **Do** set emphasis in the display face as an italic turn.
- **Do** keep metadata rows on or below the title baseline.
- **Do** show a visible "Concept" tag on every project until it is genuinely commissioned.
- **Do** give every moving recording a Pause/Play control (WCAG 2.2.2) and play it only while it is in view.
- **Do** read reduced motion through `useReducedMotionSafe` and make every motion collapse under it.
- **Do** record provenance for every shipping raster and film in `public/work/CREDITS.md`.

### Don't:
- **Don't** add a house accent colour, a coloured link state, or a gradient.
- **Don't** centre headings, text blocks or content columns.
- **Don't** put kickers, eyebrows or overlines above headings.
- **Don't** round anything except phone screens and the Send pill; no cards, chips, badges or rounded images.
- **Don't** add shadows outside phone screens.
- **Don't** animate type beyond the hero line rise, add ambient loops, or fade sections in on scroll.
- **Don't** transition properties other than transform, opacity or clip-path, except the 700ms ground change.
- **Don't** use framer-motion's `useReducedMotion`.
- **Don't** invent clients, testimonials, logos, awards, metrics or quotes, or drop the Concept tag from concept work.
- **Don't** ship a recording without a Pause/Play control, or one that plays out of view.

## Adding a Programme Entry

1. Add a `Project` object to `PROJECTS` in `src/data/projects.ts`. Give it the next `number` (two digits), a `slug`, `title`, `industry`, `year`, one `line` for the display face, and `brief` / `approach` / `made`. Leave `liveUrl` unset until the concept is deployed.
2. Set `concept: true`. It stays true until the project is genuinely commissioned. Never invent a client, a result, a quote or a metric.
3. Choose `ground`, `ink` and `muted` from the project's own palette. Check `ink` and `muted` at 4.5:1 or better against `ground`.
4. Pick a `variant` (`flight`, `strip`, `night` or `overlap`) that suits the project's media. A new variant is a new `Composition` branch in `ProjectPoster.tsx`, not a one-off layout.
5. Put media in `public/work/<slug>/`: `scroll.mp4` and `scroll-poster.jpg` (or a film for `flight`), four desktop stills at 2000×1250 (`desktop-N.jpg`), three phone stills at 780×1688 (`mobile-N.jpg`). Write alt text for every still.
6. Record provenance for every new raster and film in `public/work/CREDITS.md`: source, capture method, date and encoding. No asset ships without a line there.
7. The home programme, the /work index, the case study route, the counter total and the sitemap all read from `PROJECTS`; nothing else needs editing.
