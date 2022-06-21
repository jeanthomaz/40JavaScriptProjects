const bDecrease = document.getElementById("decrease");
const bReset = document.getElementById("reset");
const bIncrease = document.getElementById("increase");
const number = document.querySelector("#number")

let counter = 0

window.addEventListener("load", (e) => {
    number.innerHTML = counter
    colors()
})

bDecrease.addEventListener("click", decrease)

bReset.addEventListener("click", reset)

bIncrease.addEventListener("click", increase)

function decrease(){
    number.innerHTML = (counter -= 1)
    colors()
}

function reset(){
    number.innerHTML = (counter = 0)
    colors()
}

function increase(){
    number.innerHTML = (counter += 1)
    colors()
}

function colors() {
if (counter < 0) {
    number.style.color = "red"
} else if (counter > 0) {
    number.style.color = "green"
} else {
    number.style.color = "black"
}}
