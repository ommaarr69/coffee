
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
    for(let i=0;i<this.items.length;i++){
      this.TotalCount=this.TotalCount+parseInt(this.items[i].Price);
    }
   }
  items = this.cartService.getItems();
  TotalCount:number=0;

  ngOnInit(): void {
    
  }
  RemoveItem(i: number) {

    this.TotalCount = this.TotalCount - (parseInt(this.items[i].Price) * this.items[i].count);
    if (this.TotalCount <= 0) {
      this.TotalCount = 0;
    }
    this.cartService.removeitem(i);
    this.items = this.cartService.getItems();

  }

  stepUp(i: number) {
    (this.items[i].count)++;
    this.TotalCount = this.TotalCount + parseInt(this.items[i].Price);

    localStorage.setItem('cart', JSON.stringify(this.items));
    console.log(this.items);

    this.items = this.cartService.getItems();
  }
  stepDown(i: number, value: string) {
    if (value == "0") {
      this.RemoveItem(i);

    }

    this.TotalCount = this.TotalCount - parseInt(this.items[i].Price);

    if (this.TotalCount <= 0) {
      this.TotalCount = 0;
    }
    (this.items[i].count)--;
    localStorage.setItem('cart', JSON.stringify(this.items));
    this.items = this.cartService.getItems();
  }


}
