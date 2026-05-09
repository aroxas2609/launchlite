/**
 * ---------------------------------------------------------------------------
 * BRAND SETTINGS — edit here first
 * ---------------------------------------------------------------------------
 * TODO: Replace "LaunchLite Studio" with your final business name.
 * Hint: Search the codebase for LaunchLite Studio if you rename later.
 */

export const BUSINESS_NAME = "LaunchLite Studio";

/** TODO: Set your deployed site URL for Open Graph / canonical links */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://launchlite-studio.example";

/** TODO: Replace with your public contact email */
export const CONTACT_EMAIL = "hello@launchlitestudio.example";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
] as const;
