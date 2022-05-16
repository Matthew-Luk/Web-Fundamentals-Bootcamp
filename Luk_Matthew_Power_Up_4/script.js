//I did not write or claim to have written the HTML or CSS for this project, it was provided to me by my coding bootcamp instructor. I only wrote part of the javascript. 

var whatIWantToChange = document.getElementById("whatIWantToChange");

function myFunction(element){
    element.style.color = "black";
}

function myOtherFunction(myString){
    var element = document.getElementById(myString);
    element.style.color = "white"
    element.style.fontSize = "xx-large"
}