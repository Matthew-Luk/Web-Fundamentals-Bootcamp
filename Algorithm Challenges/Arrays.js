// How to swap variables
var fruit1 = "apples";
var fruit2 = "oranges";

fruit2 = fruit1;

console.log(fruit2 + " and " + fruit1);
// Output prediction = apples and apples


// How to swap variables 2
var fruit1 = "apples";
var fruit2 = "oranges";

var temp = fruit1; // temp is a common name for this
fruit1 = fruit2;
fruit2 = temp;

console.log(fruit2 + " and " + fruit1);
// Output prediction = apples and oranges


// While loops
var start = 0;
var end = 12;

while(start < end) {
    console.log("start: " + start + ", end: " + end);
    start += 2;
    end -= 2;
}
/* Output prediction:
start: 0, end: 12
start: 2, end: 10
start: 4, end: 8
*/


// Reversing an array
var x = ["a", "b", "c", "d", "e"];

function reverse(arr) {
    var temp = []
    for (i = x.length-1; i >= 0; i--) {
        temp.push(x[i])
    }
    return temp
}

var y = reverse(x)
console.log(y)
// Output prediction = ["e", "d", "c", "b", "a"]
