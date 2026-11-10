"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

// Reads the OS "reduce motion" setting and stays in sync if it changes.
const motionQuery = "(prefers-reduced-motion: reduce)";
function subscribeReducedMotion(onChange: () => void) {
  const query = window.matchMedia(motionQuery);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}
function getReducedMotion() {
  return window.matchMedia(motionQuery).matches;
}

const TYPE_MS = 75; // time per letter while typing
const DELETE_MS = 40; // time per letter while deleting
const HOLD_MS = 1600; // pause once a word is fully typed
const GAP_MS = 350; // pause before typing the next word

// Types each phrase out letter by letter, holds it, deletes it, then moves to the next one.
// Visitors who ask their OS for reduced motion see the phrases listed instead.
export default function Typewriter({ phrases, className = "" }: { phrases: string[]; className?: string }) {
  const [index, setIndex] = useState(0); // which phrase
  const [length, setLength] = useState(0); // how many letters are showing
  const [deleting, setDeleting] = useState(false);
  const reduceMotion = useSyncExternalStore(subscribeReducedMotion, getReducedMotion, () => false);

  // One timer per step: add a letter, remove a letter, or switch direction.
  useEffect(() => {
    if (reduceMotion) return;
    const phrase = phrases[index];
    let delay = deleting ? DELETE_MS : TYPE_MS;
    let next: () => void;

    if (!deleting && length === phrase.length) {
      delay = HOLD_MS;
      next = () => setDeleting(true);
    } else if (deleting && length === 0) {
      delay = GAP_MS;
      next = () => {
        setDeleting(false);
        setIndex((i) => (i + 1) % phrases.length);
      };
    } else {
      next = () => setLength((n) => n + (deleting ? -1 : 1));
    }

    const timer = setTimeout(next, delay);
    return () => clearTimeout(timer);
  }, [index, length, deleting, reduceMotion, phrases]);

  return (
    <p className={className}>
      {/* Screen readers get the full list once instead of hearing every keystroke. */}
      <span className="sr-only">{phrases.join(", ")}</span>
      <span aria-hidden>
        {reduceMotion ? (
          phrases.join(" · ")
        ) : (
          <>
            {phrases[index].slice(0, length)}
            <span className="ml-1 inline-block h-[0.95em] w-[0.5em] translate-y-[0.12em] animate-[blink_1s_steps(1)_infinite] bg-signal" />
          </>
        )}
      </span>
    </p>
  );
}
