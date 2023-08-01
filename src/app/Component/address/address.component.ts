import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { GeoJSON } from 'geojson';
import { Control } from 'leaflet';
import { Observable, of, tap } from 'rxjs';
import { AddressDTO } from 'src/app/Models/address-dto';
import { City } from 'src/app/Models/city';
import { ProfileDTO } from 'src/app/Models/profile-dto';
import { UserAddressDTO } from 'src/app/Models/user-address-dto';
import { UserService } from 'src/app/Services/user.service';
import { environment } from 'src/environments/environment.development';
import { v4 as uuidv4 } from 'uuid';
import { Location } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  userId:string= "f7caa6d4-d3e9-4a95-8796-921ae79d8775";    //localStorage.getItem('userId');
  fullAddress:any;
  FirstName!: string;
  LastName!: string;
  deliverPhone!: string;
  user!: ProfileDTO;
  addressForm!: FormGroup;
  email:string|null =  localStorage.getItem('email');
  userAddress!: UserAddressDTO;
  address!:AddressDTO;


  constructor( private formBuilder: FormBuilder, private userService: UserService) {
    
  }


  ngOnInit(){
    this.initForm();
    this.userService.getCurrentUser().pipe(
      tap((response: ProfileDTO) => {
        this.user = response;

        console.log(this.user);
      })).subscribe();
  }

  initForm() {
    this.addressForm = this.formBuilder.group({
      id: [null], // Use null to indicate it's a new address
      isDefault: [false, Validators.required],
      address: this.formBuilder.group({
        id: [null],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        fullAddress: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        addressLabel: ['home', Validators.required], // Default value 'home'
      }),
    });
  }

  onSubmit() {
    console.log("hi submit")
    if (this.addressForm.valid) {
      const formValue = this.addressForm.value;
      // Generate a random number between 1 and 1000 and convert it to a string
      var randomAddressID = Math.floor(Math.random() * 1000) + 1;
      this.address = {
        Id: randomAddressID,
        FirstName: formValue.address.firstName,
        LastName: formValue.address.lastName,
        fullAddress: formValue.address.fullAddress,
        phoneNumber: formValue.address.phoneNumber,
        addressLabel: formValue.address.addressLabel
      };

      this.userAddress = {
        Id: randomAddressID,
        Address: this.address,
        isDefault: formValue.isDefault,
        AddressID: randomAddressID,
        userId: this.userId
      };
      console.log(this.userAddress);

      this.userService.createUserAddress(this.userAddress).subscribe(data => console.log(data))
    }
  }
}
