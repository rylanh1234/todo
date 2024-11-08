import { myList } from ".";

function createCheckbox(itemCard) {
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.classList.add("checkbox");
    itemCard.appendChild(checkbox);
    checkbox.addEventListener("change", () => {
        const itemText = checkbox.parentElement.querySelector(".itemCardProperties");
        const itemNumber = checkbox.parentElement.id.slice(4);
        if (checkbox.checked) {
            myList[itemNumber].status = "complete";
            itemText.style = "text-decoration: line-through";
        }
        else if (!checkbox.checked) {
            myList[itemNumber].status = "incomplete";
            itemText.style = "text-decoration: none";
        }
    })
}

function createExpand(itemCard, description, notes) {
    const expandBtn = document.createElement("button");
    expandBtn.classList.add("expandBtn");
    itemCard.appendChild(expandBtn);
    // itemCard should contain checkbox, properties, expandBtn, removeBtn, and expandDiv when expanded
    const itemCardLength = itemCard.children.length;
    expandBtn.addEventListener("click", () => {
        if (itemCard.children.length == itemCardLength) {
            const expandDiv = document.createElement("div");
            expandDiv.classList.add("expandDiv");
            const descriptionDiv = document.createElement("div");
            descriptionDiv.classList.add("descriptionDiv");
            descriptionDiv.textContent = description;
            expandDiv.appendChild(descriptionDiv);
            const notesDiv = document.createElement("div");
            notesDiv.classList.add("notesDiv");
            notesDiv.textContent = "Notes: " + notes;
            expandDiv.appendChild(notesDiv);
            itemCard.appendChild(expandDiv);
        }
        else if (itemCard.children.length == itemCardLength + 1) {
            itemCard.querySelector(".expandDiv").remove();
        }
    })
}

function createRemove(itemCard) {
    const removeBtn = document.createElement("button");
    removeBtn.classList.add("removeBtn");
    removeBtn.textContent = "⨉";
    itemCard.appendChild(removeBtn);
    const itemNumber = itemCard.id.slice(4);
    removeBtn.addEventListener("click", function (e) {
        e.target.parentElement.remove();
        myList[itemNumber].data = false;
    })
}

function createItemDivs(myList) {
    const container = document.querySelector("#container");
    const children = container.querySelectorAll("*");
    children.forEach((itemCard) => {
        itemCard.remove() // removes any previously existing divs in container
    })
    // for each item in list, create a div, number it, and add it to list
    myList.forEach((item, itemIdx) => {
        if (item.data == false) {
            myList.splice(itemIdx, 1);
        }
        const itemCard = document.createElement("div");
        itemCard.classList.add("itemCard");
        itemCard.setAttribute("id", "item" + itemIdx)
        container.appendChild(itemCard);
        createCheckbox(itemCard);

        // create a div to display the item's properties (title, dueDate, priority)
        const itemCardProperties = document.createElement("div");
        itemCardProperties.classList.add("itemCardProperties");
        itemCardProperties.textContent = item.title + " - " + item.dueDate;
        if (item.status == "complete") {
            itemCard.querySelector("input").checked = true;
            itemCardProperties.style = "text-decoration: line-through";
        }
        if (item.priority == "one") {
            itemCard.style.backgroundColor = "rgb(255, 0, 0, 0.5)";
        }
        else if (item.priority == "two") {
            itemCard.style.backgroundColor = "rgb(255, 255, 0, 0.5)";
        }
        else if (item.priority == "three") {
            itemCard.style.backgroundColor = "rgb(0, 0, 255, 0.5";
        }
        else {
            itemCard.style.backgroundColor = "rgb(211, 211, 211, 0.5)";
        }
        itemCard.appendChild(itemCardProperties);
        createExpand(itemCard, item.description, item.notes);
        createRemove(itemCard);
    });
}

export { createItemDivs };