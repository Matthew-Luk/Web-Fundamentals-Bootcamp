// Nesting Arrays
var arr2d = [ [2, 5, 8],
[3, 6, 1],
[5, 7, 7] ];

function isPresent2d(arr2d, value) {
    for(i = 0; i<arr2d.length; i++) {
        for(n = 0; n<arr2d[i].length; n++) {
            if(arr2d[i][n] == value){
                console.log(true)
            }
        }
    }
}

var x = isPresent2d(arr2d, 7)
console.log(x)


// Flatten Array
function flatten(arr2d) {
    var flat = [];
    for(i = 0; i<arr2d.length; i++) {
        for(n = 0; n<arr2d[i].length; n++) {
            flat.push(arr2d[i][n])
        }
    }
    return flat;
}

var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]