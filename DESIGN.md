---
name: Dra. Aline Sanfelice — Odontopediatria Avançada
description: Personal-brand site for a pediatric dentist in Cascavel; her consulting room rendered as a page.
colors:
  azul: "#0f4e70"
  azul-profundo: "#0b3a54"
  azul-claro: "#d8e6ee"
  grafite: "#2b2d3a"
  grafite-suave: "#555869"
  lilas: "#c3bde3"
  lilas-tinta: "#5f5893"
  arco-rosa: "#f2bfb3"
  arco-amarelo: "#efdcae"
  arco-menta: "#a8d5bf"
  arco-azul: "#acd5dc"
  parede: "#f9f8fb"
  nevoa: "#f0eef6"
  linha: "#dedbe8"
  branco: "#ffffff"
typography:
  display:
    fontFamily: "Young Serif, Young Serif Fallback, Georgia, serif"
    fontSize: "clamp(2.9rem, 2rem + 4.2vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Young Serif, Young Serif Fallback, Georgia, serif"
    fontSize: "clamp(2.2rem, 1.8rem + 2vw, 3.5rem)"
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: "-0.012em"
  title:
    fontFamily: "Young Serif, Young Serif Fallback, Georgia, serif"
    fontSize: "clamp(1.4rem, 1.27rem + 0.6vw, 1.75rem)"
    fontWeight: 400
    lineHeight: 1.15
  lead:
    fontFamily: "Figtree, Figtree Fallback, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.15rem, 1.09rem + 0.3vw, 1.3rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Figtree, Figtree Fallback, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1rem, 0.97rem + 0.15vw, 1.0625rem)"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Figtree, Figtree Fallback, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(0.84rem, 0.82rem + 0.1vw, 0.9rem)"
    fontWeight: 400
    lineHeight: 1.45
rounded:
  s: "6px"
  pill: "999px"
  arch: "999px 999px 0 0"
  doorway: "999px 999px 4px 4px"
spacing:
  xs: "0.5rem"
  s: "1rem"
  m: "clamp(1.5rem, 1.2rem + 1vw, 2rem)"
  l: "clamp(2.5rem, 2rem + 2vw, 4rem)"
  xl: "clamp(4.5rem, 3rem + 6vw, 9rem)"
  gutter: "clamp(1rem, 0.6rem + 2vw, 2.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.azul}"
    textColor: "{colors.branco}"
    typography: "{typography.body}"
    rounded: "{rounded.doorway}"
    padding: "0.9rem 1.75rem 0.85rem"
    height: "56px"
  button-primary-hover:
    backgroundColor: "{colors.azul-profundo}"
    textColor: "{colors.branco}"
  button-light:
    backgroundColor: "{colors.branco}"
    textColor: "{colors.azul}"
    typography: "{typography.lead}"
    rounded: "{rounded.doorway}"
    padding: "0.9rem 2rem 0.85rem"
    height: "64px"
  button-light-hover:
    backgroundColor: "{colors.azul-claro}"
    textColor: "{colors.azul}"
  link-arrow:
    textColor: "{colors.azul}"
    typography: "{typography.body}"
    height: "44px"
  nav-link:
    textColor: "{colors.grafite}"
    padding: "0.5rem 0"
  nav-link-active:
    textColor: "{colors.azul}"
  dock:
    backgroundColor: "{colors.azul}"
    textColor: "{colors.branco}"
    rounded: "999px 999px 8px 8px"
    padding: "0.5rem 0.6rem 0.45rem 1.5rem"
    height: "62px"
---

# Design System: Dra. Aline Sanfelice

## Overview

**Creative North Star: "The Room of Arches"**

The page is her consulting room. A generous sign-wall white carries almost everything; one navy, Azul Aline, signs the name, the headings, the action and the links; photography of her and her real clinic is the protagonist. The arch of the clinic wall is the system's one geometric idea, and it is spent sparingly: it frames her portrait and the facade, it tops the primary action, and it returns as the five thin arcs of her rainbow logo.

Density is calm and editorial. Sections breathe on a fluid vertical rhythm (up to 9rem), content sits on a 12-column grid that lets photos bleed to the viewport edge while text holds a 62ch measure. Structure is drawn with 1px lines rather than boxes: facts, steps, questions and reviews are separated by hairlines, never enclosed in cards. Colour is restrained to the point of rarity; the logo pastels never fill a surface.

The world refuses the category default of a split hero with pills, card grids and pastel everywhere (direction contract, confirmed by the user).

**Key Characteristics:**
- White wall ground, one strong navy, graphite ink.
- Arch geometry: portrait and facade frames, arch-topped actions, the logo arcs.
- Lines instead of containers; no cards.
- Serif display in navy at large sizes; plain humanist sans for everything read.
- Motion is slow and settling (one expo-out curve), never bouncy.

## Colors

A white-wall palette signed by a single deep petrol navy, with the logo's pastels held back to hairline arcs.

### Primary
- **Azul Aline** (azul): the only strong colour. Display and section titles, primary buttons, inline links, focus ring, the 1px rule the primary action sits on, the drenched sedation section and the closing section.
- **Deep Azul** (azul-profundo): hover/pressed state of navy actions and the footer ground, one step darker than the closing so the page ends in the darkest navy.
- **Mist Blue** (azul-claro): body text on navy fields, and the hover fill of the light button.

### Secondary
- **Sign Lilac** (lilas): the letters of the wall sign. Decorative only: oversized opening quote marks, the active/hover nav underline, the arc bullets in the sedation list, text selection, scrollbar thumb. Never used for text.
- **Lilac Ink** (lilas-tinta): the legible lilac for small text (review context lines).

### Tertiary
- **Logo Rainbow** (arco-rosa, arco-amarelo, arco-menta, arco-azul, plus lilas as the fifth arc): blush, butter, mint and powder blue (dashed) from the logo. They appear only as stroked arcs: the lockup mark, the five journey arcs, and the small arc above each journey step number.

### Neutral
- **Sign Wall** (parede): dominant page ground and header ground.
- **Mist Lavender** (nevoa): the alternating section ground (journey, families) and the placeholder behind arch-framed photos.
- **Graphite** (grafite): body ink, measured from the facade.
- **Soft Graphite** (grafite-suave): secondary text, fact labels, captions (5.9:1 on the ground).
- **Hairline** (linha): every structural divider on light grounds.
- **White** (branco): text and the light button on navy fields.

### Named Rules
**The One Strong Colour Rule.** Azul Aline is the only saturated colour on any screen. A second accent never appears; emphasis comes from size and the serif, not from another hue.

**The Thin Rainbow Rule.** The logo pastels exist only as stroked arcs (2-5px). They never fill a block, a button, a background or a card.

## Typography

**Display Font:** Young Serif (with a metric-adjusted Georgia fallback)
**Body Font:** Figtree, variable 300-800 (with a metric-adjusted Arial fallback)

**Character:** A soft, slightly bookish serif at weight 400 carries her name and every heading in navy; Figtree does all the reading and the labels in graphite, plain and warm. Both are self-hosted woff2.

### Hierarchy
- **Display** (400, clamp(2.9rem → 6rem), 0.98, -0.02em): her name in the hero only, the "Dra." set at 0.46em on the same line. The closing headline uses the step-5 size (up to 6rem, 1.02).
- **Headline** (400, step-4 up to 3.5rem, 1.06, -0.012em): section titles in navy, capped at 17ch.
- **Title** (400, step-2 up to 1.75rem, 1.15): journey step titles, step numerals, mobile menu links, answer text in the questions section (step-3 on desktop). Pull quotes run larger in the same face (up to 3.1rem, 1.3).
- **Lead** (Figtree 400, step-1 up to 1.3rem, 1.5): the hero promise and section intros, 34-40ch.
- **Body** (Figtree 400, step-0 up to 1.0625rem, 1.6): running text at a 62ch measure. Facts and values use 500; buttons and links use 600; names in reviews and team use 700.
- **Label** (Figtree 400, step--1 up to 0.9rem, 1.45): fact terms, captions, attributions in Soft Graphite. Sentence case, no tracking.

### Named Rules
**The Serif Speaks For Her Rule.** Young Serif is reserved for her name, section titles, step titles, quotes and her answers. Anything a parent scans for logistics (facts, labels, buttons, navigation on desktop) is Figtree.

**The Sentence Case Rule.** No uppercase, no tracked-out labels anywhere in the build. Hierarchy comes from size, face and colour.

## Layout

Mobile-first with breakpoints at 600px (tablet), 760px (team and footer columns), 960px (desktop grid, full nav) and 1280px (hero portrait narrows). Content is centered in a 1320px max container with a fluid gutter (1rem to 2.5rem). On desktop every section uses a 12-column grid with gutter-width column gaps; layouts are deliberately asymmetric (text 1-6 against image 7-12, or image 1-5 against text 7-12), and photos may bleed past the container to the viewport edge on one side, losing their radius on that edge.

Vertical rhythm comes from a five-step fluid scale: xs 0.5rem, s 1rem, m up to 2rem, l up to 4rem, xl up to 9rem. Sections pad by xl top and bottom; groups inside a section separate by l; items by s or m. Reading text holds 62ch; leads 34-40ch; display quotes 24-30ch. Light sections alternate Sign Wall and Mist Lavender grounds; the story then moves to navy for sedation, returns to white, and ends in navy closing plus deeper-navy footer.

A sticky 68px header on the wall ground gains a single hairline once the page scrolls. On phones a fixed WhatsApp dock rises from the bottom after the hero leaves view; it is hidden at 960px and up.

## Elevation & Depth

The system is flat. Depth is carried by ground changes (white, lavender mist, navy) and by 1px lines. Shadows are rare, soft and tinted navy rather than grey, and are tied to the action: the primary button and the mobile dock. The header and menus use a hairline or a soft drop only when they float over content.

### Shadow Vocabulary
- **Action lift** (`box-shadow: 0 18px 40px -24px rgba(15, 78, 112, 0.35)`): resting primary button.
- **Action lift, hover** (`box-shadow: 0 22px 44px -24px rgba(15, 78, 112, 0.55)`): primary button hover.
- **Dock lift** (`box-shadow: 0 18px 36px -16px rgba(11, 58, 84, 0.55)`): the floating mobile WhatsApp dock.
- **Menu drop** (`box-shadow: 0 24px 40px -28px rgba(43, 45, 58, 0.35), 0 1px 0 #dedbe8 inset`): the open mobile menu sheet.
- **Header hairline** (`box-shadow: 0 1px 0 #dedbe8`): the sticky header once scrolled.

### Named Rules
**The Lines Not Boxes Rule.** Group content with a 1px top rule (Hairline on light, translucent white or lilac on navy), never with a bordered or shadowed card.

## Shapes

Two shape ideas, both from the clinic: the arch and the straight line it stands on.

- **Arch frame** (999px 999px 0 0): a full semicircular top with straight sides and a flat base. Used only on the hero portrait and the facade photo.
- **Doorway** (999px 999px 4px 4px): the primary and light buttons. Round top, near-flat base.
- **Small arcs**: 2-3px stroked half-rings (12-22px wide) as list bullets on navy and as markers above journey step numerals, coloured from the rainbow or lilac.
- **Soft rectangle** (6px): every other photo and the map embed. Where a photo bleeds to the viewport edge, the bleeding side drops to 0.
- **Circle**: only the WhatsApp icon well inside the dock.

### Named Rules
**The Two Arches Rule.** The full arch frame belongs to the hero portrait and the facade. Other photos are soft rectangles; adding a third arch frame dilutes the signature.

**The Doorway Rule.** A primary action is an arch-topped doorway set into a line: its flat base overlaps (-1px) a full-width 1px rule (navy on light grounds, white on navy), the rule that also tops the facts beneath it.

## Components

### Buttons
Calm, architectural, one per moment.
- **Shape:** doorway, round top and near-flat base (999px 999px 4px 4px); min height 56px, 64px for the large closing variant.
- **Primary:** Azul Aline fill, white Figtree 600 text, leading inline SVG icon (1.25em) with a 0.6rem gap, action-lift shadow. Seated on a 1px navy rule.
- **Light:** white fill, navy text, used only on navy grounds (closing), seated on a 1px white rule.
- **Hover / Focus:** primary deepens to Deep Azul and the shadow grows; light fills Mist Blue; 0.25s colour / 0.35s shadow on the expo-out curve; active presses 1px down. Focus is a 2px navy outline at 3px offset (white on navy grounds). Hover effects are gated behind `(hover: hover)`.
- **On phones** the primary button goes full width and the secondary link is reordered above it so the button lands directly on its rule.

### Link with arrow
The secondary action everywhere: navy Figtree 600, 1px underline at 35% navy that darkens to full on hover, trailing arrow that nudges 3px (down for in-page anchors). Min height 44px. A white variant serves navy grounds.

### Navigation
Desktop: Figtree 500 at 0.95rem in Graphite, a 1.5px underline that appears in Sign Lilac on hover and for the current section while the text turns navy. A hairline-separated WhatsApp text link closes the bar. Mobile: a "Menu" toggle with a two-line icon that crosses; the sheet drops from under the header with links set in Young Serif at title size in navy.

### Fact lists
Definition lists of where, when and rating: Soft Graphite label terms at label size, Graphite 500 values, navy links. On the hero they sit under the navy doorway rule; on the closing under a white rule in three columns.

### Questions (accordion / master-detail)
Questions are Figtree 600 at lead size between hairlines; the open one turns navy. Mobile: chevron accordion with the answer below. Desktop: questions in a left 5fr column, the active answer shown in a right 7fr column behind a hairline, set in Young Serif navy at step-3, with a doubled navy top rule marking the open question.

### Quotes and reviews
Her quote and the featured review sit in Young Serif navy under an oversized lilac opening quote mark. Other reviews are lead-size Figtree under a hairline, attributed as bold first name, a dot, and context in Lilac Ink.

### Journey arcs (signature)
The five logo arcs (blush, butter, mint, dashed powder blue, lilac; 5px round strokes) over a navy tooth outline. When the illustration is 70% in view, the arcs draw in sequence, one every 320ms over 1.2s each, matching the five steps, then the tooth settles in. Without JS or with reduced motion all five arcs are drawn from the start. Each step repeats its arc colour as a small half-ring above its serif numeral.

### Mobile dock
A fixed navy bar 12px from the screen edges with a doorway top (999px 999px 8px 8px), WhatsApp title and meta line, and a white circular icon well. It slides up on the expo-out curve.

## Do's and Don'ts

### Do:
- **Do** keep Sign Wall (#f9f8fb) as the dominant ground and Azul Aline (#0f4e70) as the only strong colour.
- **Do** seat every primary action on a 1px full-width rule with the button overlapping it by 1px.
- **Do** separate groups with 1px rules in Hairline (#dedbe8) and let the 12-column grid set asymmetric text/image pairs.
- **Do** set her name, titles and her answers in Young Serif 400 navy, and everything logistical in Figtree.
- **Do** use the expo-out curve (cubic-bezier(0.16, 1, 0.3, 1)) for all motion and honour reduced motion by showing the final state.
- **Do** use real photos of her and the clinic as the protagonist, with alt text describing the scene.

### Don't:
- **Don't** use the logo pastels as fills, backgrounds, buttons or cards; they are stroked arcs only.
- **Don't** add a third arch-framed photo; arch frames are the hero portrait and the facade.
- **Don't** put content in bordered or shadowed cards, or build pill-chip rows and card grids.
- **Don't** set text in Sign Lilac (#c3bde3); use Lilac Ink (#5f5893) when lilac text is needed.
- **Don't** introduce uppercase or letter-spaced labels; the system is sentence case throughout.
