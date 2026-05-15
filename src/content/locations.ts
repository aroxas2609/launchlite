import type { FAQItem } from "@/config/faq";

export type LocationContent = {
  slug: string;
  /** `<title>` segment */
  metaTitle: string;
  metaDescription: string;
  h1: string;
  /** Answer-first lead */
  lead: string;
  suburbs: string[];
  sections: { heading: string; body: string[] }[];
  faq: FAQItem[];
  relatedLocationSlugs: string[];
  relatedIndustrySlugs: string[];
  relatedServiceSlugs: string[];
};

export const locations: LocationContent[] = [
  {
    slug: "sydney",
    metaTitle: "Affordable websites for Sydney small businesses",
    metaDescription:
      "LaunchLite Studio builds fast, mobile-first websites for Sydney cafes, gyms, tradies and services—clear AUD pricing and SEO-ready foundations.",
    h1: "Websites for Sydney businesses that need clarity—not chaos.",
    lead:
      "If you operate across Sydney, your customers decide fast on their phones. I build tidy service sites and portfolios that explain what you do, where you work, and the simplest next step to enquire.",
    suburbs: [
      "CBD & inner suburbs",
      "North Shore touchpoints",
      "Inner West corridors",
      "Eastern Suburbs trade routes",
      "Greater Sydney growth corridors",
    ],
    sections: [
      {
        heading: "What Sydney clients usually need most",
        body: [
          "A trustworthy layout that reads well on mobile (because most searches still happen on phones).",
          "Clear headings for services and suburbs without stuffing keywords.",
          "Fast contact paths—call, email, or short quote forms—so intent turns into action.",
        ],
      },
      {
        heading: "Local SEO without gimmicks",
        body: [
          "We structure pages so Google understands your services and service intent.",
          "Where it helps, we add suburb-aware copy that reflects how you actually operate.",
          "You keep ownership of your domain and tools—no mystery lock-ins.",
        ],
      },
    ],
    faq: [
      {
        question: "Do you build websites for businesses outside Western Sydney?",
        answer:
          "Yes—many projects are remote-friendly once scope is clear. If you are Sydney-wide or NSW-wide, we reflect that honestly in headings and content.",
      },
      {
        question: "Can you help me rank for “near me” searches?",
        answer:
          "A solid site plus accurate service descriptions helps—but rankings depend on competition and your Google Business Profile too. I focus on fast, credible sites that give you a fair shot.",
      },
    ],
    relatedLocationSlugs: ["western-sydney", "parramatta"],
    relatedIndustrySlugs: ["photographers", "gyms"],
    relatedServiceSlugs: ["business-websites", "landing-pages"],
  },
  {
    slug: "western-sydney",
    metaTitle: "Western Sydney websites for tradies & local businesses",
    metaDescription:
      "Affordable Western Sydney web design for trades, clubs and services—mobile-first builds, suburb-aware content and straightforward AUD pricing.",
    h1: "Western Sydney websites built for real enquiries.",
    lead:
      "Western Sydney moves fast—locals compare options on their phones between jobs. I build lightweight marketing sites that explain services clearly, show proof, and make contacting you effortless.",
    suburbs: [
      "Fairfield corridor",
      "Canterbury-Bankstown touchpoints",
      "South-west growth centres",
      "Parramatta catchment links",
      "Commuter routes around Liverpool",
    ],
    sections: [
      {
        heading: "Designed for how locals actually search",
        body: [
          "Short paragraphs and proper headings so visitors skim quickly.",
          "Industry-specific language that still reads naturally (no robotic keyword lists).",
          "Clear calls-to-action placed after trust-building sections.",
        ],
      },
      {
        heading: "Works for busy operators",
        body: [
          "Plain-English timelines so you can plan around work on-site.",
          "Simple content checklists if you are starting from scratch.",
          "Optional ongoing help when you want updates without rebuilding.",
        ],
      },
    ],
    faq: [
      {
        question: "I serve multiple suburbs—can one website cover it?",
        answer:
          "Usually yes. We prioritise your primary areas first, then extend pages only where it genuinely helps customers (not spammy clones).",
      },
      {
        question: "Do you meet on-site?",
        answer:
          "Most projects run smoothly via email and scheduled calls. If you are nearby and prefer an in-person kickoff, mention it in your enquiry.",
      },
    ],
    relatedLocationSlugs: ["liverpool", "campbelltown"],
    relatedIndustrySlugs: ["tradies", "fencing"],
    relatedServiceSlugs: ["tradie-websites", "business-websites"],
  },
  {
    slug: "liverpool",
    metaTitle: "Liverpool NSW affordable website design",
    metaDescription:
      "Modern websites for Liverpool NSW businesses and clubs—fast builds, mobile layouts, suburb-aware messaging and simple quote requests.",
    h1: "Liverpool-ready websites that earn trust quickly.",
    lead:
      "Liverpool customers compare quickly: they want prices, areas covered, and proof you are legitimate. I deliver crisp layouts with confident typography and straightforward enquiry flows.",
    suburbs: [
      "Liverpool CBD adjacency",
      "Casula & Prestons corridors",
      "Hoxton Park links",
      "Warwick Farm routes",
      "Nearby Moorebank connections",
    ],
    sections: [
      {
        heading: "Great fit for local trades & clubs",
        body: [
          "Tradie sites that foreground services and enquiry clarity.",
          "Club/community layouts that highlight events and joining.",
          "Photo-forward portfolios when visuals sell your work.",
        ],
      },
      {
        heading: "Built with performance in mind",
        body: [
          "Lean pages so mobile connections stay responsive.",
          "Images tuned so galleries stay sharp without slowing loads.",
          "Accessible contrast and spacing patterns consistent with your brand.",
        ],
      },
    ],
    faq: [
      {
        question: "Can you reference Liverpool suburbs without hurting SEO?",
        answer:
          "Yes—when it reflects real service areas and reads naturally. We avoid duplicate doorway pages; uniqueness matters.",
      },
      {
        question: "What do you need from me to start?",
        answer:
          "A short brief: services, ideal customers, timeline, and any assets (logo, photos). If content is partial, we sequence what comes next.",
      },
    ],
    relatedLocationSlugs: ["western-sydney", "campbelltown"],
    relatedIndustrySlugs: ["electricians", "clubs"],
    relatedServiceSlugs: ["business-websites", "landing-pages"],
  },
  {
    slug: "parramatta",
    metaTitle: "Parramatta small business websites",
    metaDescription:
      "Professional Parramatta-area websites for services, gyms and creatives—SEO-ready structure, mobile layouts and transparent AUD pricing.",
    h1: "Parramatta-area sites that feel credible on mobile.",
    lead:
      "Parramatta’s audience blends commuters, families and growing businesses—your website should communicate reliability fast. I focus on tight messaging, structured services and friction-free enquiries.",
    suburbs: [
      "Parramatta CBD",
      "Rosehill surrounds",
      "Granville links",
      "North Parramatta connections",
      "Westmead corridor routes",
    ],
    sections: [
      {
        heading: "Messaging that fits competitive suburbs",
        body: [
          "Differentiation without gimmicks—what you do, who it helps, how it works.",
          "FAQ sections that answer repeat buyer questions (great for AI summaries too).",
          "Cross-links to pricing and process so visitors understand delivery.",
        ],
      },
      {
        heading: "Launch paths that respect your schedule",
        body: [
          "Clear milestones from discovery to launch.",
          "Preview checkpoints before anything goes live.",
          "Training notes when you want light-touch editing later.",
        ],
      },
    ],
    faq: [
      {
        question: "Can you integrate bookings or memberships?",
        answer:
          "Where scope stays lean, yes—often via trusted third-party embeds. Complex membership logic may need a specialist; I will say so early.",
      },
      {
        question: "Do you handle domains & hosting?",
        answer:
          "I guide you through simple setups in plain English so you retain ownership. You choose providers that fit your budget.",
      },
    ],
    relatedLocationSlugs: ["western-sydney", "sydney"],
    relatedIndustrySlugs: ["gyms", "photographers"],
    relatedServiceSlugs: ["business-websites", "portfolio-websites"],
  },
  {
    slug: "campbelltown",
    metaTitle: "Campbelltown website design for local businesses",
    metaDescription:
      "Affordable Campbelltown & Macarthur websites—tradie sites, clubs and portfolios with suburb-aware copy, fast mobile UX and clear CTAs.",
    h1: "Campbelltown & Macarthur websites with neighbour-friendly clarity.",
    lead:
      "Macarthur customers appreciate straightforward honesty: show services, areas and proof. I deliver layouts that feel premium without enterprise overhead.",
    suburbs: [
      "Campbelltown CBD",
      "Macarthur growth corridors",
      "Narellan links",
      "Ingleburn routes",
      "Camden touchpoints",
    ],
    sections: [
      {
        heading: "Ideal for growing corridors",
        body: [
          "Landing pages for seasonal campaigns.",
          "Multi-section service sites when you offer multiple trades.",
          "Portfolio-forward builds for photographers and creatives.",
        ],
      },
      {
        heading: "SEO fundamentals baked in",
        body: [
          "Semantic headings and descriptive alt text on key visuals.",
          "Clean URLs and canonical discipline.",
          "Internal linking that reinforces services you want known for.",
        ],
      },
    ],
    faq: [
      {
        question: "How fast can we launch?",
        answer:
          "Small sites often move in a few weeks once content is ready. If you are racing an opening date, tell me early so we sequence realistically.",
      },
      {
        question: "Do you write copy?",
        answer:
          "You supply the facts and tone; I shape layout-friendly copy where helpful. For specialised compliance industries, we may recommend a copywriter.",
      },
    ],
    relatedLocationSlugs: ["liverpool", "western-sydney"],
    relatedIndustrySlugs: ["fencing", "tradies"],
    relatedServiceSlugs: ["tradie-websites", "refresh"],
  },
];

export const locationSlugs = locations.map((l) => l.slug);

export function getLocation(slug: string) {
  return locations.find((l) => l.slug === slug);
}
