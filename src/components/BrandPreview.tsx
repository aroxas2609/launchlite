import Image from "next/image";
import { portfolioProjects } from "@/config/portfolio";
import { shouldOptimizeImages } from "@/lib/image";

/** Floating SaaS-style browser cards — edit projects in portfolio config */

const FLOAT =
  "motion-safe:animate-[float-soft_6.5s_ease-in-out_infinite_alternate] motion-reduce:animate-none";
const FLOAT_SLOW =
  "motion-safe:animate-[float-soft_8s_ease-in-out_infinite_alternate] motion-reduce:animate-none";

export function BrandPreview() {
  const items = portfolioProjects.slice(0, 3);

  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none lg:pl-6">
      <div
        className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-accent-muted blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto flex min-h-[440px] w-full max-w-[420px] items-center justify-center sm:min-h-[500px] sm:max-w-none">
        {items.map((project, i) => (
          <div key={project.slug} className={motionShell(i)}>
            <article
              className={[
                "w-[min(95%,318px)] overflow-hidden rounded-2xl border border-line bg-white shadow-card-deep transition hover:z-50 hover:-translate-y-0.5 hover:shadow-card-hover sm:w-[310px]",
                rotation(i),
              ].join(" ")}
            >
              <div className="flex items-center gap-2 border-b border-line/80 bg-snow px-4 py-2.5">
                <span className="flex gap-1.5" aria-hidden>
                  <span className="h-2.5 w-2.5 rounded-full bg-accent-muted" />
                  <span className="h-2.5 w-2.5 rounded-full bg-soft-blue" />
                  <span className="h-2.5 w-2.5 rounded-full bg-beige-warm/45" />
                </span>
                <p className="min-w-0 flex-1 truncate text-center font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-slate">
                  {hostnameFrom(project.liveUrl)}
                </p>
              </div>
              <div className="relative aspect-[16/10] bg-midnight/5">
                <Image
                  src={project.placeholderImage}
                  alt={`${project.name} website preview`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 300px, 320px"
                  unoptimized={!shouldOptimizeImages()}
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/55 to-transparent" />
                <p className="absolute bottom-3 left-4 max-w-[90%] truncate text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-snow shadow-sm shadow-midnight/25">
                  {project.name}
                </p>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}

function hostnameFrom(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

function motionShell(i: number) {
  const anim = i === 2 ? FLOAT_SLOW : FLOAT;
  const stagger =
    i === 1 ? "[animation-delay:0.9s]" : i === 2 ? "[animation-delay:0.45s]" : "";
  const shells = [
    `absolute left-[2%] top-14 z-[24] ${anim} sm:left-auto sm:right-8`,
    `absolute left-2 top-[40%] z-[21] ${anim} sm:left-12`,
    `absolute bottom-8 right-[2%] z-[20] ${anim} sm:right-14`,
  ];
  return `${shells[i] ?? shells[0]} ${stagger}`.trim();
}

function rotation(i: number) {
  const rotates = ["-rotate-6", "-rotate-5", "rotate-[7deg]"];
  return rotates[i] ?? rotates[0];
}
