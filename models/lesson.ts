export type WeekdayType = "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN";

export class Lesson {
  private title: string;
  days: WeekdayType[]=[];
  hour: number;
  minute: number;
  constructor(title: string, days: WeekdayType) {
    this.title = title;
    this.days.push(days);
  }

  getTitle(): string {
    return this.title;
  }

}
