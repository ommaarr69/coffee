import { Injectable } from '@angular/core';
import { Products } from '../Products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Products[] = [];

  addToCart(product: Products) {
    this.items.push(product);
    localStorage.setItem('cart', JSON.stringify(this.items));
  }
  
  getItems() {
    this.items = JSON.parse(localStorage.getItem('cart')?localStorage.getItem('cart') : '[]');
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor() { }
}
