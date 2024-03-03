import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthModule } from './module/auth/auth.module';
import { firebaseProviders } from './core/config/firebase.config';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [firebaseProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
