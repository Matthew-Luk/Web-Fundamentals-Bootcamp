var displayDiv = document.querySelector("#display");
var previousNum = " "
var newNum = " "

function press(element) {
    console.log("Press is working")
    displayDiv.innerText = displayDiv.innerText + element
}

function setOP(element) {
    console.log("setOP is working")
    previousNum = displayDiv.innerText + element
    displayDiv.innerText = " "
    console.log(previousNum)
}

function clr(element) {
    console.log("Clear is working")
    displayDiv.innerText = " "
}

function calculate() {
    console.log("Calculate is working")
    newNum = displayDiv.innerText
    console.log(previousNum+newNum)
    displayDiv.innerText = eval(previousNum+newNum)
}