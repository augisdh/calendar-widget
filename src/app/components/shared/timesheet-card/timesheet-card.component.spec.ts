import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatIconModule } from "@angular/material";
import { CalendarDayNamePipe } from "src/app/resources/pipes/calendar-day-name.pipe";
import { CalendarHourPipe } from "src/app/resources/pipes/calendar-hour.pipe";
import { TimesheetAdditionalHoursComponent } from "../timesheet-additional-hours/timesheet-additional-hours.component";
import { TimesheetExpensesComponent } from "../timesheet-expenses/timesheet-expenses.component";
import { TimesheetHoursComponent } from "../timesheet-hours/timesheet-hours.component";

import { TimesheetCardComponent } from "./timesheet-card.component";

describe("TimesheetCardComponent", () => {
  let component: TimesheetCardComponent;
  let fixture: ComponentFixture<TimesheetCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TimesheetCardComponent,
        TimesheetHoursComponent,
        TimesheetExpensesComponent,
        TimesheetAdditionalHoursComponent,
        CalendarHourPipe,
        CalendarDayNamePipe,
      ],
      imports: [MatIconModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
