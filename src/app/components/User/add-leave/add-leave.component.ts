import { Component, OnInit, inject } from '@angular/core';
import { Leave } from 'src/app/core/interface/Leave';
import { LeaveService } from 'src/app/core/services/leave.service';

@Component({
  selector: 'app-add-leave',
  templateUrl: './add-leave.component.html',
  styleUrl: './add-leave.component.css'
})
export class AddLeaveComponent implements OnInit {

  private _leaveService = inject(LeaveService);

  leave: Leave = {
    id: "",
    name: "",
    from_date: new Date(),
    to_date: new Date(),
    leave_type: 0,
    reason: "",
    not_fixed: false
  };

  leaveTypes = [
    { label: 'Select Leave Type', value: 0 },
    { label: 'EL', value: 1 },
    { label: 'CL', value: 2 },
    { label: 'LWP', value: 3 },
    { label: 'C-OFF', value: 4 }
  ];

  ngOnInit(): void {
    this._leaveService.getLeaves().subscribe(res => {
      
    })
  }

  async onSubmit(leaveForm: any) {
    try {
      if(leaveForm.valid) {
        this.leave = leaveForm.value;
        await this._leaveService.createLeave(this.leave);
        leaveForm.reset();
      } else {
        console.log("Invalid form data")
      } 
    } catch (error) {
      
    }
  }
}
