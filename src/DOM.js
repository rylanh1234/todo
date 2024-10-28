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

        // create a div to display the item's properties (title, dueDate, priority)
        const itemCardProperties = document.createElement("div");
        itemCardProperties.classList.add("itemCardProperties");
        itemCardProperties.textContent = item.title + " - " + item.description;
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
    // addHoverDisplay();
}

export { createItemDivs };