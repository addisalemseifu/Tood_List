// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './index.css';
import UI from './ui.js';
import Todolist from './task.js';
import Store from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
  UI.displayTask();
  // UI.pageStyler();
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
// Event: Remove a Book
document.querySelector('.books-list').addEventListener('click', (e) => {
  // Remove Task from UI
  UI.deleteTask(e.target);
  // Make input editable
  UI.editable(e.target);
  // Remove book from store
  Store.removeTask(e.target);
});

document.querySelector('.clear').addEventListener('click', () => {
  Store.removeDone();
  UI.clearDone();
});
