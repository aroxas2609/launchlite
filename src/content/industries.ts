import type { FAQItem } from "@/config/faq";

export type IndustryContent = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  sections: { heading: string; body: string[] }[];
  faq: FAQItem[];
  relatedIndustrySlugs: string[];
  relatedServiceSlugs: string[];
  relatedLocationSlugs: string[];
};

export const industries: IndustryContent[] = [
  {
    slug: "photographers",
    metaTitle: "Photography business websites (Australia)",
    metaDescription:
      "Portfolio-forward photography websites with galleries, bookings cues and mobile polish—built affordably for Australian photographers.",
    h1: "Photography websites that keep attention on your images.",
    lead:
      "Your photos should load fast, feel premium, and guide couples or brands toward enquiry without clutter. I structure galleries and stories so visitors skim effortlessly on phones.",
    sections: [
      {
        heading: "What photographers typically prioritise",
        body: [
          "Hero layouts that showcase signature work first.",
          "Category pages (weddings, portraits, events) when you cross niches.",
          "Clear pricing cues or enquiry prompts—without awkward gatekeeping.",
        ],
      },
      {
        heading: "SEO that respects creative brands",
        body: [
          "Natural titles for suburbs or regions you genuinely serve.",
          "Blog-ready foundations when you want long-tail discovery later.",
          "Schema-aware templates without stuffing keywords into captions.",
        ],
      },
    ],
    faq: [
      {
        question: "Can you handle large galleries?",
        answer:
          "Yes—with sensible compression and lazy loading so mobile stays smooth. We sequence hero shots vs archives thoughtfully.",
      },
      {
        question: "Do you integrate client galleries?",
        answer:
          "If your workflow uses a trusted provider, embeds often work well. Deep custom gallery apps may need a specialist.",
      },
    ],
    relatedIndustrySlugs: ["clubs"],
    relatedServiceSlugs: ["portfolio-websites", "landing-pages"],
    relatedLocationSlugs: ["parramatta", "sydney"],
  },
  {
    slug: "electricians",
    metaTitle: "Electrician & sparky websites in Australia",
    metaDescription:
      "Tradie websites for electricians—trust-led layouts, service clarity, emergency cues and quote flows tuned for Australian customers.",
    h1: "Electrician websites built around trust and fast enquiries.",
    lead:
      "People searching for electricians want licences, services and areas—fast. I foreground credibility signals and strip friction from quote paths.",
    sections: [
      {
        heading: "Layouts that convert intent",
        body: [
          "Services grouped how homeowners search (installs, fault finding, upgrades).",
          "Mobile-first tap targets for calls and emails.",
          "FAQ blocks answering repeat safety and booking questions.",
        ],
      },
      {
        heading: "Structured for AI summaries",
        body: [
          "Questions as headings where helpful.",
          "Plain-language answers directly underneath.",
          "Concise definitions near the top of pages.",
        ],
      },
    ],
    faq: [
      {
        question: "Can you list licences or certifications?",
        answer:
          "Yes—where you provide accurate wording. Compliance-heavy claims should stay factual and current.",
      },
      {
        question: "Do you write technical electrical copy?",
        answer:
          "You supply technical accuracy; I shape layout-friendly phrasing for everyday homeowners.",
      },
    ],
    relatedIndustrySlugs: ["tradies"],
    relatedServiceSlugs: ["tradie-websites", "business-websites"],
    relatedLocationSlugs: ["liverpool", "western-sydney"],
  },
  {
    slug: "fencing",
    metaTitle: "Fencing contractor websites",
    metaDescription:
      "Clean fencing contractor websites with materials, service areas and quote prompts—mobile-first builds for Australian trades.",
    h1: "Fencing sites that explain materials and service areas clearly.",
    lead:
      "Fence buyers compare options quickly—timber, colorbond, pool regs—your website should answer baseline questions and invite quotes without clutter.",
    sections: [
      {
        heading: "Sections that help comparisons",
        body: [
          "Materials & styles overview with skimmable bullets.",
          "Gallery proof without slowing loads.",
          "Repeat CTAs after credibility sections.",
        ],
      },
      {
        heading: "Good neighbours with SEO",
        body: [
          "Honest suburb/service-area wording tied to how you quote jobs.",
          "Structured headings for common variants (pool fencing, boundary fences).",
          "Links to pricing snapshots when prospects want ballpark clarity.",
        ],
      },
    ],
    faq: [
      {
        question: "Can I show pool fencing disclaimers?",
        answer:
          "Yes—short compliance notes are fine where accurate. Legal certainty may still need professional advice for your state rules.",
      },
      {
        question: "Do you integrate measuring forms?",
        answer:
          "Simple enquiry forms work well. Complex quoting calculators may be scoped separately.",
      },
    ],
    relatedIndustrySlugs: ["tradies"],
    relatedServiceSlugs: ["tradie-websites", "landing-pages"],
    relatedLocationSlugs: ["campbelltown", "western-sydney"],
  },
  {
    slug: "tradies",
    metaTitle: "Tradie websites (Australia)",
    metaDescription:
      "Affordable tradie websites with proof-led layouts, quote prompts and mobile UX—built for Australian trades and local services.",
    h1: "Tradie websites that look sharp but stay practical.",
    lead:
      "Your trade wins when visitors instantly understand services, areas and how to request a quote. I balance credibility with speed—because slow sites lose jobs.",
    sections: [
      {
        heading: "Proof-first presentation",
        body: [
          "Project imagery when available.",
          "Short testimonials (text-only on-page—no risky schema tricks).",
          "Microcopy around response times when that is your edge.",
        ],
      },
      {
        heading: "Works alongside ads & flyers",
        body: [
          "Dedicated landing pages when you run seasonal pushes.",
          "Consistent phone/email pathways across pages.",
          "Optional QR-friendly layouts linking offline → online.",
        ],
      },
    ],
    faq: [
      {
        question: "What if I only have phone photos?",
        answer:
          "Often fine—good lighting and tidy cropping go far. We pair them with layout spacing that feels intentional.",
      },
      {
        question: "Can you manage hosting forever?",
        answer:
          "I offer optional support retainers; you always retain ownership of core assets.",
      },
    ],
    relatedIndustrySlugs: ["electricians", "fencing"],
    relatedServiceSlugs: ["tradie-websites", "business-websites"],
    relatedLocationSlugs: ["western-sydney", "liverpool"],
  },
  {
    slug: "gyms",
    metaTitle: "Gym & fitness studio websites",
    metaDescription:
      "Modern gym websites with timetables cues, membership prompts and mobile layouts—affordable builds for Australian studios.",
    h1: "Gym websites that sell trials with clarity.",
    lead:
      "Prospects want timetable intuition, trainer credibility and simple trial/contact flows. I emphasise mobile UX because most discovery happens between sets—or between meetings.",
    sections: [
      {
        heading: "What gyms benefit from most",
        body: [
          "Trainer highlights without burying the timetable.",
          "Membership pathways explained plainly.",
          "Embedded booking tools when third-party platforms fit.",
        ],
      },
      {
        heading: "Voice-search friendly phrasing",
        body: [
          "Natural FAQs (“What should I bring?” “Do you offer beginners classes?”).",
          "Short opening summaries suitable for AI overviews.",
        ],
      },
    ],
    faq: [
      {
        question: "Can you integrate Mindbody or similar?",
        answer:
          "Often yes via official embeds/widgets—depends on your provider. Complex integrations may need scoped discovery.",
      },
      {
        question: "Do you supply photography?",
        answer:
          "You source imagery; I optimise placement and loading. Stock can supplement sparingly if licensing is clear.",
      },
    ],
    relatedIndustrySlugs: ["clubs"],
    relatedServiceSlugs: ["business-websites", "landing-pages"],
    relatedLocationSlugs: ["parramatta", "sydney"],
  },
  {
    slug: "clubs",
    metaTitle: "Club & community group websites",
    metaDescription:
      "Friendly club websites with events, volunteers and join flows—mobile-first builds for Australian community groups.",
    h1: "Club websites that welcome newcomers warmly.",
    lead:
      "Community sites should answer “when, where, how to join” instantly. I prioritise legibility, gentle tone and straightforward volunteer pathways.",
    sections: [
      {
        heading: "Built around recurring rhythms",
        body: [
          "Event/session clarity near the top.",
          "Policies/waivers linked cleanly when needed.",
          "Social integrations where they genuinely help discovery.",
        ],
      },
      {
        heading: "Accessible by default",
        body: [
          "Strong contrast on body copy.",
          "Tap-friendly navigation patterns.",
          "Clear landmark headings for screen readers.",
        ],
      },
    ],
    faq: [
      {
        question: "Can we sell merch or tickets?",
        answer:
          "Lightweight links work well; complex commerce may need a dedicated platform.",
      },
      {
        question: "Who updates news posts?",
        answer:
          "Optional training or light retainers—pick what suits volunteer capacity.",
      },
    ],
    relatedIndustrySlugs: ["gyms"],
    relatedServiceSlugs: ["club-websites", "business-websites"],
    relatedLocationSlugs: ["liverpool", "sydney"],
  },
];

export const industrySlugs = industries.map((i) => i.slug);

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
