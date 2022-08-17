
import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/Products';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) {
    for (let i = 0; i < this.items.length; i++) {
      this.TotalCount = this.TotalCount + parseInt(this.items[i].Price);
    }
  }
  items = this.cartService.getItems();
  TotalCount: number = 0;

  ngOnInit(): void {

  }
  RemoveItem(i: number) {
    this.TotalCount = this.TotalCount - parseInt(this.items[i].Price);
    this.cartService.removeitem(i);
    this.items = this.cartService.getItems();
  }
  addProduct(i: number) {
    this.TotalCount = this.TotalCount + parseInt(this.items[i].Price);
    this.cartService.addProduct(i);
    this.items = this.cartService.getItems();
  }
  deleteProduct(i: number) {
    this.TotalCount = this.TotalCount - parseInt(this.items[i].Price);
    this.cartService.addProduct(i);
    this.items = this.cartService.getItems();
  }

}
