import { Component, Input } from "@angular/core";
import { Task } from 'src/app/models/calendar.interface';

@Component({
  selector: "app-timesheet-expenses",
  templateUrl: "./timesheet-expenses.component.html",
  styleUrls: ["./timesheet-expenses.component.scss"],
})
export class TimesheetExpensesComponent {
  @Input() expenses: Task[];

  constructor() {}
}
