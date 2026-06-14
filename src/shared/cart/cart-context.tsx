"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type CartItems = Record<string, number>; // bookId -> quantity

type CartContextValue = {
  items: CartItems;
  count: number; // total quantity across all items
  getQty: (id: string) => number;
  add: (id: string) => void;
  remove: (id: string) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItems>({});

  const add = useCallback((id: string) => {
    setItems((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  }, []);

  const remove = useCallback((id: string) => {
    setItems((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  }, []);

  const value = useMemo<CartContextValue>(() => {
    const count = Object.values(items).reduce((sum, qty) => sum + qty, 0);
    return {
      items,
      count,
      getQty: (id: string) => items[id] ?? 0,
      add,
      remove,
    };
  }, [items, add, remove]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
}
