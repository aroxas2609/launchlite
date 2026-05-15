import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { ProgrammaticShell } from "@/components/programmatic/ProgrammaticShell";
import { RelatedLinks } from "@/components/RelatedLinks";
import { getIndustry, industrySlugs } from "@/content/industries";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { faqPageSchema } from "@/lib/seo/schema";
import { relatedLinksForIndustry } from "@/lib/seo/internalLinks";
import { titleCaseSlug } from "@/lib/slug";

export function generateStaticParams() {
  return industrySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const row = getIndustry(slug);
  if (!row) return {};
  return buildPageMetadata({
    title: row.metaTitle,
    description: row.metaDescription,
    path: `/industries/${row.slug}`,
    keywords: [
      `${titleCaseSlug(row.slug)} website`,
      "Australia small business website",
      "affordable web design",
    ],
  });
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const row = getIndustry(slug);
  if (!row) notFound();

  const breadcrumbs = (
    <Breadcrumbs
      items={[
        { name: "Home", href: "/" },
        {
          name: titleCaseSlug(row.slug),
          href: `/industries/${row.slug}`,
        },
      ]}
    />
  );

  const intro = (
    <header className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-strong">
        Industries
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

  return (
    <>
      <JsonLd data={faqPageSchema(row.faq)} />
      <ProgrammaticShell
        breadcrumbs={breadcrumbs}
        intro={intro}
        sections={sections}
        faq={row.faq}
        related={<RelatedLinks links={relatedLinksForIndustry(row.slug)} />}
      />
    </>
  );
}
