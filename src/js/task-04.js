
const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');
const textEl = document.querySelector('#value')

let counterValue = 0

const onTargenBtnClickDecrement = () => {
    counterValue -= 1
    textEl.textContent = counterValue
};
const onTargenBtnClickIncrement = () => {
    counterValue += 1
    textEl.textContent = counterValue
};

decrementBtnEl.addEventListener("click", onTargenBtnClickDecrement);
incrementBtnEl.addEventListener("click", onTargenBtnClickIncrement);




