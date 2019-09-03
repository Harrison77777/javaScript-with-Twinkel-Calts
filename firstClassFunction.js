// Normal function
function SayName(name){
    return name;
}
var name = SayName;
console.log(name('Harrison'));
console.log(name('Harrison Roy'));

//Function with array
function arry(){
    return [
        'Phone', 'laptop', 'mouse', 'monitor'
    ]
}
var myArray = arry();
myArray.forEach(function(singleArray){
   console.log(singleArray);
})
// Object with Function

function myObj(){

    return {
        first_name:'Harrison',
        last_name:'Roy',
        age:27,
        study_at:'B.S.S'
    }
}
var myInfo = myObj();
console.log(myInfo.first_name, myInfo.last_name);

// var person = {
//     name: SayName('Shagour')
// }
// console.log(person.name);

// We can pass a function as an argument

function wow(name, fun){
    return  fun(name);
}
var print = wow('Harrison', name);
console.log(print + 'Get');

function sum(value){
    return function(count){
        var result = 1;
        for (var i = 0; i<value; i++) {
           result *=  count;
        }
        return result;
    }
}

var getResult = sum(3);
console.log(getResult(10));
