import { initLessonsArray } from "./data/init-data.ts";
import { Lesson } from "./models/lesson.ts";
import { School } from "./models/school.ts";
import { Task } from "./models/task.ts";

// const taskAsync = new Task("Learn async");
// taskAsync.setContent("Get really familiar with async functionality");
// taskAsync.printTask();
// taskAsync.setFinishDate(7);

const school = new School();
for (const lesson of initLessonsArray) {
  school.addEventLesson(lesson);
}

// console.log(school.events)

// console.log(school.getLessonsRateByCount())
school.printSchedule();

// console.log(school.getLessonsRateByCount())
console.log(school.getOverallLessonsAmount())