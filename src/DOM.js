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

function createItemDivs(myList) {
    const container = document.querySelector("#container");
    const children = container.querySelectorAll("*");
    children.forEach((itemCard) => {
        itemCard.remove() // removes any previously existing divs in container
    })
    // for each item in list, create a div, number it, and add it to list
    myList.forEach((item, itemIdx) => {
        const itemCard = document.createElement("div");
        itemCard.classList.add("itemCard");
        itemCard.setAttribute("id", "item" + itemIdx)
        container.appendChild(itemCard);
        createCheckbox(itemCard)

        // create a div to display the item's properties (title, dueDate, priority)
        const itemCardProperties = document.createElement("div");
        itemCardProperties.classList.add("itemCardProperties");
        itemCardProperties.textContent = item.title + " - " + item.description;
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
    });
}

export { createItemDivs };