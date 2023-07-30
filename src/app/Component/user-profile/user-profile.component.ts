import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, of, tap } from 'rxjs';
import { ProfileDTO } from 'src/app/Models/profile-dto';
import { UserDTO } from 'src/app/Models/user-dto';
import { UserService } from 'src/app/Services/user.service';
import { environment } from 'src/environments/environment.development';
import { Location } from '@angular/common';
import { AccountService } from 'src/app/Services/account.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  firstName:string;
  lastName:string;
  profile:ProfileDTO |null;
  ApiUrl: string = environment.LocalApiUrl;
  currentPassword:string;
  newPassword:string;
  repeatPassword:string;
  newPhoneNumber:string;

  constructor(private httpclient: HttpClient, private router: Router,
     private userService: UserService,private location: Location, private accountService: AccountService) {
  this.firstName='';
  this.lastName='';
  this.profile =null;
this.currentPassword='';
this.newPassword='';
this.repeatPassword='';

this.newPhoneNumber= '';
  this.userService.getCurrentUser();
  }
  email:string|null = localStorage.getItem('email');
  updatedProfile:ProfileDTO|null=null;


 
  ngOnInit(): void {
 

    // get profile
    this.userService.getUserProfile(this.email).subscribe({
      next:(data:ProfileDTO)=>{
        this.profile = data
        console.log(this.profile);
        this.firstName= this.profile.displayName.split(' ')[0];
        this.lastName= this.profile.displayName.split(' ')[1];
      },
      error:( error:any)=>{
        console.error('failed to get profile');
      }
    });

  }


logTest(){
console.log(this.newPhoneNumber);
}
  onUpdateProfile() {
    const updatedProfile = {
      displayName: this.firstName + ' ' + this.lastName,
      email: this.profile?.email,
      emailConfirmed: this.profile?.emailConfirmed,
      id: this.profile?.id,
      phoneNumber:this.profile?.phoneNumber,
      phoneNumberConfirmed: this.profile?.phoneNumberConfirmed,
      userName:this.profile?.userName
    };


    this.userService.updateUserProfile(updatedProfile, updatedProfile.email).subscribe({
      next: (data: any) => { 
        console.log(data);
        alert("Profile updated successfully");
      },
      error: (error: any) => {
        console.error('Failed to update profile');
      }
    });

  }



  onChangePassword(currentPassword: string, newPassword: string){
    this.userService.changPassword(this.profile?.email, currentPassword, newPassword).subscribe(response=>{

      console.log(response);
    }
     
      //{ next: (data: any) => {
      //   console.log(data);
      //   if (data != null) {
      //     console.log(data.password);
      //   }
      //   console.log("################### Current: "+ this.currentPassword +"################ new: " + this.newPassword)
      //   alert("Password updated successfully");
      // },
      // error: (error: any) => {
      // console.log("Failed to update password");
      // },
      //  complete: () => {
      //   console.log("Password change operation completed");
      // } }

    )

  }

  onChangePhoneNumber(){
    this.userService.changePhoneNumber(this.profile?.email, `20${this.newPhoneNumber}`).subscribe(response=>
      {
        console.log(response);
        console.log(this.profile?.phoneNumber)
        window.location.reload();
       })
  }

  onDelete(){
    this.accountService.deleteAccount(this.profile?.id).subscribe(response=>
      {
        console.log(this.profile?.email);
        console.log(response);
        window.location.reload();

      }
      )
  }



}
