import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/Models/cart-item';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-producd-detailes',
  templateUrl: './producd-detailes.component.html',
  styleUrls: ['./producd-detailes.component.css']
})
export class ProducdDetailesComponent {
  prdId: string = "";
  product: Iproduct;
  selectedValue: number;
  cartItem:CartItem;
  Cart: CartItem[];
  urlImage:string ="http://localhost:5195/files/images/";
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



  }



  setValue(value:number){
    this.selectedValue = value;
    console.log(this.selectedValue)
  }


  AddToCart(prdId:string)
  {

    this.cartItem={

      product:this.product,
      quantity:this.selectedValue

    }

    console.log("cart Item :", this.cartItem);


    const cart = localStorage.getItem('cart');

    if (cart) {
      this.Cart = JSON.parse(cart);
      console.log('Cart', JSON.parse(cart));
    }

    const existingIndex = this.Cart.findIndex(item => item.product.sku === prdId);

    if (existingIndex !== -1) {
      const updatedCart = [...this.Cart];
      updatedCart.splice(existingIndex, 1);
      updatedCart.push({
        product: this.product,
        quantity: this.selectedValue
      });
      this.Cart = updatedCart;
    } else {
      this.Cart.push({
        product: this.product,
        quantity: this.selectedValue
      });
    }

    localStorage.setItem('cart', JSON.stringify(this.Cart));

    const updatedCartData = localStorage.getItem('cart');

    if (updatedCartData) {
      const updatedCart = JSON.parse(updatedCartData);
      console.log('Updated Cart', updatedCart);
    }

    let counter =  (this.Cart.length).toString();
    localStorage.setItem("counter", counter);
    let count= localStorage.getItem('counter');
    console.log('Counter ', count);


  }
}







// const cart = localStorage.getItem('cart');
//     if (cart) {
//       this.Cart =JSON.parse(cart);
//       console.log('Cart', JSON.parse(cart));
//     }

//     if(!this.Cart.some(item=> item.product.sku == prdId))
//     {
//     this.Cart.push(this.cartItem);
//     localStorage.setItem("cart",JSON.stringify(this.Cart));
//     }
//     else
//     {
//       const UpdatedCart = this.Cart.filter(item=> item.product.sku !== prdId)
//       this.Cart = UpdatedCart;
//       this.Cart.push(this.cartItem);
//       localStorage.setItem("cart",JSON.stringify(this.Cart));
//       const updatedcart = localStorage.getItem('cart');

//       if (updatedcart) {
//         this.Cart =JSON.parse(updatedcart);
//         console.log('Updated Cart', this.Cart);
//       }
//     }
