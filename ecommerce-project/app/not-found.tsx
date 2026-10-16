import Link from "next/link";

export default function NotFound() {
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
                <p className="eyebrow">Product missing</p>
                <h1>We could not find that item.</h1>
                <p>
                    The product ID you entered does not exist in the catalogue right now.
                </p>
                <div className="button-row">
                    <Link href="/products" className="primary-button">
                        Back to catalogue
                    </Link>
                    <Link href="/" className="secondary-button">
                        Go home
                    </Link>
                </div>
            </section>
        </main>
    );
}
