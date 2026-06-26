import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/src/shared/components/marketing/eyebrow";
import { LoginForm } from "@/src/shared/components/marketing/login-form";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to your BuildMind Studio account.",
};

// Sanitize the post-login redirect: allow only same-origin absolute paths.
// Blocks open redirects (`//evil.com`), protocol-relative URLs, and schemes
// such as `javascript:` that could otherwise be injected via the query string.
function getSafeCallback(raw: string | null): string {
  if (!raw) return "/dashboard";
  if (raw.startsWith("/") && !raw.startsWith("//") && !raw.startsWith("/\\")) {
    return raw;
  }
  return "/dashboard";
}

type SearchParams = Promise<{ callbackUrl?: string | string[] }>;

export default async function LoginPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const sp = await searchParams;
  const raw = typeof sp.callbackUrl === "string" ? sp.callbackUrl : null;
  const callbackUrl = getSafeCallback(raw);

  return (
    <div className="relative isolate overflow-hidden">
      {/* Atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[55vh]"
      >
        <div className="hero-glow absolute top-[-15%] left-1/2 h-[46vh] w-[80vw] max-w-3xl -translate-x-1/2 rounded-full blur-2xl" />
        <div className="hero-grain absolute inset-0 opacity-[0.04]" />
      </div>

      <div className="mx-auto flex min-h-[calc(100svh_-_13rem)] max-w-md flex-col justify-center px-6 py-16">
        <div className="hero-reveal">
          <div className="text-center">
            <div className="flex justify-center">
              <Eyebrow>Members</Eyebrow>
            </div>
            <h1
              className="mt-5 text-balance"
              style={{ fontSize: "clamp(1.875rem, 4vw, 2.5rem)", lineHeight: 1.1 }}
            >
              Welcome back
            </h1>
            <p className="mx-auto mt-3 max-w-sm">
              Sign in to continue to your dashboard.
            </p>
          </div>

          <div className="mt-8 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
            <LoginForm callbackUrl={callbackUrl} />
          </div>

          <p className="mt-6 text-center text-sm text-[var(--color-text-soft)]">
            New to BuildMind?{" "}
            <Link
              href="#"
              className="font-medium text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)]"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
