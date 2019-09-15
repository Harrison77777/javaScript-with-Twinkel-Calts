var arr = [1, 2, 3, 4, 5, 6, 7, 9, 5];
// var sum = 0;
// for (var i = 0; i <arr.length; i++) {
   
//     sum +=  arr[i];
    
// }
// console.log(sum);

var sum = arr.reduce(function(a, b){
    return a * b;
});
console.log(sum);
