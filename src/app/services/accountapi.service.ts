import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../classes/user';
@Injectable({
  providedIn: 'root'
})
export class AccountapiService {

  constructor(private http: HttpClient) { }
  getaccount() : Observable<User>{
    return this.http.get<User>(`${environment.apiUrl}/account/me`);
  }
  updateAccount(user){
    return this.http.post<User>(`${environment.apiUrl}/account/update`, user);
  }
  changePassword(user){
    return this.http.post<User>(`${environment.apiUrl}/account/update-password`, user);
  }
}
