export default class Store {
 static getTask = () => {
   let tasks;
   if (localStorage.getItem('tasks') === null) {
     tasks = [];
   } else {
     tasks = JSON.parse(localStorage.getItem('tasks'));
   }
   return tasks;
 }

  static addTask = (task) => {
    const tasks = Store.getTask();
    task.index = tasks.length + 1;
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static removeTask = (id) => {
    const tasks = Store.getTask();

    const taskItem = tasks.find((item) => item.index === Number(id));
    tasks.splice(tasks.indexOf(taskItem), 1);
    if (tasks.length > 0) {
      let indexer = 1;
      tasks.forEach((elem) => {
        elem.index = indexer;
        indexer += 1;
      });
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static update = (objIndex, inputString) => {
    const tasks = Store.getTask();
    tasks[objIndex].task = inputString;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static markDone = (id, insStatus) => {
    const tasks = Store.getTask();
    tasks[id].completed = insStatus;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static removeDone() {
    let tasks = Store.getTask();
    const tasksUfinished = tasks.filter((item) => item.completed === false);
    tasks = tasksUfinished;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}