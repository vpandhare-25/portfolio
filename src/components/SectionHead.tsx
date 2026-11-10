// Section heading: a heavy rule, then a large left-aligned title.
//  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  EXPERIENCE
export default function SectionHead({ id, title }: { id: string; title: string }) {
  return (
    <div className="border-t-2 border-ink pt-5">
      <h2
        id={id}
        className="wide text-[clamp(1.9rem,8.4vw,4.5rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.02em] md:text-[clamp(2.25rem,5.5vw,4.5rem)]"
      >
        {title}
      </h2>
    </div>
  );
}
