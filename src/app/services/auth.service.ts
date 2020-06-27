import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Authres } from '../classes/authres';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<Authres>;
  public currentUser: Observable<Authres>;
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Authres>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
}

  public get currentUserValue(): Authres {
    return this.currentUserSubject.value;
  }

  getRefreshToken(user) : Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}/auth/refresh`, user).pipe(map(user => {
      // login successful if there's a jwt token in the response
      if (user && user.access_token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
      }
      return user;
  }));
  }
  login(user) : Observable<Authres>{
    return this.http.post<Authres>(`${environment.apiUrl}/auth/login`, user).pipe(map(user => {
      // login successful if there's a jwt token in the response
      if (user && user.access_token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
      }
      return user;
  }));
  }
  regester(user) : Observable<Authres>{
    return this.http.post<Authres>(`${environment.apiUrl}/auth/register`, user).pipe(map(user => {
      // login successful if there's a jwt token in the response
      if (user && user.access_token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
      }
      return user;
  }));
  }

  logout(user){
    return this.http.post<Authres>(`${environment.apiUrl}/auth/logout`, user)
    .pipe(map(data => {
      console.log(data);
      // login successful if there's a jwt token in the response
      if (user && user.access_token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.removeItem('currentUser');
          this.currentUserSubject.next(null);
      }
      return true;
  }));
  }

}

