import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product';
import { CartService } from '../../services/cart';
import { ShortPipe } from '../../pipes/text.pipe';
import { HoverGlowDirective } from '../../directives/hover-glow.directive';
import { UnlessDirective } from '../../directives/unless.directive';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterModule, ShortPipe, HoverGlowDirective, UnlessDirective],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss'
})
export class ProductDetails implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private productService = inject(ProductService);
  private cartService = inject(CartService);

  product: Product | null = null;
  discount = 15;

  ngOnInit(): void {
    this.product = this.route.snapshot.data['product'];
  }

  addToCart(): void {
    if (this.product) {
      this.cartService.addToCart(this.product);
    }
  }

  deleteProduct(): void {
    if (this.product && confirm(`Are you sure you want to delete "${this.product.name}"?`)) {
      this.productService.deleteProduct(this.product.id);
      this.router.navigate(['/products']);
    }
  }

  goBack(): void {
    this.router.navigate(['/products']);
  }
}
