"use client";

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { CartItem } from "@/types/cart";
import { products } from "@/data/products";
import {
  addToCart as addCartItem,
  updateCartQuantity as updateCartItemQuantity,
  removeFromCart as removeCartItem,
  getCartCount,
  getCartSubtotal,
} from "@/lib/cart";

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  addToCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

type CartProviderProps = {
  children: ReactNode;
};

export function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<CartItem[]>([]);

  function addToCart(productId: string) {
    const product = products.find((item) => item.id === productId);

    // If product is not found or is unavailable, do nothing
    if (!product || !product.available) {
      return;
    }

    setItems((currentItems) => addCartItem(currentItems, productId));
  }

  function updateQuantity(productId: string, quantity: number) {
    setItems((currentItems) =>
      updateCartItemQuantity(currentItems, productId, quantity)
    );
  }

  function removeFromCart(productId: string) {
    setItems((currentItems) => removeCartItem(currentItems, productId));
  }

  function clearCart() {
    setItems([]);
  }

  const itemCount = getCartCount(items);
  const subtotal = getCartSubtotal(items, products);

  const value: CartContextValue = {
    items,
    itemCount,
    subtotal,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}
