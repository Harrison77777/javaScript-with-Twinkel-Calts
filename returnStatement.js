function person (name, age){
    return name +"'s age is "+ age;
}

var person = person;
console.log(person('shahin', 22));

var person = person('harrison', 27)
console.log(person);

/* Note: If you return any think into a function then if want to printout that , so then you have to declare that function into a console.log brackets  */
