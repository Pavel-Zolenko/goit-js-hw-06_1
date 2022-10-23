const textInput = document.querySelector("#validation-input");

const onStatusCheckInput = () => {
    
    if (Number(textInput.attributes[2].value) === textInput.value.length) {
        console.log('хорошо')
        textInput.classList.add("valid")
        textInput.classList.remove("invalid")
            } else {
        console.log('плохо')
        textInput.classList.add("invalid")
    }

}

textInput.addEventListener("blur", onStatusCheckInput)

console.log(textInput.selectionStart)

// let value = true;
// alert(typeof value); // boolean

// value = String(value); // теперь value это строка "true"
// alert(typeof value); // string