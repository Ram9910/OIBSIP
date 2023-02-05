const display = document.querySelector("#expression");
const keys = document.querySelector(".keys");

keys.addEventListener("click", e => {
  if (e.target.matches("button")) {
    let key = e.target;
    let action = key.dataset.action;
    let keyContent = key.textContent;
    let displayedNum = display.textContent;

    if (!action) {
      if (displayedNum === "0") {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
      }
    }

    if (action
