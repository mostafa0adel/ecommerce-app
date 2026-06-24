import { Injectable,signal } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/api/products';

  public productsSignal = signal<Product[]>([]);
  constructor(private http: HttpClient) {}
  loadProducts() {
    this.http.get<Product[]>(this.apiUrl).subscribe((products) => {
      this.productsSignal.set(products);
    });
  }
}
