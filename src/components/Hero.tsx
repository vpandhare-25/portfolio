import { FaEnvelope, FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { links, profile } from "@/content/site";
import Photo from "./Photo";
import Typewriter from "./Typewriter";

// The contact links as a row of square icon buttons. GitHub, LinkedIn and the resume
// open in a new tab; Email opens the visitor's own mail app with the address filled in.
const contactLinks = [
  { label: "GitHub", href: links.github, Icon: FaGithub, newTab: true },
  { label: "LinkedIn", href: links.linkedin, Icon: FaLinkedin, newTab: true },
  { label: "Email", href: `mailto:${links.email}`, Icon: FaEnvelope, newTab: false },
  { label: "Resume", href: links.resume, Icon: FaFileAlt, newTab: true },
];

// Dark opening band. The name is set huge and wide on the left, the portrait sits
// beside it on the right, and the intro and contact buttons sit underneath.
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

        {/* Typing line under the name: types each role, deletes it, then types the next. */}
        <Typewriter
          phrases={profile.roles}
          className="col-span-12 mt-6 h-[1.3em] whitespace-nowrap text-[clamp(1.35rem,2.6vw,2.25rem)] font-medium leading-[1.3] tracking-[-0.01em] text-band-ink md:col-span-9 md:row-start-3 md:mt-8"
        />

        <figure className="col-span-8 col-start-1 mt-10 sm:col-span-5 md:col-span-3 md:col-start-10 md:row-span-3 md:row-start-1 md:mt-0">
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

        <ul className="col-span-12 mt-10 grid grid-cols-4 self-end border-l border-t border-band-rule md:col-span-4 md:col-start-9 md:mt-20">
          {contactLinks.map(({ label, href, Icon, newTab }) => (
            <li key={label} className="border-b border-r border-band-rule">
              <a
                href={href}
                {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                aria-label={newTab ? `${label} (opens in a new tab)` : label}
                title={label}
                className="group flex aspect-square flex-col items-center justify-center gap-2.5 transition-colors duration-300 hover:bg-band-ink hover:text-band"
              >
                <Icon aria-hidden className="size-6 transition-transform duration-300 group-hover:-translate-y-0.5" />
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-band-muted transition-colors group-hover:text-band">
                  {label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
