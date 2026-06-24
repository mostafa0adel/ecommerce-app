import { Component, input, output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CartItem } from '../../models/cart-item';

@Component({
  selector: 'app-cart-item',
  imports: [CurrencyPipe],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.scss',
})
export class CartItemComponent {

  item = input.required<CartItem>();

  quantityChange = output<number>();

  remove = output<void>();

  increase(): void {
    this.quantityChange.emit(
      this.item().quantity + 1
    );
  }

  decrease(): void {
    this.quantityChange.emit(
      this.item().quantity - 1
    );
  }

  onRemove(): void {
    this.remove.emit();
  }
}