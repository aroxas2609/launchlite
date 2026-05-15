import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbListSchema } from "@/lib/seo/schema";

export type Crumb = { name: string; href: string };

type Props = {
  items: Crumb[];
  className?: string;
};

export function Breadcrumbs({ items, className = "" }: Props) {
  const schemaItems = items.map((i) => ({
    name: i.name,
    path: i.href.replace(/^https?:\/\/[^/]+/, "") || "/",
  }));

  return (
    <>
      <JsonLd data={breadcrumbListSchema(schemaItems)} />
      <nav
        aria-label="Breadcrumb"
        className={`border-b border-line/70 bg-white/80 py-3 text-sm text-slate ${className}`}
      >
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-2 gap-y-1 px-4 sm:px-6 lg:px-8">
          {items.map((item, index) => (
            <span key={item.href} className="flex items-center gap-2">
              {index > 0 ? (
                <span className="text-slate/50" aria-hidden>
                  /
                </span>
              ) : null}
              {index === items.length - 1 ? (
                <span className="font-medium text-midnight">{item.name}</span>
              ) : (
                <Link
                  href={item.href}
                  className="text-accent-strong underline-offset-4 hover:underline"
                >
                  {item.name}
                </Link>
              )}
            </span>
          ))}
        </div>
      </nav>
    </>
  );
}
