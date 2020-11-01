import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { StoreModule } from "@ngrx/store";
import { reducer } from "./store/reducers/task.reducer";
import { EffectsModule } from "@ngrx/effects";
import { TaskEffects } from "./store/effects/task.effect";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CalendarComponent } from "./components/calendar/calendar.component";
import { HomeComponent } from "./views/home/home.component";
import { WidgetComponent } from "./views/widget/widget.component";
import { CalendarCardComponent } from "./components/shared/calendar-card/calendar-card.component";
import { TimesheetCardComponent } from "./components/shared/timesheet-card/timesheet-card.component";
import { MatIconModule } from '@angular/material';
import { CalendarHourPipe } from './resources/pipes/calendar-hour.pipe';
import { TimesheetHoursComponent } from './components/shared/timesheet-hours/timesheet-hours.component';
import { TimesheetExpensesComponent } from './components/shared/timesheet-expenses/timesheet-expenses.component';
import { TimesheetAdditionalHoursComponent } from './components/shared/timesheet-additional-hours/timesheet-additional-hours.component';
import { CalendarDayNamePipe } from './resources/pipes/calendar-day-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    HomeComponent,
    WidgetComponent,
    CalendarCardComponent,
    TimesheetCardComponent,
    CalendarHourPipe,
    TimesheetHoursComponent,
    TimesheetExpensesComponent,
    TimesheetAdditionalHoursComponent,
    CalendarDayNamePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ tasks: reducer }),
    EffectsModule.forRoot([TaskEffects]),
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
