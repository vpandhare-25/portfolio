import Image from "next/image";

// The square on the left of each item: a logo or photo if one is set,
// otherwise the item's initials on a green tile.
export default function Tile({
  image,
  name,
  size = "size-[88px] md:size-[104px]",
}: {
  image: string | null;
  name: string;
  size?: string;
}) {
  if (image) {
    return (
      <div className={`relative shrink-0 overflow-hidden bg-tile ${size}`}>
        <Image src={image} alt={`${name} logo`} fill sizes="104px" className="object-cover" />
      </div>
    );
  }

  const initials = name
    .split(/\s+/)
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

  return (
    <div
      aria-hidden
      className={`grid shrink-0 place-items-center bg-accent font-serif text-3xl font-bold tracking-wide text-bg md:text-4xl ${size}`}
    >
      {initials}
    </div>
  );
}
