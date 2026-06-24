import { Component, signal } from '@angular/core';
import { CartSidebar } from './components/cart-sidebar/cart-sidebar';
import { ProductsList } from './components/products-list/products-list';

@Component({
  selector: 'app-root',
  imports: [CartSidebar, ProductsList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = "Angular 17 Signal Example";

}
