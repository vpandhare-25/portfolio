import Image from "next/image";

// One row in Experience or Organizations: a large logo on the left,
// and the name, role and description stacked to its right.
// Both sections use this so they look the same.
export default function LogoEntry({
  logo,
  logoBg,
  name,
  role,
  description,
}: {
  logo: string;
  logoBg?: string;
  name: string;
  role: string;
  description: string;
}) {
  return (
    <li className="group flex gap-5 border-b border-rule py-8 first:border-t sm:gap-8 md:gap-10 md:py-10">
      <div
        className="relative size-20 shrink-0 overflow-hidden border border-rule sm:size-28 md:size-32"
        style={logoBg ? { backgroundColor: logoBg } : undefined}
      >
        <Image
          src={logo}
          alt={`${name} logo`}
          fill
          sizes="128px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="min-w-0 self-center">
        <h3 className="text-[clamp(1.5rem,2.6vw,2.25rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
          {name}
        </h3>
        <p className="mt-2">
          <span className="role-tag">{role}</span>
        </p>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-2">{description}</p>
      </div>
    </li>
  );
}
