// ["", "", ""]
// [{}, {}, {}]

// FOR OF LOOP (ARRAYS) - ITERATES THROUGHT THE ITEMS IN A COLLECTION SUCH AS AN ARRAY.
// FOR IN LOOP (OBJECTS) - LOOPS THROUGH PROPERTY NAMES OF OBJECT.

const arr = [1, 2, 3, 4, 9];

for (const num of arr) {
    // console.log(num); // HERE YOU GET GET THE INDEX OF THE ARRAY.
}                     //NO NEED TO USE THE INDEX IT GIVES THE VALUES AUTOMATICALLY.

// FOR OF ON STRING.
const greetings = "Hello World!"
for (const greet of greetings) {
    if (greet == " ") {
        continue;
    }
    // console.log(`Each char of ${greet}`)
}

//----------------------------------------------
// MAPS - can only enter unique values and remembers the order

const map = new Map()
map.set('IN', 'INDIA')
map.set('USA', 'UNITED SATES OF AMERICA')
map.set('FR', 'FRANCE')

// console.log(map);

for (const key of map) {
    console.log(key);  // Prints the KEY-VALUE pair in an array format.
}

// for (const [key, value] of map) { 
//     console.log(key, ':-', value)
// }

const myObject = { // Objects have a different way to iterate.
    game1: 'NFS',
    game2: 'Spiderman'
}

//NO USE.
// for(const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }

