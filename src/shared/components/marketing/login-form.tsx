"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { cn } from "@/src/lib/utils";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Username allowlist — only safe characters, never special/markup/SQL metacharacters.
const USERNAME_RE = /^[a-zA-Z0-9._-]{3,30}$/;

// Accepts either an email (validated for format) or a username (validated
// against a strict allowlist). Allowlisting is a first line of defence against
// injection — untrusted input never reaches a sink unchecked.
function validateIdentifier(value: string): string | undefined {
  const v = value.trim();
  if (!v) return "Please enter your email or username.";
  if (v.includes("@")) {
    if (!EMAIL_RE.test(v)) return "Enter a valid email address.";
    return undefined;
  }
  if (!USERNAME_RE.test(v)) return "Use 3–30 letters, numbers, or . _ - only.";
  return undefined;
}

function validatePassword(value: string): string | undefined {
  // Don't trim — passwords may legitimately contain leading/trailing spaces.
  if (!value) return "Please enter your password.";
  return undefined;
}

type Errors = { identifier?: string; password?: string };

export function LoginForm({ callbackUrl }: { callbackUrl: string }) {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(false);

    const next: Errors = {
      identifier: validateIdentifier(identifier),
      password: validatePassword(password),
    };
    setErrors(next);

    if (next.identifier) {
      document.getElementById("login-identifier")?.focus();
      return;
    }
    if (next.password) {
      document.getElementById("login-password")?.focus();
      return;
    }

    // NOTE: no real authentication is wired here. A production implementation must
    // POST these credentials to a server endpoint that:
    //   • uses parameterized queries / an ORM (never string-built SQL),
    //   • verifies a hashed password (bcrypt / argon2) in constant time,
    //   • sets an HttpOnly + Secure + SameSite session cookie,
    //   • and applies CSRF protection and rate limiting.
    // The password is never logged and never placed in a URL.
    setSubmitted(true);
  }

  const fieldClass = (error?: string) =>
    cn(
      "w-full rounded-xl border bg-[var(--color-bg)] px-4 py-2.5 text-sm text-[var(--color-text)] transition-colors placeholder:text-[var(--color-text-soft)] focus:ring-2 focus:outline-none",
      error
        ? "border-red-400 focus:border-red-400 focus:ring-red-400/30"
        : "border-[var(--color-border)] focus:border-[var(--color-accent)] focus:ring-[var(--color-accent)]/30",
    );

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-5">
      {/* Email or username */}
      <div>
        <label
          htmlFor="login-identifier"
          className="mb-1.5 block text-sm font-medium text-[var(--color-text)]"
        >
          Email or username
        </label>
        <input
          id="login-identifier"
          name="identifier"
          type="text"
          autoComplete="username"
          required
          value={identifier}
          onChange={(e) => {
            setIdentifier(e.target.value);
            if (errors.identifier)
              setErrors((p) => ({ ...p, identifier: undefined }));
          }}
          onBlur={() =>
            setErrors((p) => ({ ...p, identifier: validateIdentifier(identifier) }))
          }
          aria-invalid={errors.identifier ? true : undefined}
          aria-describedby={
            errors.identifier ? "login-identifier-error" : undefined
          }
          placeholder="you@example.com"
          className={fieldClass(errors.identifier)}
        />
        {errors.identifier ? (
          <p
            id="login-identifier-error"
            role="alert"
            className="mt-1.5 text-xs text-red-600"
          >
            {errors.identifier}
          </p>
        ) : null}
      </div>

      {/* Password */}
      <div>
        <div className="mb-1.5 flex items-center justify-between">
          <label
            htmlFor="login-password"
            className="text-sm font-medium text-[var(--color-text)]"
          >
            Password
          </label>
          <Link
            href="#"
            className="text-xs font-medium text-[var(--color-text-soft)] transition-colors hover:text-[var(--color-accent)]"
          >
            Forgot password?
          </Link>
        </div>
        <div className="relative">
          <input
            id="login-password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (errors.password)
                setErrors((p) => ({ ...p, password: undefined }));
            }}
            onBlur={() =>
              setErrors((p) => ({ ...p, password: validatePassword(password) }))
            }
            aria-invalid={errors.password ? true : undefined}
            aria-describedby={
              errors.password ? "login-password-error" : undefined
            }
            placeholder="••••••••"
            className={cn(fieldClass(errors.password), "pr-11")}
          />
          <button
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute inset-y-0 right-0 flex w-11 items-center justify-center rounded-r-xl text-[var(--color-text-soft)] transition-colors hover:text-[var(--color-text)] focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:outline-none"
          >
            {showPassword ? (
              <EyeOff className="size-4" />
            ) : (
              <Eye className="size-4" />
            )}
          </button>
        </div>
        {errors.password ? (
          <p
            id="login-password-error"
            role="alert"
            className="mt-1.5 text-xs text-red-600"
          >
            {errors.password}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-text)] px-7 py-3 text-sm font-medium tracking-wide text-[var(--color-surface)] transition-colors hover:bg-[var(--color-accent)] focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)] focus-visible:outline-none"
      >
        <LogIn className="size-4" />
        Sign in
      </button>

      {submitted ? (
        <div
          role="status"
          className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-soft)] px-4 py-3 text-sm text-[var(--color-text-muted)]"
        >
          <span className="font-medium text-[var(--color-text)]">
            Looks good.
          </span>{" "}
          This is a demo — connect an authentication backend to finish signing
          in.
          <span className="mt-1 block text-xs text-[var(--color-text-soft)]">
            You&rsquo;d then be returned to{" "}
            <code className="rounded bg-[var(--color-bg)] px-1 py-0.5 font-mono text-[0.7rem]">
              {callbackUrl}
            </code>
            .
          </span>
        </div>
      ) : null}
    </form>
  );
}
