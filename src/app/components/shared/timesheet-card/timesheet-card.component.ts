import { Component, Input } from "@angular/core";
import { Task } from 'src/app/models/calendar.interface';

@Component({
  selector: "app-timesheet-card",
  templateUrl: "./timesheet-card.component.html",
  styleUrls: ["./timesheet-card.component.scss"],
})
export class TimesheetCardComponent {
  @Input() selectedDate: string;
  @Input() timesheetHours: Task[];
  @Input() timesheetExpenses: Task[];
  @Input() timesheetAdditionalHours: Task[];

  constructor() {}
}
