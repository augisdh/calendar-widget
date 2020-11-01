import { Task } from "../../models/calendar.interface";

export interface AppState {
  readonly tasks: Task[];
  readonly loading: boolean;
}
