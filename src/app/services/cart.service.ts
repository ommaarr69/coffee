import { Injectable } from '@angular/core';
import { Products } from '../Products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Products[] = [];

  addToCart(product: Products) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor() { }
}
