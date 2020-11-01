import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatIconModule } from "@angular/material";
import { CalendarComponent } from "src/app/components/calendar/calendar.component";
import { CalendarCardComponent } from "src/app/components/shared/calendar-card/calendar-card.component";
import { TimesheetAdditionalHoursComponent } from 'src/app/components/shared/timesheet-additional-hours/timesheet-additional-hours.component';
import { TimesheetCardComponent } from "src/app/components/shared/timesheet-card/timesheet-card.component";
import { TimesheetExpensesComponent } from 'src/app/components/shared/timesheet-expenses/timesheet-expenses.component';
import { TimesheetHoursComponent } from 'src/app/components/shared/timesheet-hours/timesheet-hours.component';
import { CalendarDayNamePipe } from "src/app/resources/pipes/calendar-day-name.pipe";
import { CalendarHourPipe } from "src/app/resources/pipes/calendar-hour.pipe";

import { WidgetComponent } from "./widget.component";

describe("WidgetComponent", () => {
  let component: WidgetComponent;
  let fixture: ComponentFixture<WidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WidgetComponent,
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
    fixture = TestBed.createComponent(WidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
