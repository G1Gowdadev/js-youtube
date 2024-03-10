// if(true){
//     let a = 10
//     const b = 20
//     'Inner: ${a}'
//     // var c = 30 // don't use var because it can also print outside the scope
// }

//  console.log(a);
//  console.log(b);
//  console.log(c);

// function one () { 
//     const username = "jeevan"

//     function two (){
//         const website = "youtube"
//         console.log(username);
//     }
//     // console.log(website);
//     two()
// }
// one()

// +++++++++++++++ interesting ++++++++++++++++++

function addone(num) {
    return num + 1
}
console.log(addone(5))
//Hoisting\\
const addTwo = function(num1) {
    return num1 + 2
}
console.log(addTwo(5))
