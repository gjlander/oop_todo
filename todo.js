export default class Todo {
    constructor(title, domContainer) {
        this.title = title;
        this.container = domContainer;
        this.done = false;
        this.init();
    }
    init() {
        const li = document.createElement("li");
        li.classList.add("d-flex");

        const checkDoneBox = document.createElement("input");
        checkDoneBox.classList.add("form-check-input");
        checkDoneBox.setAttribute("type", "checkbox");
        li.appendChild(checkDoneBox);

        const todoTitle = document.createElement("p");
        todoTitle.innerText = this.title;
        li.appendChild(todoTitle);

        this.container.appendChild(li);
    }
}
