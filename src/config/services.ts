/**
 * ---------------------------------------------------------------------------
 * SERVICES — edit titles & blurbs (single source of truth)
 * ---------------------------------------------------------------------------
 */

export type Service = {
  title: string;
  description: string;
  accent: "electric" | "dusty" | "warm";
  /** Links to `/services/[slug]` programmatic pillar when set */
  slug?: string;
};

export const services: Service[] = [
  {
    title: "Small business websites",
    description:
      "Straightforward layouts that spell out services, suburbs, credibility, and the next step—booking, calling, or filling in a quick form.",
    accent: "electric",
    slug: "business-websites",
  },
  {
    title: "Tradie websites",
    description:
      "Trust-led pages for tradespeople: what you offer, areas you cover, proof of work, and a clear path to quote requests without confusing extras.",
    accent: "dusty",
    slug: "tradie-websites",
  },
  {
    title: "Club and community group websites",
    description:
      "Friendly, easy-to-read sites for local clubs with events, sign-ups, and community links people can find on a phone in two taps.",
    accent: "warm",
    slug: "club-websites",
  },
  {
    title: "Photography & portfolio websites",
    description:
      "Image-led galleries with calm typography that show your speciality—weddings, motorsports, portraits, or creative work—with simple enquiry paths.",
    accent: "electric",
    slug: "portfolio-websites",
  },
  {
    title: "Landing pages",
    description:
      "One focused launch page when you want a concise story, seasonal offer, or lead capture tied to QR codes, flyers, or ad campaigns.",
    accent: "dusty",
    slug: "landing-pages",
  },
  {
    title: "Website refreshes",
    description:
      "When your existing site feels dated or cramped, we tidy structure, improve mobile layout, and refresh visuals—without ripping everything apart.",
    accent: "warm",
    slug: "refresh",
  },
];
