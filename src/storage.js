/* eslint-disable max-len */
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
    // eslint-disable-next-line eqeqeq
    const taskItem = tasks.find((item) => item.index == id);
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

  static update = (target) => {
    target.removeAttribute('readonly');
    target.addEventListener('input', () => {
      const tasks = Store.getTask();
      // eslint-disable-next-line arrow-body-style
      const matching = tasks.find((task) => {
        // eslint-disable-next-line eqeqeq
        return task.index == target.parentElement.firstChild.id;
      });
      const indexOfMatch = tasks.indexOf(matching);
      tasks[indexOfMatch].task = target.value;
      localStorage.setItem('tasks', JSON.stringify(tasks));
    });
  }

  static markDone = (id, target) => {
    const tasks = Store.getTask();
    // eslint-disable-next-line arrow-body-style
    const matching = tasks.find((task) => {
      // eslint-disable-next-line eqeqeq
      return task.index == id;
    });
    const indexOfMatch = tasks.indexOf(matching);
    if (target.checked === true) {
      tasks[indexOfMatch].completed = true;
    } else if (target.checked === false) {
      tasks[indexOfMatch].completed = false;
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static removeDone() {
    let tasks = Store.getTask();
    // eslint-disable-next-line arrow-body-style
    const tasksUfinished = tasks.filter((item) => {
      return item.completed === false;
    });
    tasks = tasksUfinished;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}