import { experience } from "@/content/site";
import SectionHead from "./SectionHead";

// Experience as a ledger: each role is one wide row split by thin rules.
// Company set large on the left, the role in mono beneath it, the description on the right.
export default function Experience() {
  return (
    <section aria-labelledby="experience" className="mx-auto max-w-[1360px] px-5 pt-24 md:px-10 md:pt-36">
      <SectionHead id="experience" index="02" title="Experience" count={`${experience.length} roles`} />

      <ol className="mt-10 md:mt-14">
        {experience.map((job, i) => (
          <li
            key={job.company}
            className="group grid grid-cols-12 gap-x-6 gap-y-4 border-b border-rule py-9 first:border-t md:py-12"
          >
            <span className="col-span-2 font-mono text-xs text-muted transition-colors group-hover:text-signal">
              {String.fromCharCode(65 + i)}
            </span>
            <div className="col-span-10 md:col-span-5">
              <h3 className="text-[clamp(1.6rem,2.8vw,2.4rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
                {job.company}
              </h3>
              <p className="mt-3 font-mono text-xs uppercase tracking-[0.1em] text-signal">{job.role}</p>
            </div>
            <p className="col-span-10 col-start-3 max-w-xl text-[15px] leading-relaxed text-ink-2 md:col-span-5 md:col-start-8 md:pt-1.5">
              {job.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
