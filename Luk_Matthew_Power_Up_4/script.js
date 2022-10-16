var whatIWantToChange = document.getElementById("whatIWantToChange");

function myFunction(element){
    element.style.color = "aqua";
    element.style.backgroundColor = "orange";
}

function myOtherFunction(myString){
    var element = document.getElementById(myString);
    element.style.color = "red"
    element.style.fontSize = "1000%"
}
