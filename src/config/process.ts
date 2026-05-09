/**
 * ---------------------------------------------------------------------------
 * PROCESS — edit workflow copy here (homepage summary + detailed /process page)
 * ---------------------------------------------------------------------------
 */

export type ProcessPhase = {
  title: string;
  description: string;
};

/** Detailed steps shown on /process */
export const processPhases: ProcessPhase[] = [
  {
    title: "Discovery",
    description:
      "A short conversation to understand your business (or club), your audience, and what success looks like for your website.",
  },
  {
    title: "Content collection",
    description:
      "We gather text, logos, photos, and links. If anything is missing, I will guide you with a simple checklist—no jargon required.",
  },
  {
    title: "Design direction",
    description:
      "We align on a clean, modern look that suits your brand: layout, typography, colours, and the overall tone of the page.",
  },
  {
    title: "Build",
    description:
      "I assemble the website with performance and mobile readability in mind, keeping the structure clear for visitors.",
  },
  {
    title: "Review",
    description:
      "You preview the site and request revisions. Small adjustments are normal—this step is meant to remove stress, not add it.",
  },
  {
    title: "Launch",
    description:
      "We connect your domain, go live, and make sure forms and key pages behave correctly on phones and desktops.",
  },
  {
    title: "Optional support",
    description:
      "If you want ongoing help, we can arrange simple update support—content changes, new pages, or light maintenance.",
  },
];

/** Homepage five-step journey */
export const simpleProcessSteps = [
  {
    step: "1",
    title: "Tell me what you need",
    description:
      "Share your goals, audience, and any examples you like—even rough notes help.",
  },
  {
    step: "2",
    title: "I design and build your website",
    description:
      "I shape a clean layout, structured content areas, and a mobile-first experience.",
  },
  {
    step: "3",
    title: "You review and request changes",
    description:
      "We refine until it feels right for your brand and your customers.",
  },
  {
    step: "4",
    title: "We launch it online",
    description:
      "Go live with a clear handoff—you will know exactly what was set up.",
  },
  {
    step: "5",
    title: "Optional support after launch",
    description:
      "If you want help later, we can arrange simple updates—content tweaks, small improvements, or light maintenance.",
  },
] as const;
