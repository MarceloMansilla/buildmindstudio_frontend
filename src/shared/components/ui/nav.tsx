"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/src/shared/cart/cart-context";

const NAV_LINKS = [
  { href: "/about-us", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/books", label: "Books" },
  { href: "/contact", label: "Contact us" },
  { href: "/login", label: "Login" },
];

export function MarketingNav() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  // Auto-close the mobile menu once the viewport grows to the desktop breakpoint.
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const handler = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  // Close on Escape for keyboard users.
  useEffect(() => {
    if (!open) return;
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  return (
    <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <Link
        href="/"
        className="text-lg font-semibold tracking-tight"
        onClick={() => setOpen(false)}
      >
        BuildMind Studio
      </Link>

      <div className="flex items-center gap-1 sm:gap-2">
        {/* Desktop links */}
        <div className="mr-1 hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Cart */}
        <Link
          href="/books"
          aria-label={
            count > 0
              ? `Cart, ${count} item${count === 1 ? "" : "s"}`
              : "Cart"
          }
          className="relative inline-flex size-9 items-center justify-center rounded-md text-foreground transition-colors hover:bg-muted"
        >
          <ShoppingBag className="size-5" />
          {count > 0 ? (
            <span
              aria-hidden
              className="absolute -top-0.5 -right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[var(--color-accent)] px-1 text-[0.625rem] font-semibold text-[var(--color-surface)]"
            >
              {count}
            </span>
          ) : null}
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground transition-colors hover:bg-muted md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          id="mobile-nav"
          className="absolute inset-x-0 top-full border-b bg-background/95 backdrop-blur md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4 text-sm text-muted-foreground">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
