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
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {


  map: any ;
  marker:any;
  user:ProfileDTO;
  phone:string='';
  countries:any[]=[]
  selectedCountry:string='Egypt';
  // fullName:string;
  deliverPhone:string='';
  street:string= '';
  building:string='';
  near:string='';
  location:string='';
  fullAddress:string='';
  httpOptions:any='';
  cities:any[]= [];
  cities_en:any[]=[];
  cities_ar:any[]=[];
  governorates:any[]=[]
  governorates_en:any[]=[]
  governorates_ar:any[]=[]
  selectedGovernorate:string='';
  selectedCity:string='';
  displayName:string='';
  LastName:string='';
  FirstName:string='';
  userId:string='';

  Address:AddressDTO ;
  UserAddress:UserAddressDTO ;


  constructor( private httpclient: HttpClient, private userService: UserService
    ) {



      this.Address = {} as AddressDTO;
      this.UserAddress = {} as UserAddressDTO;
      this.user={} as ProfileDTO;

      this.userService.getUserProfile(this.email).subscribe(response=>
        {
          this.phone = response.phoneNumber;
          this.userId = response.id;
          this.UserAddress.userId= response.id;
          console.log(this.userId);
          console.log( this.UserAddress.userId);
        console.log(response);

        });



  }






  email:string|null =  localStorage.getItem('email');

  ngOnInit(){


    this.userService.getCurrentUser().pipe(
      tap((response: ProfileDTO) => {
        this.user = response;

        console.log(this.user);
      })
    ).subscribe();



        // get countries
        const objs = this.getCountries().subscribe(response=>
          {
            const names = response.map((obj: { name: { common: any; }; }) => obj.name.common);
          //  console.log(names);
            this.countries= names;
            // console.log("get countries",this.countries)
           });
           // get cities
        this.httpclient.get<any>('./assets/cities.json').subscribe(data => {
          this.cities = data;
          this.cities_en = this.cities.map(city => city.city_name_en);
          this.cities_ar = this.cities.map(city => city.city_name_ar);
          // console.log(this.cities_ar);
          // console.log(this.cities_en);
        });

          // get governorates
        this.httpclient.get<any>('./assets/governorates.json').subscribe(data => {
          this.governorates = data;
          this.governorates_en = this.governorates.map(governorates => governorates.governorate_name_en);
          this.governorates_ar = this.governorates.map(governorates => governorates.governorate_name_ar);
          // console.log(this.governorates_ar);
          // console.log(this.governorates_en);
        });







      }





    // this.map = tt.map({
    //   key : 'ZqFZ8dn3Ry8Qonu8p49rWqmioUzn09IA',
    //   container: 'map',
    //   style: 'tomtom://vector/1/basic-main',
    //   zoom:1.2
    // });
    //    this.getjsondata()
    // }



    // getjsondata(){
    // }


      getFullAddress():string{
    this.fullAddress= this.selectedCountry + ' - ' + this.selectedGovernorate + ' - ' + this.selectedCity + ' - ' + this.street
    + ' - ' + this.near + 'bulding no:' + this.building +  ' - ' +' - Location type: ' + this.location
    console.log(this.fullAddress);
    return this.fullAddress
    }
      test(){
        console.log(this.selectedCountry)
      }
      testCity(){
        console.log(this.selectedCity)
      }
      testGov(){
        console.log(this.selectedGovernorate)
      }
getCountries():Observable<any>{

  return this.httpclient.get<any>('https://restcountries.com/v3.1/all')
}

CreateAddress(){

  this.Address.id = uuidv4();
  this.Address.fullAddress= this.getFullAddress();
 this.Address.firstName= this.FirstName;
 this.Address.lastName= this.LastName;
 this.Address.phoneNumber = this.deliverPhone;

 this.UserAddress.isDefault = true;
 this.UserAddress.id = uuidv4();
 this.UserAddress.addressId = this.Address.id;
  // this.UserAddress.userId = this.userId;
  console.log( this.UserAddress.userId);

this.userService.createAddress(this.Address).subscribe({
  next:(data:AddressDTO)=>{
    console.log(data);
    this.CreateUserAddress()
  },
  error:( error:any)=>{
    console.error('failed to create address',error);
  },
  complete: () => {
    window.location.reload();
    }
});

}

CreateUserAddress(){
  this.userService.createUserAddress(this.UserAddress).subscribe({
    next:(data:UserAddressDTO)=>{
      console.log(data);
    },
    error:( error:any)=>{
      console.error('failed to create userAddress',error);
    }
  });
}



}
