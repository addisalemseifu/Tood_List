export default class Todolist {
  constructor(task) {
    this.task = task;
    this.id = Math.random();
    this.completed = false;
    this.index = 0;
  }
}