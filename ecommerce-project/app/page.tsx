
import Link from "next/link";
import { products } from "./data/products";

const featuredProducts = products.filter((product) => product.featured).slice(0, 3);

export default function HomePage() {
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

      <section className="hero-box">
        <div className="hero-copy">
          <p className="eyebrow">New season</p>
          <h1>Fresh fits for everyday life.</h1>
          <p>
            Find easy layers, cool sneakers, and pieces that help you get dressed
            without overthinking it.
          </p>

          <div className="button-row">
            <Link href="/products" className="primary-button">
              Shop the collection
            </Link>
            <Link href="/products?category=Shoes" className="secondary-button">
              See shoes
            </Link>
          </div>
        </div>

        <div className="hero-card">
          <p className="mini-label">Best seller</p>
          <h2>Street Sneakers</h2>
          <p>Comfort first, style always.</p>
          <span className="price">$68</span>
        </div>
      </section>

      <section className="section-block">
        <div className="section-head">
          <h2>Featured products</h2>
          <Link href="/products" className="small-link">
            View all
          </Link>
        </div>

        <div className="product-grid">
          {featuredProducts.map((product) => (
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
