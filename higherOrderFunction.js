function name(name){
    return function(age){
        
        return 'My name is ' + name + " and age is " + age
    }
}

var print = name('Harrison'); 
console.log(print(27));
