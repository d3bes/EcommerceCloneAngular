import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCategoryDetailsDTO } from '../Models/product-category-details-dto';

@Injectable({
  providedIn: 'root'
})
export class CatogriesService {
  private http={};
  private apiBaseUrl = 'http://localhost:5216/api';
  constructor(private httpclient:HttpClient) {}
  getAllCatogries():Observable<ProductCategoryDetailsDTO[]>{
    return this.httpclient.get<ProductCategoryDetailsDTO[]>(`${this.apiBaseUrl}/ProductCategory`);
  }
}
