"use client";

// A small text switch in the nav ("Dark" / "Light") that changes the theme
// and remembers the choice. CSS decides which word shows, so no React state is needed.
export default function ThemeToggle() {
  function toggle() {
    const dark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      // Storage can be blocked (private mode); the switch still works for this visit.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-band-muted transition-colors hover:text-band-ink"
    >
      <span aria-hidden className="relative h-3 w-6 border border-current">
        <span className="absolute inset-y-[2px] left-[2px] w-2 bg-current transition-transform duration-300 dark:translate-x-[10px]" />
      </span>
      <span className="dark:hidden">Light</span>
      <span className="hidden dark:inline">Dark</span>
    </button>
  );
}
