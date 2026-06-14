import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "@/src/shared/components/marketing/eyebrow";

export const revalidate = 3600;

export default function HomePage() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Atmosphere — warm bloom + fine grain, behind everything */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-glow absolute top-[-12%] left-1/2 h-[55vh] w-[85vw] max-w-4xl -translate-x-1/2 rounded-full blur-2xl" />
        <div className="hero-grain absolute inset-0 opacity-[0.045]" />
      </div>

      <div className="mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl flex-col items-center justify-center px-6 py-20 text-center">
        <div className="hero-reveal" style={{ animationDelay: "0ms" }}>
          <Eyebrow>A studio for lifelong developers</Eyebrow>
        </div>

        <h1
          className="hero-reveal mt-7 max-w-4xl text-balance"
          style={{ animationDelay: "90ms" }}
        >
          Build your <em className="text-[var(--color-accent)] italic">mind</em>,
          build your future.
        </h1>

        <div
          className="hero-reveal mx-auto mt-7 max-w-xl text-lg leading-relaxed text-[var(--color-text-muted)]"
          style={{ animationDelay: "180ms" }}
        >
          Courses, tools, and resources for developers who want to grow — learn
          at your own pace and watch your progress compound, day after day.
        </div>

        <div
          className="hero-reveal mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animationDelay: "270ms" }}
        >
          <Link href="/dashboard" className="btn-primary">
            Start learning
          </Link>
          <Link
            href="/services"
            className="group inline-flex items-center gap-1.5 text-sm font-medium tracking-wide text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)]"
          >
            Explore the studio
            <ArrowRight
              aria-hidden
              className="size-4 transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Quiet trust line — serif wordmarks tie back to the partners section */}
        <div
          className="hero-reveal mt-16 flex flex-col items-center gap-3 sm:flex-row sm:gap-5"
          style={{ animationDelay: "360ms" }}
        >
          <span className="text-xs tracking-[0.18em] text-[var(--color-text-soft)] uppercase">
            Trusted by teams at
          </span>
          <div className="flex items-center gap-4 text-[var(--color-text-soft)] sm:gap-5">
            <span className="font-heading text-base">Northwind</span>
            <span
              aria-hidden
              className="size-1 rounded-full bg-[var(--color-border)]"
            />
            <span className="font-heading text-base">Lumen Labs</span>
            <span
              aria-hidden
              className="size-1 rounded-full bg-[var(--color-border)]"
            />
            <span className="font-heading text-base">Atlas &amp; Co</span>
          </div>
        </div>
      </div>
    </section>
  );
}
