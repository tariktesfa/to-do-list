import { updateStorage, todoList } from './functions.js';

export default (e, id, inputBox) => {
  todoList.data[parseInt(id, 10)].completed = e.currentTarget.checked;
  inputBox.style.textDecoration = (e.currentTarget.checked && 'line-through') || 'none';
  inputBox.style.color = (e.currentTarget.checked && 'gray') || 'black';
  inputBox.disabled = e.currentTarget.checked;
  updateStorage(todoList.data);
};