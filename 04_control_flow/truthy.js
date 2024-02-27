const userEmail = "j@gowda.ai"

if (userEmail) {
    console.log("Got the Email");
} else {
    console.log("Don't have User Email");
}
// FALSY VALUES
// false, 0, -0, BigInt 0n, "", null, undefined, NaN.

// TRUTHY VALUES
// "0", 'false', " ", [], {}, fucntion() {}.

// TO CHECK IF ARRAY IS EMPTY
// if (userEmail.length === 0) {
//     console.log("Array id empty");
// }

// TO CHECK IF OBJECT IS EMPTY
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// ------------------------------------------------
// NULLISH COALESCING OPERATOR (??): null undefined
let val1;
// val1 = 5 ?? 10 here we get 5
// val1 = null ?? 10 // here we get 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);

//-------------------------------------------------
// TERNIARY OPERATOR
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");
