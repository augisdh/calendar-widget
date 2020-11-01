import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatIconModule } from "@angular/material";
import { CalendarHourPipe } from "src/app/resources/pipes/calendar-hour.pipe";

import { TimesheetHoursComponent } from "./timesheet-hours.component";

describe("TimesheetHoursComponent", () => {
  let component: TimesheetHoursComponent;
  let fixture: ComponentFixture<TimesheetHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimesheetHoursComponent, CalendarHourPipe],
      imports: [MatIconModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
