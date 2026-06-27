import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Product } from '../../models/product';
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

  goBack(): void {
    this.router.navigate(['/products']);
  }
}
