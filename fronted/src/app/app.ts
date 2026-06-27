import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { CartSidebar } from './components/cart-sidebar/cart-sidebar';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, CartSidebar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'day2-app';
  loading = signal(false);

  constructor() {
    inject(Router).events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading.set(true);
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.loading.set(false);
      }
    });
  }
}

