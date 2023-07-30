import { Component, OnInit } from '@angular/core';
import { PaymentMethodDTO } from 'src/app/Models/payment-method-dto';
import { UserDTO } from 'src/app/Models/user-dto';
import { UserService } from 'src/app/Services/user.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit   {
  userName:string|null;
  email:string|null;
  user:UserDTO|null=null;
  userId:string|null;
  PaymentMethods:PaymentMethodDTO[];
  constructor(private userService: UserService){

  this.email= localStorage.getItem('email');
  this.userName= localStorage.getItem("username");
  this.userId= localStorage.getItem('userId');
  this.PaymentMethods = [];
  }

  ngOnInit(): void {

    this.userService.getUserPayments(this.userId).subscribe(Paymnets=>
      {
        this.PaymentMethods = Paymnets
        console.log(this.PaymentMethods)
      })
  }




  deletePaymentMethod(methodId: number) {
    const result = confirm("Are you sure you want to delete this payment method?");
    if (result) {
      // Delete the payment method with the given ID
    //  this.PaymentMethods.splice(index, 1);
    this.userService.deletePaymentMethod(methodId).subscribe(result=>{
      console.log(result);
      if(result) 
      window.location.reload();
    });

    }
  }
  

  // paymentMethodID: number;
  // provider: string;
  // cardNumber: string;
  // expirationDate: string;
  // cvv: string;
  // isDefault: boolean;
  // userID: string;
 

  
}
