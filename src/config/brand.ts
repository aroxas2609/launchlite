/**
 * ---------------------------------------------------------------------------
 * BRAND — messaging + identity reference
 * ---------------------------------------------------------------------------
 * Palette (see also src/app/globals.css @theme):
 *   Midnight #0B0F14 · Snow #F8FAFC · Electric Blue #3B82F6 · Slate #64748B
 *   Line #E2E8F0 · Dusty Blue #7C9AB0 · Cream #FAF7F2 · Beige #D6C2A8 · Charcoal accent #1E1E1E
 * Typography (see layout.tsx):
 *   Headings: Sora · Body: Inter
 * ---------------------------------------------------------------------------
 */

export const MAIN_TAGLINE =
  "Affordable websites that make small businesses look professional.";

/** Hero eyebrow — avoid repeating “agency price tag” (that phrase lives once in body copy). */
export const HERO_EYEBROW =
  "Boutique studio · Modern polish · Plain-English delivery";

/** Footer / meta — one clear positioning line (avoid stacking next to hero eyebrow on same screen) */
export const POSITIONING_ONE_LINER =
  "Premium-looking websites without the big agency price tag.";

/** Rotate these in the ribbon — keep short; max ~4 to avoid clutter */
export const BRAND_TAGLINES = [
  "Clean websites. Professional results.",
  "Modern sites for local businesses",
  "Websites made simple",
  "Launch your business online",
] as const;
