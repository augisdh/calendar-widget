import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { HoursStartEnd, Task } from "src/app/models/calendar.interface";
import { getDateISO } from "src/app/resources/helpers/calendar.helper";

@Component({
  selector: "app-timesheet-hours",
  templateUrl: "./timesheet-hours.component.html",
  styleUrls: ["./timesheet-hours.component.scss"],
})
export class TimesheetHoursComponent implements OnChanges {
  @Input() hours: Task[];
  startEndTime = {
    start: "",
    end: "",
  };

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hours) {
      this.getStartEndHours(this.hours);
    }
  }

  getStartEndHours(hours: Task[]) {
    if (!hours || hours.length < 1) return;

    const hoursSorted: HoursStartEnd[] = hours
      .map((hour: Task) => ({
        start: hour.firstTaskStart,
        end: hour.lastTaskEnd,
      }))
      .sort((firstEl, secondEl) => (firstEl.start > secondEl.start ? 1 : -1));

    this.startEndTime.start = getDateISO(hoursSorted[0].start, 11, 5);
    this.startEndTime.end = getDateISO(
      hoursSorted[hoursSorted.length - 1].end,
      11,
      5
    );
  }
}
