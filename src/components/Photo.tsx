import Image from "next/image";

// A photo that fills its frame without stretching, or a clearly labeled
// placeholder (fine grid + file path) until the real photo is added.
export default function Photo({
  src,
  alt,
  label,
  path,
  sizes,
  preload = false,
  className = "",
}: {
  src: string | null;
  alt: string;
  label: string;
  path: string;
  sizes: string;
  preload?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} preload={preload} className="object-cover" />
      ) : (
        <div className="placeholder absolute inset-0 flex flex-col justify-between p-4 font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
          <span className="text-ink">{label}</span>
          <span>Photo placeholder · {path}</span>
        </div>
      )}
    </div>
  );
}
