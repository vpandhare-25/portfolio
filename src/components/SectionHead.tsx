// Section heading: a heavy rule, then a numbered label and a large left-aligned title.
//  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  02                Experience                 2 roles
export default function SectionHead({
  id,
  index,
  title,
  count,
}: {
  id: string;
  index: string;
  title: string;
  count: string;
}) {
  return (
    <div className="grid grid-cols-12 items-end gap-x-6 border-t-2 border-ink pt-4">
      <span className="col-span-12 self-start font-mono text-xs text-muted md:col-span-2">{index}</span>
      <h2
        id={id}
        className="wide col-span-12 mt-4 text-[clamp(1.9rem,8.4vw,4.5rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.02em] md:col-span-7 md:mt-0 md:text-[clamp(2.25rem,5.5vw,4.5rem)]"
      >
        {title}
      </h2>
      <span className="col-span-12 mt-3 font-mono text-xs uppercase tracking-[0.1em] text-muted md:col-span-3 md:mt-0 md:text-right">
        {count}
      </span>
    </div>
  );
}
