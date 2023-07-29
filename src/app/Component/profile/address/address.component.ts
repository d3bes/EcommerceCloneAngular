import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import * as tt from '@tomtom-international/web-sdk-maps';
import { GeoJSON } from 'geojson';
import { Control } from 'leaflet';
import { Observable, of } from 'rxjs';
import { City } from 'src/app/Models/city';
import { ProfileDTO } from 'src/app/Models/profile-dto';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

 
  map: any ;
  marker:any;
  user:any;
  phone:string;
  countries:any[];
  selectedCountry:string;
  // fullName:string;
  deliverPhone:string;
  street:string;
  building:string;
  near:string;
  location:string;
  fullAddress:string;
  httpOptions:any;
  cities:any[]= [];
  cities_en:any[]=[];
  cities_ar:any[]=[];
  governorates:any[]=[]
  governorates_en:any[]=[]
  governorates_ar:any[]=[]
  selectedGovernorate:string;
  selectedCity:string;





  constructor( private httpclient: HttpClient, private userService: UserService
    ) {
      this.deliverPhone='';
      this.selectedCountry='Egypt';
      this.phone= '';
      this.countries= [];
      // this.fullName='';
      this.building='';
      this.street='';
      this.near='';
      this.location='';
      this.fullAddress='';
      this.selectedGovernorate='';
      this.selectedCity='';
    

     
  }





  
  
  email:string|null =  localStorage.getItem('email');

  ngOnInit(){

    this.userService.getCurrentUser().subscribe(response=>
      {
        this.user= response
        console.log(this.user);
      })
 
    
      this.userService.getUserProfile(this.email).subscribe(response=>
        {
          this.phone = response.phoneNumber;
        console.log(response);
    
        });
        // get countries
        const objs = this.getCountries().subscribe(response=>
          { 
            const names = response.map((obj: { name: { common: any; }; }) => obj.name.common);
          //  console.log(names);
            this.countries= names;
            console.log("get countries",this.countries)
           });
           // get cities
        this.httpclient.get<any>('./assets/cities.json').subscribe(data => {
          this.cities = data;
          this.cities_en = this.cities.map(city => city.city_name_en);
          this.cities_ar = this.cities.map(city => city.city_name_ar);
          console.log(this.cities_ar);
          console.log(this.cities_en);
        });

          // get governorates
        this.httpclient.get<any>('./assets/governorates.json').subscribe(data => {
          this.governorates = data;
          this.governorates_en = this.governorates.map(governorates => governorates.governorate_name_en);
          this.governorates_ar = this.governorates.map(governorates => governorates.governorate_name_ar);
          console.log(this.governorates_ar);
          console.log(this.governorates_en);
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
      

      getFullAddress(){
    this.fullAddress= this.selectedCountry + ' - ' + this.selectedGovernorate + ' - ' + this.selectedCity + ' - ' + this.street 
    + ' - ' + this.building + ' - ' + this.near + ' - Location type: ' + this.location + ' - Phone: ' + this.deliverPhone
    console.log(this.fullAddress);
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







}
