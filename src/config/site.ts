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
 * Public contact address — shown on the Contact page. Should match your DNS
 * forwarding (e.g. contact@ → personal inbox). Form delivery still uses
 * server-only CONTACT_FORM_RECIPIENT.
 */
export const PUBLIC_CONTACT_EMAIL = "contact@launchlitestudio.com";

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
