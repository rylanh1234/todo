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
        itemCard.textContent = itemIdx + 1;
        itemCard.setAttribute("id", "item" + itemIdx + 1)
        container.appendChild(itemCard);

        // create a div to display the item's properties (title, dueDate, priority)
        const itemCardProperties = document.createElement("div");
        itemCardProperties.classList.add("itemCardProperties");
        itemCardProperties.textContent = item.title + " - " + item.description;
        if (item.priority == 1) {
            itemCardProperties.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
        }
        else if (item.priority == 2) {
            itemCardProperties.style.backgroundColor = "rgba(255, 255, 0, 0.5)";
        }
        else if (item.priority == 3) {
            itemCardProperties.style.backgroundColor = "rgba(0, 0, 255, 0.5";
        }
        else {
            itemCardProperties.style.backgroundColor = "rgba(211, 211, 211, 0.5)";
        }
        itemCard.appendChild(itemCardProperties);
    });
    // addHoverDisplay();
}

export { createItemDivs };