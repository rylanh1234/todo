import "./styles.css";
import { addItemToList } from "./create-items";
import { createTextForm, createRadioForm } from "./create-form";

// Initialize list
const myList = [];

const formContainer = document.querySelector("#formContainer")
const newItemBtn = document.querySelector("#newItemBtn")
newItemBtn.addEventListener("click", () => {
    myList.forEach((item, itemIndex) => {
        if (item.data == false) {
            myList.splice(itemIndex, 1); // if item was removed, remove it from list
        }
    })
    // only allow one form at a time
    if (formContainer.children.length == 0) {
        // creates the form and assign the input to the variables input...
        container.style.gridColumn = "1 / 2";
        const newForm = document.createElement("form");
        const titleForm = [newForm, "Title", "title", "Title"];
        const descriptionForm = [newForm, "Description", "description", "Description"];
        const dueDateForm = [newForm, "Due Date", "dueDate", "Due Date"];
        const idArray = ["one", "two", "three", "four"];
        const labelArray = ["1", "2", "3", "4"];
        const checkedArray = [];
        for (let i = 0; i < idArray.length; i++) {
            checkedArray.push(false);
        }
        // checkedArray[0] = true;
        const priorityForm = [newForm, "Priority", "priority", idArray, labelArray, checkedArray, true];
        const priorityColors = ["rgb(255, 0, 0, 0.5)", "rgb(255, 255, 0, 0.5)", "rgb(0, 0, 255, 0.5)", "rgb(211, 211, 211, 0.5)"];
        const notesForm = [newForm, "Notes", "notes", "Notes"];

        const inputTitle = createTextForm(...titleForm);
        const inputDescription = createTextForm(...descriptionForm);
        const inputDueDate = createTextForm(...dueDateForm);
        createRadioForm(...priorityForm, priorityColors);
        const inputNotes = createTextForm(...notesForm);

        const submitbtn = document.createElement("input");
        submitbtn.setAttribute("type", "submit");
        submitbtn.setAttribute("value", "Add Item");
        newForm.appendChild(submitbtn)

        formContainer.appendChild(newForm)
        newForm.addEventListener("submit", function (event) {
            // when user submits form, the item is added to the list with its properties
            event.preventDefault();
            const title = inputTitle.value;
            const description = inputDescription.value;
            const dueDate = inputDueDate.value;
            const priority = document.querySelector('input[name="priority"]:checked').value;
            const notes = inputNotes.value;
            addItemToList(myList, title, description, dueDate, priority, notes);
            this.remove();
            container.style.gridColumn = "1 / 3";
        })
    }
})

export { myList }
