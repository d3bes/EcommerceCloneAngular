import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


ngOnInit(): void {
 
}
constructor(private router: Router, private http: HttpClient) { }


SignUpUser:any= {

  firstName: "",
  lastName: "",
  password: "",
  email: "",
  phoneNumber: ""
};
LoginInUser:any= {
  email: "",
  password: ""
}

OnSignUp(){

  this.http.post("http://localhost:61334/api/Registration/Register", this.registerObj).subscribe(res=>{

})
}

OnLogIn(){


}
}
 