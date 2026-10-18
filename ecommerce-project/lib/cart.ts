import type { CartItem } from "@/types/cart";
import type { Product } from "@/types/product";

export function addToCart(cart: CartItem[], productId: string): CartItem[] {
  const existingItem = cart.find((item) => item.productId === productId);

  if (existingItem) {
    return cart.map((item) => {
      if (item.productId === productId) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
  }

  return [...cart, { productId, quantity: 1 }];
}

export function updateCartQuantity(
  cart: CartItem[],
  productId: string,
  quantity: number
): CartItem[] {
  
  
  // To Only accept positive whole-number quantities
  if (quantity <= 0 || !Number.isInteger(quantity)) {
    return cart;
  }

  return cart.map((item) => {
    if (item.productId === productId) {
      return {
        ...item,
        quantity,
      };
    }
    return item;
  });
}

export function removeFromCart(
  cart: CartItem[], productId: string): CartItem[] 
  {
  return cart.filter((item) => item.productId !== productId);
}

export function getCartCount(
  cart: CartItem[]): number 
  {
  return cart.reduce((total, item) => total + item.quantity, 0);
}

export function getCartSubtotal(
  cart: CartItem[], products: Product[]): number 
  {
  return cart.reduce((total, item) => {
    const product = products.find((p) => p.id === item.productId);

    if (!product) {
      return total;
    }

    return total + product.price * item.quantity;
  }, 0);
}
