import { createItemDivs } from "./DOM";

function Item(title, description, dueDate, priority, notes, status, data) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.status = status;
    this.data = data;
}

function addItemToList(myList, title, description, dueDate, priority, notes, status) {
    let data = true;
    const newItem = new Item(title, description, dueDate, priority, notes, status, data)
    myList.push(newItem);
    createItemDivs(myList);
}

export { Item, addItemToList};