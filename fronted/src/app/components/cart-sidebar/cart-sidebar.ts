import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CartItemComponent } from '../cart-item/cart-item';
import { CartItem } from '../../models/cart-item';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-cart-sidebar',
  imports: [CurrencyPipe, CartItemComponent],
  templateUrl: './cart-sidebar.html',
  styleUrl: './cart-sidebar.scss',
})
export class CartSidebar {
  constructor(private cartService: CartService) {}

  getItems(): CartItem[] {
    return this.cartService.getItems();
  }

  getTotal(): number {
    return this.cartService.getTotal();
  }

  onQuantityChange(productId: number, quantity: number): void {
    this.cartService.updateQuantity(productId, quantity);
  }

  onRemove(productId: number): void {
    this.cartService.removeFromCart(productId);
  }
}
