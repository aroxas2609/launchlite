type Item = {
  label: string;
};

const DEFAULT_ITEMS: Item[] = [
  { label: "Australia-first wording · AUD pricing cues" },
  { label: "Mobile UX prioritised by default" },
  { label: "SEO fundamentals baked into IA & metadata" },
  { label: "Fast enquiry pathways + sensible analytics hooks" },
];

type Props = {
  items?: Item[];
  className?: string;
};

export function TrustBar({ items = DEFAULT_ITEMS, className = "" }: Props) {
  return (
    <div className={`rounded-3xl border border-line bg-white px-6 py-8 shadow-card ${className}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-strong">
        Launch checklist
      </p>
      <ul className="mt-6 grid gap-3 text-sm text-slate sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.label} className="flex gap-3">
            <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-soft-blue text-[10px] font-bold text-accent">
              ✓
            </span>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
