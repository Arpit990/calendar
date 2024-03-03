import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { CalendarComponent } from 'src/app/components/User/calendar/calendar.component';
import { AddLeaveComponent } from 'src/app/components/User/add-leave/add-leave.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        redirectTo: 'calendar',
        pathMatch: 'full',
      },
      {
        path: 'calendar',
        component: CalendarComponent,
      },
      {
        path: 'add-leave',
        component: AddLeaveComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
