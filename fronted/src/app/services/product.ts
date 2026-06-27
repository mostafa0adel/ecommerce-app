import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly apiUrl = 'https://api.escuelajs.co/api/v1/products';

  readonly products = signal<Product[]>([]);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    if (this.products().length > 0) {
      return of(this.products()).pipe(delay(800));
    }
    this.loading.set(true);
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(products => products.slice(0, 10).map(p => ({
        id: p.id,
        name: p.title,
        price: p.price || 49.99,
        description: p.description,
        category: p.category?.name || 'Uncategorized',
        image: p.images?.[0] || ''
      }))),
      tap(mapped => {
        this.products.set(mapped);
        this.loading.set(false);
      }),
      delay(800)
    );
  }

  getProduct(id: number): Observable<Product | null> {
    const existing = this.products().find(p => p.id === id);
    if (existing) {
      return of(existing).pipe(delay(800));
    }
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      map(p => ({
        id: p.id,
        name: p.title,
        price: p.price || 49.99,
        description: p.description,
        category: p.category?.name || 'Uncategorized',
        image: p.images?.[0] || ''
      })),
      delay(800)
    );
  }

  addProduct(productData: Omit<Product, 'id'>): Observable<Product> {
    const newId = this.products().length > 0 ? Math.max(...this.products().map(p => p.id)) + 1 : 1;
    const newProduct: Product = { id: newId, ...productData };
    this.products.update(list => [newProduct, ...list]);
    return of(newProduct).pipe(delay(800));
  }

  updateProduct(updatedProduct: Product): Observable<Product> {
    this.products.update(list => list.map(p => p.id === updatedProduct.id ? updatedProduct : p));
    return of(updatedProduct).pipe(delay(800));
  }

  deleteProduct(id: number): void {
    this.products.update(list => list.filter(p => p.id !== id));
  }
}


