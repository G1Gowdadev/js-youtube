// Arrays
// Array is an object.
// It is resizable in JS
// Array elements cannot be accessed using arbitrary elements.
// Array copy is a shallow copy. meaning they share the same reference.

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["shaktiman", "nagaraj"]

const myArr2 = new Array (1, 2, 3, 4)

console.log(myArr[1]);

                     // Array methods \\

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(0)   // adds an element to the start of the array
// myArr.shift()      //removes the element at the start of the array

// console.log(myArr.includes(3)); // to search if the element is present or not
// console.log(myArr.indexOf(3));  // to know the element present at the given index

// const newArr = myArr.join()  // converts the array into a string

// console.log(myArr);
// console.log(newArr);

                        /* slice, splice*/

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // doesnot include the last element

console.log(myn1);
console.log("B ", myArr) // includes all the elements too and from

const myn2 = myArr.splice(1, 3)
console.log(myn2);