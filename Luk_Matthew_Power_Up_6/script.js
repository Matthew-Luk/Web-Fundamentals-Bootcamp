var array = ["matthew", "abby", "josh", "jose"]

// Function that Logs out even numbers to 50
function evento50() {
    for(i = 0; i < 51; i+=2) {
        console.log(i)
    }
}

// Function that logs off numbers to 13
function oddto13 () {
    for(i = 0; i < 14; i += 2) {
        console.log(i)
    }
}

// Function that logs out all names from an array
function nameArray() {
    for(i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

// Function that adds numbers to an array
function addArray() {
    for(i = 0; i <= 2; i++) {
        array.push(i)
    }
    console.log(array)
}