import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/app/Models/user-dto';
import { OrderService } from 'src/app/Services/order.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent  implements OnInit {
  userOrders:any;
  userId:string;
  email:string|null;
  userName:string|null;
  user:UserDTO|null=null;

  constructor(private orderService:OrderService,private userService: UserService ) {
    this.userId='';
    this.email= localStorage.getItem('email');
    this.userName= localStorage.getItem("username");

  }
  ngOnInit(): void {

    this.userService.getCurrentUser().subscribe({
      next: (data: UserDTO) => {
        this.user = data;
        console.log(this.user);
      },
      error: (error: any) => {
        console.error('Error getting user:', error);
      },
      complete: () => {
        console.log('Fetching user completed.');
      }
    })
  }





  }


