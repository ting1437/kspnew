# Kai Seng Design System

Design system for **Syarikat Perniagaan Kai Seng Sdn Bhd** — a Malaysian wholesaler and trading house
supplying disposable plastic and paper products to the food-service trade. Based at
15GF, Jalan Alam Jaya 17, Taman Alam Jaya Bt. 8 1/2, Cheras, Selangor. Hotline +603 9082 0712.

The business sells nine product families: **Plastic Bag, Plastic Products, Paper Products, OPS,
Bio Products, Garbage Bag, Foam Products, Cutlery, Aluminium**. Customers are cafés, bakeries,
catering kitchens, restaurants and home-based sellers — buying by the carton, not the piece.
A sister company, **Yik Jing Plastic Industrial (M) Sdn Bhd**, is listed on the website but no
material was supplied for it.

## Sources used

| Source | What came from it |
| --- | --- |
| `uploads/KS Catalogue 1–4.pdf` | Printed catalogue sheets (Paper Product / PP Container / PP Plate-Cup-Cutlery / Kitchen Consumables). All product illustrations, scene illustrations and the three contact glyphs were extracted from these files. |
| `uploads/WhatsApp Image 2026-07-25 at 12.46.56.jpeg` | The company logo lockup (red **K** mark over "SYARIKAT PERNIAGAAN KAI SENG SDN BHD"). |
| `uploads/Manrope-VariableFont_wght.ttf`, `NotoSans-VariableFont_wdth,wght.ttf`, `NotoSans-Italic-VariableFont_wdth,wght.ttf` | The two brand webfonts. Both are the real supplied files — no substitutions. |
| https://kaiseng.com.my/ (public site) | Information architecture, product taxonomy, headline and mission copy, contact details, opening hours. |
| Brand direction note (from the owner) | Style: creative/craft — torn paper, journal (手帐), shapes, stickers. Palette #F5EFE5 primary with #7A8061, #B7684D, #3F3934, #D9C8AE. Manrope for display, Noto Sans for body. |

No codebase or Figma file was supplied. The live site is a conventional Bootstrap-era template;
this system deliberately **replaces its visual language** with the craft/journal direction the owner
chose, while keeping the site's real IA, product names and copy.

---

## Content fundamentals

**Voice.** Plain, warm, trade-practical. It is a family wholesaler talking to a shop owner, not a
brand talking to a market. Sentences are short and declarative. No exclamation marks.

**Person.** "We" for the company, "you" for the customer, always in that order:
"We are a wholesaler and trading house who supply disposable plastic product, paper product and etc."
· "At Kai Seng we have many packaging materials that you are looking for."
Never "I". Never "our customers" when "you" will do.

**Casing.** Sentence case for body and headings. UPPERCASE only for eyebrows/labels and for product
names inside the printed catalogue ("COFFEE HOT CUP 8OZ", "NITRILE POWDER FREE GLOVE"). Product
names in digital UI are Title Case ("Coffee Hot Cup 8oz").

**Numbers & units.** Ounces for cups (8oz), millilitres for containers (750 ml), inches for plates
(7" / 9" / 10"), cartons for order units. Pack sizes are written `50 pcs × 20 / ctn`. MOQ is always
stated as "1 carton". Prices are never shown publicly — the site quotes on enquiry.

**Stock phrases that must be reused verbatim:**
- "Supplying Convenience, One Product at a Time"
- "Your Trusted Partner in Quality Disposable Products"
- "Committed to Excellence in Wholesale Trading"
- "Our Mission: Constantly Evolving, Always Improving For You."
- "All Photos For Reference Only" — legally required on every catalogue page
- "Mon – Sat : 8.30am – 5.30pm / Sunday : Off" (note the spaced colons; keep them)

**Length.** Headlines ≤ 6 words. Eyebrows ≤ 4 words. Product blurbs 1–2 sentences. Section intros
≤ 30 words. The four "why choose us" claims are the longest copy anywhere: cost-effectiveness,
expert service, fast response, quick response.

**Emoji: never.** Not in UI, not in marketing, not in the catalogue. The illustrated product cut-outs
do the friendly work that emoji would otherwise do.

**Bahasa Malaysia** appears only in the legal name (*Syarikat Perniagaan … Sdn Bhd*) and addresses
(*Jalan*, *Taman*). Body copy is English.

---

## Visual foundations

**Direction.** Creative/craft — a supplier's sample book kept as a scrapbook. Cream paper, torn
edges, washi tape, tilted stickers, illustrated product cut-outs pinned to a dot-grid page. Nothing
glossy, nothing techy, no gradients-as-decoration.

**Colour.** `#F5EFE5` cream is the page, everywhere. `#D9C8AE` sand is the second surface and the
kraft tone. `#7A8061` sage is the primary accent (buttons, contact band, "why us" band). `#B7684D`
terracotta is the secondary accent and the active-state marker. `#3F3934` ink is all type, rules and
the footer. At most **two** coloured bands per page. The logo red `#FF000E` is reserved for the mark
— never a button, link, chart or alert.

**Type.** Manrope for display and headings (ExtraBold 800 for display, -0.03em tracking, 1.02
line-height); Noto Sans for absolutely all body, labels and UI text at 1.62 line-height. Eyebrows are
uppercase Noto Sans 600 at 11.5px with 0.16em tracking. SKUs are monospace. Only this one pairing.

**Spacing & layout.** 4px base; the live scale is 2·4·8·12·16·20·24·32·40·48·64·80·96·128. Content
maxes at 1200px with a 24px gutter (720px for prose). Section rhythm is 96px vertical, 56px on
compact bands. The header is the only fixed element — 78px, sticky, hairline bottom rule. Nothing
else pins.

**Backgrounds.** Three treatments only: flat cream with a 3px dot **grain** (`--tex-grain`), cream
with a 20px **dot grid** (`--tex-dot-grid`, used behind product cut-outs), and full-bleed **scene
illustrations** clipped between two torn edges. Textareas get `--tex-rule` ruled-notebook lines.
No photographic backgrounds — the supplied imagery is illustration.

**Torn paper.** The signature move. `--tear-top`, `--tear-bottom`, `--tear-both` are clip-path
polygons with a 1–9px deckle. A torn element loses its radius and border: the tear *is* the edge.
Maximum two tears per page, used as punctuation between bands.

**Stickers & tape.** Cards may rotate ±0.6° to ±4° (`--tilt-*`). Never rotate two adjacent cards the
same way; never rotate body text. Washi tape (`--tape-sage`, `--tape-clay`, `--tape-kraft`) is
semi-opaque, ~90×26px, rotated −6° to +6°, and always sits half off the element it pins.

**Corners.** Deliberately tight: 0 / 2px (stickers, chips) / 4px (inputs, buttons) / 8px (cards) /
14px (modals). Pills only for status badges. Softness comes from tears, not radii.

**Cards.** Paper `#FFFCF6` on cream, 1px `rgba(63,57,52,.14)` hairline, 8px radius,
`--shadow-sticker` (3px/6px warm shadow + 1px contact line). Interactive cards lift 3px and swap to
`--shadow-lift`. Kraft cards drop the border and use the hard `--shadow-cut` 3px offset, no blur —
the "cut out and glued down" look.

**Shadows.** All warm-tinted `rgba(63,57,52,…)`, never neutral black. Five steps: hairline
`--shadow-1`, `--shadow-2`, `--shadow-sticker`, `--shadow-lift`, `--shadow-modal`; plus
`--shadow-cut` (hard offset), `--shadow-inset` and `--shadow-press`. Inputs use inset hairlines
rather than borders.

**Borders & rules.** Hairline `rgba(63,57,52,.14)` for structure; **dashed** `--rule-dotted` for
spec tables and form dividers (the journal reference); 2px solid ink only on outline buttons.

**Motion.** 140ms for state changes, 220ms for card lift, 380ms for image zoom. `--ease-out`
`cubic-bezier(.22,.85,.32,1)` by default; `--ease-paper` `cubic-bezier(.34,1.32,.5,1)` — a small
overshoot that settles like a sticker being pressed — for anything that tilts or slides. No bounces,
no spins, no scroll-triggered reveals, no parallax.

**Hover.** Lift 2px + darken one step (sage → sage-deep, clay → clay-deep). Ghost/outline buttons
fill with sand-light. Cards lift 3px; product cut-outs scale 1.05 and rotate −1.5°; category photos
scale 1.04. Links change colour, never underline on hover.

**Press.** `scale(.985)` plus `--shadow-press` inset. Colour does not change on press — the settle
does the work.

**Focus.** 1.5px sage inset + `--shadow-focus-ring` (3px sage at 38%). Always visible; never removed.

**Transparency & blur.** Blur is used in exactly one place: the 2px backdrop-blur on modal and drawer
scrims over `rgba(36,31,27,.42)`. Washi tape and inverted footer text use alpha. Nothing else is
translucent — no frosted panels, no glass cards.

**Protection.** Text is never set over the middle of a scene illustration. Full-bleed imagery is
bounded by torn bands and any label sits on its own paper plate — capsules, not gradient scrims.

**Imagery vibe.** Warm, saturated, hand-illustrated interiors — café, restaurant buffet, hotel
buffet line, commercial kitchen — with visible outlines and a slight vintage-poster palette. Product
shots are transparent-background illustrated cut-outs, not photographs. Never desaturate, never
duotone, never add grain on top of them.

---

## Iconography

Three **solid dark glyphs** were supplied in the printed catalogue and are the brand's own icons —
copied to `assets/icons/`: `phone.png`, `pin.png` (map marker with an ellipse shadow), `globe.png`
(circle-outline earth). They are heavy, filled, single-colour, and used at 18–30px in contact rows.
On sage or ink they are inverted to cream via `filter: brightness(0) invert(1)`.

No icon font, sprite or SVG set exists in the supplied material and none was found on the live site,
so UI iconography (search, chevrons, mail, info, basket) is **substituted with
[Lucide](https://lucide.dev) 0.454.0 from CDN at stroke-width 1.75** — the closest match to the
outline weight of the supplied globe glyph. **Flagged for the owner: if Kai Seng has a real UI icon
set, send it and it will replace Lucide.**

Emoji are never used. Unicode is used only for typographic characters: `×` in pack sizes, `·`
as a separator, `–` in ranges, `/` in breadcrumbs, `"` for plate inches.

Illustrated product cut-outs in `assets/products/` double as oversized "icons" — an empty state uses
a real kraft bag at 75% opacity rather than a drawn glyph. **Never hand-draw SVG illustrations for
this brand.**

---

## Logo

The supplied lockup is the only mark. Three files, all derived from the one upload — nothing was
redrawn:

- `assets/logo/ks-logo.jpeg` — the original upload, red K on `#EADCC8`.
- `assets/logo/ks-logo-full.png` — same lockup, background keyed to transparent.
- `assets/logo/ks-mark.png` — the K mark alone, transparent.

Use the full lockup in headers and on covers (≥ 52px tall); the mark alone on dark grounds, footers
and as a corner stamp. Clear space = the width of the K's vertical bar. Never recolour the mark,
never place it on terracotta (the red clashes), never re-typeset the wordmark.

---

## Components

All components are React, plain JSX, styled entirely with the CSS custom properties in `tokens/`.
Each has a sibling `.d.ts` (props contract) and `.prompt.md` (usage).

**components/core/** — `Button`, `IconButton`, `Tag`, `Badge`, `Eyebrow`, `Card`, `TornDivider`,
`StickerFrame`, `TapeStrip`

**components/forms/** — `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`,
`QuantityStepper`

**components/navigation/** — `NavBar`, `Breadcrumbs`, `CategoryTabs`, `Pagination`, `Footer`

**components/feedback/** — `Dialog`, `Toast`, `Tooltip`, `EmptyState`

**components/commerce/** — `ProductCard`, `CategoryCard`, `SpecTable`, `ContactStrip`

### Intentional additions

No source defined a component inventory (there is no codebase or Figma file), so the set above is a
standard primitive library sized to this business. Four items exist specifically because the brand
needs them and would otherwise be hand-rolled:

- `TornDivider`, `StickerFrame`, `TapeStrip` — the craft motifs, so torn edges and tape are never
  re-invented ad hoc.
- `ContactStrip` — the phone / address / website band is on every printed catalogue page and the
  site footer; it is effectively brand furniture.

---

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | The single entry point consumers link. `@import` list only. |
| `tokens/colors.css` | Base palette, derived tints, semantic surfaces/text/borders, status. |
| `tokens/typography.css` | Font stacks, weights, display/heading/body/eyebrow/code scales. |
| `tokens/spacing.css` | Spacing scale, component paddings, layout containers. |
| `tokens/shape.css` | Radii, stroke widths, torn-edge clip-paths, sticker tilts. |
| `tokens/elevation.css` | Warm shadow ladder, cut shadow, press, focus ring. |
| `tokens/motion.css` | Durations and easings. |
| `tokens/paper.css` | Grain / dot-grid / grid / ruled textures and washi-tape gradients. |
| `tokens/fonts.css` | `@font-face` for Manrope and Noto Sans (variable TTFs). |
| `assets/logo/` | Lockup (original + transparent) and isolated K mark. |
| `assets/products/` | 17 illustrated product cut-outs, transparent PNG. |
| `assets/imagery/` | 4 scene illustrations: café, restaurant, buffet, kitchen. |
| `assets/icons/` | The 3 supplied contact glyphs. |
| `assets/fonts/` | The 3 supplied variable TTFs. |
| `guidelines/*.card.html` | 23 foundation specimen cards (Colors, Type, Spacing, Shape, Brand). |
| `components/<group>/` | Component source, `.d.ts`, `.prompt.md`, and one showcase card per group. |
| `ui_kits/website/` | Click-through recreation of the marketing site — see its README. |
| `slides/` | Five printed-catalogue page templates (cover, section, two product pages, back page). |
| `thumbnail.html` | Homepage tile for the system. |
| `SKILL.md` | Agent Skills front-matter so this folder works inside Claude Code. |

## Known gaps

- No pricing, no real SKU codes — the SKUs in the UI kit are plausible placeholders (`KS-PPR-HC08`).
- Only 17 of hundreds of real products have artwork; the remaining families (Garbage Bag, Foam, OPS,
  Aluminium) have no supplied imagery and reuse scene illustrations at category level.
- Yik Jing Plastic Industrial has no supplied material; its card is intentionally near-empty.
- UI icon set is a Lucide substitution (see Iconography).
