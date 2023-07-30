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
        console.log('Fetching brands completed.');
      }
    })
    return this.user
  }
}
