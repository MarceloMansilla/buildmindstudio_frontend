"use client";

import { useState, type FormEvent } from "react";
import { Check, Send } from "lucide-react";
import { cn } from "@/src/lib/utils";

type Field = "name" | "email" | "subject" | "message";
type Values = Record<Field, string>;
type Errors = Partial<Record<Field, string>>;

const MESSAGE_MAX = 1000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_RE = /^(?=.*\p{L})[\p{L}\p{M} .'-]+$/u;

function validateField(field: Field, value: string): string | undefined {
  const v = value.trim();

  if (field === "name") {
    if (!v) return "Please enter your name.";
    if (v.length < 2) return "Your name is a little short.";
    if (v.length > 60) return "Please keep your name under 60 characters.";
    if (!NAME_RE.test(v))
      return "Use letters, spaces, hyphens, or apostrophes only.";
    return undefined;
  }

  if (field === "email") {
    if (!v) return "Please enter your email.";
    if (!EMAIL_RE.test(v)) return "Enter a valid email address.";
    return undefined;
  }

  if (field === "subject") {
    if (!v) return "Please add a subject.";
    if (v.length < 3) return "Subject must be at least 3 characters.";
    if (v.length > 100) return "Please keep the subject under 100 characters.";
    return undefined;
  }

  // message
  if (!v) return "Please write your message.";
  if (v.length < 10) return "Message must be at least 10 characters.";
  if (v.length > MESSAGE_MAX)
    return `Please keep your message under ${MESSAGE_MAX} characters.`;
  return undefined;
}

const EMPTY: Values = { name: "", email: "", subject: "", message: "" };

export function ContactForm() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );
  const [sentName, setSentName] = useState("");

  function update(field: Field, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    // Clear the field's error as the user corrects it.
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
  }

  function handleBlur(field: Field) {
    setErrors((prev) => ({ ...prev, [field]: validateField(field, values[field]) }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const found: Errors = {};
    (Object.keys(values) as Field[]).forEach((f) => {
      const err = validateField(f, values[f]);
      if (err) found[f] = err;
    });
    setErrors(found);

    const firstError = (Object.keys(found) as Field[])[0];
    if (firstError) {
      document.getElementById(`contact-${firstError}`)?.focus();
      return;
    }

    setStatus("submitting");
    setSentName(values.name.trim());
    // TODO: wire to a real submission (server action / API route / email provider).
    window.setTimeout(() => {
      setStatus("success");
      setValues(EMPTY);
    }, 700);
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 text-center sm:p-12"
      >
        <span className="flex size-14 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-surface)]">
          <Check className="size-7" />
        </span>
        <h2
          className="mt-6 font-heading tracking-tight text-[var(--color-text)]"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", lineHeight: 1.1 }}
        >
          Message sent
        </h2>
        <div className="mt-3 max-w-sm leading-relaxed text-[var(--color-text-muted)]">
          Thanks{sentName ? `, ${sentName}` : ""} — we&rsquo;ll get back to you
          within 1&ndash;2 business days.
        </div>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 inline-flex items-center justify-center rounded-full border border-[var(--color-border)] px-6 py-2.5 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:outline-none"
        >
          Send another message
        </button>
      </div>
    );
  }

  const fieldClass = (field: Field) =>
    cn(
      "w-full rounded-xl border bg-[var(--color-bg)] px-4 py-2.5 text-sm text-[var(--color-text)] transition-colors placeholder:text-[var(--color-text-soft)] focus:ring-2 focus:outline-none",
      errors[field]
        ? "border-red-400 focus:border-red-400 focus:ring-red-400/30"
        : "border-[var(--color-border)] focus:border-[var(--color-accent)] focus:ring-[var(--color-accent)]/30",
    );

  const labelClass = "mb-1.5 block text-sm font-medium text-[var(--color-text)]";
  const errorClass = "mt-1.5 text-xs text-red-600";

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8 md:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            onBlur={() => handleBlur("name")}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            placeholder="Ada Lovelace"
            className={fieldClass("name")}
          />
          {errors.name ? (
            <p id="contact-name-error" role="alert" className={errorClass}>
              {errors.name}
            </p>
          ) : null}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            onBlur={() => handleBlur("email")}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            placeholder="ada@example.com"
            className={fieldClass("email")}
          />
          {errors.email ? (
            <p id="contact-email-error" role="alert" className={errorClass}>
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      {/* Subject */}
      <div className="mt-5">
        <label htmlFor="contact-subject" className={labelClass}>
          Subject
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          required
          value={values.subject}
          onChange={(e) => update("subject", e.target.value)}
          onBlur={() => handleBlur("subject")}
          aria-invalid={errors.subject ? true : undefined}
          aria-describedby={errors.subject ? "contact-subject-error" : undefined}
          placeholder="How can we help?"
          className={fieldClass("subject")}
        />
        {errors.subject ? (
          <p id="contact-subject-error" role="alert" className={errorClass}>
            {errors.subject}
          </p>
        ) : null}
      </div>

      {/* Message */}
      <div className="mt-5">
        <label htmlFor="contact-message" className={labelClass}>
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          maxLength={MESSAGE_MAX}
          required
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          onBlur={() => handleBlur("message")}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          placeholder="Tell us a little about what you need…"
          className={cn(fieldClass("message"), "resize-y")}
        />
        <div className="mt-1.5 flex items-start justify-between gap-3">
          <p id="contact-message-error" role="alert" className="text-xs text-red-600">
            {errors.message ?? ""}
          </p>
          <span aria-hidden className="shrink-0 text-xs text-[var(--color-text-soft)]">
            {values.message.length}/{MESSAGE_MAX}
          </span>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-text)] px-7 py-3 text-sm font-medium tracking-wide text-[var(--color-surface)] transition-colors hover:bg-[var(--color-accent)] focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)] focus-visible:outline-none disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? (
          "Sending…"
        ) : (
          <>
            <Send className="size-4" />
            Send message
          </>
        )}
      </button>
    </form>
  );
}