import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { ProgrammaticShell } from "@/components/programmatic/ProgrammaticShell";
import { RelatedLinks } from "@/components/RelatedLinks";
import { getLocation, locationSlugs } from "@/content/locations";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { faqPageSchema } from "@/lib/seo/schema";
import { relatedLinksForLocation } from "@/lib/seo/internalLinks";
import { titleCaseSlug } from "@/lib/slug";

export function generateStaticParams() {
  return locationSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const row = getLocation(slug);
  if (!row) return {};
  return buildPageMetadata({
    title: row.metaTitle,
    description: row.metaDescription,
    path: `/locations/${row.slug}`,
    keywords: [
      `${titleCaseSlug(row.slug)} website design`,
      "Western Sydney web design",
      "Australia small business website",
    ],
  });
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const row = getLocation(slug);
  if (!row) notFound();

  const breadcrumbs = (
    <Breadcrumbs
      items={[
        { name: "Home", href: "/" },
        {
          name: titleCaseSlug(row.slug),
          href: `/locations/${row.slug}`,
        },
      ]}
    />
  );

  const intro = (
    <header className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-strong">
        Locations
      </p>
      <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-midnight sm:text-[2.65rem]">
        {row.h1}
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-slate">{row.lead}</p>
      <div className="mt-10 rounded-2xl border border-line bg-white p-6 shadow-card">
        <p className="text-sm font-semibold text-midnight">Areas & suburbs we commonly reference</p>
        <ul className="mt-4 grid gap-2 text-sm text-slate sm:grid-cols-2">
          {row.suburbs.map((s) => (
            <li key={s} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );

  const sections = row.sections.map((section) => ({
    heading: section.heading,
    body: section.body.map((para, index) => <p key={index}>{para}</p>),
  }));

  return (
    <>
      <JsonLd data={faqPageSchema(row.faq)} />
      <ProgrammaticShell
        breadcrumbs={breadcrumbs}
        intro={intro}
        sections={sections}
        faq={row.faq}
        related={<RelatedLinks links={relatedLinksForLocation(row.slug)} />}
      />
    </>
  );
}
