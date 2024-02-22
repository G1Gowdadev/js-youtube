// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Jeevan",
            lastname: "Gowda"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 2: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign(obj1, obj2)
// const obj3 - Object.assign({}, obj1, obj2, obj4) // This shows that obj1, 2, 4 will get concatinated into obj3

// const obj3 = {...obj1, ...obj2} // The best way to join is by using the {Spread} 
// console.log(obj3);

// const users = [
//     {
//         id: 1,
//         email: "h@gamil.com",
//     }
// ]

// users[1].email
// console.log(tinderUser); 

// console.log(Object.keys(tinderUser)); // To get the keys of the tinder users
// console.log(Object.values(tinderUser)); // To get the values of the tinder users
// console.log(Object.entries(tinderUser)); // To get the values of the tinder users

// console.log(tinderUser.hasOwnProperty('isLogged'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Jeevan",
}

// course.courseInstructor

const {courseInstructor: instructor} = course
console.log(instructor);

// {   //* JSON Example  *\\
//     name: "Jeevan",
//     coursename: "js in hindi",
//     price: "free"
// }

[
    {},
    {},
    {},
]
