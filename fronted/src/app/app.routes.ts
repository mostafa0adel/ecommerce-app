import { Routes } from '@angular/router';
import { productResolver } from './resolvers/product.resolver';
import { productsResolver } from './resolvers/products.resolver';
import { ProductsList } from './components/products-list/products-list';
import { ProductDetails } from './components/product-details/product-details';
import { ProductAddEdit } from './components/product-add-edit/product-add-edit';


export const routes: Routes = [
  {
    path: 'products',
    component: ProductsList,
    resolve: { products: productsResolver }
  },
  {
    path: 'products/:id',
    component: ProductDetails,
    resolve: { product: productResolver }
  },
  {
    path: 'product-form/:id',
    component: ProductAddEdit,
    resolve: { product: productResolver }
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'products'
  }
];

