import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { CartItem } from 'src/app/Models/cart-item';
import { IorderDTO } from 'src/app/Models/iorder-dto';
import { IorderItemDTO } from 'src/app/Models/iorder-item-dto';
import { OrderService } from 'src/app/Services/order.service';
// import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-make-order',
  templateUrl: './make-order.component.html',
  styleUrls: ['./make-order.component.css']
})
export class MakeOrderComponent implements OnInit {
  order!:IorderDTO;
  userOrders!:IorderDTO [];
  userId:string = "f7caa6d4-d3e9-4a95-8796-921ae79d8775"
  orderItems!: IorderItemDTO[];
  io!: IorderItemDTO;
  Cart!: CartItem[];
  orderId!:string;
  
  randomAddressID = Math.floor(Math.random() * 1000) + 1;
  constructor(private orderServices:OrderService){}

  ngOnInit(): void {
    let local= localStorage.getItem('cart');
    if(local){
      this.orderId = uuidv4();
      this.Cart= JSON.parse(local);  
      this.Cart.forEach((item: { product: { sku: any; }; quantity: any; }) =>{
        this.io = {
          id:this.randomAddressID,
          orderId: this.orderId,
          productId:item.product.sku ,
          quantity: item.quantity,
        }
        this.orderItems.push(this.io);
      });  
    
    
    this.order = {
      orderId: this.orderId,
      userId: this.userId,
      orderDate: new Date(),
      shipToAddressId: 2,
      paymentIntentId: 1,
      deliveryMethodId: 1,
      items: this.orderItems
    };

      this.orderServices.getAllorder(this.userId).subscribe(data =>{
         this.userOrders = data;
         console.log(this.userOrders);
      });
  
    }
  }


  makeOrder(){
    //console.log(this.order)
    this.orderServices.makeOrder(this.order).subscribe(data=> console.log(data) )

  }
  convertToGuidFormat(input: string): string {
    const parts: string[] = [];
  parts.push(input.substr(0, 8));
  parts.push(input.substr(9, 4));
  parts.push(input.substr(14, 4));
  parts.push(input.substr(19, 4));
  parts.push(input.substr(24));

  const guid = parts.join('-');
  return guid;
  }

  retrieveOrder(orderId:string){
    const confirmation = confirm('Are you sure you want to retrieve this order?');
  if (confirmation) {
    // Convert the orderId to Guid before sending to the API
    const guidOrderId = Guid.parse(orderId);
    console.log(orderId);
    console.log(guidOrderId);
    this.orderServices.retrieveOrder(guidOrderId).subscribe(
      (response: any) => {
        console.log('Order retrieved:', response);
      },
      (error: any) => {
        console.error('Error retrieving order:', error);
      }
    );
    }
  }

 getOrders() {
  throw new Error('Function not implemented.');
 }
}



function uuidv4(): string {
  throw new Error('Function not implemented.');
}

