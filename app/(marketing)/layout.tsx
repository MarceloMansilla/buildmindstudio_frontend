import type { ReactNode } from "react";
import Link from "next/link";
import { buttonVariants } from "@/src/shared/components/ui/button";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="marketing flex min-h-full flex-col">
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            BuildMind Studio
          </Link>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/blog" className="hover:text-foreground transition-colors">
              Blog
            </Link>
            <Link href="/services" className="hover:text-foreground transition-colors">
              Services
            </Link>
            <Link href="/dashboard" className={buttonVariants({ size: "sm" })}>
              Dashboard
            </Link>
          </div>
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} BuildMind Studio. All rights reserved.
      </footer>
    </div>
  );
}
