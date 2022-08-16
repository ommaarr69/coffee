import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/Products';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private cartService: CartService) { }
  products: Products[] = [

    { Name: "Coffee", imgSrc: "../../../../assets/images/download.jfif", Price: "100", Description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere odit exceptur" },
    { Name: "Coffee", imgSrc: "../../../../assets/images/download.jfif", Price: "100", Description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere odit exceptur" },
    { Name: "Coffee", imgSrc: "../../../../assets/images/download.jfif", Price: "100", Description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere odit exceptur" },
    { Name: "Coffee", imgSrc: "../../../../assets/images/download.jfif", Price: "100", Description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere odit exceptur" },
    { Name: "Coffee", imgSrc: "../../../../assets/images/download.jfif", Price: "100", Description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere odit exceptur" },
    { Name: "Coffee", imgSrc: "../../../../assets/images/download.jfif", Price: "100", Description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere odit exceptur" }
  ];

  ngOnInit(): void {
  }
  addToCart(product: Products) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}
