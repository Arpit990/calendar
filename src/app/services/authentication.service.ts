import { Injectable, inject } from '@angular/core';

import {
  Auth,
  getAuth,
  authState,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  user,
  signOut
} from '@angular/fire/auth';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _auth: Auth = inject(Auth);

  constructor() { }

  async signin(email: string, password: string) {
    try {
      return signInWithEmailAndPassword(getAuth(), email, password);
    } catch (error) {
      return undefined;
    }
  }

  async signup(email: string, password: string) {
    try {
      return createUserWithEmailAndPassword(getAuth(), email, password);
    } catch (error) {
      return undefined;
    }
  }

  async getUserDetails() {
    try {
      return user(getAuth()).pipe(map(result => result));
    } catch {
      return undefined;
    }
  }

  checkAuthenticationStatus() {
      return authState(getAuth());
  }

  async signout() {
    try {
      return signOut(getAuth());
    } catch {
      return undefined;
    }
  }
}
