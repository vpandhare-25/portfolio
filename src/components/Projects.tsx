import { ArrowUpRight } from "lucide-react";
import { projects } from "@/content/site";
import SectionHead from "./SectionHead";

// Projects as panels: the name set wide with its GitHub button,
// then the description beside the tech stack.
export default function Projects() {
  return (
    <section aria-labelledby="projects" className="mx-auto max-w-[1360px] px-5 pt-24 md:px-10 md:pt-36">
      <SectionHead id="projects" title="Projects" />

      <div className="mt-10 space-y-6 md:mt-14 md:space-y-8">
        {projects.map((p) => (
          <article
            key={p.name}
            className="border-2 border-transparent bg-paper-2 p-5 transition-colors duration-300 hover:border-ink md:p-10"
          >
            {/* Title row */}
            <div className="flex flex-wrap items-start justify-between gap-x-8 gap-y-4">
              <div>
                <h3 className="wide text-[clamp(1.4rem,2.4vw,2rem)] font-extrabold uppercase leading-[1] tracking-[-0.02em]">
                  {p.name}
                </h3>
                <p className="mt-2 text-ink-2">{p.subtitle}</p>
              </div>
              <div className="flex gap-3">
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 border border-ink px-3.5 py-2 font-mono text-xs uppercase tracking-[0.1em] transition-colors hover:bg-ink hover:text-paper"
                  >
                    Live demo
                    <ArrowUpRight aria-hidden strokeWidth={1.5} className="size-3.5" />
                  </a>
                )}
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 border border-ink px-3.5 py-2 font-mono text-xs uppercase tracking-[0.1em] transition-colors hover:bg-ink hover:text-paper"
                >
                  GitHub
                  <ArrowUpRight
                    aria-hidden
                    strokeWidth={1.5}
                    className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                  <span className="sr-only">: {p.name} (opens in a new tab)</span>
                </a>
              </div>
            </div>

            {/* Description and stack */}
            <div className="mt-8 grid grid-cols-12 gap-x-6 gap-y-5 border-t border-ink pt-6 md:mt-10">
              <p className="col-span-12 max-w-2xl text-base leading-relaxed text-ink-2 md:col-span-7 md:text-[17px]">
                {p.description}
              </p>
              <ul className="col-span-12 flex flex-wrap content-start gap-x-4 gap-y-1.5 font-mono text-xs text-muted md:col-span-5 md:justify-end">
                {p.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
