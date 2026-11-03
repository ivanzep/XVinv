# CLAUDE.md / AGENTS.md — Mis XV Años · Kyara (invitation site)

Instructions for any AI agent or developer editing this folder. The goal of every
edit: **the page must still look exactly like the printed invitation.** Change only
what the request asks for.

## What this is

A one-page, static, responsive invitation website. No build step, no framework,
no JS. Deployed as plain files (e.g. GitHub Pages at `/XVinv/xv-kyara/`).

```
xv-kyara/
├── index.html            # the whole site (HTML + inline <style>)
├── CLAUDE.md             # this file (copy/rename to AGENTS.md if your tool wants that)
└── assets/
    ├── invitacion.png    # 1024×1536 — the finished invitation: art + all text + icons
    └── fondo.png         # 1024×1536 — the same style background with NO text (side fill)
```

## How the page works (don't break this)

1. **`.card`** — a 2:3 box centered in the viewport, sized
   `width: min(100vw, 100dvh × 2/3)`. It holds `invitacion.png` at 100%, so the
   invitation is always fully visible at any aspect ratio, never cropped or stretched.
2. **`.side` panels** — six copies of `fondo.png`, each one card wide, placed at
   `left: ±100%, ±200%, ±300%` of the card. The ones at ±100% and ±300% are mirrored
   (`.flip` = `scaleX(-1)`) so the florals continue out from the card's edges. They fill
   the left and right gutters on wide screens and are clipped by `main { overflow:hidden }`.
   On portrait phones the card is full width, so the panels are off-screen.
3. **`.hot` hotspots** — transparent `<a>` links laid over the buttons drawn in the
   image, positioned in **% of the card** so they scale with it:
   | Button | left | top | width | height | href |
   |---|---|---|---|---|---|
   | VER EN MAPA | 37.1% | 66.75% | 26.2% | 3.05% | Google Maps search for Jardín Blanc, Zona Río, Tijuana |
   | CONFIRMA TU ASISTENCIA | 27% | 89.4% | 46.1% | 3.85% | `#` → **replace with the real RSVP link** |
   Percentages come from pixel boxes on the 1024×1536 image (x/1024, y/1536).
   Hover/focus is a soft white ring + warm shadow only; never draw a visible button over the art.

## Hard rules

- **Never alter, recrop, recolor, compress or regenerate `invitacion.png` or `fondo.png`.**
  Text and icons live *inside* the image on purpose, so the original typography stays exact.
- Keep the 2:3 ratio and `object-fit: contain`. No `cover`, no fixed px sizes for the card.
- Keep the background color `#F4F1EB` on `html/body/main` (it matches the paper).
- No new frameworks, CDNs, trackers, cookie banners, popups, or autoplay audio unless asked.
- Keep `lang="es"`. All visible copy is Spanish, using the invitation's wording.
- Keep the `alt` text on the image in sync with the image's content (accessibility).
- Every link must stay a real `<a href>` with an `aria-label`. Touch targets ≥ 44 px on phones
  (if a hotspot gets too small, enlarge its hit area, not its look).
- Respect `prefers-reduced-motion` for any animation you add.

## Changing the invitation's content (dates, times, venue, wording)

The text is baked into `invitacion.png`. To change it:
1. Get a new full invitation image from the designer at **1024×1536** (or any exact 2:3 size),
   with the same layout, and replace `assets/invitacion.png`.
2. If the buttons moved, re-measure them and update the hotspot percentages.
3. Update the `alt` text, `<title>`, `description` and `og:` meta tags to match.
Do **not** overlay HTML text on the image to "patch" a word; it won't match the typography.

Known content issue: the image shows **FIESTA 7:00 PM – 1:00 AM**, the same start time as
RECEPCIÓN. Confirm with the family before reprinting. Fixing it means a new image.

## Adding new HTML sections (if ever asked)

The page is designed as the image alone. If a request truly needs live HTML (an RSVP form,
countdown, gallery, music button), place it **below** the card in its own section, or in a
modal. Never place it on top of the artwork. Match this design language:

**Palette** (sampled from the artwork)
| Role | Hex |
|---|---|
| Paper / ground | `#F4F1EB` (`#F5F2EC`) |
| Deep brown text (titles, labels, body) | `#3E2616` – `#432D21` |
| Gold script / accents ("Kyara", icons, snowflakes) | `#866344` – `#88492A` |
| Button fill (pill) | `#927252` with paper-colored text |
| Hairline frame / dividers | `#E3D8CD` → gold `#B08A68`-ish at 1 px |

**Typography** (closest web equivalents, via Google Fonts)
- Name: flowing formal script, gold — e.g. *Great Vibes* or *Pinyon Script*.
- Headings/labels ("MIS XV AÑOS", "ITINERARIO", "LUGAR"): high-contrast serif, ALL CAPS,
  wide tracking (`letter-spacing: .25–.35em`) — e.g. *Cormorant Garamond* / *Cinzel* 500.
- Body / quote: same serif, italic for quotes, sentence case, ~1.5 line height.

**Shapes & motifs**
- Pill buttons (`border-radius: 999px`), solid `#927252`, uppercase tracked serif label,
  a thin outline icon on the left and a → arrow on the right.
- 1 px gold hairlines with a small centered snowflake or ✦ sparkle as dividers.
- Thin-stroke outline icons (1–1.5 px, gold/brown). No emoji, no filled icon sets.
- Lots of whitespace, symmetric and centered, winter-white poinsettia mood.
- No gradients, heavy shadows, bright colors, rounded cards, or sans-serif UI fonts.

## Checking an edit

Open `index.html` locally and check at least: 390×844 (phone), 768×1024 (tablet),
1440×900 (laptop), 2560×1080 (ultra-wide). Confirm:
- the full invitation is visible and centered, nothing is cropped;
- the side florals fill the gutters with no gaps or blank bands;
- both hotspots sit exactly over their drawn buttons and open the right links;
- no horizontal scrollbar.
