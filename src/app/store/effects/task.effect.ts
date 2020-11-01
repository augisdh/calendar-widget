import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, mergeMap, catchError } from "rxjs/operators";
import {
  LoadTasksAction,
  TaskActionTypes,
  LoadShoppingSuccessAction,
  LoadShoppingFailureAction,
  AddTaskAction,
  AddTaskSuccessAction,
  AddTaskFailureAction,
  RemoveTaskSuccessAction,
  RemoveTaskFailureAction,
  RemoveTaskAction,
} from "../actions/task.action";
import { of } from "rxjs";
import { TaskService } from "src/app/services/task.service";
import { Task } from "src/app/models/calendar.interface";

@Injectable()
export class TaskEffects {
  @Effect() loadTasks$ = this.actions$.pipe(
    ofType<LoadTasksAction>(TaskActionTypes.LOAD_TASKS),
    mergeMap(() => {
      return this.taskService.getAll().pipe(
        map((data: Task[]) => {
          return new LoadShoppingSuccessAction(data);
        }),
        catchError((error) => of(new LoadShoppingFailureAction(error)))
      );
    })
  );

  @Effect() addTask$ = this.actions$.pipe(
    ofType<AddTaskAction>(TaskActionTypes.ADD_TASK),
    mergeMap((data) =>
      of(data).pipe(
        map(() => new AddTaskSuccessAction(data.payload)),
        catchError((error) => of(new AddTaskFailureAction(error)))
      )
    )
  );

  @Effect() removeTask$ = this.actions$.pipe(
    ofType<RemoveTaskAction>(TaskActionTypes.REMOVE_TASK),
    mergeMap((data) =>
      of(data).pipe(
        map(() => new RemoveTaskSuccessAction(data.payload)),
        catchError((error) => of(new RemoveTaskFailureAction(error)))
      )
    )
  );

  constructor(private actions$: Actions, private taskService: TaskService) {}
}
