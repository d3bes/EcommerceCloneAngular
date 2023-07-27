import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LogIn } from '../Models/log-in';
import { UserDTO } from '../Models/user-dto';
import { IRegist } from '../Models/iregist';
import { Router } from '@angular/router';

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

 

    private userSubject: BehaviorSubject<UserDTO>;
    public user: Observable<UserDTO> ;
    CacheUser:any;

  constructor(private httpclient: HttpClient, private router: Router) {
    this.CacheUser = localStorage.getItem('currentUser') 
    this.userSubject = new BehaviorSubject<UserDTO>(
      JSON.parse(this.CacheUser)
    );
    this.user = this.userSubject.asObservable();
  }
  


  logIn(user:LogIn):Observable<UserDTO>{

    return this.httpclient.post<UserDTO>(`${this.apiBaseUrl}/Account/login`,JSON.stringify(user),this.httpOptions);
  }
  
  regist(register:IRegist):Observable<IRegist>{
    return this.httpclient.post<IRegist>(`${this.apiBaseUrl}/Account/register`,JSON.stringify(register),this.httpOptions);
  }


}
