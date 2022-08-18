import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/Products';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private cartService: CartService, private _ProductsService: ProductsService) { }
  products: any;

  ngOnInit(): void {
    this._ProductsService.getProducts().subscribe(
      (res) => {
        this.products = res;
        console.log(this.products);
      })

  }

  addToCart(product: Products) {
    this.cartService.addToCart(product);
  }



}
