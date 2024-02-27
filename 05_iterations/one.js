// FOR LOOP
// for (let i = 0; i < array.length; i++) {
//     const element = array i];
    
// }

// EXAMPLE
// for(let i = 0; i < Array.length; i++){
//     const element = array[i];
// }

// for (let i = 0; i <= 10; i++) {
//     const element =  i;
//     if (element == 5) {
//         console.log("5 is the best number");
//     }
//     console.log(element);
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         console.log(`Inner loop value ${j} and inner loop ${i}`);
        
//     }
    
// }


// for(let i = 1; i <= 10; i++){
//     console.log(`Outer loop value : ${i}`);
//     for(let j = 1; j <= 10; j++){
//         console.log(`${i } * ${ j } = ${ i * j}`)
//     }
// }

// let myArray = ["flash","batman", "superman"]
// for (let index = 0; index <= myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

//-------------------------------------------------
//BREAK & CONTINUE

for(let i = 0; i <= 20; i++){
    if (i == 5) {
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value of i is ${i}`);
}
