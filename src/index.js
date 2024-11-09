import "./styles.css";
import { createNewItemForm } from "./create-form";

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
        createNewItemForm(myList);
    }
})

export { myList }
