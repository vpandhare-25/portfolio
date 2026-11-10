import { organizations } from "@/content/site";
import LogoEntry from "./LogoEntry";
import SectionHead from "./SectionHead";

// Organizations: same layout as Experience, logo on the left and the details to its right.
export default function Organizations() {
  return (
    <section aria-labelledby="organizations" className="mx-auto max-w-[1360px] px-5 pt-24 md:px-10 md:pt-36">
      <SectionHead id="organizations" title="Organizations" />
      <ul className="mt-10 md:mt-14">
        {organizations.map((org) => (
          <LogoEntry
            key={org.name}
            logo={org.logo}
            logoBg={org.logoBg}
            name={org.name}
            role={org.role}
            description={org.description}
          />
        ))}
      </ul>
    </section>
  );
}
