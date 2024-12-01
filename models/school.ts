import { Lesson } from "./lesson.ts";

export class School {
  lessons: Lesson[];
  constructor() {
    this.lessons = [];
  }

  findLessonByTitle(title: string): Lesson | undefined { 
    return this.lessons.find(lesson => lesson.getTitle() === title )
  }

  lessonTitleExists(title: string): boolean {    
    const foundItem = this.findLessonByTitle(title)
    return foundItem instanceof Lesson
  }

  addLesson(lesson: Lesson): void {
    if (!this.lessonTitleExists(lesson.getTitle())) {
        this.lessons.push(lesson)
    } else {
        const foundItem = this.lessons.find(l => l.getTitle() === lesson.getTitle()) 
        foundItem?.days.push(lesson.days[0])
    }
     
  }
}
