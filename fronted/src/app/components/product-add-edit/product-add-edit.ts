import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-product-add-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-add-edit.html',
  styleUrl: './product-add-edit.scss'
})
export class ProductAddEdit implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private productService = inject(ProductService);

  isEditMode = false;
  productId: number | null = null;
  productForm = {
    name: '',
    price: 0,
    description: '',
    category: '',
    image: ''
  };

  ngOnInit(): void {
    const resolvedProduct = this.route.snapshot.data['product'] as Product | null;
    if (resolvedProduct) {
      this.isEditMode = true;
      this.productId = resolvedProduct.id;
      this.productForm = {
        name: resolvedProduct.name,
        price: resolvedProduct.price,
        description: resolvedProduct.description,
        category: resolvedProduct.category,
        image: resolvedProduct.image
      };
    }
  }

  onSubmit(): void {
    if (!this.productForm.name || this.productForm.price <= 0) return;

    if (this.isEditMode && this.productId !== null) {
      const updated: Product = {
        id: this.productId,
        ...this.productForm
      };
      this.productService.updateProduct(updated).subscribe(() => {
        this.router.navigate(['/products']);
      });
    } else {
      this.productService.addProduct(this.productForm).subscribe(() => {
        this.router.navigate(['/products']);
      });
    }
  }

  cancel(): void {
    if (this.isEditMode && this.productId !== null) {
      this.router.navigate(['/products', this.productId]);
    } else {
      this.router.navigate(['/products']);
    }
  }
}
