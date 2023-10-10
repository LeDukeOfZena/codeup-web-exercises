// function sayHello() {
//     console.log("Hello");
// }
//
// sayHello();
// function sayHello(usersFullName) {
//     console.log(`Hello, ${usersFullName}`);
// }
//
// sayHello("Jason");
//
//
// //Create a function named isCoding that takes an arguement and logs "____ love's coding!" to the console.
//
// function isCoding(whoLovesCoding) {
//     console.log(`${whoLovesCoding} love's coding!`);
// }
// isCoding("Spencer");
// isCoding("Bart");



//function declaration
// function sayHello(usersFullName) {
//     console.log(`Hello, ${usersFullName}`)
// }


//Annonymous function expression
// const sayHello = function sayHello(usersFullName) {
//     console.log(`Hello, ${usersFullName}`)
// }


//Arrow function expression, please use ARROW FUNCTIONS
// const sayHello = (usersFullName) => {
//     console.log(`Hello, ${usersFullName}`);
// };
//
// sayHello("Spencer");
// // Look up "Hoisting" this weekend



// const isCoding = (whoLovesCoding) => {
//     console.log(`${whoLovesCoding} love's coding!`);
// }
//
// isCoding("Spencer");



// const sayHello = (usersFullName) => {
//     return `Hello, ${usersFullName}`;
// }
//
// const greeting = sayHello("Jason");
//
// console.log(greeting);



// // Create a function named isCoding that takes an arguement and logs "____ love's coding!" to the console.
// const sayHello = (greeting, usersFullName) => {
//     return `${greeting}, ${usersFullName}`;
// }
//
// const greeting = sayHello("something", "Jason");
//
// console.log(greeting);



//Redo the isCoding function to use an arrow function that takes in 2 arguements that returns "Isaac hates coding".
// const isCoding = (name, sport) => {
//     return `${name} hates ${sport}`;
// };
//
// const saying = isCoding('Isaac', 'coding');
//
// console.log(saying);

// sayHello();
// function sayHello(){}
// const greeting = sayHello(greetingToUser, firstName);
// console.log(greeting);


//DEFAULT VALUES
// const sayHello = (usersFullName) => {
//     return `Hello, ${usersFullName}`;
// };
//
// const greeting = sayHello("Jason");
// const greeting2 = sayHello();
//
// console.log(greeting2);
// console.log(greeting);


// //SCOPING
// const globalVar = "I am global"
//
// const tieFighter = () => {
//     const localVariable = "I am local";
//     console.log(globalVar);
//     console.log(localVariable);
//
// };
//
// console.log(globalVar);
//
// tieFighter();

//FUNCTIONS REVIEW
//1. They're named contextually and appropriately
//2. Functions declared at the top of the file
//3. Do not use global variables inside of functions, pass them as arguments instead
//4. Build and return; functions should not be opinionated on what you do with the result, just return it
//5. Validate and return early
//

// console.log("spencer");

//contextually and appropriately named
const getUsername = (id) => {
    //validation
    if (!id) {
        return "";
    }
    //build the result
    let result;
    const url = `https://ourapi.com/api/users/${id}`;
    //... did the fetch magic
    result = "Jason";
    //return the result
    return result;
};

const userID = 8675309;
const username = getUsername(userID);
if (username) {
    console.log("We got a username here!");
} else {
    console.log("Uh Oh! No username!");
};



let favColor = "blue";

if (favColor === "blue" || favColor === "red") {
    console.log("I like blue/red too!")
} else if (favColor === "blue") {
    console.log("Yes! Love blue!");
} else {
    console.log("Nah! I don't like that color");
}




//CONDITION REVIEW
// if(/*condition*/)






