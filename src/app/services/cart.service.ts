import { Injectable } from '@angular/core';
import { Products } from '../Products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  addProduct(i: number) {
    throw new Error('Method not implemented.');
  }
  items: Products[] = [];

  addToCart(product: Products) {
    this.items.push(product);
    localStorage.setItem('cart', JSON.stringify(this.items));

  }
  
  getItems() {
    this.items = JSON.parse(localStorage.getItem('cart')?localStorage.getItem('cart') : '[]');
    return this.items;
  }

  removeitem(i:number){
   
    this.items.splice(i,1);
      
    localStorage.setItem('cart', JSON.stringify(this.items));
    
    
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor() { }
}
