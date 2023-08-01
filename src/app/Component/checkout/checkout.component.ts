import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CartItem } from 'src/app/Models/cart-item';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit  {

  Cart:CartItem[];
  counter: string | null;
   constructor(){
      this.Cart =[];
    let local= localStorage.getItem('cart');
    if(local){

      this.Cart= JSON.parse(local);
      console.log(this.Cart);
  }
  this.counter= localStorage.getItem('counter');
   }
  ngOnInit(): void {

  
  }
 


 



   
}
