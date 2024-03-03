import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { CalendarComponent } from 'src/app/components/User/calendar/calendar.component';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { FormsModule } from '@angular/forms';
import { AddLeaveComponent } from 'src/app/components/User/add-leave/add-leave.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    UserComponent,
    CalendarComponent,
    AddLeaveComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FullCalendarModule,
    FormsModule
  ]
})
export class UserModule { }
