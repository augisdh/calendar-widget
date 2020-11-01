import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { Days, Task, TimesheetTypes } from "src/app/models/calendar.interface";
import {
  weekDayNames,
  currentDayDate,
} from "src/app/resources/helpers/calendar.helper";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.scss"],
})
export class CalendarComponent implements OnInit, OnChanges {
  @Input() tasks: Task[];
  days: Days[];
  hours: Task[];
  expenses: Task[];
  additionalHours: Task[];
  currentDate = currentDayDate();
  selectedDay: number;
  selectedDate: string;

  constructor() {}

  ngOnInit() {
    this.selectedDay = this.currentDate.monthDay;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.tasks) {
      this.currentDate = currentDayDate();
      this.mapDays(this.tasks);
      this.mapSelectedDate(this.days, this.selectedDay);
      this.mapTimesheet(this.tasks);
    }
  }

  activeDay(day: number) {
    this.selectedDay = day;
    this.mapSelectedDate(this.days, this.selectedDay);
    this.mapTimesheet(this.tasks);
  }

  mapSelectedDate(days: any[], monthDay: number) {
    if (!days || days.length < 1 || typeof monthDay !== "number") return;

    const date = days.find((day) => day.date.getDate() === monthDay).date;
    this.selectedDate = `${weekDayNames()[date.getDay()]} ${monthDay}.${
      date.getMonth() + 1
    }.${date.getFullYear()}`;
  }

  mapDays(tasks: Task[]) {
    let prevMonthDay: number = null;

    const mappedDays = tasks
      .map((task: Task) => {
        if (task.date instanceof Date) {
          const monthDay = task.date.getDate();
          const weekDay = task.date.getDay();

          if (prevMonthDay === monthDay) {
            return;
          }
          prevMonthDay = monthDay;

          const day: Days = {
            date: task.date,
            month: task.date.getMonth(),
            monthDay,
            weekDay,
            weekDayName: weekDayNames()[weekDay],
            containsTask: this.getContainsTask(monthDay),
            hours: this.mapDayHours(monthDay),
          };

          return day;
        }
      })
      .filter((day: Days) => day)
      .sort((firstDay, secondDay) =>
        firstDay.month > secondDay.month &&
        firstDay.monthDay > secondDay.monthDay
          ? 1
          : -1
      );

    this.days = this.setApprovedRejected(mappedDays);
  }

  setApprovedRejected(days: Days[]): Days[] {
    if (days.length < 1) return days;

    return days.map((day: Days) => {
      let sameDayCount = 0;
      let hasApprovedCount = 0;
      let hasRejected = false;

      this.tasks.forEach((task: Task) => {
        if (task.date.getDate() !== day.monthDay) return;
        sameDayCount++;

        if (task.isApproved) {
          hasApprovedCount++;
        }

        if (task.isRejected) {
          hasRejected = true;
        }
      });

      return {
        ...day,
        isApproved: hasApprovedCount === sameDayCount,
        isRejected: hasRejected,
      };
    });
  }

  mapDayHours(day: number) {
    return this.tasks
      .map((task: Task) => {
        if (
          task.date.getDate() === day &&
          task.isWorkHour &&
          task.firstTaskStart &&
          task.lastTaskEnd
        ) {
          const time =
            task.lastTaskEnd.getTime() - task.firstTaskStart.getTime();
          const hour = time / 60 / 60 / 1000;
          return hour;
        }
      })
      .filter((hour: number | undefined) => hour);
  }

  getContainsTask(day: number) {
    return this.tasks.some(
      (task: Task) => task.date.getDate() === day && !!task.eventTypeName
    );
  }

  mapTimesheet(tasks: Task[]) {
    if (!this.selectedDay) return;

    this.hours = this.mapTimesheetBasedOnType(tasks, {
      type: "isHoursEventType",
    });

    this.expenses = this.mapTimesheetBasedOnType(tasks, {
      type: "isExpenseType",
    });

    this.additionalHours = this.mapTimesheetBasedOnType(tasks, {
      type: "isAdditionalHoursEventType",
    });
  }

  mapTimesheetBasedOnType(tasks: Task[], { type }: TimesheetTypes) {
    return tasks
      .map((task: Task) => {
        if (task[type] && task.date.getDate() === this.selectedDay) {
          return task;
        }
      })
      .filter((mappedTask: Task) => mappedTask);
  }
}
