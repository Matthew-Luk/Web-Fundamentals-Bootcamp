// Function that Logs out even numbers to 50
function evento50() {
    for(i = 0; i < 51; i+=2) {
        console.log(i)
    }
}
evento50()

// Function that logs off numbers to 13
function oddto13 () {
    for(i = 1; i < 14; i += 2) {
        console.log(i)
    }
}
oddto13()

// Function that logs out all names from an array
function nameArray() {
    var array = ["matthew", "abby", "josh", "jose"]
    for(i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}
nameArray()

// Function that adds numbers to an array
function addArray() {
    var arr = []
    for(i = 0; i <= 2; i++) {
        arr.push(i)
    }
    console.log(arr)
}
addArray()
