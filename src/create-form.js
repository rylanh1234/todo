import { myList } from ".";
import { addItemToList } from "./create-items";

function createTextForm(form, label, id, placeholder, value) {
    const formLabel = document.createElement("label")
    formLabel.setAttribute("for", id);
    formLabel.textContent = label;
    form.appendChild(formLabel);
    const formInput = document.createElement("input");
    formInput.setAttribute("type", "text");
    formInput.setAttribute("id", id);
    formInput.setAttribute("name", id);
    formInput.setAttribute("placeholder", placeholder);
    if (value) {
        formInput.setAttribute("value", value);
    }
    form.appendChild(formInput);
    return formInput;
}

function createRadioForm(form, legendText, name, idArray, labelArray, checkedArray, required, labelColourArray) {
    const legend = document.createElement("legend");
    legend.textContent = legendText;
    form.appendChild(legend);

    idArray.forEach((id, idIdx) => {
        const input = document.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("id", id);
        input.setAttribute("name", name);
        input.setAttribute("value", id);
        if (checkedArray[idIdx] == true) {
            input.setAttribute("checked", true);
        }
        if (required && idIdx == 0) {
            input.setAttribute("required", true);
        }
        const label = document.createElement("label");
        label.setAttribute("for", id);
        label.textContent = labelArray[idIdx];
        label.style.color = labelColourArray[idIdx];
        form.appendChild(label);
        form.appendChild(input);
    })
}

function createNewItemForm(myList, edit, valueArray) {
    // creates the form and assign the input to the variables input...
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

    let itemStatus = "incomplete";
    if (edit == true) {
        titleForm.push(valueArray[0]);
        descriptionForm.push(valueArray[1]);
        dueDateForm.push(valueArray[2]);

        if (valueArray[3] == "one") {
            checkedArray[0] = true;
        }
        else if (valueArray[3] == "two") {
            checkedArray[1] = true;
        }
        else if (valueArray[3] == "three") {
            checkedArray[2] = true;
        }
        else {
            checkedArray[3] = true;
        }
        notesForm.push(valueArray[4]);
        itemStatus = valueArray[5];
    }

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
        addItemToList(myList, title, description, dueDate, priority, notes, itemStatus);
        this.remove();
    })
}

function editTextForm(valueArray) {
    const edit = true;
    createNewItemForm(myList, edit, valueArray);
}

export { createNewItemForm, editTextForm }