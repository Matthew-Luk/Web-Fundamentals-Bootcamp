// Lesson 1 - Predict the output
var a = 25;
a = a - 13;
console.log(a/2);
// Output prediction = 6

a = "hello";
console.log(a + " hello");
// Output prediction = hello hello


// Lesson 2 - Predict Loops
for(var i=0; i<10; i++) {
    console.log(i);
    i = i + 3; 
}

console.log("outside of the loop " + i);
// Output prediction = 0 4 8, outside of the loop 11
// I got this one wrong, it was suppose to be 12 instead of 11 at the end


// Lesson 3 - Predict what the code does
function getTotal(arrayOfNumbers) {

    var sum = arrayOfNumbers[0];

    for(var i=0; i<arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i];
        console.log("the current sum is: " + sum); 
    }

    console.log("the total is: " + sum);

}

getTotal([1, 3, 5]);
// Output prediction = the current sum is: 2, the current sum is: 5, the current sum is: 10
/* Bonus! Why does the above code say at the end that total is 10? Is this the answer you would expect? 
    The final output is 10 because we assigned sum to start at 1 instead of 0 so the equation should have
    ran 1 + 1 + 3 + 5 */
