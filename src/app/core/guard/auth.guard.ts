import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateFn,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthService);
  const _router = inject(Router);

  return new Observable<boolean>(observer => {
    return authService.checkAuthenticationStatus().subscribe(user => {
      if (user && user != undefined) {
        console.log(user);
        observer.next(true);
      }
      else {
        _router.navigate(['./auth']);
        observer.next(false);
      }
      observer.complete();
    });
  });
};
