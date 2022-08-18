import { ProductsService } from 'src/app/services/products.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Products } from '../Products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: any
  addToCart(product: Products) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id == product.id) {

      }
    }
    this.items.push(product);
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  getItems() {
    this.items = this._ProductsService.getProducts();
    this.items = JSON.parse(localStorage.getItem('cart') ? localStorage.getItem('cart') : '[]');
    return this.items;
  }

  removeitem(i: number) {
    this.items.splice(i, 1);
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor(private _HttpClient: HttpClient, private _ProductsService: ProductsService) { }
}
