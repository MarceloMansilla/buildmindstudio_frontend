import type { LucideIcon } from "lucide-react";
import { Check } from "lucide-react";

export function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
}) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-accent)] sm:p-8">
      <span
        aria-hidden
        className="flex size-11 items-center justify-center rounded-xl bg-[var(--color-bg-soft)] text-[var(--color-accent)]"
      >
        <Icon className="size-5" />
      </span>
      <h3 className="mt-5 text-xl">{title}</h3>
      <p className="mt-3 flex-1">{description}</p>
      {features && features.length > 0 ? (
        <ul className="mt-5 space-y-2.5 border-t border-[var(--color-border)] pt-5">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2.5 text-sm text-[var(--color-text-muted)]"
            >
              <Check
                aria-hidden
                className="mt-0.5 size-4 shrink-0 text-[var(--color-accent)]"
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      ) : null}
      <div className="mt-6 flex justify-center border-t border-[var(--color-border)] pt-5">
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-[var(--color-accent)] px-5 py-2 text-sm font-medium text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent)] hover:text-[var(--color-surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
        >
          See details
        </button>
      </div>
    </div>
  );
}
