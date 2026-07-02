import type { Metadata } from "next";
import Link from "next/link";
import {
  Layers,
  GitMerge,
  Code2,
  Compass,
  Sparkles,
  UserCheck,
} from "lucide-react";
import { Section, SectionHeader } from "@/src/shared/components/marketing/section";
import { Eyebrow } from "@/src/shared/components/marketing/eyebrow";
import { ServiceCard } from "@/src/shared/components/marketing/service-card";
import { FaqItem } from "@/src/shared/components/marketing/faq-item";
import { NumberedItem } from "@/src/shared/components/marketing/numbered-item";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Senior QA automation and AI-driven testing, packaged as clear engagements — frameworks, CI/CD integration, API testing, team training and more.",
};

export const revalidate = 3600;

/* ── Services ─────────────────────────────────────────────────────── */

const services = [
  {
    icon: Layers,
    title: "Test automation frameworks",
    description:
      "A maintainable automation framework built from scratch — architected for your stack, your team, and your release cadence.",
    features: [
      "Framework architecture & setup",
      "UI, API & end-to-end suites",
      "Coding standards & patterns",
      "Documentation & handover",
    ],
  },
  {
    icon: GitMerge,
    title: "CI/CD quality integration",
    description:
      "Automated testing wired into your delivery pipeline, so quality is checked on every commit — not after release.",
    features: [
      "Tests running in your pipeline",
      "Quality gates & branch policies",
      "Coverage & test reporting",
      "Azure DevOps, GitHub or Jenkins",
    ],
  },
  {
    icon: Code2,
    title: "API test automation",
    description:
      "Specialized automated coverage for your APIs and microservices — contracts, integration and regression, validated continuously.",
    features: [
      "Functional & contract tests",
      "Integration & regression suites",
      "Data-driven scenarios",
      "Pipeline integration",
    ],
  },
  {
    icon: Compass,
    title: "QA strategy & assessment",
    description:
      "A clear-eyed review of where your quality process stands today, and a practical roadmap for where it should go.",
    features: [
      "Current-state assessment",
      "Tooling & coverage analysis",
      "Prioritized improvement roadmap",
      "Quick-win recommendations",
    ],
  },
  {
    icon: Sparkles,
    title: "AI-powered QA",
    description:
      "Bring AI into the quality cycle — generate test cases, sharpen acceptance criteria, and triage failures faster.",
    features: [
      "Test case & edge-case generation",
      "User story & criteria refinement",
      "Failure triage with LLMs",
      "Practical, in-flow adoption",
    ],
  },
  {
    icon: UserCheck,
    title: "Fractional QA lead",
    description:
      "Senior QA leadership embedded part-time — direction, standards and mentorship, without a full-time hire.",
    features: [
      "Embedded QA leadership",
      "Process & standards ownership",
      "Team mentorship & reviews",
      "Flexible monthly engagement",
    ],
  },
];

const SERVICES_COLS: Record<number, string> = {
  1: "lg:grid-cols-1",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
};
const servicesGridCols =
  SERVICES_COLS[Math.ceil(Math.sqrt(services.length))] ?? "lg:grid-cols-3";

/* ── Process steps ────────────────────────────────────────────────── */

const steps = [
  {
    title: "Discover",
    body: "We start with a focused conversation about your stack, team size, release cadence, and current pain points — so the engagement is scoped to what actually matters.",
  },
  {
    title: "Plan",
    body: "You receive a clear, written proposal: scope, deliverables, timeline, and success criteria. No vague retainers, no scope creep.",
  },
  {
    title: "Build",
    body: "Hands-on execution — frameworks, pipelines, training sessions, or strategy docs — delivered incrementally so you see progress from week one.",
  },
  {
    title: "Hand over",
    body: "Every engagement ends with your team owning the output: documented, tested, and integrated. The goal is autonomy, not dependency.",
  },
];

/* ── FAQ ──────────────────────────────────────────────────────────── */

const faqs = [
  {
    question: "We already have manual testers — why do we need automation?",
    answer:
      "Manual testing catches exploratory issues; automation catches regressions at speed. As your release cadence increases, manual-only coverage becomes the bottleneck. Automation doesn't replace testers — it frees them to do the work machines can't.",
  },
  {
    question: "We don't have time to set up a framework right now.",
    answer:
      "That's exactly when it matters most. A poor-quality release costs more time than the setup. The framework is built for you, not by you — your team sees working tests from week one without stopping feature work.",
  },
  {
    question: "Our APIs change too often to keep tests up to date.",
    answer:
      "Contract and data-driven tests are designed for change. When the structure is right, updating a test for a schema change takes minutes. Without tests, a breaking change in production takes days to diagnose.",
  },
  {
    question: "We tried a QA strategy document before and nothing changed.",
    answer:
      "An assessment without a prioritized action plan is just a report. What you get here is a ranked roadmap with quick wins you can act on immediately — not a slide deck that sits in a drawer.",
  },
  {
    question: "We're not sure AI tools are mature enough for our QA process.",
    answer:
      "The AI-powered QA service doesn't replace your process — it plugs into it. LLMs generate test cases and triage failures; your team reviews and decides. The risk is low; the time saved on repetitive tasks is immediate.",
  },
  {
    question: "We need a full-time QA lead but can't justify the headcount yet.",
    answer:
      "A fractional engagement gives you senior direction, standards, and mentorship at a fraction of the cost. When the business is ready for a full-time hire, you'll already have the processes and culture in place to onboard them properly.",
  },
];

/* ── Page ─────────────────────────────────────────────────────────── */

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <Section
        id="services-hero"
        labelledBy="services-hero-title"
        containerClassName="pt-16 pb-8 sm:pt-24 md:pt-28 md:pb-12"
      >
        <SectionHeader
          as="h1"
          align="center"
          eyebrow="Services"
          titleId="services-hero-title"
          title={
            <>
              Quality engineering,{" "}
              <span className="text-[var(--color-text-soft)]">without the overhead.</span>
            </>
          }
          lead="Senior QA automation and AI-driven testing, packaged as clear engagements. Pick the one that fits where your team is today — or combine a few."
        />
      </Section>

      {/* Services grid */}
      <Section id="services" labelledBy="services-title">
        <SectionHeader
          align="center"
          eyebrow="What I offer"
          titleId="services-title"
          title="Ways to work together."
          lead="Every engagement is hands-on. No slide decks, no generic recommendations — just execution, documentation, and a team that owns the output when we're done."
        />
        <ul className={`mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 ${servicesGridCols}`}>
          {services.map((service) => (
            <li key={service.title}>
              <ServiceCard {...service} />
            </li>
          ))}
        </ul>
      </Section>

      {/* How we work */}
      <Section variant="surface" id="process" labelledBy="process-title">
        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-12 md:gap-x-12">
          <div className="md:col-span-4">
            <SectionHeader
              eyebrow="How I work"
              titleId="process-title"
              title="From first call to team autonomy."
            />
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-soft)]">
              Every engagement follows the same four-step pattern — so you always know what&apos;s happening and what comes next.
            </p>
          </div>
          <ol className="md:col-span-8">
            {steps.map((step, i) => (
              <NumberedItem
                key={step.title}
                index={i + 1}
                title={step.title}
                body={step.body}
              />
            ))}
          </ol>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" labelledBy="faq-title">
        <SectionHeader
          align="center"
          eyebrow="FAQ"
          titleId="faq-title"
          title="Questions, answered."
        />
        <div className="mx-auto mt-10 max-w-3xl">
          {faqs.map((faq) => (
            <FaqItem key={faq.question} {...faq} />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section
        variant="dark"
        id="services-cta"
        labelledBy="services-cta-title"
        containerClassName="py-20 text-center sm:py-28"
      >
        <div className="flex justify-center">
          <Eyebrow>Get started</Eyebrow>
        </div>
        <h2 id="services-cta-title" className="mt-5">
          Ready to raise the quality bar?
        </h2>
        <div className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[color-mix(in_oklch,var(--color-surface),transparent_22%)]">
          Tell me about your stack, your team, and your biggest QA pain point. I&apos;ll come back with a concrete proposal — no obligations.
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-surface)] px-7 py-3.5 text-sm font-medium tracking-wide text-[var(--color-text)] transition-colors hover:bg-[var(--color-accent)] hover:text-[var(--color-surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-text)]"
          >
            Let&apos;s talk
          </Link>
        </div>
      </Section>
    </>
  );
}
