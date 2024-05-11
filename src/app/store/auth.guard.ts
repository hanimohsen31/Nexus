import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SignupService } from './signup.service';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
):
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree => {
  const signupService = inject(SignupService);
  const router = inject(Router);

  if (signupService.isLoggedIn.getValue()) {
    return true;
  } else {
    router.navigate(['/signup/login']);
    return false;
  }
};
