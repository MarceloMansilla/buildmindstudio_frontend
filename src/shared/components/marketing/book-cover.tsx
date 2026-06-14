import { cn } from "@/src/lib/utils";

type Variant = { from: string; to: string; fg: string; accent: string };

// Invented covers — warm, editorial gradients cohesive with the brand palette.
const VARIANTS: Variant[] = [
  { from: "#261d11", to: "#3a2e1b", fg: "#F4EEE0", accent: "#C9A86A" },
  { from: "#C2A062", to: "#927239", fg: "#1c150a", accent: "#FFFDF7" },
  { from: "#FFFCF6", to: "#ECE1CC", fg: "#1c150a", accent: "#B89455" },
  { from: "#4a3a24", to: "#281e11", fg: "#F4EEE0", accent: "#D8BE8A" },
  { from: "#2c2925", to: "#14110d", fg: "#F4EEE0", accent: "#C9A86A" },
  { from: "#8a5a3c", to: "#5e3a23", fg: "#F8EFE6", accent: "#F0D6B0" },
];

/**
 * Procedural book cover. Lifts on hover of an ancestor `.group/book`;
 * pass `tilt` for the featured presentation (a static 3D angle that
 * straightens on hover).
 */
export function BookCover({
  title,
  author,
  variantIndex,
  tilt = false,
  className,
}: {
  title: string;
  author: string;
  variantIndex: number;
  tilt?: boolean;
  className?: string;
}) {
  const v = VARIANTS[variantIndex % VARIANTS.length];
  return (
    <div className={cn("[perspective:1400px]", className)}>
      <div
        className={cn(
          "relative aspect-[3/4] w-full overflow-hidden rounded-md ring-1 ring-black/10 transition-all duration-500 ease-out will-change-transform motion-reduce:transition-none",
          tilt
            ? "shadow-[0_30px_60px_-18px_rgba(40,30,15,0.6)] [transform:rotateY(-14deg)_rotateX(4deg)] group-hover/book:[transform:rotateY(-5deg)_rotateX(1deg)_translateY(-4px)]"
            : "shadow-[0_12px_30px_-14px_rgba(40,30,15,0.5)] group-hover/book:-translate-y-1.5 group-hover/book:shadow-[0_22px_45px_-14px_rgba(40,30,15,0.55)]",
        )}
        style={{
          background: `linear-gradient(150deg, ${v.from}, ${v.to})`,
          color: v.fg,
        }}
      >
        {/* Spine shadow */}
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 w-2.5 bg-gradient-to-r from-black/30 to-transparent"
        />
        {/* Page block hint on the fore-edge */}
        <div
          aria-hidden
          className="absolute inset-y-[6%] right-0 w-[3px] bg-[repeating-linear-gradient(180deg,rgba(255,255,255,0.35)_0_1px,transparent_1px_3px)]"
        />
        {/* Paper grain */}
        <div
          aria-hidden
          className="hero-grain absolute inset-0 opacity-[0.07] mix-blend-overlay"
        />
        <div className="relative flex h-full flex-col justify-between p-5">
          <span
            className="text-[0.6rem] font-medium tracking-[0.22em] uppercase"
            style={{ color: v.accent }}
          >
            BuildMind Press
          </span>
          <div>
            <span
              aria-hidden
              className="mb-3 block h-px w-8"
              style={{ backgroundColor: v.accent }}
            />
            <div className="font-heading text-xl leading-tight tracking-tight">
              {title}
            </div>
            <div className="mt-2 text-xs tracking-wide" style={{ color: v.accent }}>
              {author}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
