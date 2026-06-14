import type { ReactNode } from "react";
import { MarketingNav } from "../../shared/components/ui/nav";
import { CartProvider } from "@/src/shared/cart/cart-context";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <div className="marketing flex min-h-full flex-col">
        <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
          <MarketingNav />
        </header>
        <main className="flex-1">{children}</main>
      </div>
    </CartProvider>
  );
}
