function createTextForm(form, label, id, placeholder) {
    const formLabel = document.createElement("label")
    formLabel.setAttribute("for", id);
    formLabel.textContent = label;
    form.appendChild(formLabel);
    const formInput = document.createElement("input");
    formInput.setAttribute("type", "text");
    formInput.setAttribute("id", id);
    formInput.setAttribute("name", id);
    formInput.setAttribute("placeholder", placeholder);
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

export { createTextForm, createRadioForm }