import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserDTO } from '../Models/user-dto';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject: BehaviorSubject<UserDTO>;
  public user: Observable<UserDTO> ;
  name:any;
  constructor(private httpclient: HttpClient, private router: Router) {
    this.name = localStorage.getItem('currentUser') 
    this.userSubject = new BehaviorSubject<UserDTO>(
      JSON.parse(this.name)
    );
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): UserDTO {
    return this.userSubject.value;
  }

}
