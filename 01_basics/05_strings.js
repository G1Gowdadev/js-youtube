// const name = "hitesh"
// const repoCount = 50

// console.log(`${name} ${repoCount} value`) //String Interpolation Method.
// console.log(name + repoCount + " value");

// using `` for String Interpolation

// console.log(`Hello my name is ${name} and my repo count is $
// {repoCount}`);

// const gameName = new String('jeevan-gowda')

// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('v'));

//.substring(start, end) => it returns the values as a new string.
// const newString = gameName.substring(0,4)
// console.log(newString);
// console.log(gameName.substring(0,4));

//slice(start, end) => it returns the elements of the array according to the parameters
// const anotherString = gameName.slice(0, 4);
// console.log(anotherString);

//trim() => is used to remove the whitespaces, tabs and newLines.
// const newStringOne = "   hitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

//replace() => used to replace the a certain character with another.
const url = "https://jeevan.com/jeevan%20gowda";
console.log((url.replace('%20', '_')));
console.log((url.includes('kumar')));