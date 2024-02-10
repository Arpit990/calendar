import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateFn,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../services/authentication.service'; // Adjust path as needed

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> | Promise<boolean> | boolean => {
  const authService = inject(AuthenticationService);
  const _router = inject(Router);

  return new Observable<boolean>(observer => {
    return authService.checkAuthenticationStatus().subscribe(user => {
      if (user && user != undefined) {
        console.log(user);
        observer.next(true);
      }
      else {
        _router.navigate(['/login']);
        observer.next(false);
      }
      observer.complete();
    });
  });  
};
