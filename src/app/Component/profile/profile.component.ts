import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/app/Models/user-dto';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userName:string|null;
  email:string|null;
  user:UserDTO|null=null;
  constructor(private userService: UserService){

  this.email= localStorage.getItem('email');
  this.userName= localStorage.getItem("username");

  }
  ngOnInit(): void {

    this.getUser();
    this.userService.getUserProfile(this.email).subscribe(user=>{
      console.log(user.id);
     localStorage.setItem('userId', user.id)
    })


  }




  public getUser(): UserDTO|null{
    
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
    return this.user
  }
  


  showAddressComponent = false;
  showUserProfileComponent = false;
  showPaymentComponent = false;
  showOrderComponent = false;
  showWishlistComponent = false;

  showAddress() {
    this.showAddressComponent = true;
    this.showUserProfileComponent = false;
    this.showPaymentComponent = false;
    this.showOrderComponent = false;
    this.showWishlistComponent = false;

  }

  showUserProfile() {
    this.showAddressComponent = false;
    this.showUserProfileComponent = true;
    this.showPaymentComponent = false;
    this.showOrderComponent = false;
    this.showWishlistComponent = false;

  }

  showPayment() {
  
    this.showAddressComponent = false;
    this.showUserProfileComponent = false;
    this.showPaymentComponent = true;
    this.showOrderComponent = false;
    this.showWishlistComponent = false;

  }

  showOrders() {
  
    this.showAddressComponent = false;
    this.showUserProfileComponent = false;
    this.showPaymentComponent = false;
    this.showOrderComponent = true;
    this.showWishlistComponent = false;

  }
  
  showWishList() {
  
    this.showAddressComponent = false;
    this.showUserProfileComponent = false;
    this.showPaymentComponent = false;
    this.showOrderComponent = false;
    this.showWishlistComponent = true;

  }
}
