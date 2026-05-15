import Link from "next/link";
import type { Service } from "@/config/services";

const accentStyles: Record<Service["accent"], string> = {
  electric: "from-soft-blue/80 to-white border-accent/15",
  dusty: "from-dusty-blue/15 to-white border-dusty-blue/30",
  warm: "from-cream to-white border-beige-warm/40",
};

const dotStyles: Record<Service["accent"], string> = {
  electric: "bg-accent",
  dusty: "bg-dusty-blue",
  warm: "bg-beige-warm",
};

type Props = {
  service: Service;
};

export function ServiceCard({ service }: Props) {
  return (
    <article
      className={`group rounded-2xl border bg-gradient-to-br p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-card-hover ${accentStyles[service.accent]}`}
    >
      <div className="flex items-start gap-3">
        <span
          className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${dotStyles[service.accent]}`}
          aria-hidden
        />
        <div>
          <h3 className="font-heading text-lg font-semibold text-midnight">
            {service.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate">
            {service.description}
          </p>
          {service.slug ? (
            <p className="mt-4">
              <Link
                href={`/services/${service.slug}`}
                className="text-sm font-semibold text-accent-strong underline-offset-4 hover:underline"
              >
                Learn more
              </Link>
            </p>
          ) : null}
        </div>
      </div>
    </article>
  );
}
