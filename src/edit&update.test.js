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
