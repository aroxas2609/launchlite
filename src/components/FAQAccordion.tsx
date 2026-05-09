import type { FAQItem } from "@/config/faq";

type Props = {
  items: FAQItem[];
};

export function FAQAccordion({ items }: Props) {
  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-white shadow-card">
      {items.map((item) => (
        <details
          key={item.question}
          className="group p-5 sm:p-6 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-base font-semibold text-midnight">
            <span>{item.question}</span>
            <span
              className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line bg-soft-blue text-sm text-accent transition group-open:rotate-45"
              aria-hidden
            >
              +
            </span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-slate">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
