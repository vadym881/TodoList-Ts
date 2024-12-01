export class Task {
  private isCompleted: boolean;
  content: string;
  private finishDate: Date;

  constructor(private readonly title: string) {
    this.isCompleted = false;
    this.content = "";
    this.finishDate = new Date();
  }

  complete(): void {
    this.isCompleted = true;
  }

  setFinishDate(days: number): void {
    const start = new Date()
    this.finishDate.setDate(start.getDate() + days)
  }

  setContent(content: string): void {
    this.content = content;
  }

  getStatus(): boolean {
    return this.isCompleted;
  }

  printTask(): void {
    console.log(this.title);
    console.log(this.content);
    console.log(this.isCompleted);
    console.log(this.finishDate);
    console.log(`\n`);
  }
}
