export type WeekdayType = "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN";
export type HourMinuteType =
  | "08:55"
  | "09:50"
  | "10:45"
  | "12:00"
  | "12:55"
  | "13:55"
  | "14:50"
  | "15:40";

export class Lesson {
  private title: string;

  day: WeekdayType;
  startTime: HourMinuteType;
  constructor(title: string, day: WeekdayType, startTime: HourMinuteType) {
    this.title = title;
    this.day = day;
    this.startTime = startTime;
  }

  getTitle(): string {
    return this.title;
  }
}
