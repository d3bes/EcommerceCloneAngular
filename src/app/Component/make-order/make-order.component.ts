import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { IorderDTO } from 'src/app/Models/iorder-dto';
import { OrderService } from 'src/app/Services/order.service';
import { v4 as uuidv4 } from 'uuid';

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
  order! : IorderDTO;
  userOrders! : IorderDTO [];
  userId:string ="f7caa6d4-d3e9-4a95-8796-921ae79d8775";
  constructor(private orderServices:OrderService){}

  ngOnInit(): void {
    this.order = {
      orderId: '3fa85f64-5717-4562-b3fc-2c963f66afl9',
      userId: this.userId,
      orderDate: '2023-07-30T21:15:36.442Z',
      shipToAddressId: 2,
      paymentIntentId: 1,
      deliveryMethodId: 1,
      items: [
        {
          id: 0,
          productId: '5A067CBF-D1C2-416E-F6BD-08DB912C7386',
          orderId: '3fa85f64-5717-4562-b3fc-2c963f66afl9',
          quantity:10
        }
      ]
    };

      this.orderServices.getAllorder(this.userId).subscribe(data =>{
         this.userOrders = data;
         console.log(this.userOrders);
      });
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



