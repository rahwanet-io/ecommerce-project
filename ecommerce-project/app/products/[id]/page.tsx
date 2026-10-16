import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/app/data/products";

type ProductPageParams = {
    id: string;
};

export default async function ProductDetailsPage({
    params,
}: {
    params: Promise<ProductPageParams> | ProductPageParams;
}) {
    const resolvedParams = await Promise.resolve(params);
    const productId = resolvedParams.id;

    const product = products.find((item) => item.id === productId);

    if (!product) {
        notFound();
    }

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

            <div className="product-detail-wrap">
                <Link href="/products" className="small-link">
                    ← Back to catalogue
                </Link>

                <section className="product-detail">
                    <div className="detail-image-box">
                        <img src={product.image} alt={product.name} className="detail-image" />
                    </div>

                    <div className="detail-info">
                        <p className="eyebrow">{product.category}</p>
                        <h1>{product.name}</h1>
                        <p className="price">${product.price}</p>
                        <p className="rating">★ {product.rating} / 5</p>
                        <p>{product.longDescription}</p>

                        <div className="spec-block">
                            <h3>Colors</h3>
                            <div className="pill-row">
                                {product.colors.map((color) => (
                                    <span key={color} className="pill">
                                        {color}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="spec-block">
                            <h3>Sizes</h3>
                            <div className="pill-row">
                                {product.sizes.map((size) => (
                                    <span key={size} className="pill">
                                        {size}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="button-row">
                            <button type="button" className="primary-button">
                                Add to cart
                            </button>
                            <Link href="/products" className="secondary-button">
                                Keep shopping
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
