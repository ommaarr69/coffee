
import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/Products';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }
  items = this.cartService.getItems();

  ngOnInit(): void {
  }
  RemoveItem(item:Products){
 this.cartService.removeitem(item);
 this.items = this.cartService.getItems();
 
 
  }

}
