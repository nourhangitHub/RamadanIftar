import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add auth header with jwt if user is logged in and request is to api url
    const currentUser = this.authService.currentUserValue;
    const isLoggedIn = currentUser && currentUser.access_token;
    const isApiUrl = request.url.startsWith(environment.apiUrl);
    if (isLoggedIn && isApiUrl) {
      console.log("frominterceptor");
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${currentUser.access_token}`
            }
        });
    }
    return next.handle(request);
}
}
