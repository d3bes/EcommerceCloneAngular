import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from '../Models/cart-item';
import { Iproduct } from '../Models/iproduct';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailesService {
  prdId: string = "";
  product: Iproduct ;
  selectedValue: number;
  cartItem:CartItem;
  Cart: CartItem[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private productsevice: ProductService
  ) {

    this.product= {} as Iproduct;
    this.cartItem={}as CartItem;
    this.selectedValue=1;
    this.Cart=[];
  }

  ngOnInit(): void {
    this.prdId = this.activatedRoute.snapshot.paramMap.get('productID')
      ?String(this.activatedRoute.snapshot.paramMap.get('productID'))
      : "";

       console.log('Product ID:', this.prdId);

    this.productsevice.getById(this.prdId).subscribe({
      next: (data) => {
        this.product = data;
        console.log('Product:', this.product);
      },
      error: (error) => {
        console.log('Error:', error);
      }
    });

   
     this.productsevice.getById(this.prdId).subscribe(result=>
      {
        this.product= result;
        console.log("product",this.product);

       

      }

      );


  }

 

  setValue(value:number){
    this.selectedValue = value;
    console.log(this.selectedValue)
  }


  UpdateCart(prdId:string,cartItem:CartItem)
  {
    

    console.log("cart Item :", cartItem);
    

    const cart = localStorage.getItem('cart');

    if (cart) {
      this.Cart = JSON.parse(cart);
      console.log('Cart', JSON.parse(cart));
    }

    const existingIndex = this.Cart.findIndex(item => item.product.sku === prdId);

    if (existingIndex !== -1) {
      const updatedCart = [...this.Cart];
      updatedCart.splice(existingIndex, 1);
      updatedCart.push(cartItem);
      this.Cart = updatedCart;
    } else {
      this.Cart.push(cartItem);
    }

    localStorage.setItem('cart', JSON.stringify(this.Cart));

    const updatedCartData = localStorage.getItem('cart');

    if (updatedCartData) {
      const updatedCart = JSON.parse(updatedCartData);
      console.log('Updated Cart', updatedCart);
    }

   
      
  }
 
}
