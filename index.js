import Todo from "./todo.js";

const newTodoForm = document.querySelector("#new-todo-form");
const todoList = document.querySelector("#todo-list");

//add new Todo item
const makeNewTodo = (e) => {
    e.preventDefault();
    const todoTitle = document.querySelector("#todo-title");
    const newTodo = new Todo(todoTitle.value, todoList);
    console.log(newTodo);
    todoTitle.value = "";
};
console.log("sanity check");

newTodoForm.addEventListener("submit", makeNewTodo);
