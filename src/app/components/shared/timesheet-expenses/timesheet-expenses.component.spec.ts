import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatIconModule } from "@angular/material";

import { TimesheetExpensesComponent } from "./timesheet-expenses.component";

describe("TimesheetExpensesComponent", () => {
  let component: TimesheetExpensesComponent;
  let fixture: ComponentFixture<TimesheetExpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimesheetExpensesComponent],
      imports: [MatIconModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
