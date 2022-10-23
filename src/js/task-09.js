function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanEl = document.querySelector(".color");
const btnEl = document.querySelector(".change-color");
const body = document.querySelector("body");

function onTargetBtnChangeColor() {
  body.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = body.style.backgroundColor;
  
}


btnEl.addEventListener("click", onTargetBtnChangeColor);

