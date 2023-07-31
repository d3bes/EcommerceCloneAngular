import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAddressDTO } from 'src/app/Models/user-address-dto';
import { UserDTO } from 'src/app/Models/user-dto';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  verfeiyCode:string;
  isLogin:boolean;
  user:UserDTO;
ngOnInit(): void {
  this.getUser();
  this.userService.getUserProfile(this.SignUpUser.Email).subscribe(user=>{
    console.log(user.id);
   localStorage.setItem('userId', user.id)
  })
}
constructor( private userServices:UserService,private router: Router, private http: HttpClient, private userService: UserService) {
  this.user= {} as UserDTO;
  this.verfeiyCode=''
  this.isLogin=false;
 const local= localStorage.getItem('isLogin');
 if(local)
 {
  this.isLogin= Boolean(local);
 } }


SignUpUser: any = {

  DisplayName:"",
  FirstName: "",
  LastName: "",
  Password: "",
  Email: "",
  PhoneNumber: ""
};
LoginInUser:any= {
  Email: "",
  Password: "",
}

OnSignUp(){

  this.SignUpUser.DisplayName = this.SignUpUser.FirstName + " " + this.SignUpUser.LastName;
  this.http.post("http://localhost:5216/api/Account/register", this.SignUpUser).subscribe((res: any)=>{
    console.log(this.LoginInUser.Email);
    console.log(this.LoginInUser.Password);
    localStorage.setItem("token",res.token);
    localStorage.setItem("email", res.email);
    localStorage.setItem("username", res.displayName);
    localStorage.setItem("emailValidation", res.emailValidation);

  this.isLogin=true;
  localStorage.setItem('isLogin','true');

})
}
userId:string= "f7caa6d4-d3e9-4a95-8796-921ae79d8775";
userAddress:UserAddressDTO[]= []; 
OnLogIn(){
  debugger;
  this.http.post("http://localhost:5216/api/Account/login", this.LoginInUser).subscribe((response: any)=>{
    debugger;
    console.log(this.LoginInUser.Email);
    console.log(this.LoginInUser.Password);
    localStorage.setItem("token",response.token);
    localStorage.setItem("email", response.email);
    localStorage.setItem("username", response.displayName);
    if(response.result) { 
      console.log(response);
      localStorage.setItem("token",response.token);
      localStorage.setItem("email", response.email);
      localStorage.setItem("username", response.displayName);
      alert(response.message)

      this.isLogin=true;
      localStorage.setItem('isLogin','true');

    } else {
      alert(response.message)
    }
  })
  this.userServices.allAddressForUser(this.userId).subscribe(data =>{
    this.userAddress = data;
    localStorage.setItem('userAddress', JSON.stringify(this.userAddress));
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

OnCheck(verfeiyCode:string){

const local = localStorage.getItem("emailValidation");
if(verfeiyCode == local) 
console.log("verfeiyCode")
console.log("local")

alert("email verfied success")
window.location.href = "/home";
}
}
 