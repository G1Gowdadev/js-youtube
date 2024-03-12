const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//  const newNumns = myNumers.map( (num) => num + 10)

//  ----------------------------------------------------

//CHAINING METHOD :- 
//  THE RESULT OF THE FIRST ARRAY WILL BE PASSSED ON TO
//  THE SECOND ARRAY.
 const newNumns = myNumers
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter((num) => num >= 40)
           // UNDERSTAND THIS TO BE LIKE A FILTER.      
console.log(newNumns);