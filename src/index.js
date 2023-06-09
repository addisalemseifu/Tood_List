import './index.css';
import UI from './ui.js';
import Todolist from './task.js';
import Store from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
  // Store.update();
  UI.displayTask();
});

// Event: Add a Task
document.querySelector('.addBook').addEventListener('click', (e) => {
// Prevent default
  e.preventDefault();
  // Get form value
  const myTask = document.querySelector('#txtTitle').value;

  // Validation
  if (myTask !== '') {
    const task = new Todolist(myTask);

    // Add Task to Storage
    Store.addTask(task);

    // Add Task to UI
    UI.addTaskToList(task);
  }

  // Clear fiels
  UI.clearFields();
});
// Event: Remove a Task
document.querySelector('.books-list').addEventListener('click', (e) => {
  // Eddit task.
  if (e.target.classList.contains('tasks')) {
    const ide = e.target.parentElement.firstChild.id;
    e.target.removeAttribute('readonly');
    e.target.addEventListener('input', () => {
      const tasks = Store.getTask();
      const matching = tasks.find((task) => task.index === Number(ide));
      const indexOfMatch = tasks.indexOf(matching);
      const inpuValue = e.target.value;
      Store.update(indexOfMatch, inpuValue);
    });
  }
  // Check task done.
  if (e.target.classList.contains('check')) {
    const ide = e.target.parentElement.firstChild.id;

    const tasks = Store.getTask();
    const matching = tasks.find((task) => task.index === Number(ide));
    const indexOfMatch = tasks.indexOf(matching);
    let status = false;
    if (e.target.checked === true) {
      status = true;
    } else if (e.target.checked === false) {
      status = false;
    }
    Store.markDone(indexOfMatch, status);
  }
  // Remove Task from UI
  if (e.target.classList.contains('remover')) {
    const ide = e.target.parentElement.parentElement.firstChild.id;
    UI.deleteTask(ide);
  }
  // Make input editable
  UI.editable(e.target);
  // Remove book from store
  if (e.target.classList.contains('remover')) {
    const ide = e.target.parentElement.parentElement.firstChild.id;
    Store.removeTask(ide);
  }
});

document.querySelector('.clear').addEventListener('click', () => {
  Store.removeDone();
  UI.clearDone();
});
