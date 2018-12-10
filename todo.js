const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "todos";

function printToDo(text) {
  console.log(text);
}
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  printToDo(currentValue);
}

function loadToDos() {
  const ToDos = localStorage.getItem(TODOS_LS);
  if (ToDos !== null) {
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
