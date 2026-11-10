// A section heading centered between two lines:  ──── EXPERIENCE ────
export default function SectionTitle({ id, children }: { id: string; children: string }) {
  return (
    <div className="flex items-center gap-4 px-2.5">
      <span aria-hidden className="h-px flex-1 bg-line" />
      <h2 id={id} className="text-xl font-bold uppercase tracking-wide md:text-2xl">
        {children}
      </h2>
      <span aria-hidden className="h-px flex-1 bg-line" />
    </div>
  );
}
