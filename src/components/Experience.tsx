import { experience } from "@/content/site";
import LogoEntry from "./LogoEntry";
import SectionHead from "./SectionHead";

// Experience: one row per role, logo on the left and the details to its right.
export default function Experience() {
  return (
    <section aria-labelledby="experience" className="mx-auto max-w-[1360px] px-5 pt-24 md:px-10 md:pt-36">
      <SectionHead id="experience" title="Experience" />
      <ul className="mt-10 md:mt-14">
        {experience.map((job) => (
          <LogoEntry key={job.company} logo={job.logo} name={job.company} role={job.role} description={job.description} />
        ))}
      </ul>
    </section>
  );
}
