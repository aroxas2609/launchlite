import Link from "next/link";
import type { RelatedLink } from "@/lib/seo/internalLinks";

type Props = {
  title?: string;
  links: RelatedLink[];
  className?: string;
};

export function RelatedLinks({
  title = "Related pages",
  links,
  className = "",
}: Props) {
  if (!links.length) return null;

  return (
    <section
      className={`rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8 ${className}`}
    >
      <h2 className="font-heading text-lg font-semibold text-midnight">{title}</h2>
      <ul className="mt-4 space-y-2 text-sm text-accent-strong">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="underline-offset-4 hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
