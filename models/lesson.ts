export type WeekType = 1 | 2;
export type WeekdayType = "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN";
export type HourMinuteType =
  | "08:00"
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
  week: WeekType;
  constructor(
    title: string,
    day: WeekdayType,
    startTime: HourMinuteType,
    week?: WeekType
  ) {
    this.title = title;
    this.day = day;
    this.startTime = startTime;
    if (week) this.week = week;
  }

  getTitle(): string {
    return this.title;
  }
}
