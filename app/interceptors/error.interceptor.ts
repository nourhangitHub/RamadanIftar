import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, first } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService, private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
              // auto refreshtoken if 401 response returned from api
              const user = JSON.parse(localStorage.getItem('currentUser'));
              this.authService.getRefreshToken(user).pipe(first()).subscribe(data => {
                    console.log(data);
                  })
            }
            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}
