import type { ReactNode } from "react";

/**
 * Small uppercase section label with a leading gold rule.
 * Uses <span> (not <p>) so the scoped `.marketing p` rule can't override it.
 */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span aria-hidden className="h-px w-6 bg-[var(--color-accent)]" />
      <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
        {children}
      </span>
    </span>
  );
}
