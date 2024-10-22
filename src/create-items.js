const myList = [];
let title = "";
let description = "";
let dueDate = "";
let priority = "";
let notes = "";
let status = "incomplete";
let data = true;

function Item(title, description, dueDate, priority, notes, status, data) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.status = status;
    this.data = data;
}

function addItemToList(title, description, dueDate, priority, notes, status) {
    const newItem = new Item(title, description, dueDate, priority, notes, status, data)
    myList.push(newItem);
    createItemDivs();
}

