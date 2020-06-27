import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NotauthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authservice: AuthService) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const currentUser = this.authservice.currentUserValue;
      if (!currentUser) {
          // logged in so return true
          return true;
      }
      this.router.navigate(['home'], { queryParams: { returnUrl: state.url } });
      return false;
  }

}
