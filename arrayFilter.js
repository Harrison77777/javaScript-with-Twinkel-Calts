var myArray = [1, 2, 10, 7, 9, 2, 3, 4,5, 6, 99, 100];
var printMyArr = [];

// Manually array Filter

//     for(var i = 0; i<myArray.length; i++){
//         if (myArray[i]%2 == 0) {
//             printMyArr.push(myArray[i]);
//         }
//     }

// console.log('All even number is = '+printMyArr);

// Array filter by js building method

// var filteredArray = myArray.filter(function(value){
//     return value % 2 == 1;
// });
// console.log('filtered arrays is = ' + filteredArray);

// create our own filter method

function filterMyArray(arr, callback){
    var filteredArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
}

var print = filterMyArray(myArray, function(element){
    return element % 2 == 0;
});
console.log('My all filtered arrays are = ' + print);

