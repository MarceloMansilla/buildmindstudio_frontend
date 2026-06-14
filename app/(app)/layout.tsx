import type { ReactNode } from "react";
import Link from "next/link";

const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/dashboard/courses", label: "Courses" },
  { href: "/dashboard/metrics", label: "Metrics" },
];

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-full">
      <aside className="w-60 shrink-0 border-r bg-sidebar">
        <div className="flex h-full flex-col gap-2 p-4">
          <Link href="/" className="mb-4 px-2 text-base font-semibold tracking-tight text-sidebar-foreground">
            BuildMind Studio
          </Link>
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </aside>
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
