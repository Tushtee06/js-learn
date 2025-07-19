// singleton
//object.create

//object literals 

const mySym = Symbol("key1")


const jsUser = {
    name: "Tushtee",
    age: 18,
    [mySym]: "mykey1",
    email: "singh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser[mySym])

jsUser.email = "tushu@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "tanu@gmai.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello JS USER");
}



jsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());