import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { ProgrammaticShell } from "@/components/programmatic/ProgrammaticShell";
import { RelatedLinks } from "@/components/RelatedLinks";
import {
  getProgrammaticService,
  programmaticServiceSlugs,
} from "@/content/servicesProgrammatic";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { faqPageSchema, serviceSchema } from "@/lib/seo/schema";
import { relatedLinksForProgrammaticService } from "@/lib/seo/internalLinks";
import { titleCaseSlug } from "@/lib/slug";

export function generateStaticParams() {
  return programmaticServiceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const row = getProgrammaticService(slug);
  if (!row) return {};
  return buildPageMetadata({
    title: row.metaTitle,
    description: row.metaDescription,
    path: `/services/${row.slug}`,
    keywords: [
      `${titleCaseSlug(row.slug)} website`,
      "Australia affordable websites",
      "LaunchLite Studio",
    ],
  });
}

export default async function ProgrammaticServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const row = getProgrammaticService(slug);
  if (!row) notFound();

  const breadcrumbs = (
    <Breadcrumbs
      items={[
        { name: "Home", href: "/" },
        {
          name: titleCaseSlug(row.slug),
          href: `/services/${row.slug}`,
        },
      ]}
    />
  );

  const intro = (
    <header className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-strong">
        Services
      </p>
      <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-midnight sm:text-[2.65rem]">
        {row.h1}
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-slate">{row.lead}</p>
    </header>
  );

  const sections = row.sections.map((section) => ({
    heading: section.heading,
    body: section.body.map((para, index) => <p key={index}>{para}</p>),
  }));

  const structuredService = serviceSchema({
    name: row.metaTitle,
    description: row.metaDescription,
    path: `/services/${row.slug}`,
  });

  return (
    <>
      <JsonLd data={[faqPageSchema(row.faq), structuredService]} />
      <ProgrammaticShell
        breadcrumbs={breadcrumbs}
        intro={intro}
        sections={sections}
        faq={row.faq}
        related={
          <RelatedLinks links={relatedLinksForProgrammaticService(row.slug)} />
        }
      />
    </>
  );
}
