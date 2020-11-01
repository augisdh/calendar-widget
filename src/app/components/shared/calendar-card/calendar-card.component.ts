import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { CurrentDate, Days } from "src/app/models/calendar.interface";
import {
  monthNames,
  weekendNames,
} from "src/app/resources/helpers/calendar.helper";

@Component({
  selector: "app-calendar-card",
  templateUrl: "./calendar-card.component.html",
  styleUrls: ["./calendar-card.component.scss"],
})
export class CalendarCardComponent implements OnInit {
  @Input() days: Days[];
  @Input() currentDay: CurrentDate;
  @Output() activeDayEvent = new EventEmitter<number>();
  weekendNames = weekendNames();
  monthNames = monthNames();
  activeDay: number;

  constructor() {}

  ngOnInit() {
    this.activeDay = this.currentDay.monthDay;
  }

  selectDay(day: { monthDay: number }) {
    this.activeDay = day.monthDay;
    this.activeDayEvent.next(this.activeDay);
  }
}
