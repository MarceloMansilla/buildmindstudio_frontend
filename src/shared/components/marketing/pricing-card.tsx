import Link from "next/link";
import { Check } from "lucide-react";
import { cn } from "@/src/lib/utils";

export function PricingCard({
  name,
  price,
  period,
  description,
  features,
  ctaLabel,
  ctaHref,
  featured = false,
}: {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-2xl border bg-[var(--color-surface)] p-6 sm:p-8",
        featured
          ? "border-[var(--color-accent)] shadow-sm ring-1 ring-[var(--color-accent)]/40"
          : "border-[var(--color-border)]",
      )}
    >
      {featured ? (
        <span className="absolute -top-3 left-6 rounded-full bg-[var(--color-accent)] px-3 py-1 text-xs font-medium tracking-wide text-[var(--color-surface)]">
          Most popular
        </span>
      ) : null}

      <h3 className="text-xl">{name}</h3>
      <div className="mt-2 text-sm text-[var(--color-text-soft)]">
        {description}
      </div>

      <div className="mt-5 flex items-baseline gap-1.5">
        <span className="font-heading text-4xl tracking-tight text-[var(--color-text)]">
          {price}
        </span>
        {period ? (
          <span className="text-sm text-[var(--color-text-soft)]">{period}</span>
        ) : null}
      </div>

      <ul className="mt-6 mb-8 space-y-3">
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

      <Link
        href={ctaHref}
        className={cn(
          // mt-auto pins the CTA to the bottom so cards of differing height align
          "mt-auto inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)]",
          featured
            ? "bg-[var(--color-text)] text-[var(--color-surface)] hover:bg-[var(--color-accent)]"
            : "border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]",
        )}
      >
        {ctaLabel}
      </Link>
    </div>
  );
}
