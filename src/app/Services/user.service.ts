import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _HttpClient:HttpClient) {
    
  }
ApiUrl:string=  'http://localhost:5216/api';

getCurrentUser():Observable<any>{
  return this._HttpClient.get(this.ApiUrl+'/Account/getCurrentUser')
}
}
