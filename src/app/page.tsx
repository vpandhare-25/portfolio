import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdDescription, MdEmail } from "react-icons/md";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import ThemeToggle from "@/components/ThemeToggle";
import Tile from "@/components/Tile";
import { experience, links, organizations, profile, projects } from "@/content/site";

// The icon links under the name. GitHub, LinkedIn and the resume open in a new tab;
// Email opens the visitor's own mail app with the address filled in.
const iconLinks = [
  { label: "GitHub", href: links.github, Icon: FaGithub, newTab: true },
  { label: "Email", href: `mailto:${links.email}`, Icon: MdEmail, newTab: false },
  { label: "LinkedIn", href: links.linkedin, Icon: FaLinkedin, newTab: true },
  { label: "Resume", href: links.resume, Icon: MdDescription, newTab: true },
];

const newTab = { target: "_blank", rel: "noopener noreferrer" };

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Top bar: monogram on the left, dark-mode toggle on the right */}
      <div className="flex items-center justify-between px-4 py-3 md:px-5">
        <a href="#" aria-label="Back to top" className="font-script text-5xl leading-none text-text">
          {profile.monogram}
        </a>
        <ThemeToggle />
      </div>

      <div className="mx-auto max-w-[1296px] px-4 md:px-10">
        {/* Name, icon links and a divider */}
        <header className="px-2 pt-2 text-center md:px-10">
          <Reveal>
            <h1 className="text-5xl font-bold md:text-[64px] md:leading-[74px]">{profile.name}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="mt-2 flex justify-center gap-5">
              {iconLinks.map(({ label, href, Icon, newTab: nt }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(nt ? newTab : {})}
                    aria-label={nt ? `${label} (opens in a new tab)` : label}
                    title={label}
                    className="grid h-11 w-10 place-items-center text-text transition-colors hover:text-accent"
                  >
                    <Icon className="size-[30px]" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
          <hr className="mt-5 border-line" />
        </header>

        <main className="space-y-5 pb-16 md:px-5">
          {/* About: photo on the left, short paragraphs on the right */}
          <Reveal>
            <section aria-label="About" className="flex flex-col items-center gap-8 px-2.5 pt-5 md:flex-row md:items-start md:gap-12 md:px-5">
              <div className="relative aspect-[2/3] w-[220px] shrink-0 overflow-hidden md:w-[265px]">
                {profile.portrait ? (
                  <Image
                    src={profile.portrait}
                    alt="Photo of Vivek Pandhare"
                    fill
                    sizes="265px"
                    preload
                    className="object-cover"
                  />
                ) : (
                  <div className="grid h-full place-items-center border-2 border-dashed border-line bg-tile/60 p-4 text-center text-sm text-muted">
                    Your photo goes here
                    <br />
                    public/images/portrait.jpg
                  </div>
                )}
              </div>

              <div className="space-y-4 text-lg md:pt-7 md:text-xl">
                {profile.about.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                <p>
                  Let&rsquo;s chat:{" "}
                  <a href={`mailto:${links.email}`} className="font-bold text-accent hover:underline">
                    {links.email}
                  </a>
                </p>
              </div>
            </section>
          </Reveal>

          {/* Experience: two columns of logo + company + role */}
          <Reveal>
            <section aria-labelledby="experience" className="pt-4">
              <SectionTitle id="experience">Experience</SectionTitle>
              <div className="mt-5 grid gap-5 md:grid-cols-2 md:px-[30px]">
                {experience.map((job) => (
                  <article key={job.company} className="item flex gap-4 p-2.5">
                    <Tile image={job.logo} name={job.company} />
                    <div className="self-center">
                      <h3 className="text-lg font-bold md:text-xl">{job.company}</h3>
                      <p className="md:text-lg">{job.role}</p>
                      <p className="text-sm text-muted">
                        {job.dates} · {job.location}
                      </p>
                      <p className="mt-1.5 text-[15px] leading-snug text-muted">{job.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </Reveal>

          {/* Organizations: one row each */}
          <Reveal>
            <section aria-labelledby="organizations" className="pt-4">
              <SectionTitle id="organizations">Organizations</SectionTitle>
              <div className="mt-2">
                {organizations.map((org) => (
                  <article key={org.name} className="item flex gap-4 p-2.5">
                    <Tile image={org.image} name={org.name} />
                    <div className="self-center">
                      <h3 className="text-lg md:text-xl">
                        <b>{org.name}</b> - {org.role}
                      </h3>
                      <p className="md:text-lg">{org.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </Reveal>

          {/* Projects: one row each, with links */}
          <Reveal>
            <section aria-labelledby="projects" className="pt-4">
              <SectionTitle id="projects">Projects</SectionTitle>
              <div className="mt-2">
                {projects.map((p) => (
                  <article key={p.name} className="item flex gap-4 p-2.5">
                    <Tile image={p.image} name={p.name} />
                    <div className="self-center">
                      <h3 className="text-lg md:text-xl">
                        <b>{p.name}</b> - {p.subtitle}
                      </h3>
                      <p className="md:text-lg">{p.description}</p>
                      <p className="mt-1 text-sm text-muted">{p.tech}</p>
                      <p className="mt-1.5 text-[15px]">
                        {p.demo && (
                          <>
                            <a href={p.demo} {...newTab} className="text-accent underline underline-offset-2 hover:opacity-75">
                              Demo
                            </a>
                            {" | "}
                          </>
                        )}
                        <a href={p.github} {...newTab} className="text-accent underline underline-offset-2 hover:opacity-75">
                          GitHub
                        </a>
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </Reveal>
        </main>

        <footer className="border-t border-line py-6 text-center text-sm text-muted">
          © {profile.copyrightYear} {profile.name} · Michigan State University · Computer Science
        </footer>
      </div>
    </div>
  );
}
