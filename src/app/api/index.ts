import { Task } from "../models/calendar.interface";

const defaultTask = {
  date: null,
  quantity: null, // Depends on event type. Could be amount of hours used, items consumed and etc.
  price: null, // Used only with expense type
  eventTypeName: null, // Just an event type name. Should be unique in the day scope.
  isExpenseType: false, // If true, isHourEventType and isAdditionalHourEventType should be false.
  isHoursEventType: false, // If true, isExpenseType and isAdditionalHourEventType should be false.
  isAdditionalHoursEventType: false, // If true, isHoursEventType and isExpenseType should be false.
  isWorkHour: true, // Only work hours in the calendar section should be calculated. So if this value is set to false it shouldn’t be added to the hours amount in the calendar section.
  isApproved: false, // If this is set to true - isRejected should be false.
  isRejected: false, // If this is set to true - isApproved should be false.
  tasksCount: null, // Tasks contain events. This number is used in the calendar section.
  firstTaskStart: null, // Should be used to calculate first day task start time.
  lastTaskEnd: null, // Should be used to calculate last task end time.
};

const getLastSevenDays = () => {
  const lastSevenDays = [];
  const currentDay = new Date();

  lastSevenDays.push(currentDay);

  for (let i = 1; i <= 6; i++) {
    const otherDay = new Date(currentDay);
    otherDay.setDate(currentDay.getDate() - i);

    lastSevenDays.push(otherDay);
  }

  return lastSevenDays;
};

const randomIntFromInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const createHours = ({
  task,
  day,
  name,
  startTimeHour,
}: {
  task: Task;
  day: Date;
  name: string;
  startTimeHour: number;
}) => {
  task.date = day;
  task.eventTypeName = name;
  task.isHoursEventType = true;

  const randomWorkHour = randomIntFromInterval(1, 7);
  if (randomWorkHour === 1) {
    task.isWorkHour = false;
  }

  const randomApproved = randomIntFromInterval(1, 12);
  if (randomApproved === 1) {
    task.isRejected = true;
  } else if (randomApproved > 1 && randomApproved < 12) {
    task.isApproved = true;
  }

  const randomQuantaty = randomIntFromInterval(1, 10) / 2;
  task.quantity = randomQuantaty;

  const startDate = new Date(task.date);
  startDate.setHours(startTimeHour);
  task.firstTaskStart = startDate;

  const endDate = new Date(startDate);
  endDate.setTime(startDate.getTime() + randomQuantaty * 60 * 60 * 1000);
  task.lastTaskEnd = endDate;

  return task;
};

const createExpenses = ({
  task,
  day,
  name,
}: {
  task: Task;
  day: Date;
  name: string;
}) => {
  task.date = day;
  task.eventTypeName = name;
  task.isExpenseType = true;
  task.price = randomIntFromInterval(1, 100);
  task.quantity = randomIntFromInterval(1, 10);
  task.isWorkHour = false;

  const randomApproved = randomIntFromInterval(1, 12);
  if (randomApproved === 1) {
    task.isRejected = true;
  } else if (randomApproved > 1 && randomApproved < 12) {
    task.isApproved = true;
  }

  return task;
};

const createAdditionalHours = ({
  task,
  day,
  name,
}: {
  task: Task;
  day: Date;
  name: string;
}) => {
  task.date = day;
  task.eventTypeName = name;
  task.isAdditionalHoursEventType = true;
  task.quantity = randomIntFromInterval(1, 10) / 4;

  const randomWorkHour = randomIntFromInterval(1, 7);
  if (randomWorkHour === 1) {
    task.isWorkHour = false;
  }

  const randomApproved = randomIntFromInterval(1, 12);
  if (randomApproved === 1) {
    task.isRejected = true;
  } else if (randomApproved > 1 && randomApproved < 12) {
    task.isApproved = true;
  }

  return task;
};

const decideAddTask = ({
  tasks,
  generatedTask,
  addTaskChance = 7,
}: {
  tasks: Task[];
  generatedTask: Task;
  addTaskChance?: number;
}) => {
  const randomDecide = randomIntFromInterval(1, 10);

  if (addTaskChance < randomDecide) return;
  tasks.push(generatedTask);
};

const generateTasks = () => {
  const tasks = [];
  const lastSevenDays = getLastSevenDays();

  lastSevenDays.forEach((day: Date) => {
    const currentDay = day.getDay();
    if (currentDay === 0 || currentDay === 6) {
      const weekendTask = { ...defaultTask };
      weekendTask.date = day;
      weekendTask.isWorkHour = false;
      tasks.push(weekendTask);
      return;
    }

    const randomStartHour = randomIntFromInterval(7, 11);
    const taskHourOne = createHours({
      task: { ...defaultTask },
      day,
      name: "Hour task 1",
      startTimeHour: randomStartHour,
    });
    decideAddTask({ tasks, generatedTask: taskHourOne });

    const endHoursTaskOne = taskHourOne.lastTaskEnd.getHours();
    const taskHourTwo = createHours({
      task: { ...defaultTask },
      day,
      name: "Hour task 2",
      startTimeHour: endHoursTaskOne,
    });
    decideAddTask({ tasks, generatedTask: taskHourTwo });

    const taskExpensesOne = createExpenses({
      task: { ...defaultTask },
      day,
      name: "Expenses task 1",
    });
    decideAddTask({ tasks, generatedTask: taskExpensesOne });

    const taskExpensesTwo = createExpenses({
      task: { ...defaultTask },
      day,
      name: "Expenses task 2",
    });
    decideAddTask({ tasks, generatedTask: taskExpensesTwo });

    const taskAdditionalHoursOne = createAdditionalHours({
      task: { ...defaultTask },
      day,
      name: "Additional hours task 1",
    });
    decideAddTask({ tasks, generatedTask: taskAdditionalHoursOne });

    const taskAdditionalHoursTwo = createAdditionalHours({
      task: { ...defaultTask },
      day,
      name: "Additional hours task 2",
    });
    decideAddTask({ tasks, generatedTask: taskAdditionalHoursTwo });
  });

  return tasks;
};

export const fetchTasks = new Promise((resolve) => {
  setTimeout(() => {
    resolve(generateTasks());
  }, 500);
});
