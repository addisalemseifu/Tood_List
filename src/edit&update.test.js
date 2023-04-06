/**
 * @jest-environment jsdom
 */

import './__mocks__/mockHtml.js';

import Store from './storage.js';

import UI from './ui.js';

describe('Eddit task changes in local storage', () => {
  it('should eddit task value in local storage', () => {
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
    Store.update(1, 'changed Task');
    expect(JSON.parse(localStorage.getItem('tasks'))).toEqual([{ task: 'Task1', completed: false, index: 1 },
      { task: 'changed Task', completed: false, index: 2 },
      { task: 'Task3', completed: false, index: 3 }]);
  });

  it('should toggle true and false on the completed attribute', () => {
    Store.markDone(0, true);
    Store.markDone(2, true);

    expect(JSON.parse(localStorage.getItem('tasks'))).toEqual([{ task: 'Task1', completed: true, index: 1 },
      { task: 'changed Task', completed: false, index: 2 },
      { task: 'Task3', completed: true, index: 3 }]);
  });

  it('should remove all the completed tasks', () => {
    Store.removeDone();

    expect(JSON.parse(localStorage.getItem('tasks'))).toEqual([
      { task: 'changed Task', completed: false, index: 2 }]);
  });
});

describe('Eddit task changes in UI', () => {
  it('should add and remove classes from elements', () => {
    const myTask = {
      task: '',
      completed: false,
      index: 0,
    };
    const newBook = document.getElementsByClassName('newBook');
    const tasks = document.getElementsByClassName('newBook');

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
    UI.editable(tasks[0]);
    UI.editable(tasks[0]);

    expect(tasks[0].classList.contains('book_active')).toEqual(true);
    expect(
      tasks[0].lastElementChild.lastElementChild.classList.contains(
        'trash_active',
      ),
    ).toEqual(true);
    expect(
      tasks[0].lastElementChild.firstElementChild.classList.contains(
        'drop_deactive',
      ),
    ).toEqual(true);
  });

  it('should remove completed tasks from UI', () => {
    const newBook = document.getElementsByClassName('newBook');
    const checked = document.getElementsByClassName('check');
    checked[1].checked = 1;

    UI.clearDone();

    expect(newBook.length).toEqual(2);
  });

  it('should clean the task input bar', () => {
    const inputFild = document.querySelector('#txtTitle');

    UI.clearFields();

    expect(inputFild.value).toEqual('');
  });
});