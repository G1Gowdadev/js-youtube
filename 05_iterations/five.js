//FOR EACH :- array.forEach(function(currentValue, index, array) {
//});


const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function(val) {
    console.log(val);
})

//-----------------------------------
//Using ARROW FUNCTION...
// coding.forEach( (item) => {
//     console.log(item);
// } )

//--------------------------------
// Using FUNCTION CALL...
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);

//-----------------------------------------
//Printing the ITEM, INDEX AND THE WHOLE ARRAY.
coding.forEach ((item, index, arr) => {
    console.log(item, index, arr);
})
