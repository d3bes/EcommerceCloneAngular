import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _HttpClient:HttpClient) { }
  getAllProduct():Observable<any>{
    return this._HttpClient.get('http://localhost:5216/api/Product/10,1');
  }
   getById(prdId:string):Observable<any>{
  return this._HttpClient.get(`http://localhost:5216/api/Product/${prdId}`);}

  getProductsByCategoryID(catId:number) :Observable<any>{
    return this._HttpClient.get(`http://localhost:5216/api/Product/category/${catId}`);
   
}
}
