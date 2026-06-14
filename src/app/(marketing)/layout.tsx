import type { ReactNode } from "react";
import { MarketingNav } from "./_components/marketing-nav";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="marketing flex min-h-full flex-col">
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
        <MarketingNav />
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
