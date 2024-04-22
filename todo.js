export default class Todo {
    constructor(title, domContainer) {
        this.title = title;
        this.container = domContainer;
        this.done = false;
        this.init();
    }
    init() {
        const li = document.createElement("li");
        li.innerText = this.title;
        this.container.appendChild(li);
    }
}
