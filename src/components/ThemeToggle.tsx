"use client";

import { Moon, Sun } from "lucide-react";

// Round button in the top-right corner that switches between light and dark mode
// and remembers the choice for next time. CSS decides which icon shows
// (moon in light mode, sun in dark mode), so the button needs no React state.
export default function ThemeToggle() {
  function toggle() {
    const dark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      // Storage can be blocked (private mode); the toggle still works for this visit.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="grid size-14 place-items-center rounded-full bg-tile text-accent shadow-[0_3px_6px_rgb(0_0_0/0.18)] transition-transform hover:scale-105"
    >
      <Moon className="size-5 dark:hidden" aria-hidden />
      <Sun className="hidden size-5 dark:block" aria-hidden />
    </button>
  );
}
