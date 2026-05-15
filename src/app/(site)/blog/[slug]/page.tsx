import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogMarkdown } from "@/components/blog/BlogMarkdown";
import { BlogTableOfContents } from "@/components/blog/BlogTableOfContents";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { getBlogPost, getRelatedPosts, listBlogSlugs } from "@/lib/blog/posts";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { relatedLinksForBlog } from "@/lib/seo/internalLinks";
import { articleSchema, faqPageSchema, siteOrigin } from "@/lib/seo/schema";

export function generateStaticParams() {
  return listBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return buildPageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.tags,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug);
  const ogImage = `${siteOrigin()}/opengraph-image`;

  const structured = [
    articleSchema({
      headline: post.title,
      description: post.description,
      path: `/blog/${post.slug}`,
      datePublished: post.date,
      dateModified: post.updated ?? post.date,
      imageUrl: ogImage,
    }),
    ...(post.faq?.length ? [faqPageSchema(post.faq)] : []),
  ];

  return (
    <div className="bg-gradient-to-b from-soft-blue/25 via-white to-white">
      <JsonLd data={structured} />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Insights", href: "/blog" },
          { name: post.title, href: `/blog/${post.slug}` },
        ]}
      />

      <article className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <header className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-strong">
            {post.category}
          </p>
          <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-midnight sm:text-[2.85rem]">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate">{post.description}</p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate">
            <time dateTime={post.date}>
              Published{" "}
              {new Date(post.date).toLocaleDateString("en-AU", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
            {post.updated ? (
              <span className="text-slate/70">
                Updated{" "}
                {new Date(post.updated).toLocaleDateString("en-AU", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            ) : null}
            <span>{post.readingTimeMinutes} min read</span>
          </div>
        </header>

        <div className="mt-12 grid gap-10 lg:grid-cols-[260px_1fr] lg:items-start">
          <BlogTableOfContents headings={post.headings} />
          <div>
            <BlogMarkdown content={post.body} />
          </div>
        </div>

        {post.faq?.length ? (
          <section className="mx-auto mt-16 max-w-3xl">
            <h2 className="font-heading text-2xl font-semibold text-midnight">Article FAQs</h2>
            <p className="mt-3 text-sm text-slate">
              Quick answers designed for voice-style searches and AI summaries.
            </p>
            <div className="mt-8">
              <FAQAccordion items={post.faq} />
            </div>
          </section>
        ) : null}

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
          <CTASection
            title="Want help applying this to your business?"
            description="Tell me your industry, suburbs and timeline—I will suggest the leanest launch path."
            primaryHref="/contact"
            primaryLabel="Request a Quote"
            secondaryHref="/pricing"
            secondaryLabel="Browse pricing"
          />
          <RelatedLinks title="Services & locations" links={relatedLinksForBlog()} />
        </div>

        {related.length ? (
          <section className="mt-16 border-t border-line/70 pt-12">
            <h2 className="font-heading text-2xl font-semibold text-midnight">Related articles</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((item) => (
                <article key={item.slug} className="rounded-2xl border border-line bg-white p-6 shadow-card">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-strong">
                    {item.category}
                  </p>
                  <h3 className="mt-3 font-heading text-lg font-semibold text-midnight">
                    <Link href={`/blog/${item.slug}`} className="hover:text-accent-strong">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-sm text-slate">{item.description}</p>
                </article>
              ))}
            </div>
          </section>
        ) : null}
      </article>
    </div>
  );
}
