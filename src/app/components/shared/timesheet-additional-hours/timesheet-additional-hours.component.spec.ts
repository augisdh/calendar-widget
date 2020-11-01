import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatIconModule } from "@angular/material";

import { TimesheetAdditionalHoursComponent } from "./timesheet-additional-hours.component";

describe("TimesheetAdditionalHoursComponent", () => {
  let component: TimesheetAdditionalHoursComponent;
  let fixture: ComponentFixture<TimesheetAdditionalHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimesheetAdditionalHoursComponent],
      imports: [MatIconModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetAdditionalHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
