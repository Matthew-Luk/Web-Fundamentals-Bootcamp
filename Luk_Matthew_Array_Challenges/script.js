// Write a function that is given an array and each time the value is "food" it should console log "yummy". If "food" was not present in the array console log "I'm hungry" once.
function alwaysHungry(arr) {
    var count = 0
    for(i = 0; i < arr.length; i ++) {
        if(arr[i] === "food"){
            console.log("yummy")
            count ++;
        }
    }
    if(count == 0) {
        console.log("I'm hungry")
    }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);
alwaysHungry([4, 1, 5, 7, 2]);


// Given an array and a value cutoff, return a new array containing only the values larger than cutoff.
function highPass(arr, cutoff) {
    var filteredArr = [];
    for(i = 0; i < arr.length; i++) {
        if(arr[i] > cutoff) {
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);


// Given an array of numbers return a count of how many of the numbers are larger than the average.
function betterThanAverage(arr) {
    var sum = 0;
    for(i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    var count = 0
    for( i = 0; i < arr.length; i++) {
        if(arr[i] > (sum / arr.length)) {
            count ++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result);


// Write a function that will reverse the values an array and return them.
function reverse(arr) {
    var left = 0;
    var right = arr.length - 1;
    while(left < right) {
        var temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left ++;
        right --;
    }
    return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result);


// Write a function that will return an array of Fibonacci numbers up to a given length n. Fibonacci numbers are calculated by adding the last two values in the sequence together. So if the 4th value is 2 and the 5th value is 3 then the next value in the sequence is 5.
function fibonacciArray(n) {
    var fibArr = [0, 1];
    for(i = 2; i < n; i++) {
        fibArr[i] = fibArr[i-1] + fibArr[i-2];
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result);
