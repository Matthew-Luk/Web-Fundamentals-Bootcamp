var counter = 0;

function logout(element) {
    console.log("logout is working")
    if (counter == 0) {
        element.innerHTML = "Logout";
        counter = 1
    }else{
        element.innerHTML = "Login"
        counter = 0
    }
}

function hide(element) {
    element.remove()
}