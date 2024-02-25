const  user = {
    username: "hitesh1",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to the website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function Chai() {
//     let username = "Jeevan"
//     console.log(this.username);
// }
// Chai()  /*cannot use this inside a fucntion "for now" */

// const chai = function (){
//     let username = " jeevan"
//     console.log(this.username);
// }

const chai =  () => {
    let username = " jeevan"
    console.log(this);
}

chai()

//ARROW FUNCTION    
// const addTwo = (num1, num2) => {
//     return num1 + num2
// } 

// +++++++++  CURLY BRACES RETURN KEYWORD ++++++
//  +++++++++ PARANTHESIS NO RETURN KEYWORD ++++++++++++

//IMPLICIT RETURN :-
// const addTwo = (num1, num2) =>  num1 + num2 

// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) => ({username: "Jeevan"})
// +++++++to return object wrap it in paranthesis ++++++

// console.log(addTwo(1, 3));

// myArray.forEach(() => )