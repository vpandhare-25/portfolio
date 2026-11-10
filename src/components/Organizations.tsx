"use client";

import Image from "next/image";
import { useState } from "react";
import { organizations } from "@/content/site";
import SectionHead from "./SectionHead";

// Organizations as an index with one large frame.
// Hovering, focusing or tapping an organization swaps the frame to its logo, with a cross-fade.
// The frame is filled with the logo's own background color so the logo sits in it seamlessly.
export default function Organizations() {
  const [active, setActive] = useState(0);

  return (
    <section aria-labelledby="organizations" className="mx-auto max-w-[1360px] px-5 pt-24 md:px-10 md:pt-36">
      <SectionHead id="organizations" title="Organizations" />

      <div className="mt-10 grid grid-cols-12 gap-x-6 gap-y-8 md:mt-14">
        {/* The frame: sticky on desktop so it stays in view beside the list. */}
        <figure className="col-span-12 md:sticky md:top-20 md:col-span-6 md:col-start-7 md:row-start-1 md:self-start">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            {organizations.map((org, i) => (
              <div
                key={org.name}
                aria-hidden={i !== active}
                style={{ backgroundColor: org.logoBg }}
                className={`absolute inset-0 grid place-items-center transition-opacity duration-500 ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="relative aspect-square h-full">
                  <Image
                    src={org.logo}
                    alt={`${org.name} logo`}
                    fill
                    sizes="(min-width: 768px) 36vw, 75vw"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
          <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
            {organizations[active].name}
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
                  className="relative block w-full py-7 pl-5 text-left md:py-9"
                >
                  {/* Gold bar marks the organization whose logo is showing. */}
                  <span
                    aria-hidden
                    className={`absolute inset-y-7 left-0 w-[2px] origin-top bg-signal transition-transform duration-300 md:inset-y-9 ${
                      on ? "scale-y-100" : "scale-y-0"
                    }`}
                  />
                  <span className="flex items-center gap-4">
                    <Image
                      src={org.logo}
                      alt=""
                      width={48}
                      height={48}
                      className={`size-11 shrink-0 object-cover transition-opacity duration-300 md:size-12 ${
                        on ? "opacity-100" : "opacity-50"
                      }`}
                    />
                    <span
                      className={`block text-[clamp(1.6rem,3vw,2.5rem)] font-semibold leading-[1.05] tracking-[-0.02em] transition-colors duration-300 ${
                        on ? "text-ink" : "text-ink/45"
                      }`}
                    >
                      {org.name}
                    </span>
                  </span>
                  <span className="mt-3 block">
                    <span className="role-tag">{org.role}</span>
                  </span>
                  <span className="mt-3 block max-w-md text-[15px] leading-relaxed text-ink-2">
                    {org.description}
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
