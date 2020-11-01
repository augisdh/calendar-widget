import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name: "calendarHour",
})
export class CalendarHourPipe implements PipeTransform {
  transform(value: number[], ...args: any[]): any {
    if (value.length < 1) return "-";

    const totalHours = value.reduce((acc, current) => {
      return acc + current;
    }, 0);

    const date = new Date(0);
    date.setTime(totalHours * 60 * 60 * 1000);
    return date.toISOString().substr(12, 4);
  }
}
