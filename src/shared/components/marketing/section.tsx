import type { ReactNode } from "react";
import { cn } from "@/src/lib/utils";
import { Eyebrow } from "./eyebrow";

type SectionVariant = "default" | "surface" | "dark";

const VARIANTS: Record<SectionVariant, string> = {
  default: "",
  surface: "border-y border-[var(--color-border)] bg-[var(--color-surface)]",
  dark: "bg-[var(--color-text)] text-[var(--color-surface)]",
};

/** Full-bleed band + centered, padded container. Mobile-first vertical rhythm. */
export function Section({
  id,
  labelledBy,
  variant = "default",
  className,
  containerClassName,
  children,
}: {
  id?: string;
  labelledBy?: string;
  variant?: SectionVariant;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(VARIANTS[variant], className)}
    >
      <div
        className={cn(
          "mx-auto max-w-7xl px-6 py-16 sm:py-20 md:py-28",
          containerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}

/** Eyebrow + heading + optional lead, left- or center-aligned. */
export function SectionHeader({
  eyebrow,
  title,
  titleId,
  lead,
  align = "left",
  as = "h2",
  className,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  titleId?: string;
  lead?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <div
      className={cn(
        centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        className,
      )}
    >
      {eyebrow ? (
        <div className={cn("mb-5", centered && "flex justify-center")}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
      ) : null}
      {as === "h1" ? (
        <h1 id={titleId}>{title}</h1>
      ) : (
        <h2 id={titleId}>{title}</h2>
      )}
      {lead ? (
        <p className={cn("mt-5", centered && "mx-auto max-w-xl")}>{lead}</p>
      ) : null}
    </div>
  );
}
