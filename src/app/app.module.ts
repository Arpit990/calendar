import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LayoutModule } from './module/layout/layout.module';
import { firebaseProviders } from './core/firebase.config';
import { AccountModule } from './module/account/account.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    AccountModule
  ],
  providers: [firebaseProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
