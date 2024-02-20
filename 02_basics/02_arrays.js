const marvel_heroes = ["thor", "Ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3] [1]);

// const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes);                             // Can use concat to combine or join two strings


const all_new_heroes = [...marvel_heroes, ...dc_heroes] // Spread Method = this is an easy way to join two or more arrays.
// console.log(all_new_hereos);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // Flat Method = this is used to get a single array if there are subArrays
console.log(real_another_array)


console.log(Array.isArray("Jeevan"));  //
console.log(Array.from("Jeevan"));   //gives the output as an array [j, e, e, v, a, n]
console.log(Array.from({name: "Jeevan"}));   //Interesting....

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  // returns a new array from a set of elements
