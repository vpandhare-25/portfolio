import { ArrowUpRight } from "lucide-react";
import { projects } from "@/content/site";
import SectionHead from "./SectionHead";

// Projects as spec sheets on a slightly darker panel: name and link on top,
// the headline numbers as a large readout row, then the short description and stack.
export default function Projects() {
  return (
    <section aria-labelledby="projects" className="mx-auto max-w-[1360px] px-5 pt-24 md:px-10 md:pt-36">
      <SectionHead id="projects" index="04" title="Projects" count={`${projects.length} builds`} />

      <div className="mt-10 space-y-6 md:mt-14 md:space-y-8">
        {projects.map((p, i) => (
          <article key={p.name} className="bg-paper-2 p-5 md:p-10">
            {/* Title row */}
            <div className="flex flex-wrap items-start justify-between gap-x-8 gap-y-4">
              <div>
                <p className="font-mono text-xs text-muted">P{String(i + 1).padStart(2, "0")}</p>
                <h3 className="wide mt-2 text-[clamp(1.9rem,4vw,3.25rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.02em]">
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

            {/* Readout: the headline numbers */}
            <dl className="mt-8 grid grid-cols-1 border-t border-ink sm:grid-cols-3 md:mt-10">
              {p.metrics.map((m, j) => (
                <div
                  key={m.label}
                  className={`flex flex-col-reverse border-b border-rule py-5 sm:border-b-0 sm:pr-6 ${
                    j > 0 ? "sm:border-l sm:pl-6" : ""
                  }`}
                >
                  <dt className="mt-2 text-sm leading-snug text-muted">{m.label}</dt>
                  <dd className="text-[clamp(1.75rem,3.2vw,2.75rem)] font-bold leading-none tracking-[-0.03em] whitespace-nowrap">
                    {m.value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Description and stack */}
            <div className="mt-6 grid grid-cols-12 gap-x-6 gap-y-5 border-t border-rule pt-6 md:mt-4">
              <p className="col-span-12 max-w-2xl text-[15px] leading-relaxed text-ink-2 md:col-span-7">
                {p.description} {p.also}
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
