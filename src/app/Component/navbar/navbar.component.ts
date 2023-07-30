import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IRegist } from 'src/app/Models/iregist';
import { LogIn } from 'src/app/Models/log-in';
import { ProductCategoryDetailsDTO } from 'src/app/Models/product-category-details-dto';
import { ProductCategoryDTO } from 'src/app/Models/product-category-dto';
import { UserDTO } from 'src/app/Models/user-dto';
import { AccountService } from 'src/app/Services/account.service';
import { CatogriesService } from 'src/app/Services/catogries.service';
<<<<<<< HEAD
import { ProductService } from 'src/app/Services/product.service';

=======
import { Router } from '@angular/router';
>>>>>>> 2cae098fb3e00452d3c6cc755ece27aa960e6eef


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  catogries: ProductCategoryDetailsDTO[] = [];
  signInForm!: FormGroup;
  login!: LogIn;
  user : UserDTO | undefined;
  registrationForm ! : FormGroup  ;
  register :IRegist ={DisplayName:'',FirstName:'',LastName:'',Email:'',Password:'',PhoneNumber:''} ;
  childrenCategories  ?: ProductCategoryDTO[] | null;
  isLogIn: boolean;

<<<<<<< HEAD

  constructor(private router:Router, private catogriesService: CatogriesService, private formBuilder: FormBuilder, private accountService: AccountService, private product:ProductService) {
=======
  constructor(private catogriesService: CatogriesService, private formBuilder: FormBuilder, private accountService: AccountService,private router: Router, private http: HttpClient) {
>>>>>>> 2cae098fb3e00452d3c6cc755ece27aa960e6eef
    this.registrationForm = this.formBuilder.group({
      DisplayName: ['', Validators.required],
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      PhoneNumber: [''],
      Password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.isLogIn = false;
   }
   selectedParentCategory: ProductCategoryDetailsDTO | null = null;

  ngOnInit():void {
    this.catogriesService.getAllCatogries().subscribe({
      next: (data: ProductCategoryDetailsDTO[]) => {
        this.catogries = data.filter((category) => category.parentCategoryId === null);
        console.log(this.catogries);
      },
      error: (error: any) => {
        console.error('Error fetching brands:', error);
      },
      complete: () => {
        console.log('Fetching brands completed.');
      }
    });
    this.catogriesService.getAllCatogries().subscribe({
      next: (data) => {
        this.childrenCategories = data.filter((category) => category.parentCategoryId != null);
        console.log(this.catogries);
      },
      error: (error: any) => {
        console.error('Error fetching brands:', error);
      },
      complete: () => {
        console.log('Fetching brands completed.');
      }
    });
   
    //sign in
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });



  }


  categorynavigat(catId:number){
    this.router.navigate(['cat',catId]);
    
  }
  //sign in
  log() {
    this.login.Email = this.signInForm.value.email;
    this.login.Password = this.signInForm.value.password;
    console.log('Email:', this.login.Email);
    console.log('Password:', this.login.Password);
    console.log("nnnnnnnnnn")

    this.accountService.logIn(this.login).subscribe(
      {
        next: (data: UserDTO) => {
          this.user = data;
          console.log(this.user);
          localStorage.setItem("token",this.user.token);
          localStorage.setItem("email", this.user.Email);
          localStorage.setItem("username", this.user.DisplayName);
        },
        error: (error: any) => {
          console.error('Error LogIn:', error);
        },
        complete: () => {
          console.log('Fetching brands completed.');
          this.isLogIn = true;

        }
      }
    );


    if (this.signInForm.invalid) {
      return;
  }  //hestucaspo@gufum.com
  var p : string ="Huj3#jiS";
    // Perform the sign-in logic here


    // For demonstration purposes, you can log the email and password
    console.log('Email:', this.login.Email);
    console.log('Password:', this.login.Password);
  }


  /////////////////register /////////////////

  get fullname(){
    return this.registrationForm.get('DisplayName');
  }
  get firstname(){
    return this.registrationForm.get('FirstName');
  }
  get lastname(){
    return this.registrationForm.get('LastName');
  }
  get email(){
    return this.registrationForm.get('Email');
  }
  get phonenumber(){
    return this.registrationForm.get('PhoneNumber')
  }
  get password(){
    return this.registrationForm.get('Password')
  }


  onSubmit() {
    this.register.DisplayName= this.registrationForm.value.DisplayName;
    console.log(this.registrationForm.value.DisplayName);
    this.register.FirstName= this.registrationForm.value.FirstName;
    console.log(this.register);

    this.register.LastName= this.registrationForm.value.LastName;
    this.register.Email = this.registrationForm.value.Email;
    this.register.PhoneNumber = this.registrationForm.value.PhoneNumber
    this.register.Password = this.registrationForm.value.Password;

    this.accountService.regist(this.register).subscribe({
      next:(response:any)=>{
        //this.router.navigate(['/home']);
        console.log(response);
        localStorage.setItem("token",response.token);
        localStorage.setItem("email", response.email);
        localStorage.setItem("username", response.displayName);

      },
      error:(err)=>{
        console.log(err);
      }
    })

  }

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
    } else {
      alert(response.message)
    }
  })

}


}
