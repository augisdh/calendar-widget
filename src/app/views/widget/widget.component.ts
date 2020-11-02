import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Task } from "src/app/models/calendar.interface";
import { LoadTasksAction } from "src/app/store/actions/task.action";
import { AppState } from "src/app/store/state/app.state";

@Component({
  selector: "app-widget",
  templateUrl: "./widget.component.html",
  styleUrls: ["./widget.component.scss"],
})
export class WidgetComponent implements OnInit {
  calendarTasks: Task[] = [];
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new LoadTasksAction());

    this.store
      .select("tasks")
      .subscribe((taskList: any) => (this.calendarTasks = taskList.tasks));
  }
}
