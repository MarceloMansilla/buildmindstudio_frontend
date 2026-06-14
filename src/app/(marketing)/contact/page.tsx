import type { Metadata } from "next";
import { Mail, MapPin, Clock } from "lucide-react";
import { Section, SectionHeader } from "@/src/shared/components/marketing/section";
import { ContactForm } from "@/src/shared/components/marketing/contact-form";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Have a question or a project in mind? Send the BuildMind Studio team a note and we'll get back to you.",
};

export const revalidate = 3600;

const details = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@buildmind.studio",
    href: "mailto:hello@buildmind.studio",
  },
  { icon: MapPin, label: "Studio", value: "Remote — worldwide" },
  { icon: Clock, label: "Response time", value: "Within 1–2 business days" },
];

export default function ContactPage() {
  return (
    <div className="relative isolate overflow-hidden">
      {/* Atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[55vh]"
      >
        <div className="hero-glow absolute top-[-15%] left-1/2 h-[46vh] w-[80vw] max-w-4xl -translate-x-1/2 rounded-full blur-2xl" />
        <div className="hero-grain absolute inset-0 opacity-[0.04]" />
      </div>

      <Section
        id="contact"
        labelledBy="contact-title"
        containerClassName="pt-16 pb-16 sm:pt-24 md:pt-28 md:pb-24"
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Intro + details */}
          <div
            className="hero-reveal lg:col-span-5"
            style={{ animationDelay: "0ms" }}
          >
            <SectionHeader
              as="h1"
              eyebrow="Contact"
              titleId="contact-title"
              title="Let's talk."
              lead="Have a question, a project in mind, or just want to say hello? Send us a note and we'll get back to you."
            />

            <dl className="mt-10 space-y-6">
              {details.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <span
                      aria-hidden
                      className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-bg-soft)] text-[var(--color-accent)]"
                    >
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <dt className="text-sm font-medium text-[var(--color-text)]">
                        {item.label}
                      </dt>
                      <dd className="mt-0.5 text-sm text-[var(--color-text-muted)]">
                        {item.href ? (
                          <a
                            href={item.href}
                            className="transition-colors hover:text-[var(--color-accent)]"
                          >
                            {item.value}
                          </a>
                        ) : (
                          item.value
                        )}
                      </dd>
                    </div>
                  </div>
                );
              })}
            </dl>
          </div>

          {/* Form */}
          <div
            className="hero-reveal lg:col-span-7"
            style={{ animationDelay: "120ms" }}
          >
            <ContactForm />
          </div>
        </div>
      </Section>
    </div>
  );
}
