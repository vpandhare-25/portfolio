import { ArrowUpRight } from "lucide-react";
import { links, profile } from "@/content/site";
import Photo from "./Photo";

// The contact links, shown as a small table: what it is on the left, where it goes on the right.
const contactRows = [
  { label: "GitHub", value: "vpandhare-25", href: links.github, newTab: true },
  { label: "LinkedIn", value: "vivek-pandhare", href: links.linkedin, newTab: true },
  { label: "Email", value: links.email, href: `mailto:${links.email}`, newTab: false },
  { label: "Resume", value: "PDF", href: links.resume, newTab: true },
];

// Dark opening band. The name is set huge and wide on the left, the portrait sits
// beside it on the right, and the intro and contact table sit underneath.
export default function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="bg-band text-band-ink">
      <div className="mx-auto grid max-w-[1360px] grid-cols-12 gap-x-6 px-5 pb-16 pt-12 md:px-10 md:pb-24 md:pt-16">
        <p className="col-span-12 font-mono text-[11px] uppercase tracking-[0.14em] text-band-muted md:col-span-9">
          <span className="mr-3 inline-block size-2 bg-signal align-middle" aria-hidden />
          {profile.kicker}
        </p>

        <h1 className="wide col-span-12 mt-8 text-[clamp(2.9rem,9.4vw,8.75rem)] font-black uppercase leading-[0.86] tracking-[-0.025em] md:col-span-9 md:row-start-2 md:mt-10">
          <span className="block">{profile.firstName}</span>
          <span className="block">{profile.lastName}</span>
        </h1>

        <figure className="col-span-8 col-start-1 mt-10 sm:col-span-5 md:col-span-3 md:col-start-10 md:row-span-2 md:row-start-1 md:mt-0">
          <Photo
            src={profile.portrait}
            alt="Portrait of Vivek Pandhare"
            label="Portrait"
            path="public/images/portrait.jpg"
            sizes="(min-width: 768px) 25vw, 66vw"
            preload
            className="aspect-[3/4] w-full grayscale-[0.15]"
          />
        </figure>

        <p className="col-span-12 mt-12 max-w-[38rem] text-lg leading-relaxed text-band-ink/85 md:col-span-6 md:mt-20 md:text-[1.3rem] md:leading-[1.6]">
          {profile.intro}
        </p>

        <ul className="col-span-12 mt-10 self-end border-t border-band-rule font-mono text-[13px] md:col-span-4 md:col-start-9 md:mt-20">
          {contactRows.map((row) => (
            <li key={row.label} className="border-b border-band-rule">
              <a
                href={row.href}
                {...(row.newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex items-center justify-between gap-4 py-3 transition-colors"
              >
                <span className="flex items-center gap-3 uppercase tracking-[0.1em] text-band-muted transition-colors group-hover:text-band-ink">
                  <span aria-hidden className="h-px w-3 bg-current transition-all duration-300 group-hover:w-6 group-hover:bg-signal" />
                  {row.label}
                </span>
                <span className="flex items-center gap-1.5 truncate">
                  {row.value}
                  <ArrowUpRight
                    aria-hidden
                    strokeWidth={1.5}
                    className="size-3.5 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
                {row.newTab && <span className="sr-only">(opens in a new tab)</span>}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
