import { Component, signal, ChangeDetectorRef, inject, OnInit } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/core';

import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

import { LeaveService } from 'src/app/core/services/leave.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {

  private _leaveService = inject(LeaveService);

  calendarVisible = signal(true);
  calendarOptions: CalendarOptions = ({
    plugins: [
      interactionPlugin,
      dayGridPlugin,
      timeGridPlugin,
      listPlugin,
    ],
    headerToolbar: {
      left: 'prev,today,next',
      center: 'title',
      right: 'dayGridMonth,listWeek,listMonth'
    },
    initialView: 'dayGridMonth',
    buttonText: {
      dayGridMonth: 'Grid Month',
      listWeek: 'List Week',
      listMonth: 'List Month'
    },
    views: {
      dayGridWeek: {
        titleFormat: ''
      },
      listWeek: {
        titleFormat: ''
      }
    },
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true

    /*
      you can update a remote database when these fire:
      select: this.handleDateSelect.bind(this),
      eventClick: this.handleEventClick.bind(this),
      eventsSet: this.handleEvents.bind(this)
      eventAdd:
      eventChange:
      eventRemove:
    */
  });

  currentEvents = signal<EventApi[]>([]);

  constructor(private changeDetector: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this._leaveService.getLeaves().subscribe(res => {
      this.calendarOptions.events = res.map(x => {
        return {
          id: x.id,
          title: x.name,
          start: x.from_date,
          end: this.addDay(x.to_date.toString()) 
        }
      });
    })
  }

  addDay(dateString: string) {
    let date = new Date(dateString);
    date.setDate(date.getDate() + 1);
    let newDateString = date.toISOString().split('T')[0];
    return newDateString;
  }

  handleCalendarToggle() {
    this.calendarVisible.update((bool) => !bool);
  }

  handleWeekendsToggle() {
    /*this.calendarOptions.mutate((options) => {
      options.weekends = !options.weekends;
    });*/
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: "1",
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents.set(events);
    this.changeDetector.detectChanges(); // workaround for pressionChangedAfterItHasBeenCheckedError
  }
}
