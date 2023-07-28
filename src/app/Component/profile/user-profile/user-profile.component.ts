import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, of, tap } from 'rxjs';
import { ProfileDTO } from 'src/app/Models/profile-dto';
import { UserDTO } from 'src/app/Models/user-dto';
import { UserService } from 'src/app/Services/user.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  profile:ProfileDTO |null = null;
  ApiUrl: string = environment.LocalApiUrl;
  constructor(private httpclient: HttpClient, private router: Router,
     private userService: UserService) {
  

      
  }
  firstName:string='';
  lastName:string='';
  email:string|null = localStorage.getItem('email');


  ngOnInit(): void {
    // get profile
    this.getUserProfile().subscribe({
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
  onUpdateProfile() {
    this.updateUserProfile(this.profile).subscribe({
      next: (data: ProfileDTO) => {
        this.profile!.displayName = this.firstName + ' ' + this.lastName;
        console.log(data);
        alert("Profile updated successfully");
      },
      error: (error: any) => {
        console.error('Failed to update profile');
      }
    });
  }
  // getUserProfile(): Observable<ProfileDTO> {
  //   const userProfileUrl = '/api/user/profile';
  //   return this.httpclient.get<ProfileDTO>('http://localhost:5216/api'+userProfileUrl).pipe(
  //     tap((profile => console.log('User profile:', profile)),
  //     catchError((error: any) => {
  //       console.error('Failed to get user profile:', error);
  //       return of(null);
  //     })
  //   ));
  // }


  getUserProfile():Observable<any>{
    return this.httpclient.get<any>(`${this.ApiUrl}/User/profile?email=${this.email}`);
  }
  updateUserProfile(data:any):Observable<any>{
  return this.httpclient.put<any>(`${this.ApiUrl}/User/UpdateProfile?email=${this.email}`,data);
  }


}
