import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Eyebrow } from "@/src/shared/components/marketing/eyebrow";
import { NumberedItem } from "@/src/shared/components/marketing/numbered-item";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story behind BuildMind Studio — our mission, what we do, and the principles that guide how we help developers grow.",
};

export const revalidate = 3600;

/* ── Placeholder content (Lorem ipsum) ───────────────────────────── */

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const LOREM_LONG = `${LOREM} Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;

const stats = [
  { value: "Est. 2021", label: "in a single repo" },
  { value: "10,000+", label: "developers learning" },
  { value: "Remote-first", label: "team across 9 timezones" },
];

const offerings = [
  { title: "Learning paths", body: LOREM },
  { title: "Developer tools", body: LOREM },
  { title: "Mentorship", body: LOREM },
];

const principles = [
  { title: "Clarity over cleverness", body: LOREM },
  { title: "Learn by building", body: LOREM },
  { title: "Progress you can measure", body: LOREM },
  { title: "Community first", body: LOREM },
];

/* Invented partner/client logos — inline SVG wordmarks (placeholders) */
const partners: { name: string; mark: ReactNode }[] = [
  {
    name: "Northwind",
    mark: (
      <path d="M12 2 22 12 12 22 2 12Z" fill="none" stroke="currentColor" strokeWidth={1.5} />
    ),
  },
  {
    name: "Lumen Labs",
    mark: (
      <circle cx={12} cy={12} r={9} fill="none" stroke="currentColor" strokeWidth={1.5} />
    ),
  },
  {
    name: "Atlas & Co",
    mark: (
      <path d="M12 3 21 21H3Z" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" />
    ),
  },
  {
    name: "Verdant",
    mark: (
      <rect x={4} y={4} width={16} height={16} rx={5} fill="none" stroke="currentColor" strokeWidth={1.5} />
    ),
  },
  {
    name: "Kestrel",
    mark: (
      <path d="M3 17 12 7l9 10" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    name: "Monolith",
    mark: (
      <path d="M8 3h8v18H8Z M12 3v18" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" />
    ),
  },
];

/* ── Page ────────────────────────────────────────────────────────── */

export default function AboutUsPage() {
  return (
    <>
      {/* Hero */}
      <section
        id="hero"
        aria-labelledby="hero-title"
        className="relative isolate overflow-hidden"
      >
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="hero-glow absolute top-[-15%] left-1/2 h-[50vh] w-[80vw] max-w-3xl -translate-x-1/2 rounded-full blur-2xl" />
          <div className="hero-grain absolute inset-0 opacity-[0.04]" />
        </div>

        <div className="mx-auto max-w-3xl px-6 pt-16 pb-12 text-center sm:pt-24 md:pt-28">
          <div
            className="hero-reveal flex justify-center"
            style={{ animationDelay: "0ms" }}
          >
            <Eyebrow>Our story</Eyebrow>
          </div>
          <h1
            id="hero-title"
            className="hero-reveal mt-6"
            style={{ animationDelay: "90ms" }}
          >
            We&rsquo;re building a home for{" "}
            <span className="text-[var(--color-text-soft)]">
              lifelong developers.
            </span>
          </h1>
          <p
            className="hero-reveal mx-auto mt-6 max-w-xl"
            style={{ animationDelay: "180ms" }}
          >
            {LOREM_LONG}
          </p>

          {/* Company meta — small editorial facts, not big stat cards */}
          <dl
            className="hero-reveal mx-auto mt-10 flex max-w-2xl flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-10"
            style={{ animationDelay: "270ms" }}
          >
            {stats.map((s) => (
              <div key={s.value} className="text-center">
                <dt className="font-heading text-2xl tracking-tight text-[var(--color-text)]">
                  {s.value}
                </dt>
                <dd className="mt-1 text-sm text-[var(--color-text-soft)]">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Partners / clients logo cloud */}
      <section
        aria-label="Partners and clients"
        className="border-y border-[var(--color-border)] bg-[var(--color-surface)]"
      >
        <div className="mx-auto max-w-7xl px-6 py-12">
          <p className="text-center text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-text-soft)]">
            Trusted by teams at
          </p>
          <ul className="mt-8 grid grid-cols-2 items-center justify-items-center gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
            {partners.map((p) => (
              <li
                key={p.name}
                className="flex items-center gap-2.5 text-[var(--color-text-soft)] transition-colors hover:text-[var(--color-accent)]"
              >
                <svg viewBox="0 0 24 24" className="size-5 shrink-0" aria-hidden>
                  {p.mark}
                </svg>
                <span className="text-base font-semibold tracking-tight whitespace-nowrap">
                  {p.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Mission */}
      <section
        id="mission"
        aria-labelledby="mission-title"
        className="mx-auto max-w-7xl px-6 py-16 sm:py-20 md:py-28"
      >
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-12 md:gap-x-12">
          <div className="md:col-span-4">
            <Eyebrow>Our mission</Eyebrow>
          </div>
          <div className="md:col-span-8">
            <h2 id="mission-title">
              Make growth the most natural part of a developer&rsquo;s day.
            </h2>
            <p className="mt-6 max-w-2xl">{LOREM_LONG}</p>
            <p className="mt-4 max-w-2xl">{LOREM}</p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section
        id="what-we-do"
        aria-labelledby="what-we-do-title"
        className="border-y border-[var(--color-border)] bg-[var(--color-surface)]"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 md:py-28">
          <div className="max-w-2xl">
            <Eyebrow>What we do</Eyebrow>
            <h2 id="what-we-do-title" className="mt-5">
              Three ways we help you ship better work.
            </h2>
          </div>
          <ul className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map((o) => (
              <li
                key={o.title}
                className="border-t border-[var(--color-border)] pt-6"
              >
                <h3 className="text-xl">{o.title}</h3>
                <p className="mt-3">{o.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Principles */}
      <section
        id="principles"
        aria-labelledby="principles-title"
        className="mx-auto max-w-7xl px-6 py-16 sm:py-20 md:py-28"
      >
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-12 md:gap-x-12">
          <div className="md:col-span-4">
            <Eyebrow>Principles</Eyebrow>
            <h2 id="principles-title" className="mt-5">
              What we hold to.
            </h2>
          </div>
          <ol className="md:col-span-8">
            {principles.map((p, i) => (
              <NumberedItem
                key={p.title}
                index={i + 1}
                title={p.title}
                body={p.body}
              />
            ))}
          </ol>
        </div>
      </section>

      {/* Founder Note */}
      <section
        id="founder"
        aria-labelledby="founder-title"
        className="border-t border-[var(--color-border)] bg-[var(--color-surface)]"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 md:py-28">
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Founder note</Eyebrow>
            <span
              aria-hidden
              className="mt-6 block font-heading text-6xl leading-none text-[var(--color-accent)]"
            >
              &ldquo;
            </span>
            <blockquote
              id="founder-title"
              className="mt-3 font-heading text-2xl leading-snug tracking-tight text-[var(--color-text)] sm:text-3xl"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit — sed do
              eiusmod tempor incididunt ut labore.
            </blockquote>
            <p className="mt-6">{LOREM_LONG}</p>
            <p className="mt-4">{LOREM}</p>

            <div className="mt-8 flex items-center gap-4">
              <div
                aria-hidden
                className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)] font-heading text-lg text-[var(--color-surface)]"
              >
                MV
              </div>
              <div>
                <div className="font-medium text-[var(--color-text)]">
                  Marcus Vinterm
                </div>
                <div className="text-sm text-[var(--color-text-soft)]">
                  Founder &amp; CEO
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="cta"
        aria-labelledby="cta-title"
        className="bg-[var(--color-text)] text-[var(--color-surface)]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 text-center sm:py-28">
          <div className="flex justify-center">
            <Eyebrow>Get started</Eyebrow>
          </div>
          <h2 id="cta-title" className="mt-5">
            Ready to build your mind?
          </h2>
          <div className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[color-mix(in_oklch,var(--color-surface),transparent_22%)]">
            {LOREM}
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-surface)] px-7 py-3.5 text-sm font-medium tracking-wide text-[var(--color-text)] transition-colors hover:bg-[var(--color-accent)] hover:text-[var(--color-surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-text)]"
            >
              Get started
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 text-sm font-medium tracking-wide text-[var(--color-surface)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-text)]"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
