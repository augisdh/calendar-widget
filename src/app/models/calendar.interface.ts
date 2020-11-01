export interface Task {
  date: Date;
  quantity: number;
  price: number;
  eventTypeName: string;
  isExpenseType: boolean;
  isHoursEventType: boolean;
  isAdditionalHoursEventType: boolean;
  isWorkHour: boolean;
  isApproved: boolean;
  isRejected: boolean;
  tasksCount: number;
  firstTaskStart: Date;
  lastTaskEnd: Date;
}

export interface TimesheetTypes {
  type: "isHoursEventType" | "isExpenseType" | "isAdditionalHoursEventType";
}

export interface Days {
  date: Date;
  month: number;
  monthDay: number;
  weekDay: number;
  weekDayName: string;
  containsTask: boolean;
  hours: number[];
  isApproved?: boolean;
  isRejected?: boolean;
}

export interface CurrentDate {
  year: number;
  month: number;
  monthDay: number;
  day: number;
}

export interface HoursStartEnd {
  start: Date;
  end: Date;
}
