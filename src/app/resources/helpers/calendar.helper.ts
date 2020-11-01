import { CurrentDate } from "src/app/models/calendar.interface";

export const weekDayNames = () => {
  return [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
};

export const weekendNames = () => {
  return ["Saturday", "Sunday"];
};

export const monthNames = () => {
  return [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
};

export const currentDayDate = (): CurrentDate => {
  const currentDay = new Date();

  return {
    year: currentDay.getFullYear(),
    month: currentDay.getMonth(),
    monthDay: currentDay.getDate(),
    day: currentDay.getDay(),
  };
};

export const getDateISO = (date: Date, start: number, count: number) => {
  return date.toISOString().substr(start, count);
};
