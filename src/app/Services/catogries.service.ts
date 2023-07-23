import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCategoryDTO } from '../Models/product-category-dto';

@Injectable({
  providedIn: 'root'
})
export class CatogriesService {

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
  getAllCatogries():Observable<ProductCategoryDTO[]>{
    return this.httpclient.get<ProductCategoryDTO[]>(`${this.apiBaseUrl}/ProductCategory`);
  }
}
