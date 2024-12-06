import { Lesson } from "./lesson.ts";

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

  addLesson(lesson: Lesson): void {
    if (!this.eventWithLessonTitleExists(lesson.getTitle())) {
      const event: eventType = {
        lessonTitle: lesson.getTitle(),
        dayTimeArray: [`${lesson.day} * ${lesson.startTime}`],
      };
      this.events.push(event);
      return;
    }

    const foundEvent = this.findEventByLessonTitle(lesson.getTitle());
    const eventTime = `${lesson.day} * ${lesson.startTime}`;
    if (foundEvent?.dayTimeArray.includes(eventTime)) {
      console.log("Impossible to add lesson with existing time");
      return;
    }
    foundEvent?.dayTimeArray.push(eventTime);
  }

  printSchedule(): void {
    for (const event of this.events) {
      console.log(event.lessonTitle);
      for (const el of event.dayTimeArray) {
        console.log(el);
      }
    }
  }
}
