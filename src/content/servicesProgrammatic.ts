import type { FAQItem } from "@/config/faq";

export type ProgrammaticServiceContent = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  sections: { heading: string; body: string[] }[];
  faq: FAQItem[];
  relatedServiceSlugs: string[];
  relatedIndustrySlugs: string[];
  relatedLocationSlugs: string[];
};

export const programmaticServices: ProgrammaticServiceContent[] = [
  {
    slug: "business-websites",
    metaTitle: "Small business websites (Australia)",
    metaDescription:
      "Affordable small business websites with SEO-ready structure, mobile layouts and clear enquiry flows—AUD pricing from LaunchLite Studio.",
    h1: "Small business websites that communicate trust instantly.",
    lead:
      "Most buyers skim on phones—your site should explain services, areas and proof with calm typography and decisive calls-to-action.",
    sections: [
      {
        heading: "What you get",
        body: [
          "Structured service sections that scale as you grow.",
          "FAQ patterns tuned for voice-style searches.",
          "Analytics-ready hookups when you enable measurement.",
        ],
      },
      {
        heading: "Honest scope",
        body: [
          "Straightforward packages plus guidance when add-ons truly help.",
          "Recommendations if your needs exceed boutique scope.",
        ],
      },
    ],
    faq: [
      {
        question: "Is this suitable for multi-location brands?",
        answer:
          "Often yes at modest scale. Large franchises usually need enterprise tooling—I will flag that early.",
      },
      {
        question: "Can we iterate after launch?",
        answer:
          "Yes—optional support retainers keep updates painless.",
      },
    ],
    relatedServiceSlugs: ["landing-pages", "refresh"],
    relatedIndustrySlugs: ["tradies", "gyms"],
    relatedLocationSlugs: ["western-sydney", "parramatta"],
  },
  {
    slug: "landing-pages",
    metaTitle: "Landing pages for campaigns & offers",
    metaDescription:
      "Focused landing pages for Australian SMBs—fast launches, conversion-led layouts and measurable CTAs without rebuilding your entire site.",
    h1: "Landing pages when one message deserves the spotlight.",
    lead:
      "Campaigns need singular stories—offer, proof, next step. I strip distractions so QR codes, ads or flyers land with clarity.",
    sections: [
      {
        heading: "Ideal scenarios",
        body: [
          "Seasonal trade pushes.",
          "Event registrations.",
          "Lead magnets tied to paid ads.",
        ],
      },
      {
        heading: "Technical hygiene",
        body: [
          "Performance-conscious assets.",
          "Semantic headings even when layouts are short.",
          "Tracking hooks compatible with GA4 events.",
        ],
      },
    ],
    faq: [
      {
        question: "Do you duplicate my entire website?",
        answer:
          "No—a landing page is intentionally narrow and pairs with your primary domain or subdomain strategy.",
      },
      {
        question: "How fast can we ship?",
        answer:
          "Depends on creative readiness—many lightweight pages move quickly once copy exists.",
      },
    ],
    relatedServiceSlugs: ["business-websites"],
    relatedIndustrySlugs: ["photographers", "tradies"],
    relatedLocationSlugs: ["sydney", "liverpool"],
  },
  {
    slug: "tradie-websites",
    metaTitle: "Tradie websites & trade sites",
    metaDescription:
      "Tradie-first websites with proof-led layouts, quote prompts and suburb-aware messaging—mobile UX tuned for Australian trades.",
    h1: "Tradie websites—straight talk, fast enquiries.",
    lead:
      "Prospects want signals you are legitimate—areas covered, services, proof of work. I foreground those elements without gimmicky templates.",
    sections: [
      {
        heading: "Structured for services people actually Google",
        body: [
          "Grouped offerings with descriptive headings.",
          "Repeated CTAs after credibility cues.",
          "Emergency/service-hour prompts where relevant.",
        ],
      },
      {
        heading: "Pairs well with local SEO fundamentals",
        body: [
          "Honest area wording aligned with how you quote.",
          "Internal links between flagship services.",
          "Compatible with Google Business Profile signals.",
        ],
      },
    ],
    faq: [
      {
        question: "Can you embed quoting calculators?",
        answer:
          "Simple forms yes—advanced calculators may need phased scope.",
      },
      {
        question: "Do you supply logo redraws?",
        answer:
          "Basic cleanup sometimes—full branding sits outside core web scope.",
      },
    ],
    relatedServiceSlugs: ["business-websites", "landing-pages"],
    relatedIndustrySlugs: ["electricians", "fencing"],
    relatedLocationSlugs: ["western-sydney", "campbelltown"],
  },
  {
    slug: "portfolio-websites",
    metaTitle: "Portfolio websites for creatives",
    metaDescription:
      "Portfolio websites with gallery-first UX and enquiry prompts—built for photographers, studios and Australian creatives.",
    h1: "Portfolio websites that feel intentional, not templated.",
    lead:
      "Creative portfolios should choreograph attention—lead with signature work, then deepen categories without burying contact routes.",
    sections: [
      {
        heading: "Designed around storytelling",
        body: [
          "Chapter-like sections for services.",
          "Motion restraint so imagery stays hero.",
          "Typography pairing aligned with your tone.",
        ],
      },
      {
        heading: "Technical finesse",
        body: [
          "Responsive image handling.",
          "Semantic captions where meaningful.",
          "Structured metadata support via Next.js defaults.",
        ],
      },
    ],
    faq: [
      {
        question: "Can we integrate print sales?",
        answer:
          "Often via external platforms—depends on your fulfilment stack.",
      },
      {
        question: "Will my images look soft on retina?",
        answer:
          "We export/layout assets mindful of DPR—sharp without obese payloads.",
      },
    ],
    relatedServiceSlugs: ["landing-pages", "refresh"],
    relatedIndustrySlugs: ["photographers"],
    relatedLocationSlugs: ["sydney", "parramatta"],
  },
  {
    slug: "club-websites",
    metaTitle: "Club & community websites",
    metaDescription:
      "Friendly club websites with join flows and volunteers clarity—lightweight, affordable builds for Australian groups.",
    h1: "Club websites that explain “how to join” in seconds.",
    lead:
      "Volunteers do not have time for maze navigation—your story, sessions and signup pathway belong upfront.",
    sections: [
      {
        heading: "Volunteer-friendly updates",
        body: [
          "Simple editing patterns when appropriate.",
          "Documentation so committee handovers survive.",
        ],
      },
      {
        heading: "Trust cues",
        body: [
          "Safety notes linked cleanly.",
          "Partners/sponsors displayed responsibly.",
        ],
      },
    ],
    faq: [
      {
        question: "Can we password-lock sections?",
        answer:
          "Possible via hosting/auth tooling—scoped case-by-case.",
      },
      {
        question: "Can members pay online?",
        answer:
          "Depends on providers—light embeds vs bespoke gateways varies widely.",
      },
    ],
    relatedServiceSlugs: ["business-websites"],
    relatedIndustrySlugs: ["clubs"],
    relatedLocationSlugs: ["liverpool", "campbelltown"],
  },
  {
    slug: "refresh",
    metaTitle: "Website refresh & redesign help",
    metaDescription:
      "Website refreshes for Australian SMBs—tidy layouts, mobile fixes and SEO fundamentals without unnecessary rebuilds.",
    h1: "Website refreshes when your story is right—but the shell feels tired.",
    lead:
      "Sometimes structure is salvageable—navigation, typography and spacing renew credibility faster than starting from zero.",
    sections: [
      {
        heading: "Refresh vs rebuild",
        body: [
          "Audits of what is costing conversions.",
          "Incremental roadmap vs wholesale redesign recommendations.",
        ],
      },
      {
        heading: "SEO-safe migrations",
        body: [
          "Redirects guidance when URLs change.",
          "Canonical discipline throughout.",
        ],
      },
    ],
    faq: [
      {
        question: "Can you work inside existing builders?",
        answer:
          "Focus here is modern codebases—if you are on restrictive builders, I will advise pragmatic paths.",
      },
      {
        question: "Will rankings tank?",
        answer:
          "Proper redirects + continuity reduce risk—algorithm shifts still happen; we minimise technical self-inflicted issues.",
      },
    ],
    relatedServiceSlugs: ["business-websites"],
    relatedIndustrySlugs: ["tradies"],
    relatedLocationSlugs: ["western-sydney"],
  },
];

export const programmaticServiceSlugs = programmaticServices.map((s) => s.slug);

export function getProgrammaticService(slug: string) {
  return programmaticServices.find((s) => s.slug === slug);
}
