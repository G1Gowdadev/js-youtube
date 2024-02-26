// Immediately invoked Function Expression (IIFE)

(function chai(){
    console.log(`DB CONNECTED`)
})();
// +++++++1st() for the fucntion definition++++++
// ++++ 2nd () for the immediate funciton expression++++++

(() =>{ // UN-NAMED IIFE
    console.log(`DB CONNNECTED TWO`);
} ) ();


((name) =>{//NAMED IIFE
    console.log(`DB CONNNECTED TWO ${name}`);
} ) ('Jeevan') //passing the value in the 2nd ()



