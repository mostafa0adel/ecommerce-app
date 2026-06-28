import { Component, input, output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../../models/product';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe,RouterModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {

  product = input.required<Product>();

  addToCart = output<Product>();
  delete = output<number>();

  onAddToCart(): void {
    this.addToCart.emit(this.product());
  }

  onDelete(event: Event): void {
    event.stopPropagation();
    if (confirm(`Are you sure you want to delete "${this.product().name}"?`)) {
      this.delete.emit(this.product().id);
    }
  }
}