import Image from "next/image";

// One row in Experience or Organizations: a large logo on the left,
// and the name, role and (for organizations) a one-line description to its right.
// Both sections use this so they look the same.
export default function LogoEntry({
  logo,
  name,
  role,
  about,
}: {
  logo: string;
  name: string;
  role: string;
  about?: string;
}) {
  return (
    <li className="border-b border-rule py-3 first:border-t">
      {/* Same hover border as the project panels: black in light mode, gold in dark mode. */}
      <div className="group flex items-center gap-5 border-2 border-transparent p-4 transition-colors duration-300 hover:border-ink dark:hover:border-signal sm:gap-8 md:gap-10 md:p-6">
        <div className="relative size-20 shrink-0 overflow-hidden border border-rule sm:size-28 md:size-32">
          <Image
            src={logo}
            alt={`${name} logo`}
            fill
            sizes="128px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="min-w-0">
          <h3 className="text-[clamp(1.5rem,2.6vw,2.25rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
            {name}
          </h3>
          <p className="mt-2">
            <span className="role-tag">{role}</span>
          </p>
          {about && <p className="mt-2 text-sm text-muted">{about}</p>}
        </div>
      </div>
    </li>
  );
}
