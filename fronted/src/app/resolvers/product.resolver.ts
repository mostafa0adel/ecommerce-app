import { ResolveFn } from '@angular/router';
import { Product } from '../models/product';
import { inject } from '@angular/core';
import { ProductService } from '../services/product';
import { Observable, of } from 'rxjs';

export const productResolver: ResolveFn<Product | null> = (route, state): Observable<Product | null> => {
  const idStr = route.paramMap.get('id');
  if (!idStr || idStr === 'new') {
    return of(null);
  }
  const id = Number(idStr);
  return inject(ProductService).getProduct(id);
};
