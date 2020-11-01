import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "calendarDayName",
})
export class CalendarDayNamePipe implements PipeTransform {
  transform(value: string, ...args: any[]): any {
    if (!value) return value;

    return value.substr(0, 3);
  }
}
