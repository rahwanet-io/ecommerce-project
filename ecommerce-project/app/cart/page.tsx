import Link from "next/link";

export default function CartPage() {
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

            <section className="empty-state">
                <p className="eyebrow">Cart</p>
                <h1>Your cart is empty right now.</h1>
                <p>Add something from the catalogue and it will show up here next.</p>
                <div className="button-row">
                    <Link href="/products" className="primary-button">
                        Browse products
                    </Link>
                </div>
            </section>
        </main>
    );
}
