//Dates

let myDate = new Date();
//console.log(myDate.toString()); // Current date and time

let myCreateDate = new Date(2024,10,4)
//console.log(myCreateDate.toDateString());

let myTimestamp = Date.now(); // Returns the number of milliseconds since January 1, 1970
//console.log(myTimestamp); // Current timestamp
console.log(myCreateDate.getTime()); // Timestamp of myCreateDate
console.log(Math.floor(Date.now()/1000)); // Current timestamp in seconds