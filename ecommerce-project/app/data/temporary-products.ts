export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  available: boolean;
};

export const temporaryProducts: Product[] = [
  {
    id: "dress-001",
    name: "Habesha Kemis",
    price: 3500,
    category: "Habesha Dresses",
    image: "/images/habesha-kemis.jpg",
    description: "Traditional Ethiopian dress with embroidery.",
    available: true,
  },
  {
    id: "dress-002",
    name: "Embroidered Habesha Dress",
    price: 4500,
    category: "Habesha Dresses",
    image: "/images/embroidered-dress.jpg",
    description: "A festive dress with traditional embroidery.",
    available: true,
  },
  {
    id: "shoes-001",
    name: "Traditional Leather Shoes",
    price: 1500,
    category: "Shoes",
    image: "/images/traditional-shoes.jpg",
    description: "Traditional-style leather shoes.",
    available: true,
  },
  {
    id: "accessory-003",
    name: "Embroidered Belt",
    price: 350,
    category: "Accessories",
    image: "/images/embroidered-belt.jpg",
    description: "A decorative belt for traditional clothing.",
    available: false,
  },
];