// const tinderUser = new Object()

const tinderUser = {

}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Tushtee",
            lastname: "Singh"
        }
    }
}
// console.log(regularUser.fullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3:"a", 4: "b"}
const obj4 = {5:"c",6:"d"}

// const obj3 = {obj1,obj2}

const obj3 = Object.assign({},obj1, obj2)
//console.log(obj3)
const obj5 = {...obj1,...obj2,...obj4}
//console.log(obj5)

//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));

// course.courseInstructor

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Tanu"
}

const {courseInstructor} = course
console.log(courseInstructor);

