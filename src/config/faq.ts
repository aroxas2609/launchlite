/**
 * ---------------------------------------------------------------------------
 * FAQ — shared between Homepage & Pricing (`siteFaq`)
 * ---------------------------------------------------------------------------
 */

export type FAQItem = {
  question: string;
  answer: string;
};

export const siteFaq: FAQItem[] = [
  {
    question: "Where are you based, and what currency do you use?",
    answer:
      "LaunchLite Studio is based in Australia. Package prices and quotes are in Australian dollars (AUD).",
  },
  {
    question: "Do I need to provide photos and text?",
    answer:
      "Yes—your words and images are what make the site feel like you. If you are not sure where to start, I can guide you with a simple content checklist and practical photo tips (phone photos can work with the right layout).",
  },
  {
    question: "Can you help with domain and hosting?",
    answer:
      "I can help you pick a straightforward setup and walk you through it in plain language. We choose hosting that matches your budget and how hands-on you want to be.",
  },
  {
    question: "Can I update the website later?",
    answer:
      "Yes. I build with modern tools so updates stay practical. You can request changes from me anytime, and I can also set you up to edit simple content when that makes sense.",
  },
  {
    question: "How long does it take?",
    answer:
      "Most small business sites land in a few weeks from kickoff to launch, depending on how quickly content is ready. I will give you a clear timeline after we talk through scope.",
  },
  {
    question: "Do you build online stores?",
    answer:
      "My focus is simple websites and MVP-style builds. For online stores, I can advise on the simplest path—or recommend a specialist if your shop needs complex inventory, rules, or subscriptions.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes. Optional support is available for updates, content tweaks, new pages, and basic maintenance—kept straightforward so it stays affordable.",
  },
  {
    question: "Is this suitable for small budgets?",
    answer:
      "Yes—that is the point. Packages are designed to be clear and realistic for small businesses and community groups, with optional add-ons only when they genuinely help.",
  },
];
