import Image from "next/image";
import { experience } from "@/content/site";
import SectionHead from "./SectionHead";

// Experience as a ledger: each role is one wide row split by thin rules.
// Company logo and name on the left with the role beneath, the description on the right.
export default function Experience() {
  return (
    <section aria-labelledby="experience" className="mx-auto max-w-[1360px] px-5 pt-24 md:px-10 md:pt-36">
      <SectionHead id="experience" title="Experience" />

      <ul className="mt-10 md:mt-14">
        {experience.map((job) => (
          <li
            key={job.company}
            className="group grid grid-cols-12 gap-x-6 gap-y-5 border-b border-rule py-9 first:border-t md:py-12"
          >
            <div className="col-span-12 flex items-center gap-5 md:col-span-6">
              <Image
                src={job.logo}
                alt={`${job.company} logo`}
                width={72}
                height={72}
                className="size-14 shrink-0 border border-rule object-cover md:size-[72px]"
              />
              <div>
                <h3 className="text-[clamp(1.6rem,2.8vw,2.4rem)] font-semibold leading-[1.05] tracking-[-0.02em] transition-transform duration-300 group-hover:translate-x-1">
                  {job.company}
                </h3>
                <p className="mt-2">
                  <span className="role-tag">{job.role}</span>
                </p>
              </div>
            </div>
            <p className="col-span-12 max-w-xl text-[15px] leading-relaxed text-ink-2 md:col-span-6 md:self-center">
              {job.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
