import { Product } from '../models/product';
import { CartItem } from '../models/cart-item';

export class CartService {
  private items: CartItem[] = [];

  getItems(): CartItem[] {
    return this.items;
  }
  getItemCount(): number {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }
  getTotal(): number {
    return this.items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
  }

  addToCart(product: Product): void {
    const existing = this.items.find((item) => item.product.id === product.id);

    if (existing) {
      this.items = this.items.map((item) =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      this.items = [...this.items, { product, quantity: 1 }];
    }
  }

  removeFromCart(productId: number): void {
    this.items = this.items.filter((item) => item.product.id !== productId);
  }

  updateQuantity(productId: number, quantity: number): void {
    if (quantity <= 0) {
      this.removeFromCart(productId);
      return;
    }
    this.items = this.items.map((item) =>
      item.product.id === productId ? { ...item, quantity } : item
    );
  }

  clearCart(): void {
    this.items = [];
  }
}
