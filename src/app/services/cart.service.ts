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

  removeitem(item:Products){
   let tempItems:Array<Products>=[];
    for(let i=0;i<this.items.length;i++){
      if(this.items[i]!=item){
        tempItems.push(this.items[i]);
      
      }
      this.items=tempItems;

    }
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor() { }
}
