export type Testimonial = {
  quote: string;
  /** Neutral attribution label — avoid implying undocumented reviews */
  attribution: string;
  detail?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Clear timelines and straightforward explanations—we launched without chasing jargon.",
    attribution: "Community group volunteer",
    detail: "Club-focused rebuild",
  },
  {
    quote:
      "The mobile layout finally matched how customers actually browse—quotes picked up straight away.",
    attribution: "Local trade operator",
    detail: "Service-led layout refresh",
  },
  {
    quote:
      "We kept ownership of our domain and tools—everything felt transparent.",
    attribution: "Regional fitness studio",
    detail: "Launch + structured FAQs",
  },
];
