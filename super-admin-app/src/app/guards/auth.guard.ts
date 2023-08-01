import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  CanActivateFn,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../authentication/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (!this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/home/form']);
      return false;
    }
  }
}

export const isAuthGuard: CanActivateFn =(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any =>{
  return inject(AuthGuard).canActivate(route, state)
}

