import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { CartService } from './services/cart';
import { ProductService } from './services/product';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    CartService,
    ProductService,
  ]
};
