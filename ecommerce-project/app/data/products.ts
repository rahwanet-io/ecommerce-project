export type Product = {
    id: string;
    name: string;
    price: number;
    category: "Tops" | "Bottoms" | "Shoes" | "Accessories" | "Outerwear";
    description: string;
    longDescription: string;
    image: string;
    featured: boolean;
    colors: string[];
    sizes: string[];
    rating: number;
};

export const products: Product[] = [
    {
        id: "linen-shirt",
        name: "Linen Shirt",
        price: 42,
        category: "Tops",
        description: "Lightweight everyday shirt for warm days.",
        longDescription:
            "Made with breathable linen, this shirt feels easy and casual while still looking put together for work, brunch, or a quick outing.",
        image:
            "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
        featured: true,
        colors: ["Ivory", "Blue", "Sand"],
        sizes: ["S", "M", "L", "XL"],
        rating: 4.8,
    },
    {
        id: "wool-coat",
        name: "Wool Coat",
        price: 110,
        category: "Outerwear",
        description: "Warm outer layer with a clean, classic cut.",
        longDescription:
            "This coat is made to handle chilly mornings and still look smart over jeans, dresses, or a simple knit. The oversized fit gives it a relaxed style.",
        image:
            "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
        featured: true,
        colors: ["Forest", "Taupe", "Black"],
        sizes: ["S", "M", "L", "XL"],
        rating: 4.7,
    },
    {
        id: "street-sneakers",
        name: "Street Sneakers",
        price: 68,
        category: "Shoes",
        description: "Simple sneakers for daily comfort and style.",
        longDescription:
            "Built for walking through the city, these sneakers keep things easy with a cushioned sole, flexible fit, and sporty shape that goes with almost any outfit.",
        image:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
        featured: true,
        colors: ["White", "Grey", "Olive"],
        sizes: ["6", "7", "8", "9", "10"],
        rating: 4.9,
    },
    {
        id: "wide-pants",
        name: "Wide Pants",
        price: 56,
        category: "Bottoms",
        description: "Easy drape and clean lines for everyday wear.",
        longDescription:
            "These wide-leg pants are soft, flattering, and comfortable enough for work or weekend plans. They pair well with a tucked-in tee or button-down shirt.",
        image:
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
        featured: false,
        colors: ["Chocolate", "Stone", "Black"],
        sizes: ["S", "M", "L", "XL"],
        rating: 4.6,
    },
    {
        id: "everyday-tote",
        name: "Everyday Tote",
        price: 35,
        category: "Accessories",
        description: "A roomy bag for your essentials and extras.",
        longDescription:
            "This tote is roomy enough for a laptop, water bottle, and daily small items, while still feeling compact and easy to carry from home to work or the weekend market.",
        image:
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80",
        featured: false,
        colors: ["Cream", "Black", "Rust"],
        sizes: ["One Size"],
        rating: 4.5,
    },
    {
        id: "soft-knit",
        name: "Soft Knit",
        price: 48,
        category: "Tops",
        description: "A cozy knit that works for layering or alone.",
        longDescription:
            "This knit feels warm and soft without being bulky. It is easy to layer under jackets or wear on its own for a simple, clean outfit.",
        image:
            "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
        featured: false,
        colors: ["Cream", "Rose", "Charcoal"],
        sizes: ["S", "M", "L"],
        rating: 4.7,
    },
];

export const categories = [
    "all",
    ...Array.from(new Set(products.map((product) => product.category))),
];
