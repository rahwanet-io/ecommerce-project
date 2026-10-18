"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import {
  temporaryProducts,
} from "../data/temporary-products";

type TemporaryCartItem = {
  productId: string;
  quantity: number;
};

export default function CartPage() {
  const [items, setItems] = useState<TemporaryCartItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const storedCart = sessionStorage.getItem("person3-cart");

    if (storedCart) {
      try {
        const parsed: unknown = JSON.parse(storedCart);

        if (Array.isArray(parsed)) {
          setItems(parsed as TemporaryCartItem[]);
        }
      } catch {
        sessionStorage.removeItem("person3-cart");
      }
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      sessionStorage.setItem("person3-cart", JSON.stringify(items));
    }
  }, [items, loaded]);

  function updateQuantity(productId: string, quantity: number) {
    if (!Number.isInteger(quantity) || quantity < 1) {
      return;
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.productId === productId
          ? { ...item, quantity }
          : item
      )
    );
  }

  function removeItem(productId: string) {
    setItems((currentItems) =>
      currentItems.filter(
        (item) => item.productId !== productId
      )
    );
  }

  function clearCart() {
    setItems([]);
  }

  const cartProducts = items.flatMap((item) => {
    const product = temporaryProducts.find(
      (product) => product.id === item.productId
    );

    return product ? [{ product, quantity: item.quantity }] : [];
  });

  const itemCount = cartProducts.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const subtotal = cartProducts.reduce(
    (total, item) =>
      total + item.product.price * item.quantity,
    0
  );

  if (!loaded) {
    return <main><p>Loading cart...</p></main>;
  }

  if (cartProducts.length === 0) {
    return (
      <main className="cart-page">
        <h1>Your shopping cart</h1>
        <p>Your cart is empty.</p>
        <Link href="/products">Continue shopping</Link>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <h1>Your shopping cart</h1>
      <p>{itemCount} item(s)</p>

      <div className="cart-items">
        {cartProducts.map(({ product, quantity }) => (
          <article className="cart-item" key={product.id}>
            <div>
              <h2>{product.name}</h2>
              <p>
                ETB {product.price.toLocaleString("en-ET")} each
              </p>
              <p>
                Line total: ETB{" "}
                {(product.price * quantity).toLocaleString("en-ET")}
              </p>
            </div>

            <label>
              Quantity
              <input
                type="number"
                min="1"
                step="1"
                value={quantity}
                onChange={(event) =>
                  updateQuantity(
                    product.id,
                    Number(event.target.value)
                  )
                }
              />
            </label>

            <button
              type="button"
              onClick={() => removeItem(product.id)}
            >
              Remove
            </button>
          </article>
        ))}
      </div>

      <section className="cart-summary">
        <h2>Subtotal: ETB {subtotal.toLocaleString("en-ET")}</h2>
        <p>Delivery costs, if any, are not included.</p>

        <button type="button" onClick={clearCart}>
          Clear cart
        </button>

        <Link href="/checkout">Proceed to checkout</Link>
      </section>
    </main>
  );
}