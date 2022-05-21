var elem1 = document.getElementById("todd");
var elem2 = document.getElementById("phil")
var count = 0
var count2 = 2
var count3 = 418

function changeName() {
    console.log("changeName is working")
    if(count === 0) {
        document.getElementById("pbn").innerHTML = "James Doe";
        count = 1;
    }else{
        document.getElementById("pbn").innerHTML = "Jane Doe";
        count = 0;
    }
}

function hide() {
    console.log("hide is working")
    elem1.remove()
    document.getElementById("btn1").innerText = count2 - 1
    document.getElementById("btn2").innerText = count3 + 1
    count2 = 1
    count3 = 419
}

function hide2() {
    console.log("hide2 is working")
    elem1.remove()
    document.getElementById("btn1").innerText = count2 - 1
    count2 = 1
}

function hide3() {
    console.log("hide3 is working")
    elem2.remove()
    document.getElementById("btn1").innerText = count2 - 1
    document.getElementById("btn2").innerText = count3 + 1
    count2 = 1
    count3 = 419
}

function hide4() {
    console.log("hide4 is working")
    elem2.remove()
    document.getElementById("btn1").innerText = count2 - 1
    count2 = 1
}