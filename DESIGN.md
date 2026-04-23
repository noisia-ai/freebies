---
version: alpha
name: Noisia
description: >
  Social Intelligence Architects. A premium intelligence consultancy identity
  built on chromatic depth, soft glass surfaces, and structured signal.
  Light-base with noisy gradient blobs, glass cards, and a dual-accent system
  extracted from the logo's chromatic aberration effect.

colors:
  # Base
  canvas:       "#ffffff"
  surface-01:   "#fafafa"
  surface-02:   "#f4f4f4"

  # Neutrals (from Webflow CSS variables)
  neutral-03:   "#eeeeee"
  neutral-04:   "#e6e6e6"
  neutral-05:   "#dadada"
  neutral-09:   "#999999"
  neutral-10:   "#6d6d6d"
  neutral-11:   "#2b2b2b"
  ink:          "#0a0a0a"

  # Brand accents (extracted from logo SVG mix-blend-mode layers)
  signal:       "#00EEEE"   # Cyan — primary accent. Charts, tags, glow, CTA
  tension:      "#EE0B00"   # Crimson — secondary accent. Alerts, trends, energy
  whisper:      "#C4A8E8"   # Lavender — tertiary. Audience charts, soft data

  # Blob gradient palette (from Figma background assets)
  blob-dark:    "#0d1a2e"   # Deep navy — blob dark mass
  blob-mid:     "#1a7a8a"   # Teal-blue — blob mid transition
  blob-warm:    "#d94040"   # Muted crimson — blob warm edge

typography:
  display:
    fontFamily: "Google Sans"
    fontSize: "4.5rem"
    fontWeight: "500"
    lineHeight: "1.05"
    letterSpacing: "-0.02em"
  h2:
    fontFamily: "Inter Tight"
    fontSize: "3rem"
    fontWeight: "500"
    lineHeight: "1.1"
    letterSpacing: "-0.015em"
  h3:
    fontFamily: "Inter Tight"
    fontSize: "2rem"
    fontWeight: "500"
    lineHeight: "1.2"
  h4:
    fontFamily: "Google Sans"
    fontSize: "1.625rem"
    fontWeight: "500"
    lineHeight: "1.25"
  h5:
    fontFamily: "Google Sans"
    fontSize: "1.375rem"
    fontWeight: "500"
    lineHeight: "1.3"
  large:
    fontFamily: "Google Sans"
    fontSize: "1.125rem"
    fontWeight: "500"
    lineHeight: "1.5"
  body:
    fontFamily: "Google Sans"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.6"
  label:
    fontFamily: "Inter Tight"
    fontSize: "0.75rem"
    fontWeight: "500"
    letterSpacing: "0.05em"
    lineHeight: "1"
  metric:
    fontFamily: "Google Sans"
    fontSize: "2.5rem"
    fontWeight: "700"
    lineHeight: "1"
    letterSpacing: "-0.03em"

rounded:
  xs:   "8px"
  sm:   "12px"
  md:   "16px"
  lg:   "20px"
  xl:   "24px"
  pill: "9999px"

spacing:
  xs:   "4px"
  sm:   "8px"
  md:   "16px"
  lg:   "24px"
  xl:   "40px"
  2xl:  "64px"
  3xl:  "96px"
  section: "120px"

components:
  primary-button:
    backgroundColor: "{colors.ink}"
    textColor:       "{colors.canvas}"
    borderRadius:    "{rounded.pill}"
    paddingX:        "24px"
    paddingY:        "12px"
    fontFamily:      "Google Sans"
    fontSize:        "0.9375rem"
    fontWeight:      "500"
    hoverBackground: "linear-gradient(167deg, {colors.ink}, {colors.neutral-10})"

  secondary-button:
    backgroundColor: "transparent"
    textColor:       "{colors.ink}"
    border:          "1.5px solid {colors.neutral-04}"
    borderRadius:    "{rounded.pill}"
    paddingX:        "24px"
    paddingY:        "12px"
    fontFamily:      "Google Sans"
    fontSize:        "0.9375rem"
    fontWeight:      "500"

  tag:
    backgroundColor: "{colors.surface-02}"
    textColor:       "{colors.neutral-10}"
    borderRadius:    "{rounded.pill}"
    paddingX:        "12px"
    paddingY:        "4px"
    fontSize:        "0.6875rem"
    fontWeight:      "500"
    letterSpacing:   "0.06em"

  glass-card:
    backgroundColor:   "rgba(255, 255, 255, 0.72)"
    backdropFilter:    "blur(20px)"
    border:            "1px solid rgba(255, 255, 255, 0.6)"
    borderRadius:      "{rounded.xl}"
    shadow:            "0 4px 32px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.04)"
    padding:           "{spacing.xl}"
    innerHighlight:    "inset 0 1px 1px rgba(255, 255, 255, 0.8)"

  data-card:
    backgroundColor: "{colors.canvas}"
    borderRadius:    "{rounded.lg}"
    border:          "1px solid {colors.neutral-03}"
    shadow:          "0 2px 16px rgba(0, 0, 0, 0.04)"
    padding:         "{spacing.xl}"

  metric-chip:
    backgroundColor: "{colors.surface-01}"
    textColor:       "{colors.signal}"
    borderRadius:    "{rounded.pill}"
    paddingX:        "10px"
    paddingY:        "4px"
    fontSize:        "0.75rem"
    fontWeight:      "600"

  input:
    backgroundColor: "{colors.canvas}"
    textColor:       "{colors.neutral-11}"
    placeholderColor: "{colors.neutral-09}"
    border:          "1.5px solid {colors.neutral-04}"
    borderRadius:    "{rounded.md}"
    focusBorder:     "1.5px solid {colors.neutral-11}"
    paddingX:        "16px"
    paddingY:        "12px"
    fontFamily:      "Google Sans"

  navbar:
    backgroundColor: "rgba(255, 255, 255, 0.85)"
    backdropFilter:  "blur(12px)"
    borderBottom:    "1px solid {colors.neutral-03}"
    height:          "64px"

  pricing-card-featured:
    backgroundColor: "{colors.ink}"
    textColor:       "{colors.canvas}"
    borderRadius:    "{rounded.xl}"
    accentColor:     "{colors.signal}"
---

## Overview

Noisia is a Social Intelligence agency positioned as *Architects of Intelligence* — not a SaaS tool, not a dashboard vendor, but a consultancy that converts social signal into strategic decisions.

The visual identity mirrors this positioning: **structured clarity on the surface, layered depth underneath**. White canvas. Soft glass cards that float. Gradient blobs — grainy, organic, dimensional — that bleed through surfaces as atmospheric intelligence. Two brand accents extracted directly from the logo's chromatic aberration: Signal Cyan `#00EEEE` and Tension Crimson `#EE0B00`.

**Design character:** Soft Structuralism with Glass depth. Premium but not cold. Data-dense but never crowded. The brand says *we see what others miss* — every visual decision should reinforce that precision without arrogance.


## Colors

The palette is organized into three functional layers.

**Base layer** — `canvas` (`#ffffff`) is the global background. `surface-01` (`#fafafa`) and `surface-02` (`#f4f4f4`) create the subtle elevation steps used for section alternation and card resting states. These should never compete with content.

**Neutral scale** — `neutral-11` (`#2b2b2b`) is the primary text color. Never pure black. `neutral-10` (`#6d6d6d`) handles all secondary labels, captions, and descriptive text. `neutral-03` through `neutral-05` handle borders, dividers, and structural lines. `ink` (`#0a0a0a`) is reserved exclusively for primary buttons and maximum-emphasis moments.

**Brand accents — use sparingly and with intent.**
- `signal` (`#00EEEE`) — the primary brand accent. Used for: positive trend indicators, active chart lines, interaction glow on glass cards, the inner eye icon, the Noisia "ia" in the logo. This is the color of insight arriving.
- `tension` (`#EE0B00`) — the secondary accent. Used for: urgent alerts, negative trend lines, error states, the energy blob in backgrounds. Never use for primary CTAs. This is the color of signal demanding attention.
- `whisper` (`#C4A8E8`) — lavender, used only in audience/demographic charts and soft supporting data visualizations. Never on interactive elements.

**Blob palette** — `blob-dark` / `blob-mid` / `blob-warm` are not UI colors. They exist only as layered mesh-gradient backgrounds with heavy Gaussian blur and CSS noise grain overlay (`opacity: 0.04` on a `position: fixed` pseudo-element). Never apply these to cards, text, or buttons.


## Typography

Three typefaces, each with a defined role. Never mix them within the same hierarchy level.

**Google Sans** — the voice of Noisia. Used for all headline displays, card titles, pricing, body copy, and buttons. Its geometric warmth reads as intelligent without being clinical.

**Inter Tight** — the system backbone. Used for section h2/h3 headings, navigation, data labels, and UI chrome. Its compressed metrics suit data-dense environments.

**Poppins** — support role only. Available for marketing slide decks and proposal documents where a softer, rounder feel is needed.

**Critical rules:**
- Headlines are always lowercase or sentence case. Never title case on display text.
- Metric values (`display` style) use `fontWeight: 700` and tight `letterSpacing: -0.03em` to read as bold data, not decorative text.
- Body text must never exceed 65 characters per line. Constrain containers accordingly.
- Secondary text (`neutral-10`) must always pass WCAG AA against its background.


## Layout

Noisia's layouts operate on a **signal-to-noise** principle: generous whitespace between sections creates breathing room that makes the data inside each card feel more valuable.

**Grid system:** 12-column grid, `max-width: 1280px`, centered. Content areas constrained to `max-w-5xl` or `max-w-4xl` for reading-density control.

**Section spacing:** Minimum `py-[120px]` between major sections. Never compress sections to less than `80px` vertical padding. The brand needs room to breathe.

**Card architecture — the Double-Bezel rule:**
All major cards must use nested enclosure (outer shell + inner core) to create the impression of physical depth:
- Outer shell: subtle background (`bg-black/[0.02]`), hairline border (`border border-black/[0.05]`), `p-1.5`, large outer radius (`rounded-[1.5rem]`)
- Inner core: distinct background (usually `canvas` or glass), its own `rounded-[calc(1.5rem-6px)]` for concentric curve math, inner highlight (`shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]`)

**Bento grids (dashboard/feature sections):**
Use asymmetric CSS Grid. Example: a `col-span-8 row-span-2` feature card next to stacked `col-span-4` cards. Vary visual weight intentionally, never create perfectly symmetrical rows.


## Elevation & Depth

Noisia uses three depth layers. Never skip levels.

**Layer 0 — Atmosphere:** The grainy gradient blobs. These live on a `position: fixed; pointer-events: none; z-index: 0` layer. Applied as radial mesh gradients (`blob-dark → blob-mid → transparent`) with heavy Gaussian blur (`blur: 120px`) and a noise grain overlay (SVG filter or CSS `backdrop-filter` + fixed pseudo-element at `opacity: 0.035`). This is the environmental depth — it should never draw attention to itself.

**Layer 1 — Surface cards:** White or `surface-01` cards with diffuse shadow (`0 2px 16px rgba(0,0,0,0.04)`). The base level of all UI content.

**Layer 2 — Glass cards:** The `glass-card` component. Used when a panel needs to feel elevated above a blob region — the blurred gradient bleeds through the `backdrop-filter: blur(20px)` surface, creating the depth. This is the signature Noisia card treatment.

**Layer 3 — Overlays/modals:** `backdrop-blur-xl bg-white/80`, full shadow ring. Used for chat panels, sidebars, and confirmation dialogs.

**Shadow rules:**
- Never use `rgba(0,0,0,0.3)` — harsh shadows are banned.
- All shadows are diffuse, multi-layer, low opacity: `0 4px 32px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)`.
- On hover, cards lift: shadow transitions to `0 8px 48px rgba(0,0,0,0.10)` over `300ms cubic-bezier(0.32, 0.72, 0, 1)`.


## Shapes

**Border radius scale:** From `xs: 8px` (inline chips, small badges) up to `xl: 24px` (major feature cards and dashboard panels). `pill: 9999px` for buttons and tags exclusively.

**Concentric radii:** When nesting components (Double-Bezel), always subtract `6px` from the parent's radius for the child: parent `24px` → child `18px`. Never use identical radii for nested elements.

**Blobs:** Organic, asymmetric, borderless. They exist as pure atmospheric fills — never clip, never border, never shadow them directly.

**Icon strokes:** Phosphor Icons at `regular` or `light` weight. Standardize all icons to the same weight within a context. Never mix icon libraries in the same view.


## Components

### Primary Button
Full pill shape, `ink` background, white text. Internal button-in-button architecture: if an arrow icon is present, it must be wrapped in its own `w-7 h-7 rounded-full bg-white/10` container flush to the right inner padding. Hover: gradient shift toward `neutral-10`. Active: `scale(0.98)` press simulation.

### Tag / Eyebrow
Pill badge, `surface-02` background, `neutral-10` text, uppercase `letter-spacing: 0.06em`. Always precedes section headlines. Never use for interactive filtering without a hover state.

### Glass Card
The signature component. `backdrop-filter: blur(20px)` requires the parent to have a layered background (the blob atmosphere or a gradient) — it renders flat on a plain white background. Always pair with Double-Bezel outer shell. Inner content padding `40px`.

### Data Cards (Dashboard)
White cards, `border: 1px solid neutral-03`, `rounded-lg`. Metric values in `metric` typography style with `signal` accent for positive deltas, `tension` for negative. Chart color order: `signal`, `tension`, `whisper`, `neutral-09`.

### Pricing Card (Featured / Growth)
`ink` background, white text, `signal` for the checkmarks and accent text. "Best Deal" label in a small pill using `signal` at `opacity: 0.15` background with `signal` text.

### Accordion (FAQ)
Borderless. Items separated only by `border-bottom: 1px solid neutral-03`. Toggle icon: `+` rotates to `×` on open — never use chevrons. Content reveals with `max-height` transition over `400ms cubic-bezier(0.32, 0.72, 0, 1)`.


## Do's and Don'ts

**Do:**
- Use lowercase for all display headlines and hero text ("from noise to noisia")
- Let blob gradients bleed through glass cards — this is the depth signature
- Apply `mix-blend-mode: multiply` for the chromatic aberration logo effect (red layer `#EE0B00` + cyan layer `#00EEEE`)
- Use `signal` cyan for all positive data indicators, active states, and primary chart lines
- Give sections massive vertical padding — compression kills the premium feel
- Use `metric` typography (700 weight, tight tracking) for all numerical KPIs
- Keep all card shadows diffuse and layered (never single harsh shadows)

**Don't:**
- Never use pure black `#000000` for text — use `neutral-11` (`#2b2b2b`) or `ink` (`#0a0a0a`) for buttons only
- Never apply `backdrop-filter` to scrolling containers — only fixed/sticky elements
- Never use `signal` and `tension` together in the same component without clear semantic intent
- Never use Inter, Roboto, or Arial — these are explicitly banned
- Never apply blob colors (`blob-dark`, `blob-mid`, `blob-warm`) directly to UI elements
- Never use `whisper` lavender on interactive elements — data visualization only
- Never create symmetric, equal-weight card grids — asymmetric bento is required for feature sections
- Never use `shadow-md` or any single-layer dark shadow
- Never reproduce song lyrics, poems, or copyrighted material in any generated UI copy
