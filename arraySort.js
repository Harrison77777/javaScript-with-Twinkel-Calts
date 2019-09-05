// var myArrays = [1, 2, 3, 4, 5,6, 10, 100, 150, 50, 80, 30];

// myArrays.sort(function(a,b){
//     return a-b;
// });
// myArrays.forEach(function(myArray){
//     console.log(myArray);
// });

var persons = [
    {
        name:'Harrison',
        email: 'ermhroy@gmail.com',
        age: 27
    }, 
    {
        name:'Shehab Hossin',
        email: 'shehab@gamil.com',
        age: 22,
    },
    {
        name:'Kabir Islam',
        email: 'kabir@gmail.com',
        age: 23
    }, 
    {
        name: 'Mrs.X',
        email: 'x@gmail.com',
        age :33
    }
];

//Sort Array Object By Ascending Order
// persons.sort(function(a, b){
//     return a.age - b.age;
// }); 

//Sort Array Object By Descending Order
// persons.sort(function(a, b){
//     return   b.age - a.age;
// });

//Sort Array Object By Alphabetically Order
persons.sort(function(a, b){
   if (a.name > b.name) {

       return 1;

   }else if(a.name < b.name){

      return -1;

   }
});


persons.forEach(function(person){
    console.log('Name : ' + person.name);
    console.log('Email : ' + person.email);
    console.log('Age : ' +  person.age);
});