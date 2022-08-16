import { Products } from './../../../Products';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private _cartService: CartService) { }
  items = this._cartService.getItems();
  ngOnInit(): void {
  }

}
