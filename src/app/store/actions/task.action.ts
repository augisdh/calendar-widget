import { Action } from "@ngrx/store";
import { Task } from "../../models/calendar.interface";

export enum TaskActionTypes {
  LOAD_TASKS = "[TASKS] Load",
  LOAD_TASKS_SUCCESS = "[TASKS] Load Success",
  LOAD_TASK_FAILURE = "[TASKS] Load Failure",
  ADD_TASK = "[TASK] Add",
  ADD_TASK_SUCCESS = "[TASK] Add Success",
  ADD_TASK_FAILURE = "[TASK] Add Failure",
  REMOVE_TASK = "[TASK] Remove",
  REMOVE_TASK_SUCCESS = "[TASK] Remove Success",
  REMOVE_TASK_FAILURE = "[TASK] Remove Failure",
}

export class LoadTasksAction implements Action {
  readonly type = TaskActionTypes.LOAD_TASKS;
}

export class LoadShoppingSuccessAction implements Action {
  readonly type = TaskActionTypes.LOAD_TASKS_SUCCESS;

  constructor(public payload: Array<Task>) {}
}

export class LoadShoppingFailureAction implements Action {
  readonly type = TaskActionTypes.LOAD_TASK_FAILURE;

  constructor(public payload: Error) {}
}

export class AddTaskAction implements Action {
  readonly type = TaskActionTypes.ADD_TASK;

  constructor(public payload: Task) {}
}

export class AddTaskSuccessAction implements Action {
  readonly type = TaskActionTypes.ADD_TASK_SUCCESS;

  constructor(public payload: Task) {}
}

export class AddTaskFailureAction implements Action {
  readonly type = TaskActionTypes.ADD_TASK_FAILURE;

  constructor(public payload: Error) {}
}

export class RemoveTaskAction implements Action {
  readonly type = TaskActionTypes.REMOVE_TASK;

  constructor(public payload: Date) {}
}

export class RemoveTaskSuccessAction implements Action {
  readonly type = TaskActionTypes.REMOVE_TASK_SUCCESS;

  constructor(public payload: Date) {}
}

export class RemoveTaskFailureAction implements Action {
  readonly type = TaskActionTypes.REMOVE_TASK_FAILURE;

  constructor(public payload: Error) {}
}

export type Actions =
  | LoadTasksAction
  | LoadShoppingSuccessAction
  | LoadShoppingFailureAction
  | AddTaskAction
  | AddTaskSuccessAction
  | AddTaskFailureAction
  | RemoveTaskAction
  | RemoveTaskSuccessAction
  | RemoveTaskFailureAction;
