import { Task } from "../../models/calendar.interface";
import * as TaskActions from "./../actions/task.action";

const initialStateTask: Task = {
  date: null,
  quantity: null,
  price: null,
  eventTypeName: null,
  isExpenseType: null,
  isHoursEventType: null,
  isAdditionalHoursEventType: null,
  isWorkHour: null,
  isApproved: null,
  isRejected: null,
  tasksCount: null,
  firstTaskStart: null,
  lastTaskEnd: null,
};
const initialState = {
  tasks: [initialStateTask],
  loading: false,
};

export function reducer(state = initialState, action: TaskActions.Actions) {
  switch (action.type) {
    case TaskActions.TaskActionTypes.LOAD_TASKS:
      return {
        ...state,
        tasks: state.tasks,
        loading: true,
      };

    case TaskActions.TaskActionTypes.LOAD_TASKS_SUCCESS:
      return {
        ...state,
        tasks: action.payload,
        loading: false,
      };

    case TaskActions.TaskActionTypes.LOAD_TASK_FAILURE:
      return {
        ...state,
        tasks: state.tasks,
        loading: false,
      };

    case TaskActions.TaskActionTypes.ADD_TASK:
      return {
        ...state,
        tasks: state.tasks,
        loading: true,
      };

    case TaskActions.TaskActionTypes.ADD_TASK_SUCCESS:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        loading: false,
      };

    case TaskActions.TaskActionTypes.ADD_TASK_FAILURE:
      return {
        ...state,
        tasks: state.tasks,
        loading: false,
      };

    case TaskActions.TaskActionTypes.REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks,
        loading: true,
      };

    case TaskActions.TaskActionTypes.REMOVE_TASK_SUCCESS:
      return {
        ...state,
        tasks: state.tasks.filter((task: Task) => task.date !== action.payload),
        loading: false,
      };

    case TaskActions.TaskActionTypes.REMOVE_TASK_FAILURE:
      return {
        ...state,
        tasks: state.tasks,
        loading: false,
      };

    default:
      return state;
  }
}
