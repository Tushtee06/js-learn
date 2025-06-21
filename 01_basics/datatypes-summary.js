//primitive datatype

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

//Reference type(non primitive)

// Arrays, Objects, Functions

//JavaScript is a dynamically typed language.

// 🔹 What does that mean?
// It means you don’t have to declare the type of a variable (like number, string, boolean, etc.) when you create it. JavaScript figures out the type at runtime, based on the value you assign.

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId);

//********************************
// stack(Primitive), Heap(Non-Primitive)
let myYoutubeName = "tdotcom"
let anothername = myYoutubeName
anothername = "tushudotcom"
 console.log(myYoutubeName);
 console.log(anothername);

 let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
 }
let userTwo = userOne
userTwo.email = "tushu@google.com"

console.log(userOne.email);
console.log(userTwo.email);
 