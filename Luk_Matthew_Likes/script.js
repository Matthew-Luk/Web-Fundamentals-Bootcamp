var count = 0
var countElement = document.querySelector("#count")

console.log(countElement)

function like() {
    count += 1;
    countElement.innerHTML = count + " like(s)";
}

function dislike() {
    count -= 1;
    countElement.innerText = count + " like(s)";
}
