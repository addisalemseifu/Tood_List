/**
 * @jest-environment jsdom
 */

import './__mocks__/mockHtml.js';

import Store from './storage.js';

import UI from './ui.js';

describe('Add and Remove from local storage', () => {
  it('should add item to local storage', () => {
    const myTask = {
      task: '',
      completed: false,
      index: 0,
    };

    myTask.task = 'Task1';
    Store.addTask(myTask);
    myTask.task = 'Task2';
    Store.addTask(myTask);
    myTask.task = 'Task3';
    Store.addTask(myTask);

    expect(JSON.parse(localStorage.getItem('tasks'))).toEqual([{ task: 'Task1', completed: false, index: 1 },
      { task: 'Task2', completed: false, index: 2 }, { task: 'Task3', completed: false, index: 3 }]);
  });

  it('should remove item from local storage', () => {
    Store.removeTask(1);

    expect(JSON.parse(localStorage.getItem('tasks'))).toEqual([
      { task: 'Task2', completed: false, index: 1 }, { task: 'Task3', completed: false, index: 2 }]);
  });
});

describe('Add and Remove from the UI', () => {
  it('should add newTask to list', () => {
    const myTask = {
      task: '',
      completed: false,
      index: 0,
    };
    const newBook = document.getElementsByClassName('newBook');

    myTask.task = 'Task1';
    myTask.index = 1;
    UI.addTaskToList(myTask);
    expect(newBook.length).toBe(1);
    myTask.task = 'Task2';
    myTask.index = 2;
    UI.addTaskToList(myTask);
    expect(newBook.length).toBe(2);
    myTask.task = 'Task3';
    myTask.index = 3;
    UI.addTaskToList(myTask);

    expect(newBook.length).toBe(3);
  });

  it('should remove newTask from list', () => {
    const newBook = document.getElementsByClassName('newBook');

    UI.deleteTask(2);
    UI.deleteTask(1);

    expect(newBook.length).toBe(1);
  });
});