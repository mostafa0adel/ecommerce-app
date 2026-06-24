import { Component, input, output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {

  product = input.required<Product>();

  addToCart = output<Product>();

  onAddToCart(): void {
    this.addToCart.emit(this.product());
  }
}