import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LogIn } from 'src/app/Models/log-in';
import { ProductCategoryDetailsDTO } from 'src/app/Models/product-category-details-dto';
import { UserDTO } from 'src/app/Models/user-dto';
import { AccountService } from 'src/app/Services/account.service';
import { CatogriesService } from 'src/app/Services/catogries.service';


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
  constructor(private catogriesService: CatogriesService, private formBuilder: FormBuilder, private accountService: AccountService) { }

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

    //sign in
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
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
        },
        error: (error: any) => {
          console.error('Error fetching brands:', error);
        },
        complete: () => {
          console.log('Fetching brands completed.');
        }
      }     
    );

    
    if (this.signInForm.invalid) {
      return;
  }
  var p : string ="Huj3#jiS";
    // Perform the sign-in logic here
    

    // For demonstration purposes, you can log the email and password
    console.log('Email:', this.login.Email);
    console.log('Password:', this.login.Password);
  }
}
