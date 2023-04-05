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
    const booksList = document.querySelector('.books-list');
    newBook.innerHTML = `<input type="checkbox" class="check" id=${task.index}>
    <input type="text" value="${task.task}" class="tasks" readonly></input>
    
    <div class="ausomFont" >
      <i class="fa-solid fa-ellipsis-vertical"></i>
      <i class="fa-solid fa-trash-can remover"</i>
    </div>`;
    booksList.appendChild(newBook);
  }

  static deleteTask = (ie) => {
    const check = document.querySelectorAll('.newBook');
    for (let i = 0; i < check.length; i += 1) {
      // eslint-disable-next-line eqeqeq
      if (check[i].firstChild.id == ie) {
        check[i].remove();
      }
    }
    if (check.length > 0) {
      let indexer = 1;
      Array.from(check).forEach((elem) => {
        elem.firstChild.id = indexer;
        indexer += 1;
      });
    }
  }

  static editable = (target) => {
    const tasks = document.getElementsByClassName('newBook');
    // eslint-disable-next-line camelcase
    const drop_down = document.getElementsByClassName('fa-ellipsis-vertical');
    const trash = document.getElementsByClassName('fa-trash-can');
    Array.from(tasks).forEach((tas) => {
      if (tas.classList.contains('book_active')) {
        tas.classList.remove('book_active');
      }
    });
    if (target.classList.contains('newBook')) {
      target.classList.add('book_active');
    }
    Array.from(trash).forEach((tr) => {
      if (tr.classList.contains('trash_active')) {
        tr.classList.remove('trash_active');
      }
    });
    if (target.classList.contains('newBook')) {
      target.lastElementChild.lastElementChild.classList.add('trash_active');
    }
    Array.from(drop_down).forEach((dr) => {
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