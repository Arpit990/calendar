export const LEAVE_TYPE_COLOR = [
    { id: 1, bgColor: '#e8fff3', textColor: '#50cd89' }, // Earned Leave
    { id: 2, bgColor: '#cfeeff', textColor: '#3582bd' }, // Casual Leave
    { id: 3, bgColor: '#f7e2e2', textColor: '#e3342f' }, // Leave Without Pay
    { id: 4, bgColor: '#f5f5f5', textColor: '#888888' }, // Compensatory Off
    { id: 5, bgColor: '#fff8dd', textColor: '#ffc700' }  // Public Holiday
]

export function getColor(leave_type: number) {
    const leaveTypeInfo = LEAVE_TYPE_COLOR.find((type) => type.id == leave_type);
    if (leaveTypeInfo) {
        return {
            bgColor: leaveTypeInfo.bgColor,
            textColor: leaveTypeInfo.textColor,
        };
    } else {
        // Return null if leave_type ID is not found
        return null;
    }
}