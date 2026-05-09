/**
 * ---------------------------------------------------------------------------
 * BRAND SETTINGS — edit here first
 * ---------------------------------------------------------------------------
 */

export const BUSINESS_NAME = "LaunchLite Studio";

/** Short line for footer / trust — Australia + currency context */
export const BUSINESS_REGION_NOTE =
  "Australia-based studio · Prices shown in AUD";

/**
 * Canonical site URL (Open Graph, metadata).
 * Override in production: NEXT_PUBLIC_SITE_URL=https://launchlitestudio.com
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://launchlitestudio.com";

/**
 * Quote form notifications use server-only CONTACT_FORM_RECIPIENT (never NEXT_PUBLIC).
 */

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
] as const;
