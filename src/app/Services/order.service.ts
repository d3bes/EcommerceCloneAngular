import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IorderDTO } from '../Models/iorder-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private http={};
  private apiBaseUrl = 'http://localhost:5216/api';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Access-token'
    })
  };

  constructor(private httpclient:HttpClient) {}
  makeOrder(order:IorderDTO):Observable<IorderDTO>{
    console.log("make it");
    return this.httpclient.post<IorderDTO>(`${this.apiBaseUrl}/Order`, order, this.httpOptions);
  }
  
  getAllorder(userId:string):Observable<any>{
    return this.httpclient.get<any>(`${this.apiBaseUrl}/Order/UserOrders/${userId}`);
  }

  retrieveOrder(orderId:string):Observable<any>{
    console.log('URL:', `${this.apiBaseUrl}/Order/${orderId}`);
    return this.httpclient.delete<any>(`${this.apiBaseUrl}/Order/${orderId}`, this.httpOptions);
  }
}
