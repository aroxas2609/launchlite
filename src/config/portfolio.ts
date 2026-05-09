/**
 * ---------------------------------------------------------------------------
 * PORTFOLIO / CASE STUDIES — edit projects, links & images here
 * ---------------------------------------------------------------------------
 * Images: PNG files in `public/images/` (manual or `npm run screenshots`).
 * If the site still shows old art: stop dev, delete `.next`, restart `npm run dev`.
 * TODO: Replace caseStudyUrl when ready
 */

export type PortfolioProject = {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  /** Used on cards and case study headers */
  placeholderImage: string;
  liveUrl: string;
  /** “Case study” link — can point to an anchor on /work or a future blog post */
  caseStudyUrl: string;
  overview: string;
  goal: string;
  features: string[];
  result: string;
  techUsed: string[];
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "prestons-run-club",
    name: "Prestons Run Club",
    category: "Community / club website",
    shortDescription:
      "A community run club website with events, waiver form, Instagram integration and merch direction.",
    placeholderImage: "/images/prestons-run-club.png",
    liveUrl: "https://prestonsrun.club",
    caseStudyUrl: "/work#prestons-run-club",
    overview:
      "A straightforward club site designed to help new runners find sessions, understand what to expect, and sign up without friction.",
    goal:
      "Make weekly runs easy to discover, reduce admin back-and-forth, and give the club a credible online home that matches how welcoming the group is in person.",
    features: [
      "Events and session information",
      "Waiver / sign-up flow",
      "Instagram integration",
      "Direction for merch and community links",
      "Mobile-first layout for on-the-go updates",
    ],
    result:
      "A clean, friendly site that helps members get the details fast—and gives curious newcomers confidence to join.",
    techUsed: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    slug: "johnstone-fencing",
    name: "Johnstone Fencing",
    category: "Tradie / local services",
    shortDescription:
      "A clean professional website for a local fencing business, focused on services, trust and enquiries.",
    placeholderImage: "/images/johnstone-fencing.png",
    liveUrl: "https://johnstonecivil.vercel.app",
    caseStudyUrl: "/work#johnstone-fencing",
    overview:
      "A practical service website structured around core offerings, credibility signals, and a simple enquiry path.",
    goal:
      "Help homeowners quickly understand options and service areas—and make contacting the business feel easy and trustworthy.",
    features: [
      "Clear services breakdown",
      "Trust-led layout (social proof placements)",
      "Strong enquiry/contact prompts",
      "Mobile-friendly browsing for onsite lookups",
      "Easy-to-scan FAQs-style sections where needed",
    ],
    result:
      "A professional presence that communicates reliability and makes the next step (a call or enquiry) obvious.",
    techUsed: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    slug: "apex-studios",
    name: "Apex Studios",
    category: "Photography portfolio",
    shortDescription:
      "A premium photography website concept designed for weddings, portraits, events and motorsports.",
    placeholderImage: "/images/apex-studios.png",
    liveUrl: "https://apexstudios-au.vercel.app",
    caseStudyUrl: "/work#apex-studios",
    overview:
      "A polished portfolio-forward concept with curated galleries and premium typography—built to feel upscale without being flashy.",
    goal:
      "Present a cohesive brand story, highlight signature work across categories, and guide visitors naturally toward booking or enquiry.",
    features: [
      "Portfolio/gallery-forward layout",
      "Category-friendly structure",
      "Premium visual rhythm and spacing",
      "Clear enquiry touchpoints",
      "Performance-conscious image presentation",
    ],
    result:
      "A modern, confident site that matches a high-end photography brand while staying easy for clients to navigate.",
    techUsed: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];
