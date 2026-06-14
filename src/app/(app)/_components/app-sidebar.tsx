"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/src/lib/utils";

const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/dashboard/courses", label: "Courses" },
  { href: "/dashboard/metrics", label: "Metrics" },
];

/** Editorial serif wordmark — carries the studio brand into the app chrome. */
function Wordmark() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <span
        aria-hidden
        className="size-5 shrink-0 rounded-[5px] bg-[var(--color-accent)]"
      />
      <span className="font-heading text-lg leading-none tracking-tight text-sidebar-foreground">
        BuildMind{" "}
        <span className="italic text-[var(--color-text-soft)]">Studio</span>
      </span>
    </Link>
  );
}

export function AppSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // While the drawer is open on mobile, lock body scroll and allow Escape to close.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Mobile top bar — replaced by the persistent rail at md+ */}
      <div className="sticky top-0 z-30 flex items-center gap-3 border-b border-sidebar-border bg-sidebar px-4 py-3 md:hidden">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={open}
          aria-controls="app-sidebar"
          className="-ml-1 inline-flex size-9 items-center justify-center rounded-md text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Menu className="size-5" />
        </button>
        <Wordmark />
      </div>

      {/* Backdrop — mobile only, while the drawer is open */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          aria-hidden
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
        />
      )}

      {/* Off-canvas drawer on mobile; static navigation rail at md+ */}
      <aside
        id="app-sidebar"
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-72 max-w-[85vw] flex-col border-r border-sidebar-border bg-sidebar transition-transform duration-300 ease-out motion-reduce:transition-none",
          "md:static md:z-auto md:w-60 md:max-w-none md:translate-x-0 md:shadow-none md:transition-none",
          open ? "translate-x-0 shadow-xl" : "-translate-x-full",
        )}
      >
        <div className="flex items-center justify-between gap-2 p-4 pb-3">
          <Wordmark />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close navigation menu"
            className="inline-flex size-8 items-center justify-center rounded-md text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
          >
            <X className="size-5" />
          </button>
        </div>

        <nav className="flex flex-col gap-1 px-4 pb-4">
          <p className="px-3 pb-2 text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-muted-foreground">
            Workspace
          </p>
          {navItems.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/dashboard" &&
                pathname.startsWith(item.href + "/"));
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative flex items-center rounded-md py-2 pl-4 pr-3 text-sm transition-colors",
                  active
                    ? "bg-sidebar-accent font-medium text-sidebar-accent-foreground"
                    : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground",
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    "absolute inset-y-1.5 left-0 w-[3px] rounded-full transition-colors",
                    active ? "bg-[var(--color-accent)]" : "bg-transparent",
                  )}
                />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
