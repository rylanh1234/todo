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
}

export { createTextForm }