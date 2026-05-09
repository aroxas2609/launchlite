/**
 * ---------------------------------------------------------------------------
 * BRAND SETTINGS — edit here first
 * ---------------------------------------------------------------------------
 */

export const BUSINESS_NAME = "LaunchLite Studio";

/**
 * Canonical site URL (Open Graph, metadata).
 * Override in production: NEXT_PUBLIC_SITE_URL=https://launchlitestudio.com
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://launchlitestudio.com";

/**
 * Do not put your private inbox here — it would appear in the client bundle if imported in client components.
 * Quote notifications use server-only env CONTACT_FORM_RECIPIENT (see .env.example).
 */

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
] as const;
