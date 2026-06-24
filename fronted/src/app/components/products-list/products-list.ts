import { Component, OnInit } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-products-list',
  imports: [ProductCard],
  templateUrl: './products-list.html',
  styleUrl: './products-list.scss',
})
export class ProductsList implements OnInit {
  constructor(
    public productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productService.loadProducts();
  }

  onAddToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}
