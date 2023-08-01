import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  verfeiyCode:number;
  isLogin:boolean;
ngOnInit(): void {
 
}
constructor(private router: Router, private http: HttpClient) {

  this.verfeiyCode=0
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
  this.http.post("http://localhost:5216/api/Account/register", this.SignUpUser).subscribe(res=>{
   
  this.isLogin=true;
  localStorage.setItem('isLogin','true');

})
}

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

}
}
 