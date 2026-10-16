---
name: Dra. Aline Sanfelice, Odontopediatria Avançada
description: Pediatric dentistry personal-brand site; white ground, fields tinted from the official rainbow logo, Azul Aline for the voice.
colors:
  azul-aline: "#0f4e70"
  azul-profundo: "#0b3a54"
  azul-claro: "#dcebf2"
  rosa: "#fbb5b7"
  amarelo: "#fef4ae"
  verde: "#a9d3b7"
  azul-faixa: "#add8ed"
  lilas: "#e6cbfc"
  dente: "#fdd6e2"
  rosa-50: "#fff1f1"
  amarelo-50: "#fffbe8"
  verde-50: "#edf7f0"
  azul-faixa-50: "#eef7fc"
  lilas-50: "#f7f0fe"
  estrela: "#e4a630"
  tinta: "#1f2a37"
  tinta-suave: "#556170"
  branco: "#ffffff"
  fundo-suave: "#faf7fe"
  linha: "#ebe4f3"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Display Fallback, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.45rem, 1.55rem + 3.9vw, 4.6rem)"
    fontWeight: 760
    lineHeight: 1.05
    letterSpacing: "-0.012em"
    fontVariation: "\"opsz\" 48"
  headline:
    fontFamily: "Bricolage Grotesque, Display Fallback, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.75rem, 1.45rem + 1.4vw, 2.6rem)"
    fontWeight: 750
    lineHeight: 1.1
    letterSpacing: "-0.018em"
  title:
    fontFamily: "Bricolage Grotesque, Display Fallback, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.3rem, 1.2rem + 0.5vw, 1.6rem)"
    fontWeight: 750
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  quote:
    fontFamily: "Bricolage Grotesque, Display Fallback, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.3rem, 1.2rem + 0.5vw, 1.6rem)"
    fontWeight: 600
    lineHeight: 1.32
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "Figtree, Figtree Fallback, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.1rem, 1.05rem + 0.3vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Figtree, Figtree Fallback, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1rem, 0.97rem + 0.15vw, 1.0625rem)"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Figtree, Figtree Fallback, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(0.84rem, 0.82rem + 0.1vw, 0.9rem)"
    fontWeight: 650
    lineHeight: 1.3
rounded:
  sm: "14px"
  md: "22px"
  lg: "32px"
  pill: "999px"
spacing:
  xs: "0.5rem"
  s: "1rem"
  m: "clamp(1.5rem, 1.2rem + 1vw, 2rem)"
  l: "clamp(2.25rem, 1.8rem + 2vw, 3.5rem)"
  xl: "clamp(4rem, 3rem + 4vw, 7rem)"
  gutter: "clamp(1rem, 0.6rem + 2vw, 2.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.azul-aline}"
    textColor: "{colors.branco}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.5rem"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.azul-profundo}"
    textColor: "{colors.branco}"
  button-outline:
    backgroundColor: "{colors.branco}"
    textColor: "{colors.azul-aline}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.5rem"
    height: "52px"
  card-field:
    backgroundColor: "{colors.rosa-50}"
    textColor: "{colors.tinta-suave}"
    rounded: "{rounded.md}"
    padding: "{spacing.m}"
  card-feature:
    backgroundColor: "{colors.azul-aline}"
    textColor: "{colors.branco}"
    rounded: "{rounded.md}"
    padding: "{spacing.l}"
  card-review-feature:
    backgroundColor: "{colors.lilas-50}"
    textColor: "{colors.azul-aline}"
    typography: "{typography.quote}"
    rounded: "{rounded.md}"
    padding: "{spacing.l}"
  info-card:
    backgroundColor: "{colors.branco}"
    textColor: "{colors.tinta-suave}"
    rounded: "{rounded.sm}"
    padding: "0.8rem 1rem"
  step-stop:
    textColor: "{colors.azul-aline}"
    rounded: "{rounded.pill}"
    size: "46px"
  faq-item:
    backgroundColor: "{colors.branco}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.md}"
    padding: "1rem 1.25rem"
    height: "64px"
  photo-caption:
    backgroundColor: "{colors.branco}"
    textColor: "{colors.azul-aline}"
    rounded: "{rounded.pill}"
    padding: "0.35rem 0.8rem"
---

# Design System: Dra. Aline Sanfelice, Odontopediatria Avançada

## Overview

**Creative North Star: "The Rainbow on White"**

The system is built from one supplied object: Dra. Aline's official rainbow logo. Its five bands (rosa, amarelo, verde, a dashed azul band, lilás) and the pink tooth at its centre are measured from the logo file and reused at two strengths: full strength as small accents and stops, and as near-white `-50` tints that become section and card fields. Everything that speaks (headings, primary actions, key numbers) is one strong colour, Azul Aline. The ground is white.

The register is the category standard for a premium pediatric practice, executed with care: real photography of the doctor and the clinic, rounded cards, pill buttons, soft navy-tinted shadows, a friendly grotesque for headings and a clean, round sans for reading. It is warm and clear for parents, who are the readers, and it is not infantile. It also refuses the editorial look (cream ground, serif display, hairline rules).

Density is relaxed. Sections breathe on a fluid vertical rhythm, and white sections alternate with a faint lilac-white tint so the long single page reads as distinct rooms.

**Key Characteristics:**
- White ground; logo-derived pastel fields (`-50` tints) for hero, closing, cards and avatars.
- Azul Aline as the only strong colour; every heading and primary action uses it.
- The logo's rainbow frames the doctor: her portrait sits in an arched frame inside the five logo bands, as the tooth sits inside the rainbow in the mark.
- The logo's dashed azul band reappears as a structural device (first-visit rail).
- Rounded geometry at three radii plus pill; soft, navy-tinted shadows.
- Real photos only, in large rounded frames.

## Colors

A white page voiced in one deep blue, coloured by the soft bands of the official logo.

### Primary
- **Azul Aline** (`azul-aline`): every heading, the primary button, the mobile booking dock, the feature service card, the gallery quote tile, focus rings, link colour. The single strong voice of the page.
- **Azul Profundo** (`azul-profundo`): hover state of primary actions and the dock's shadow tint. Never a surface of its own.
- **Azul Claro** (`azul-claro`): secondary text on Azul Aline surfaces (feature card copy, quote attribution).

### Secondary
- **Rosa, Amarelo, Verde, Azul da Faixa, Lilás** (`rosa`, `amarelo`, `verde`, `azul-faixa`, `lilas`): the five official logo bands, measured from the logo file. Full strength only in small, deliberate doses: the five numbered stops of the first-visit rail (one band each, in logo order), the rainbow arc behind the hero portrait, the highlighter stroke under the hero's key phrase (amarelo), bullet dots in the feature card (verde), the dashed rail (azul-faixa), text selection, scrollbar and avatar ring (lilás).
- **Dente** (`dente`): the pink of the tooth inside the logo. Part of the official palette; it lives in the logo artwork and has no surface role in the shipped page.

### Tertiary
- **The logo fields** (`rosa-50`, `amarelo-50`, `verde-50`, `azul-faixa-50`, `lilas-50`): the bands diluted to near-white. They are fields, not accents: hero and closing ground (lilás-50), the doctor's quote card (rosa-50), service cards (verde-50, rosa-50), the large review (lilás-50), icon discs and review avatars (cycled through all five).
- **Estrela** (`estrela`): Google rating stars only.

### Neutral
- **Tinta** (`tinta`): body text and the strong names inside meta lines.
- **Tinta Suave** (`tinta-suave`): leads, descriptions, captions, footer text.
- **Branco** (`branco`): page ground, cards on tinted sections, header, footer.
- **Fundo Suave** (`fundo-suave`): the alternating section tint and the place card.
- **Linha** (`linha`): every divider and inset card stroke (1px dividers, 1.5px inset rings).

### Named Rules
**The One Voice Rule.** Only Azul Aline speaks. Headings, primary buttons and key numbers are Azul Aline; the rainbow colours never carry text and never fill a button.

**The Field, Not Fill Rule.** A rainbow colour covers a large area only as its `-50` tint. Full-strength bands stay small: stops, dots, strokes, arcs.

**The Measured Palette Rule.** The rainbow values are the logo's own colours. Do not shift or saturate them, and do not add a sixth hue.

## Typography

**Display Font:** Bricolage Grotesque (variable, 500-800, self-hosted; metric-adjusted Arial fallback)
**Body Font:** Figtree (variable, 300-800, self-hosted; metric-adjusted Arial fallback)

**Character:** Bricolage brings a friendly, slightly characterful grotesque warmth to headings without looking childish; Figtree is round, open and calm for parents reading on a phone.

### Hierarchy
- **Display** (760, fluid up to 4.6rem, 1.05, optical size 48): hero headline; the closing headline uses the same treatment at the step-4 size (up to 4.5rem). Max about 12-16ch.
- **Headline** (750, up to 2.6rem, 1.1): section titles, always Azul Aline, balanced wrap.
- **Title** (700-750, step-2 or 1.25rem, 1.15-1.2): service card titles, step titles, trust-strip lead words.
- **Quote** (600-650, step-2, about 1.3): testimonials and the doctor's quote set in the display face, Azul Aline (white on the Azul Aline quote tile). Feature quotes grow to about 2.1-2.6rem on desktop.
- **Lead** (400, step-1, 1.55, 40-46ch): hero and section leads in Tinta Suave.
- **Body** (400, step-0, 1.6, measure 60ch).
- **Label** (650, 0.82-0.95rem): small buttons, photo captions, footer labels. Sentence case.

### Named Rules
**The Display-Face-For-Voices Rule.** Bricolage is for headings and for quoted human voices (testimonials, the doctor's words). Running text, buttons and UI stay in Figtree.

**The Title-First Rule.** A section opens with its title. No uppercase labels, eyebrows or kickers above headings.

## Layout

Single-column, mobile-first page inside a 1240px container with a fluid gutter (`gutter`). Sections use `xl` vertical padding; section heads (max 44rem) sit `l` above their content. Backgrounds alternate white and Fundo Suave (first visit, clinic gallery and FAQ are tinted); the hero and the closing sit on Lilás 50.

Breakpoints: 600px (hero buttons stop stretching, the hero portrait grows), 760px (two-column grids), 960px (hero, about, FAQ, place and gallery go two-column or bento), 1080px (desktop navigation, five-column steps, three-column service and review bentos).

Recurring compositions:
- **Hero:** text left, the arched portrait inside the rainbow right on desktop, with the address and hours cards (960px and up); on mobile the arched portrait and its rainbow come first, centred, and the headline, lead and WhatsApp button still fit the first 844px. The trust strip overlaps the hero's base.
- **Bento grids:** services (one tall Azul Aline feature card spanning two rows, tinted cards, a wide team card); reviews (one large Lilás 50 review spanning two columns and two rows); gallery (the treatment room as the large tile spanning three columns and two rows, two square tiles stacked beside it, an Azul Aline quote tile on the bottom row).
- **Sticky intro:** the FAQ intro sticks beside the list on desktop.

## Elevation & Depth

A hybrid: most surfaces are flat colour fields, and white cards that float over photos or tinted ground carry soft, diffuse shadows tinted with Azul Aline rather than grey. Cards resting on white use a 1.5px inset Linha ring instead of a shadow.

### Shadow Vocabulary
- **Card** (`box-shadow: 0 1px 2px rgba(15, 78, 112, 0.06), 0 14px 34px -16px rgba(15, 78, 112, 0.22)`): hero info cards, photo badge, rating card, FAQ items.
- **Float** (`box-shadow: 0 2px 4px rgba(15, 78, 112, 0.06), 0 24px 48px -20px rgba(15, 78, 112, 0.35)`): hero portrait, the overlapping trust strip, the mobile menu panel.
- **Primary lift** (`box-shadow: 0 10px 24px -12px rgba(15, 78, 112, 0.7)`; hover `0 16px 30px -14px rgba(15, 78, 112, 0.8)`): under the primary button.
- **Inset ring** (`box-shadow: inset 0 0 0 1.5px #ebe4f3`): outline buttons, review cards, team card.

### Named Rules
**The Navy Shadow Rule.** Shadows are tinted with Azul Aline, soft and negatively spread. No grey or black shadows, no hard offsets.

## Shapes

Rounded throughout, in three steps plus pill: gently rounded (`sm`) for small floating info cards, the photo badge and menu links; rounded (`md`) for cards, gallery tiles, FAQ items, the trust strip and the map; soft-large (`lg`) for big photo frames and the place card; pill for every button, the nav toggle, caption chips and desktop nav links. Circles for step stops, avatars and icon discs; service icon tiles use 16px.

The logo's arc and dashed band are the only recurring geometry. The hero portrait is an arch (a semicircular top, `lg` bottom corners), echoing the arched panels of the clinic and the logo, and the five bands (azul dashed) run around it as concentric arches with legs, in logo order from rosa outside to lilás inside, at every size. The dashed first-visit rail is the second use.

## Components

### Buttons
Confident, rounded and simple.
- **Shape:** full pill, min height 52px (44px small, 58px large).
- **Primary:** Azul Aline fill, white Figtree 650, padding 0.85rem 1.5rem, navy lift shadow.
- **Hover / Focus:** hover deepens to Azul Profundo and rises 1px with a stronger shadow; active presses 1px down; focus shows a 2.5px Azul Aline outline offset 3px. Transitions use `cubic-bezier(0.16, 1, 0.3, 1)` at 0.25-0.35s.
- **Outline:** white fill, Azul Aline text, 1.5px inset Linha ring that turns Azul Aline on hover. Used for phone and route actions beside a primary.
- **Arrow link:** Azul Aline 650 text with a 30% underline that firms on hover while the arrow nudges 3px right.

### Cards / Containers
- **Corner Style:** `md` for content cards, `sm` for small floating cards, `lg` for photo frames.
- **Background:** a logo `-50` field, white with an inset ring, or one Azul Aline feature card per bento.
- **Shadow Strategy:** floating white cards take Card; resting cards take the inset ring (see Elevation).
- **Internal Padding:** `m`, growing to `l` for the feature tile of a bento.

### Navigation
Sticky white header (76px) with the official horizontal logo lockup on the left (58px tall, 48px on small screens), pill text links in Figtree 550 that gain a Fundo Suave fill on hover or when current, and a small primary WhatsApp button. Once scrolled the header gains a Linha hairline and a soft navy shadow. Below 1080px a pill "Menu" toggle opens a floating white panel (`md` radius, Float shadow) that ends with a full-width WhatsApp button under a Linha divider.

### Trust Strip
Text only: four short Azul Aline lead words in the display face, each with a Tinta Suave qualifier beneath, separated by 1px Linha dividers (vertical on desktop, horizontal on mobile). A white, Float-shadowed band overlapping the hero base. No icons.

### First-Visit Rail
The logo's dashed azul band becomes the path of the first consultation: a 3px dashed Azul da Faixa line connecting five 46px numbered circles, each filled with one logo band in logo order (rosa, amarelo, verde, azul, lilás), numbers in Bricolage 800 Azul Aline. Horizontal across five columns on desktop, vertical along the left edge on mobile. When the section enters view the rail draws itself (clip-path, exponential ease-out) and each stop gives one soft ring in its own band colour as the line reaches it; without JavaScript or with reduced motion the rail is simply there.

### Reviews Bento
White cards with an inset ring that lift 2px and take a Lilás ring on hover; one large Lilás 50 review set in the display face as the feature, opened by a large Lilás quotation mark in Bricolage 800. A white rating card with a 3rem Bricolage score and Estrela stars sits beside the heading.

### Gallery
Real clinic photos in `md` tiles with a white pill caption chip at bottom left; the treatment room is the large tile. A slow 1.04 zoom on hover.

### FAQ Accordion
White `md` items with the Card shadow, Figtree 650 questions, and a circular Lilás 50 plus that rotates into a close mark and turns full Lilás when open. Beside the list, the intro holds a white contact card: her avatar with a Lilás ring, "Fale com a equipe da Dra. Aline", the hours, and a full-width WhatsApp button.

### Closing and Footer
The closing sits on Lilás 50 with the full transparent official logo centred above a Display headline and primary plus outline actions. The footer is light: white, a Linha top border, the horizontal logo lockup and two short link columns.

### Motion
One authored moment: on load the rainbow around the portrait draws itself band by band (stroke-dashoffset, 1.5s exponential ease-out, 0.11s stagger; the dashed band fades in), while the portrait settles from 1.05 and the info cards rise. The first-visit rail echoes it once on scroll. Everything else is state: hovers, the accordion, the menu. All of it is off under `prefers-reduced-motion`, where every element renders in its final state.

### Mobile Booking Dock
A full-width Azul Aline pill (56px) fixed at the bottom on phones, shown only while neither the hero nor the closing is in view.

## Do's and Don'ts

### Do:
- **Do** use the official logo files as supplied: the horizontal lockup in header and footer, the full transparent logo in the closing.
- **Do** set every heading and primary action in Azul Aline and keep body text in Tinta.
- **Do** use the logo bands as `-50` fields for large areas, and at full strength only for small marks (stops, dots, strokes, arcs).
- **Do** keep the five bands in logo order whenever they appear together, with the azul band dashed.
- **Do** round everything (14 / 22 / 32px, pill buttons) and keep shadows soft and navy-tinted.
- **Do** use real photographs of Dra. Aline and the clinic in large rounded frames.

### Don't:
- **Don't** set text or fill buttons in the rainbow colours.
- **Don't** use a cream ground, a serif display face or hairline-only editorial layouts.
- **Don't** go infantile: no saturated primary-colour toy palette, no "escolinha" decoration.
- **Don't** add uppercase eyebrows or kickers above section titles.
- **Don't** use grey or black shadows, or hard offset shadows.
- **Don't** redraw, recolour or re-letter the logo.
