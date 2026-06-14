"use client";

import { Plus, Trash2 } from "lucide-react";
import { useCart } from "@/src/shared/cart/cart-context";

/**
 * Before adding: a single "Add to cart" button.
 * Once in the cart: that button is replaced by Delete · quantity · Add more.
 */
export function CartControls({
  bookId,
  title,
}: {
  bookId: string;
  title: string;
}) {
  const { getQty, add, remove } = useCart();
  const qty = getQty(bookId);

  if (qty === 0) {
    return (
      <button
        type="button"
        onClick={() => add(bookId)}
        className="inline-flex w-full items-center justify-center rounded-full bg-[var(--color-text)] px-5 py-2.5 text-sm font-medium tracking-wide text-[var(--color-surface)] transition-colors hover:bg-[var(--color-accent)] focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] focus-visible:outline-none"
      >
        Add to cart
      </button>
    );
  }

  return (
    <div className="flex items-center justify-between gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] p-1">
      <button
        type="button"
        onClick={() => remove(bookId)}
        aria-label={`Remove ${title} from cart`}
        className="inline-flex size-9 items-center justify-center rounded-full text-[var(--color-text-soft)] transition-colors hover:bg-[var(--color-bg-soft)] hover:text-[var(--color-text)] focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:outline-none"
      >
        <Trash2 className="size-4" />
      </button>
      <span className="text-sm font-medium text-[var(--color-text)]">
        {qty} in cart
      </span>
      <button
        type="button"
        onClick={() => add(bookId)}
        aria-label={`Add another copy of ${title}`}
        className="inline-flex h-9 items-center gap-1.5 rounded-full bg-[var(--color-text)] px-3.5 text-sm font-medium text-[var(--color-surface)] transition-colors hover:bg-[var(--color-accent)] focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:outline-none"
      >
        <Plus className="size-4" />
        Add more
      </button>
    </div>
  );
}
