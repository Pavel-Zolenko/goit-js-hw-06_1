const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");
 console.log(inputEl)

const onAssignTextInput = (event) => {
    spanEl.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") {
        spanEl.textContent = "Anonymous!"
    }
    }

inputEl.addEventListener("input", onAssignTextInput);
