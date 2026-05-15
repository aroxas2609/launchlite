import type { Testimonial } from "@/config/testimonials";

type Props = {
  items?: Testimonial[];
  className?: string;
};

export function TestimonialsSection({
  items,
  className = "",
}: Props) {
  const rows = items?.length ? items : [];

  if (!rows.length) return null;

  return (
    <section
      className={`mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24 ${className}`}
    >
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-strong">
          Proof points
        </p>
        <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-midnight sm:text-4xl">
          Trusted outcomes—without “agency theatre”.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate">
          Short snapshots from recent engagements (shown as anonymised roles—not verified Google reviews).
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {rows.map((item) => (
          <figure
            key={item.quote}
            className="flex h-full flex-col rounded-3xl border border-line bg-white p-8 shadow-card"
          >
            <blockquote className="flex-1 text-sm leading-relaxed text-midnight/85">
              “{item.quote}”
            </blockquote>
            <figcaption className="mt-6 border-t border-line/70 pt-6 text-xs text-slate">
              <p className="font-semibold text-midnight">{item.attribution}</p>
              {item.detail ? <p className="mt-2">{item.detail}</p> : null}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
