import { Component } from '@angular/core';
import { Iproduct } from '../Models/iproduct';
import { CartItem } from '../Models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  Cart:CartItem[]|undefined;
  counter:string|null;
  constructor(){

    let local= localStorage.getItem('cart');
    if(local){

      this.Cart= JSON.parse(local);
      console.log(this.Cart);
  }
  this.counter= localStorage.getItem('counter');
  console.log()
}
}
