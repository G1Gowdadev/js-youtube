function sayMyName() {
    console.log("J");
    console.log("E");
    console.log("E");
    console.log("V");
    console.log("A");
    console.log("N");
}

// sayMyName()

function addTwoNumbers(number1, number2) {
    // console.log(number1 + number2);

    // let result = number1 + number2
    // return result

    return number1 + number2  //use this only when u don't directly console log inside the function.
}

// addTwoNumbers(3, 4)
const result = addTwoNumbers(3, 4)
console.log(`result ${result}`); // Used String Interpolation here to learn about it.


function loginUserMessage(username){

    /* if(!username === undefined){
        return `${username} just logged in`  
    }else {                                       // good way to write the code
        console.log(` please enter a username `);
    }*/

    if(username === undefined){
    console.log("please enter a username:");
    return;
    }
    return`${username} just logged in`
}

// console.log(loginUserMessage("Jeevan"));
// OR
// let print = loginUserMessage()
// console.log(print);


// function calculateCartPrice(...num1) {
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500))

const user = { //defining a function
    username: "Jeevan",
    price: 199
}

function handleObject(anyobject){ //anyobject to user don't get confused to get user.username
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({ //directly passed the values inside the function call
    username: "Sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue (getArray) {
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 600]));







