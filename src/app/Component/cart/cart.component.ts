import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../Models/iproduct';
import { CartItem } from '../../Models/cart-item';
import { ProducdDetailesComponent } from '../producd-detailes/producd-detailes.component';
import { ProductDetailesService } from '../../Services/product-detailes.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  Cart:CartItem[];
  counter:string|null;
  Total:number;
  urlImage:string ="http://localhost:5195/files/images/";

  constructor( private prouctDetailes:ProductDetailesService){
this.Cart= []
this.Total=0;
    let local= localStorage.getItem('cart');
    if(local){

      this.Cart= JSON.parse(local);
      console.log(this.Cart);
  }
  this.counter= localStorage.getItem('counter');

}

  ngOnInit(): void {

    this.getTotal();
  }


getTotal(){
  for(let item of this.Cart){
    this.Total+= (item.product.price * item.quantity)
    console.log(this.Total)
  }

}
getTotalMin(item:CartItem){
  this.Total-= (item.product.price)
}
getTotalMax(item:CartItem){
  this.Total+= (item.product.price)
}

getTotalOnRemove(Prditem:CartItem){
  
 this.Total -= (Prditem.product.price * Prditem.quantity)
}

decresQuantity(prdId:string, cartItem:CartItem){

  if(cartItem.quantity>1)
  {
  cartItem.quantity-= 1 ; 
  this.prouctDetailes.UpdateCart(prdId,cartItem);
  this.getTotalMin(cartItem)

  }
}

increesQuantity(prdId:string,cartItem:CartItem){

  if(cartItem.quantity<12)
  {
  cartItem.quantity+= 1 ; 
  this.prouctDetailes.UpdateCart(prdId,cartItem);
  this.getTotalMax(cartItem)

  }

}





RemoveItem(Cart:CartItem[], Prditem:CartItem){

  const confirmed = window.confirm(`Are you sure you want to delete item ${Prditem.product.name}?`);
 if(confirmed){
  const index = Cart.findIndex(item => item.product.sku === Prditem.product.sku);
if (index !== -1) {
  Cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(Cart));
    }

    this.counter= (Cart.length).toString();
    localStorage.setItem('counter',this.counter)

    this.getTotalOnRemove(Prditem);
 }
}
}
