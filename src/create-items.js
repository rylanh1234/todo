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
    const data = true;
    if (status == "complete") {
        const itemStatus = status;
    }
    else {
        const itemStatus = status;
    }
    const newItem = new Item(title, description, dueDate, priority, notes, itemStatus, data)
    myList.push(newItem);
    createItemDivs(myList);
}

export { addItemToList};