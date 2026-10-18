
"use client";

import { Suspense, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";

import {
  temporaryProducts,
  type Product,
} from "../../data/temporary-products";

import AddToCartButton from "../../components/cart/AddToCartButton";

function ProductDetailsContent() {
  const params = useParams<{ id: string }>();
  const productId = params.id;

  const product = temporaryProducts.find(
    (item) => item.id === productId
  );

  if (!product) {
    notFound();
  }

  return <ProductDetailsView product={product} />;
}

function ProductDetailsView({ product }: { product: Product }) {
  const [message, setMessage] = useState("");

  function handleAddToCart() {
    if (!product.available) {
      setMessage("This product is currently unavailable.");
      return;
    }

    const storedCart = sessionStorage.getItem("person3-cart");

    const cart: { productId: string; quantity: number }[] =
      storedCart ? JSON.parse(storedCart) : [];

    const existingItem = cart.find(
      (item) => item.productId === product.id
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        productId: product.id,
        quantity: 1,
      });
    }

    sessionStorage.setItem(
      "person3-cart",
      JSON.stringify(cart)
    );

    setMessage(`${product.name} added to cart.`);
  }

  return (
    <main className="product-details">
      <Link href="/products">← Back to products</Link>

      <div className="product-details__layout">
        <div className="product-details__image">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 700px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        <section>
          <p>{product.category}</p>

          <h1>{product.name}</h1>

          <p>{product.description}</p>

          <p className="product-details__price">
            ETB {product.price.toLocaleString("en-ET")}
          </p>

          <AddToCartButton
            available={product.available}
            onAdd={handleAddToCart}
          />

          <p aria-live="polite">{message}</p>

          <Link href="/cart">View cart</Link>
        </section>
      </div>
    </main>
  );
}

export default function ProductDetailsPage() {
  return (
    <Suspense
      fallback={
        <main className="product-details">
          <p>Loading product...</p>
        </main>
      }
    >
      <ProductDetailsContent />
    </Suspense>
  );
}

