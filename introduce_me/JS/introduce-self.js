const introduceArea = document.querySelector("introduce-area")
const boxContainer = document.querySelector(".box-container")
const box0 = document.querySelector(".box-0")
const box1 = document.querySelector(".box-1")
const box2 = document.querySelector(".box-2")
const box3 = document.querySelector(".box-3")
const box4 = document.querySelector(".box-4")
const box5 = document.querySelector(".box-5")
const box6 = document.querySelector(".box-6")

box0.addEventListener("click", popup0)
box1.addEventListener("click", popup1)
box2.addEventListener("click", popup2)
box3.addEventListener("click", popup3)
box4.addEventListener("click", popup4)
box5.addEventListener("click", popup5)
box6.addEventListener("click", popup6)

function popup0() {
    const img = document.createElement("img")
    boxContainer.appendChild(img)
    img.onclick = function(){boxContainer.removeChild(img)};
    img.src = "image/intro0.JPG"
}
function popup1() {
    const img = document.createElement("img")
    boxContainer.appendChild(img)
    img.onclick = function(){boxContainer.removeChild(img)};
    img.src = "image/intro1.JPG"
}
function popup2() {
    const img = document.createElement("img")
    boxContainer.appendChild(img)
    img.onclick = function(){boxContainer.removeChild(img)};
    img.src = "image/intro2.JPG"
}
function popup3() {
    const img = document.createElement("img")
    boxContainer.appendChild(img)
    img.onclick = function(){boxContainer.removeChild(img)};
    img.src = "image/intro3.JPG"
}
function popup4() {
    const img = document.createElement("img")
    boxContainer.appendChild(img)
    img.onclick = function(){boxContainer.removeChild(img)};
    img.src = "image/intro4.JPG"
}
function popup5() {
    const img = document.createElement("img")
    boxContainer.appendChild(img)
    img.onclick = function(){boxContainer.removeChild(img)};
    img.src = "image/intro5.JPG"
}
function popup6() {
    const img = document.createElement("img")
    boxContainer.appendChild(img)
    img.onclick = function(){boxContainer.removeChild(img)};
    img.src = "image/intro6.JPG"
}

// const boxes = [box0, box1, box2, box3, box4, box5, box6]
// const images = ["image/intro0.JPG", "image/intro1.JPG", "image/intro2.JPG", "image/intro3.JPG", "image/intro4.JPG", "image/intro5.JPG", "image/intro6.JPG"]

// boxes.forEach((element) => element.addEventListener("click", popup))

// function popup() {
//     const img = document.createElement("img")
//     boxContainer.appendChild(img)
//     img.onclick = function(){boxContainer.removeChild(img)};
//     img.src = images.forEach(element => )
// }