import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LogIn } from '../Models/log-in';
import { UserDTO } from '../Models/user-dto';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private apiBaseUrl = 'http://localhost:5216/api';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Access-token'
    })};
  constructor(private httpclient: HttpClient) { 
    
  }

  logIn(user:LogIn):Observable<UserDTO>{
    return this.httpclient.post<UserDTO>(`${this.apiBaseUrl}/Account/login`,JSON.stringify(user),this.httpOptions);
  }
}
