const updateStorage = (newList) => {
  newList.forEach((value, id) => {
    value.index = id + 1;
  });
  localStorage.setItem('todo', JSON.stringify(newList));
};

const ClearStorage = () => {
  localStorage.clear();
  window.location.reload();
};
const addTask = () => {
  const prevStorage = JSON.parse(localStorage.getItem('todo'));
  if (prevStorage && prevStorage.length) {
    return prevStorage;
  }
  const data = [];
  updateStorage(data);
  return data;
};

const todoList = {
  data: addTask(),
};

export {
  addTask,
  updateStorage,
  ClearStorage,
  todoList,
};