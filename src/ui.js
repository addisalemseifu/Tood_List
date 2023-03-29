import Store from './storage.js';

export default class UI {
  static displayTask = () => {
    const tasks = Store.getTask();
    tasks.forEach((task) => {
      UI.addTaskToList(task);
    });
  }

  static addTaskToList = (task) => {
    const newBook = document.createElement('div');
    newBook.classList.add('newBook', 'inputs');
    // newBook.id.ad()
    const booksList = document.querySelector('.books-list');
    newBook.innerHTML = `<input type="checkbox" class="check" id=${task.index}>
    <input type="text" value="${task.task}" class="tasks" readonly></input>
    
    <div class="ausomFont" >
      <i class="fa-solid fa-ellipsis-vertical"></i>
      <i class="fa-solid fa-trash-can remover"</i>
    </div>`;
    booksList.appendChild(newBook);
  }

  static deleteTask = (el) => {
    if (el.classList.contains('remover')) {
      el.parentElement.parentElement.remove();
    }
  }

  static editable = (target) => {
    const tasks = document.getElementsByClassName('newBook');
    // eslint-disable-next-line camelcase
    const drop_down = document.getElementsByClassName('fa-ellipsis-vertical');
    const trash = document.getElementsByClassName('fa-trash-can');
    Array.from(tasks).forEach((tas) => {
      // tas.style.background = 'white'
      if (tas.classList.contains('book_active')) {
        tas.classList.remove('book_active');
      }
    });
    if (target.classList.contains('newBook')) {
      target.classList.add('book_active');
    }
    Array.from(trash).forEach((tr) => {
      // tas.style.background = 'white'
      if (tr.classList.contains('trash_active')) {
        tr.classList.remove('trash_active');
      }
    });
    if (target.classList.contains('newBook')) {
      target.lastElementChild.lastElementChild.classList.add('trash_active');
    }
    Array.from(drop_down).forEach((dr) => {
      // tas.style.background = 'white'
      if (dr.classList.contains('drop_deactive')) {
        dr.classList.remove('drop_deactive');
      }
    });
    if (target.classList.contains('newBook')) {
      target.lastElementChild.firstElementChild.classList.add('drop_deactive');
    }
  }

  static clearFields = () => {
    document.querySelector('#txtTitle').value = '';
  }

  static clearDone = () => {
    const checked = document.getElementsByClassName('check');
    Array.from(checked).forEach((box) => {
      // eslint-disable-next-line eqeqeq
      if (box.checked == 1) {
        box.parentElement.remove();
      }
    });
  }
}