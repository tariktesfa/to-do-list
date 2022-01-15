import './style.css';
import { todoList } from './functions.js';
import { onSubmit, addTask } from './crud.js';

const populateTasks = () => {
  todoList.data.forEach((item) => {
    addTask(item);
  });
};

populateTasks();

const addTodoBtn = document.querySelector('.add');
addTodoBtn.addEventListener('click', onSubmit);

document.querySelector('#add-todo').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    onSubmit();
  }
});
