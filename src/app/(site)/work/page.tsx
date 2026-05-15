import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeading } from "@/components/SectionHeading";
import { portfolioProjects } from "@/config/portfolio";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { shouldOptimizeImages } from "@/lib/image";

export const metadata: Metadata = buildPageMetadata({
  title: "Portfolio — websites for clubs, tradies & creatives",
  description:
    "Selected launches: community clubs, local trades and portfolio sites—mobile-first layouts, clear enquiries and modern performance.",
  path: "/work",
  keywords: [
    "web design portfolio Australia",
    "tradie website examples",
    "club website design",
  ],
});

export default function WorkPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Work", href: "/work" },
        ]}
      />
      <div className="bg-gradient-to-b from-soft-blue/40 via-white to-white">
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          as="h1"
          eyebrow="Portfolio"
          title="Work that looks premium—without the premium theatre."
          description="Each build is shaped around trust, clarity, and a mobile-friendly experience. Live links and copy are set in src/config/portfolio.ts."
        />
      </section>

      <section className="mx-auto max-w-6xl space-y-16 px-4 pb-24 sm:px-6 sm:space-y-20 lg:px-8">
        {portfolioProjects.map((project, index) => (
          <article
            key={project.slug}
            id={project.slug}
            className="scroll-mt-28 overflow-hidden rounded-3xl border border-line bg-white shadow-card"
          >
            {/* Full-width preview: no crop-on-side layout, no pill on the image */}
            <div className="border-b border-line/80 bg-gradient-to-b from-snow to-line/30 p-3 sm:p-4">
              <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-line/90 bg-snow shadow-inner">
                <div className="relative aspect-[16/10] w-full min-h-[200px]">
                  <Image
                    src={project.placeholderImage}
                    alt={`${project.name} — full portfolio website preview`}
                    fill
                    className="object-contain object-top p-1 sm:p-2"
                    sizes="(max-width: 1200px) 100vw, 1100px"
                    unoptimized={!shouldOptimizeImages()}
                    priority={index === 0}
                  />
                </div>
              </div>
            </div>

            <div className="px-6 py-10 sm:px-10 lg:py-12">
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-accent-strong">
                {project.category}
              </p>
              <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-midnight">
                {project.name}
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate">
                {project.shortDescription}
              </p>

              <dl className="mt-10 grid max-w-3xl gap-8 text-sm leading-relaxed text-midnight/85">
                <div>
                  <dt className="font-semibold text-midnight">Overview</dt>
                  <dd className="mt-2 text-slate">{project.overview}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-midnight">Goal</dt>
                  <dd className="mt-2 text-slate">{project.goal}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-midnight">Features</dt>
                  <dd className="mt-2 text-slate">
                    <ul className="list-disc space-y-1 pl-5">
                      {project.features.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-midnight">Result</dt>
                  <dd className="mt-2 text-slate">{project.result}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-midnight">Tech used</dt>
                  <dd className="mt-2 text-slate">
                    {project.techUsed.join(" · ")}
                  </dd>
                </div>
              </dl>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ButtonLink href={project.liveUrl} external className="px-6 py-3">
                  View Live Site
                </ButtonLink>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
    </>
  );
}
