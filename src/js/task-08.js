const formEl = document.querySelector(".login-form")
console.log(formEl)

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        alert('Заполните все поля')
    }

    console.log(`Email: ${email.value}, Password; ${password.value}`)
    formEl.reset()
}

