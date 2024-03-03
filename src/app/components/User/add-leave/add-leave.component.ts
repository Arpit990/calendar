import { Component } from '@angular/core';
import { Leave } from 'src/app/core/interface/Leave';

@Component({
  selector: 'app-add-leave',
  templateUrl: './add-leave.component.html',
  styleUrl: './add-leave.component.css'
})
export class AddLeaveComponent {

  leave: Leave = {
    id: "",
    name: "",
    from_date: new Date(),
    to_date: new Date(),
    leave_type: 0,
    reason: ""
  };

  leaveTypes = [
    { label: 'Select Leave Type', value: 0 },
    { label: 'EL', value: 1 },
    { label: 'CL', value: 2 },
    { label: 'LWP', value: 3 },
    { label: 'C-OFF', value: 4 }
  ];


  onSubmit(leaveForm: any) {
    if(leaveForm.valid) {
      console.log(leaveForm.value)
    } else {
      console.log("Invalid form data")
    }    
  }
}
