import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatIconModule } from "@angular/material";
import { CalendarDayNamePipe } from "src/app/resources/pipes/calendar-day-name.pipe";
import { CalendarHourPipe } from "src/app/resources/pipes/calendar-hour.pipe";
import { CalendarCardComponent } from "../shared/calendar-card/calendar-card.component";
import { TimesheetAdditionalHoursComponent } from "../shared/timesheet-additional-hours/timesheet-additional-hours.component";
import { TimesheetCardComponent } from "../shared/timesheet-card/timesheet-card.component";
import { TimesheetExpensesComponent } from "../shared/timesheet-expenses/timesheet-expenses.component";
import { TimesheetHoursComponent } from "../shared/timesheet-hours/timesheet-hours.component";

import { CalendarComponent } from "./calendar.component";

describe("CalendarComponent", () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CalendarComponent,
        CalendarCardComponent,
        TimesheetCardComponent,
        TimesheetHoursComponent,
        TimesheetExpensesComponent,
        TimesheetAdditionalHoursComponent,
        CalendarDayNamePipe,
        CalendarHourPipe,
      ],
      imports: [MatIconModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
