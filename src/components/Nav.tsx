import ThemeToggle from "./ThemeToggle";

const sections = [
  { id: "experience", label: "Experience" },
  { id: "organizations", label: "Organizations" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
];

// Thin dark bar pinned to the top: name on the left, section links and the theme switch on the right.
export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-band-rule bg-band text-band-ink">
      <nav aria-label="Main" className="mx-auto flex h-12 max-w-[1360px] items-center justify-between px-5 md:px-10">
        <a href="#top" className="font-mono text-[11px] uppercase tracking-[0.12em]">
          V. Pandhare
        </a>
        <div className="flex items-center gap-6 md:gap-8">
          <ul className="hidden items-center gap-7 font-mono text-[11px] uppercase tracking-[0.12em] text-band-muted sm:flex">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="transition-colors hover:text-band-ink">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
