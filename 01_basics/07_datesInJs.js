// Dates 

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));
// console.log(Date.now()/1000);

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate);
console.log(newDate.getMonth);

// newDate.toLocaleString('default', {
//     weekday: "long"                         // for customizing the date and time format for the need
//     timeZone: ''
//     })