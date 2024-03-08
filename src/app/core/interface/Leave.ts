export interface Leave extends LeaveForm {
    id: string;
}
  
export interface LeaveForm {
    name: string,
    from_date: Date,
    to_date: Date,
    leave_type: number,
    reason: string,
    not_fixed: boolean
}