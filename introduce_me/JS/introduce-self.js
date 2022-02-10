const introduceArea = document.querySelector("introduce-area")
const boxContainer = document.querySelector(".box-container")
const box0 = document.querySelector(".box-0")

box0.addEventListener("click", popup)

function popup() {
    const img = document.createElement("img")
    boxContainer.appendChild(img)
    img.onclick = function(){boxContainer.removeChild(img)};
    img.src = "image/0.jpeg"
    img.classList.add = "img-control"
}