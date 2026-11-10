"use client";

import { useState } from "react";
import { organizations } from "@/content/site";
import Photo from "./Photo";
import SectionHead from "./SectionHead";

const paths = [
  "public/images/orgs/imagine-software.jpg",
  "public/images/orgs/msu-ai-club.jpg",
  "public/images/orgs/spartan-virasat.jpg",
];

// Organizations as an index with one large photo frame.
// Hovering, focusing or tapping an organization swaps the photo, which cross-fades.
export default function Organizations() {
  const [active, setActive] = useState(0);

  return (
    <section aria-labelledby="organizations" className="mx-auto max-w-[1360px] px-5 pt-24 md:px-10 md:pt-36">
      <SectionHead
        id="organizations"
        index="03"
        title="Organizations"
        count={`${organizations.length} teams`}
      />

      <div className="mt-10 grid grid-cols-12 gap-x-6 gap-y-8 md:mt-14">
        {/* The photo frame: sticky on desktop so it stays in view beside the list. */}
        <figure className="col-span-12 md:sticky md:top-20 md:col-span-6 md:col-start-7 md:row-start-1 md:self-start">
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-paper-2">
            {organizations.map((org, i) => (
              <div
                key={org.name}
                aria-hidden={i !== active}
                className={`absolute inset-0 transition-opacity duration-500 ${i === active ? "opacity-100" : "opacity-0"}`}
              >
                <Photo
                  src={org.image}
                  alt={org.imageAlt}
                  label={org.name}
                  path={paths[i]}
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="h-full w-full"
                />
              </div>
            ))}
          </div>
          <figcaption className="mt-3 flex justify-between font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
            <span>{organizations[active].name}</span>
            <span>
              {String(active + 1).padStart(2, "0")} / {String(organizations.length).padStart(2, "0")}
            </span>
          </figcaption>
        </figure>

        <ul className="col-span-12 md:col-span-6 md:row-start-1">
          {organizations.map((org, i) => {
            const on = i === active;
            return (
              <li key={org.name} className="border-b border-rule first:border-t">
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-pressed={on}
                  className="grid w-full grid-cols-[2.5rem_1fr] gap-x-2 py-7 text-left md:py-9"
                >
                  <span className={`pt-2 font-mono text-xs transition-colors ${on ? "text-signal" : "text-muted"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span
                      className={`block text-[clamp(1.6rem,3vw,2.5rem)] font-semibold leading-[1.05] tracking-[-0.02em] transition-[color,transform] duration-300 ${
                        on ? "translate-x-2 text-ink" : "text-ink/45"
                      }`}
                    >
                      {org.name}
                    </span>
                    <span className="mt-3 block font-mono text-xs uppercase tracking-[0.1em] text-signal">
                      {org.role}
                    </span>
                    <span className="mt-3 block max-w-md text-[15px] leading-relaxed text-ink-2">
                      {org.description}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
