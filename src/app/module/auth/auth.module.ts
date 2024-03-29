import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { FormsModule } from '@angular/forms';
import { SignInComponent } from 'src/app/components/Auth/sign-in/sign-in.component';


@NgModule({
  declarations: [
    AuthComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ]
})
export class AuthModule { }
