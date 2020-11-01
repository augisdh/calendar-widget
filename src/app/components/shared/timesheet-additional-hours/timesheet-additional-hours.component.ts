import { Component, Input } from "@angular/core";
import { Task } from 'src/app/models/calendar.interface';

@Component({
  selector: "app-timesheet-additional-hours",
  templateUrl: "./timesheet-additional-hours.component.html",
  styleUrls: ["./timesheet-additional-hours.component.scss"],
})
export class TimesheetAdditionalHoursComponent {
  @Input() additionalHours: Task[];

  constructor() {}
}
