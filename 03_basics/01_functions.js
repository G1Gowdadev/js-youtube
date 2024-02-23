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
let print = loginUserMessage()
console.log(print);