import { ResolveFn } from '@angular/router';
import { Product } from '../models/product';
import { inject } from '@angular/core';
import { ProductService } from '../services/product';
import { Observable } from 'rxjs';

export const productsResolver: ResolveFn<Product[]> = (route, state): Observable<Product[]> => {
  return inject(ProductService).getProducts();
};
