function hide() {
    var x = document.getElementById("popupbar")
    x.remove()
}

function city() {
    alert("Loading weather report...")
}

// The three functions below were provided to me by my instructor 
function ctof(temp) {
    return Math.round(9 / 5 * temp + 32);
} 

function ftoc(temp) {
    return Math.round(5 / 9 * (temp - 32));
} 

function convert(element) {
    console.log(temp);
    for(var i=1; i<9; i++){
        var temp = document.getElementById("temp" + i);
        var tempVal = temp.innerText;
        if(temp.value == "°C") {
            temp.innerText = ftoc(tempVal);
        }else{
            temp.innerText = ctof(tempVal);
        }
        
    }
}