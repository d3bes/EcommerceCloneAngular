import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductBrandDTO } from '../Models/product-brand-dto';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  private http={};
  private apiBaseUrl = 'http://localhost:5216/api';
  constructor(private httpclient:HttpClient)
  {
    // this.http={
    //   headers:new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Access-token'
    //   })
    // };
  }
  getAllBrands():Observable<ProductBrandDTO[]>{
    return this.httpclient.get<ProductBrandDTO[]>(`${this.apiBaseUrl}/ProductBrand`);
  }
}
