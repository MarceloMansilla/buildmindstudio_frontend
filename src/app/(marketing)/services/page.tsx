import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  Wrench,
  Users,
  Rocket,
  Code,
  LineChart,
} from "lucide-react";
import { Section, SectionHeader } from "@/src/shared/components/marketing/section";
import { Eyebrow } from "@/src/shared/components/marketing/eyebrow";
import { ServiceCard } from "@/src/shared/components/marketing/service-card";
import { PricingCard } from "@/src/shared/components/marketing/pricing-card";
import { FaqItem } from "@/src/shared/components/marketing/faq-item";
import { NumberedItem } from "@/src/shared/components/marketing/numbered-item";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Courses, tooling, mentorship, and team training — the services that help developers and teams ship better work.",
};

export const revalidate = 3600;

/* ── Placeholder content (Lorem ipsum) ───────────────────────────── */

const LOREM_A =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const LOREM_B =
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const services = [
  {
    icon: GraduationCap,
    title: "Guided learning paths",
    description: LOREM_A,
    features: ["Self-paced modules", "Hands-on projects", "Shareable certificates"],
  },
  {
    icon: Wrench,
    title: "Developer tooling",
    description: LOREM_B,
    features: ["CLI & editor plugins", "Reusable templates", "API access"],
  },
  {
    icon: Users,
    title: "1:1 mentorship",
    description: LOREM_A,
    features: ["Weekly sessions", "Code feedback", "Goal tracking"],
  },
  {
    icon: Rocket,
    title: "Team training",
    description: LOREM_B,
    features: ["Custom curriculum", "Cohort dashboards", "Onboarding support"],
  },
  {
    icon: Code,
    title: "Code reviews",
    description: LOREM_A,
    features: ["Async PR reviews", "Architecture guidance", "Security checks"],
  },
  {
    icon: LineChart,
    title: "Career coaching",
    description: LOREM_B,
    features: ["Portfolio review", "Interview prep", "Salary guidance"],
  },
];

const steps = [
  { title: "Discover", body: LOREM_A },
  { title: "Plan", body: LOREM_B },
  { title: "Build", body: LOREM_A },
  { title: "Grow", body: LOREM_B },
];

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "/forever",
    description: "For curious developers getting started.",
    features: ["3 active courses", "Community access", "Progress tracking"],
    ctaLabel: "Get started",
    ctaHref: "/dashboard",
    featured: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For developers serious about growth.",
    features: [
      "Everything in Starter",
      "Unlimited courses",
      "1:1 mentorship",
      "Certificates",
    ],
    ctaLabel: "Start free trial",
    ctaHref: "/dashboard",
    featured: true,
  },
  {
    name: "Team",
    price: "Custom",
    period: undefined,
    description: "For teams leveling up together.",
    features: [
      "Everything in Pro",
      "Team dashboards",
      "SSO & invoicing",
      "Dedicated support",
    ],
    ctaLabel: "Contact sales",
    ctaHref: "/contact",
    featured: false,
  },
];

const faqs = [
  { question: "What's included in the free plan?", answer: LOREM_A },
  { question: "Can I switch plans later?", answer: LOREM_B },
  { question: "Do you offer team discounts?", answer: LOREM_A },
  { question: "How do mentorship sessions work?", answer: LOREM_B },
];

/* ── Page ────────────────────────────────────────────────────────── */

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <Section
        id="services-hero"
        labelledBy="services-hero-title"
        containerClassName="pt-16 pb-12 sm:pt-24 md:pt-28"
      >
        <SectionHeader
          as="h1"
          align="center"
          eyebrow="Services"
          titleId="services-hero-title"
          title={
            <>
              Everything you need to{" "}
              <span className="text-[var(--color-text-soft)]">level up.</span>
            </>
          }
          lead={LOREM_A}
        />
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="#pricing" className="btn-primary">
            Explore plans
          </Link>
          <Link href="/contact" className="btn-secondary">
            Talk to us
          </Link>
        </div>
      </Section>

      {/* Services grid */}
      <Section id="services" labelledBy="services-title">
        <SectionHeader
          align="center"
          eyebrow="What we offer"
          titleId="services-title"
          title="Services built around how developers actually grow."
          lead={LOREM_B}
        />
        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.title}>
              <ServiceCard {...service} />
            </li>
          ))}
        </ul>
      </Section>

      {/* How we work — process steps */}
      <Section variant="surface" id="process" labelledBy="process-title">
        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-12 md:gap-x-12">
          <div className="md:col-span-4">
            <SectionHeader
              eyebrow="How we work"
              titleId="process-title"
              title="A simple path from idea to impact."
            />
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

      {/* Pricing */}
      <Section id="pricing" labelledBy="pricing-title">
        <SectionHeader
          align="center"
          eyebrow="Pricing"
          titleId="pricing-title"
          title="Plans that scale with you."
          lead={LOREM_A}
        />
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section variant="surface" id="faq" labelledBy="faq-title">
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
          Ready to build your skills?
        </h2>
        <div className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[color-mix(in_oklch,var(--color-surface),transparent_22%)]">
          {LOREM_B}
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-surface)] px-7 py-3.5 text-sm font-medium tracking-wide text-[var(--color-text)] transition-colors hover:bg-[var(--color-accent)] hover:text-[var(--color-surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-text)]"
          >
            Start free
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 text-sm font-medium tracking-wide text-[var(--color-surface)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-text)]"
          >
            Talk to us
          </Link>
        </div>
      </Section>
    </>
  );
}
