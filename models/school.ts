import { Lesson, WeekdayType } from "./lesson.ts";

type eventType = { lessonTitle: string; dayTimeArray: string[] };

export class School {
  events: eventType[] = [];
  constructor() {}

  findEventByLessonTitle(title: string): eventType | undefined {
    return this.events.find((event) => event.lessonTitle === title);
  }

  eventWithLessonTitleExists(title: string): boolean {
    const foundItem = this.findEventByLessonTitle(title);
    return foundItem !== undefined;
  }

  createDayTimeValue(lesson: Lesson): string {
    let dayTimeValue = `${lesson.day} * ${lesson.startTime}`;
    if (lesson.week) dayTimeValue = `${lesson.week} * ${dayTimeValue}`;
    return dayTimeValue;
  }

  addEventLesson(ls: Lesson): void {
    if (!this.eventWithLessonTitleExists(ls.getTitle())) {
      const dayTimeValue = this.createDayTimeValue(ls);

      const event: eventType = {
        lessonTitle: "",
        dayTimeArray: [],
      };
      event.lessonTitle = ls.getTitle();
      event.dayTimeArray.push(dayTimeValue);
      this.events.push(event);
      return;
    }

    const foundEvent = this.findEventByLessonTitle(ls.getTitle());

    const dayTimeValue = this.createDayTimeValue(ls);

    if (foundEvent?.dayTimeArray.includes(dayTimeValue)) {
      console.log("Impossible to add lesson with existing time");
      return;
    }

    foundEvent?.dayTimeArray.push(dayTimeValue);
  }

  removeEventLesson(lesson: Lesson): void {
    if (!this.eventWithLessonTitleExists(lesson.getTitle())) {
      console.log("Impossible to delete unexisting lesson");
      return;
    }

    const foundEvent = this.findEventByLessonTitle(lesson.getTitle());
    const eventTime = `${lesson.day} * ${lesson.startTime}`;
    if (!foundEvent?.dayTimeArray.includes(eventTime)) {
      console.log("Impossible to delete unexisting lesson day-time");
      return;
    }

    const index = foundEvent.dayTimeArray.indexOf(eventTime);
    foundEvent.dayTimeArray.splice(index, 1);
  }

  getLessonsRateByCount(descending = true): { title: string; count: number }[] {
    type CountRateType = { title: string; count: number };
    const arr: CountRateType[] = this.events.map((a) => {
      const blinkWeeksCount = a.dayTimeArray.filter(
        (a) => Number.isInteger(+a[0]) === true
      ).length;
      const totalCount = a.dayTimeArray.length - blinkWeeksCount * 0.5;
      const item: CountRateType = {
        title: a.lessonTitle,
        count: totalCount,
      };
      return item;
    });
    descending
      ? arr.sort((a, b) => b.count - a.count)
      : arr.sort((a, b) => a.count - b.count);
    return arr;
  }

  getLessonsByDay(weekDay: WeekdayType): (WeekdayType | string[])[] {
    const dayEvents: string[] = [];
    for (const event of this.events) {
      for (const dt of event.dayTimeArray) {
        if (dt.includes(weekDay)) {
          let formatDt = dt;
          if (Number.isInteger(+dt[0])) {
            formatDt = formatDt.slice(4);
          }
          formatDt = formatDt.slice(weekDay.length + 3);
          dayEvents.push(`${formatDt} ${event.lessonTitle}`);
        }
      }
    }
    const lessonsByDay = [weekDay, dayEvents];
    return lessonsByDay;
  }

  printDayLessons(day: WeekdayType): void {
    const lessonsByDay = this.getLessonsByDay(day);
    console.log(lessonsByDay[0]);
    for (const item of lessonsByDay[1]) console.log(item);
  }

  printSchedule(): void {
    const weekDays: WeekdayType[] = [
      "MON",
      "TUE",
      "WED",
      "THU",
      "FRI",
      "SAT",
      "SUN",
    ];
    for (const weekDay of weekDays) {
      this.printDayLessons(weekDay);
      console.log(`\n`);
    }
  }

  printEvents(): void {
    if (this.events.length === 0) {
      console.log("School is empty");
      return;
    }
    for (const event of this.events) {
      console.log(event.lessonTitle);
      for (const el of event.dayTimeArray) {
        console.log(el);
        console.log("\n");
      }
    }
  }

  getOverallLessonsAmount(): number {
    let count = 0;
    const lessonsRateByCount = this.getLessonsRateByCount();
    for (const lesson of lessonsRateByCount) {
      count += lesson.count;
    }
    return count;
  }
}
