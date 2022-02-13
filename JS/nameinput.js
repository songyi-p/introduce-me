const nameForm = document.getElementById("name-form")
const nameInput = document.querySelector("#name-form input")
const inputByCom = document.getElementById("input-by-com")
const bisArea = document.querySelector(".bis-area")

nameForm.addEventListener("submit", submitEvent)

function submitEvent (event) {
    event.preventDefault()
    const nameValue = nameInput.value;
    inputByCom.innerText = nameValue
    nameInput.value = "";
    bisArea.scrollIntoView();
}