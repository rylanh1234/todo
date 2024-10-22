import { createTextForm } from "./create-form";

function initializeDOM() {
    const container = document.querySelector("#container");

    function createItemDivs() {
        const children = container.querySelectorAll("*");
        children.forEach((itemCard) => {
            itemCard.remove() // removes any previously existing divs in container
        })
        for (let i = 1; i < myList.length + 1; i++) {
            const itemCard = document.createElement("div");
            itemCard.classList.add("itemCard");
            itemCard.textContent = i;
            itemCard.setAttribute("id", "item" + i)
            container.appendChild(itemCard);
        };
        // addHoverDisplay();
    }

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
            container.style.gridColumn = "1 / 2";
            const newForm = document.createElement("form");
            const titleForm = [newForm, "Title", "title", "Title"];
            const descriptionForm = [newForm, "Description", "description", "Description"];
            const dueDateForm = [newForm, "Due Date", "dueDate", "Due Date"];
            const priorityForm = [newForm, "Priority", "priority", "Priority"];
            const notesForm = [newForm, "Notes", "notes", "Notes"];

            createTextForm(...titleForm);
            createTextForm(...descriptionForm);
            createTextForm(...dueDateForm);
            createTextForm(...priorityForm);
            createTextForm(...notesForm);

            const submitbtn = document.createElement("input");
            submitbtn.setAttribute("type", "submit");
            submitbtn.setAttribute("value", "Add Item");
            newForm.appendChild(submitbtn)

            formContainer.appendChild(newForm)
            newForm.addEventListener("submit", function (event) {
                event.preventDefault();
                title = inputTitle.value;
                author = inputAuthor.value;
                pages = inputPages.value;
                read = document.querySelector('input[name="read"]:checked').value;
                addItemToList(title, author, pages, read)
                this.remove();
                container.style.gridColumn = "1 / 3";
            })
        }
    })
}
export { initializeDOM };