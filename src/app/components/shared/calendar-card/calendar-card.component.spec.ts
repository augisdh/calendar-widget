import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatIconModule } from "@angular/material";
import { CalendarDayNamePipe } from "src/app/resources/pipes/calendar-day-name.pipe";
import { CalendarHourPipe } from "src/app/resources/pipes/calendar-hour.pipe";

import { CalendarCardComponent } from "./calendar-card.component";

describe("CalendarCardComponent", () => {
  let component: CalendarCardComponent;
  let fixture: ComponentFixture<CalendarCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CalendarCardComponent,
        CalendarHourPipe,
        CalendarDayNamePipe,
      ],
      imports: [MatIconModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarCardComponent);
    component = fixture.componentInstance;
    component.currentDay = {
      year: 0,
      month: 0,
      monthDay: 0,
      day: 0,
    };
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
