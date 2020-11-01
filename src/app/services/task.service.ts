import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Task } from "../models/calendar.interface";
import { fetchTasks } from "./../api/index";

@Injectable({
  providedIn: "root",
})
export class TaskService {
  constructor() {}

  getAll() {
    return new Observable((observer) => {
      fetchTasks
        .then((tasks: Task[]) => {
          observer.next(tasks);
          observer.complete();
        })
        .catch((error) => {
          console.error(`Error occurred trying to getAll tasks: ${error}`);
          observer.next([]);
          observer.complete();
        });
    });
  }
}
