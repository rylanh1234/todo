import { myList } from ".";
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
    const itemStatus = status;
    const newItem = new Item(title, description, dueDate, priority, notes, itemStatus, data)
    myList.push(newItem);
    createItemDivs(myList);
}

function editListItem(item, title, description, dueDate, priority, notes, status) {
    item.title = title;
    item.description = description;
    item.dueDate = dueDate;
    item.priority = priority;
    item.notes = notes;
    item.status = status;
    createItemDivs(myList);
}

export { addItemToList, editListItem };