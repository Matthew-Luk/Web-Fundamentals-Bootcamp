var count = 0;

function notify() {
    alert("Button has been clicked");
}

function hide() {
    document.getElementById("btn").remove();
}

function like() {
    var x = document.getElementById("count")
    x.innerHTML = count += 1;
}