const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

const onChangeFontsize = () => {
   textEl.style.fontSize = inputEl.value + "px" 
}

inputEl.addEventListener("input", onChangeFontsize)

