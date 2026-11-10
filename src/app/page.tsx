import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Organizations from "@/components/Organizations";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { links, profile } from "@/content/site";

// The whole portfolio is one page, in this order:
// hero (name, links, photo, intro) → experience → organizations → projects → skills.
// All text comes from src/content/site.ts.
export default function Home() {
  const newTab = { target: "_blank", rel: "noopener noreferrer" };

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Organizations />
        <Projects />
        <Skills />
      </main>

      <footer className="mx-auto mt-28 max-w-[1360px] px-5 pb-10 md:mt-36 md:px-10">
        <div className="flex flex-wrap items-baseline justify-between gap-4 border-t-2 border-ink pt-4 font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
          <span className="text-ink">
            © {profile.copyrightYear} {profile.firstName} {profile.lastName}
          </span>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li><a className="hover:text-ink" href={links.github} {...newTab}>GitHub</a></li>
            <li><a className="hover:text-ink" href={links.linkedin} {...newTab}>LinkedIn</a></li>
            <li><a className="hover:text-ink" href={`mailto:${links.email}`}>Email</a></li>
            <li><a className="hover:text-ink" href={links.resume} {...newTab}>Resume</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}
