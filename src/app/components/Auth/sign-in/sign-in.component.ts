import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  private _authService = inject(AuthService);
  private _router = inject(Router);

  constructor() { }

  onSubmit(loginForm: any) {
    this._authService.signin(loginForm.value.email, loginForm.value.password)
      .then(user => {
        if (user) {
          this._router.navigate(['./user']);
        } else {
          console.log("Invalid credentials");
        }
      });
    
  }
}
