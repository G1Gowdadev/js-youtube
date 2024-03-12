// FOR IN LOOP = used to return the property of an Object.

const myObject = {
    js: 'javaScript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// This returns the key of the objects.
// for (const key in myObject) {
//     console.log(key);
// }
// This returns the value of the myobject.
// for (const key in myObject) {
//     console.log(myObject[key]);
// }
//
for(const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`)
}

//FOR IN LOOP ON ARRAY.
const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    console.log(programming[key]);
}
//Here if you only enter the key you will 
// get the index of the array.
