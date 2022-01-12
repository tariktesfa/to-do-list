import './style.css';

const taskContainer = document.querySelector('.list-container');

const tasks = [
  {
    description: 'Finishing yesterday activities',
    index: 0,
    completed: true,
  },
  {
    description: 'Reading book',
    index: 1,
    completed: false,
  },
  {
    description: 'Calling to my mom',
    index: 2,
    completed: false,
  },
  {
    description: 'Go for shopping',
    index: 3,
    completed: true,
  },
];

const populateTasks = () => {
  tasks.sort((a, b) => a.index - b.index).forEach((lists) => {
    const taskListDiv = document.createElement('div');
    taskListDiv.classList.add('list-items');
    taskListDiv.id = lists.index;
    taskListDiv.innerHTML = `
    <input type="checkbox" class="check" ${lists.completed ? 'checked' : ''}> 
    <input type="text" id="todo-lists" value = '${lists.description}'>
    <button class="view"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></button>
    <button class="delete"><i class="fa fa-trash" aria-hidden="true"></i></button>`;
    taskContainer.appendChild(taskListDiv);
  });
};

populateTasks();