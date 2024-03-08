import { EventInput } from '@fullcalendar/core';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'All-day event',
    start: TODAY_STR,
    display: 'background',
    kind: 'festival',
    color: '#FF0',
    textColor: '#00F',
    state: 'hh'
  },
  {
    title: 'Event 1',
    start: '2024-03-12T16:33:44+05:30',
    id: '1',
    end: '2024-03-12T18:00:00+05:30',
    allDay: false,
    editable: true,
    backgroundColor: '#3788D8',
    borderColor: '#3788D8',
    textColor: '#FFFFFF',
    className: 'custom-event-class',
    extendedProps: {
      // Additional custom properties
      location: 'Room 101',
      organizer: 'John Doe'
    }
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: TODAY_STR,
    end: TODAY_STR,
    kind: 'holiday',
    color: '#0F0',
    textColor: '#00F'
  }
];

export function createEventId() {
  return String(eventGuid++);
}

// events:[
//   {
//     title: "Maha Shivratri",
//     start: this.startDate,
//     end: this.endDate,
//     display: 'background',
//     kind: 'holiday'
//   }
// ],