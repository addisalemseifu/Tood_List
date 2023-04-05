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
