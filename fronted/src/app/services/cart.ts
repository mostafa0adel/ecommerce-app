import { Product } from '../models/product';
import { CartItem } from '../models/cart-item';
import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class CartService {
  items = signal<CartItem[]>([]);

  getItems(): CartItem[] {
    return this.items();
  }
  getItemCount(): number {
    return this.items().reduce((total, item) => total + item.quantity, 0);
  }
  getTotal(): number {
    return this.items().reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
  }

  addToCart(product: Product): void {
    const existing = this.items().find((item) => item.product.id === product.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      this.items.update((items) => [...items, { product, quantity: 1 }]);
    }
  }

  removeFromCart(productId: number): void {
    this.items.update((items) => items.filter((item) => item.product.id !== productId));
  }

  updateQuantity(productId: number, quantity: number): void {
    if (quantity <= 0) {
      this.removeFromCart(productId);
      return;
    }
    const existing = this.items().find((item) => item.product.id === productId);
    if (existing) {
      existing.quantity = quantity;
    }
  }

  clearCart(): void {
    this.items.update(() => []);
  }
}
