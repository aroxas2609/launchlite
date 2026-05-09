import Image from "next/image";
import type { PortfolioProject } from "@/config/portfolio";
import { ButtonLink } from "@/components/ButtonLink";

type Props = {
  project: PortfolioProject;
};

export function ProjectCard({ project }: Props) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition hover:-translate-y-0.5 hover:shadow-card-hover">
      <div className="relative aspect-[16/10] bg-soft-blue">
        {/* Local /public/images — unoptimized avoids stale `/_next/image` cache in dev */}
        <Image
          src={project.placeholderImage}
          alt={`${project.name} preview`}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 33vw"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/30 to-transparent" />
        <p className="absolute bottom-3 left-4 rounded-full bg-white/92 px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-wide text-midnight shadow-sm">
          {project.category}
        </p>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-xl font-semibold text-midnight">
          {project.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate">
          {project.shortDescription}
        </p>
        <div className="mt-6 flex flex-1 flex-col gap-2">
          {/* TODO: Update liveUrl, caseStudyUrl, githubUrl in src/config/portfolio.ts */}
          <ButtonLink href={project.liveUrl} external variant="primary">
            View Live Site
          </ButtonLink>
          <ButtonLink href={project.caseStudyUrl} variant="secondary">
            View Case Study
          </ButtonLink>
          <ButtonLink href={project.githubUrl} external variant="outline">
            View GitHub Repo
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
