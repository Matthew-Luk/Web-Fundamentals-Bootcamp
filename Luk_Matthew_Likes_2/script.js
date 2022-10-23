var count1 = 0
var count2 = 0
var count3 = 0
var countElement = document.querySelector("#count")
var countElement2 = document.querySelector("#count2")
var countElement3 = document.querySelector("#count3")

console.log(countElement)

function like1() {
    count1 += 1;
    countElement.innerText = count1 + " like(s)";
}

function dislike1() {
    count1 -= 1;
    countElement.innerText = count1 + " like(s)";
}

function like2() {
    count2 += 1;
    countElement2.innerText = count2 + " like(s)";
}

function dislike2() {
    count2 -= 1;
    countElement2.innerText = count2 + " like(s)";
}

function like3() {
    count3 += 1;
    countElement3.innerText = count3 + " like(s)";
}

function dislike3() {
    count3 -= 1;
    countElement3.innerText = count3 + " like(s)";
}
