import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  private _authService = inject(AuthService);
  private _router = inject(Router);

  SignOut() {
    this._authService.signout();
    this._router.navigate(['./auth']);
  }
}
