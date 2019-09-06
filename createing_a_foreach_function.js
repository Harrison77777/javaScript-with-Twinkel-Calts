// var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// myArray.forEach(function(number){
//     console.log(number);
// });

// var myObj = [
//     {
//         name:'harrison',
//         posts:[
//                { 
//                     id: 1,
//                     title: 'this is a title',
//                     details: 'this is a details'   
//                },
//                { 
//                     id: 2,
//                     title: 'this is a title 2',
//                     details: 'this is a details 2'
//                },
//         ],
//     }, 
//     {
//         name: 'kabir',
//         posts: [
//             {
//                 id: 3,
//                 title: 'this is a title',
//                 details: 'this is a details'
//             },
//             {
//                 id: 5,
//                 title: 'this is a title',
//                 details: 'This is a nice post'
//             }
//         ]
//     }
// ];
// var info = myObj;
// info.forEach(function(element) {
//    console.log(element.name);
//    var el = element.posts;
   
//     el.forEach(function(post){
        
//         console.log(post.id);
//         console.log(post.title);
//         console.log(post.details);
      
//     })
// });

var myArray = [1, 2, 3, 4, 5,6, 7, 8, 9];

function loop(arr, callback){
     for (var i = 0; i < arr.length; i++) {
         callback(arr[i], i);
     }
}

loop(myArray, function(el, i){
    console.log(el + 'index is = ' + (i+1));
});


