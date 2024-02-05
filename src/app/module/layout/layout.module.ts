import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { CalendarComponent } from 'src/app/components/common/calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';


@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FullCalendarModule
  ]
})
export class LayoutModule { }
