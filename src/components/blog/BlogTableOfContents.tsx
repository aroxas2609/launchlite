import Link from "next/link";
import type { BlogHeading } from "@/lib/blog/posts";

type Props = {
  headings: BlogHeading[];
};

export function BlogTableOfContents({ headings }: Props) {
  if (!headings.length) return null;

  return (
    <aside className="rounded-2xl border border-line bg-white p-6 shadow-card lg:sticky lg:top-28">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-strong">
        On this page
      </p>
      <ol className="mt-4 space-y-2 text-sm text-slate">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{ paddingLeft: heading.level === 3 ? "0.75rem" : "0" }}
          >
            <Link href={`#${heading.id}`} className="hover:text-accent-strong">
              {heading.text}
            </Link>
          </li>
        ))}
      </ol>
    </aside>
  );
}
