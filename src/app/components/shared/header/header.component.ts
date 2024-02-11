import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private _authService = inject(AuthenticationService);
  private _router = inject(Router);

  SignOut() {
    this._authService.signout();
    this._router.navigate(['/login']);
  }
}
