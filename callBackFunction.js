// function hello(name, age){
//     print(name + ' age '+ age);
//     print('What are you doing? ');
// }
// hello('Harrison', 27);


// function print(args) {
//     console.log(args);
// }

function name(name, print) {
    print(name);
}

name('harrison', function(name){
    console.log(name);
});

var myInfo = {
    name:'harrison',
    age: 17,
    email: 'ermhroy@gmail.com'
}

function printMySelf(myInfo, particularInformation){
    console.log('This is my information');
    if(myInfo.age >= 18){
       
        particularInformation(myInfo);
        
    }else{
        console.log('you are not eligible cause you age is ' +myInfo.age + ' which is less the 18');
    }
}

printMySelf(myInfo, function(myInfo){
    console.log('You are granted your name is ' + myInfo.name + ' age is ' + myInfo.age + '. Short we will send to you a confirmation email in your ' + myInfo.email );
});