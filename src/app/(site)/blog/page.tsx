import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getAllPostsSorted } from "@/lib/blog/posts";

export const metadata = buildPageMetadata({
  title: "Insights — website tips for Australian small businesses",
  description:
    "Practical articles on affordable websites, tradie sites, local SEO, gyms and photography portfolios—written for busy operators.",
  path: "/blog",
  keywords: ["small business website tips", "local SEO Australia", "tradie marketing"],
});

export default function BlogIndexPage() {
  const posts = getAllPostsSorted();

  return (
    <div className="bg-gradient-to-b from-soft-blue/35 via-white to-white">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Insights", href: "/blog" },
        ]}
      />

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <header className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-strong">
            Insights
          </p>
          <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-midnight sm:text-[2.75rem]">
            Practical website guidance—without agency fog.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate">
            Short articles focused on outcomes: clearer enquiries, faster mobile UX and SEO fundamentals that still make sense six months later.
          </p>
        </header>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="flex h-full flex-col rounded-3xl border border-line bg-white p-8 shadow-card transition hover:-translate-y-0.5 hover:shadow-card-hover"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-strong">
                {post.category}
              </p>
              <h2 className="mt-3 font-heading text-2xl font-semibold text-midnight">
                <Link href={`/blog/${post.slug}`} className="hover:text-accent-strong">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate">{post.description}</p>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-AU", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
                <span className="text-slate/40">·</span>
                <span>{post.readingTimeMinutes} min read</span>
              </div>
              <div className="mt-6">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm font-semibold text-accent-strong underline-offset-4 hover:underline"
                >
                  Read article
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
