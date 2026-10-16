'use client';

import Link from "next/link";
import { useMemo, useState } from "react";
import { categories, products } from "@/app/data/products";

export default function ShopPage() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedSort, setSelectedSort] = useState("featured");

    const visibleProducts = useMemo(() => {
        let items = [...products];

        if (selectedCategory !== "all") {
            items = items.filter((product) => product.category === selectedCategory);
        }

        if (selectedSort === "low-high") {
            items.sort((a, b) => a.price - b.price);
        } else if (selectedSort === "high-low") {
            items.sort((a, b) => b.price - a.price);
        } else if (selectedSort === "rating") {
            items.sort((a, b) => b.rating - a.rating);
        } else {
            items.sort((a, b) => Number(b.featured) - Number(a.featured));
        }

        return items;
    }, [selectedCategory, selectedSort]);

    return (
        <main className="page-shell">
            <nav className="top-nav">
                <Link href="/">Trendy Closet</Link>
                <div className="nav-links">
                    <Link href="/">Home</Link>
                    <Link href="/products">Products</Link>
                    <Link href="/cart">Cart</Link>
                </div>
            </nav>

            <section className="section-block">
                <div className="section-head">
                    <h2>Catalogue</h2>
                    <Link href="/" className="small-link">
                        Back home
                    </Link>
                </div>

                <div className="catalogue-toolbar">
                    <div className="filter-group">
                        <label htmlFor="category">Category</label>
                        <select
                            id="category"
                            name="category"
                            value={selectedCategory}
                            onChange={(event) => setSelectedCategory(event.target.value)}
                        >
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category === "all" ? "All items" : category}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="filter-group">
                        <label htmlFor="sort">Sort by</label>
                        <select
                            id="sort"
                            name="sort"
                            value={selectedSort}
                            onChange={(event) => setSelectedSort(event.target.value)}
                        >
                            <option value="featured">Featured</option>
                            <option value="low-high">Price: low to high</option>
                            <option value="high-low">Price: high to low</option>
                            <option value="rating">Top rated</option>
                        </select>
                    </div>
                </div>

                <div className="product-grid">
                    {visibleProducts.map((product) => (
                        <Link
                            key={product.id}
                            href={`/products/${product.id}`}
                            className="product-card"
                        >
                            <img src={product.image} alt={product.name} className="product-image" />
                            <div className="product-info">
                                <p className="product-category">{product.category}</p>
                                <h3>{product.name}</h3>
                                <p className="product-desc">{product.description}</p>
                                <div className="product-bottom">
                                    <span className="price">${product.price}</span>
                                    <span className="rating">★ {product.rating}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}
