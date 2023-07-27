import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import * as tt from '@tomtom-international/web-sdk-maps';
import { GeoJSON } from 'geojson';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

 
  map: any ;
  marker:any;

  constructor( private httpclient: HttpClient
    ) {
     
  }
  ngOnInit(){

    this.map = tt.map({
      key : 'TomTom key',
      container: 'map',
      style: 'tomtom://vector/1/basic-main',
      zoom:1.2
    });
    this.getjsondata();
    }

    getjsondata(){
    }
}
