             //objects\\

// singleton = done when used constructors

// object literals

// Object.create -> constructor method.

const mySym = Symbol("key1")

const jsUser = {  // It can be accessed using the dot or the [].
    name: "Jeevan",
    "full name": "Jeevan Gowda",
    [mySym]: "myKey1", // don't forget the syntax for Symbol.
    age: 18,
    location: "Bengaluru",
    email: "jeevangowda@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser.mySym);

jsUser.email = "jeevan@chatgpt.com"
// Object.freeze(jsUser) // Used when you don't want to change.
jsUser.email = "jeevangowda"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS User");
}
jsUser.greeitngTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeitngTwo());
