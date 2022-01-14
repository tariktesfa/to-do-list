import { todoList, updateStorage } from './functions.js';

const taskContainer = document.querySelector('.list-container');

const deleteTask = (taskListDiv) => {
  todoList.data.splice(taskListDiv.id, 1);
  taskListDiv.remove();
  updateStorage(todoList.data);
};

const updateTask = (id, newValue) => {
  todoList.data[parseInt(id, 10)].description = newValue;
  updateStorage(todoList.data);
};

const addTask = (lists) => {
  const taskListDiv = document.createElement('div');
  taskListDiv.classList.add('list-items');
  taskListDiv.id = lists.index;
  taskListDiv.innerHTML = `
  <input type="checkbox" class="check" ${lists.completed ? 'checked' : ''}> 
  <input type="text" id="todo-lists" value = '${lists.description}'>
  <button class="view"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></button>
  <button class="delete"><i class="fa fa-trash" aria-hidden="true"></i></button>`;

  const inputBox = taskListDiv.querySelector('#todo-lists');
  const deleteBtn = taskListDiv.querySelector('.delete');

  inputBox.addEventListener('change', (e) => {
    updateTask(taskListDiv.id, e.currentTarget.value);
  });

  deleteBtn.addEventListener('click', () => {
    deleteTask(taskListDiv);
  });

  taskContainer.appendChild(taskListDiv);
};

const onSubmit = () => {
  const addTodoInput = document.querySelector('#add-todo');
  if (!addTodoInput.value) {
    return;
  }
  const newItem = {
    description: addTodoInput.value,
    completed: false,
    index: todoList.data.length,
  };

  todoList.data.push(newItem);
  updateStorage(todoList.data);
  addTask(newItem, todoList.data.length - 1);
  addTodoInput.value = '';
  addTodoInput.focus();
};

export {
  addTask,
  updateTask,
  deleteTask,
  onSubmit,
};