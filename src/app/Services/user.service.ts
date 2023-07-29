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
  ApiUrl: string = environment.LocalApiUrl;
getCurrentUser():Observable<any>{
  return this._HttpClient.get(this.ApiUrl+'/Account/getCurrentUser')
}

getUserProfile(email:string|null):Observable<any>{
  return this._HttpClient.get<any>(`${this.ApiUrl}/User/profile?email=${email}`);
}
updateUserProfile(data: any,email:any): Observable<any> {
  return this._HttpClient.put<any>(`${this.ApiUrl}/User/UpdateProfile?email=${email}`, data);
}

changPassword(email:any, currentPassword:string, newPassword:string): Observable<any>{
return this._HttpClient.put<any>(`${this.ApiUrl}/User/UpdatePassword?email=${email}&currentPassword=${currentPassword}&newPassword=${newPassword}`,{});

}

changePhoneNumber(email:any, newPhoneNumber:string): Observable<any>{

return this._HttpClient.put<any>(`${this.ApiUrl}/User/UpdatePhoneNumber?email=${email}&newPhoneNumber=${newPhoneNumber}`,{});

}





}
