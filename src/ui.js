export default class UI {
  static displayTask = () => {
    const tasks = [
      {
        display: 'Finish study',
        completed: false,
        idex: 1,
      },
      {
        display: 'Make a call',
        completed: true,
        idex: 2,
      },
      {
        display: 'Do the dishes',
        completed: true,
        idex: 0,
      }];
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
    <h2 contenteditable="true" class="tasks">${task.display}</h2>
    
    <div class="ausomFont" >
      <i class="fa-solid fa-ellipsis-vertical"></i>
      <i class="fa-solid fa-trash-can remover"</i>
    </div>`;
    booksList.appendChild(newBook);
  }
}