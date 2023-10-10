// if (true) {
//     console.log("The condition is true!");
// } else {
//     console.log("The condition is false!");
// }
// console.log("THIS IS AFTER THE CONDITIONAL STATEMENT!");



// let isLoggedIn = true;
//
// if(isLoggedIn){
//     console.log("The user is logged in");
// } else {
//     console.log("The user is NOT logged in:");
// }
// console.log("THIS IS AFTER THE CONDITIONAL STATEMENT!");


//truthy
// const username = "merrellj";
//
// if(username) {
//     console.log("The user is logged in");
// } else {
//     console.log("The user is NOT logged in:");
// }
//
// console.log("THIS IS AFTER THE CONDITIONAL STATEMENT!");


//
// const nmrOfUsers = 157;
// //const lotOfUsers = nmrOfUsers >= 200;
// //if(lotOfUsers) {...
// if(nmrOfUsers >= 200){
//     console.log("That's alot of users");
// } else {
//     console.log("Marketing needs to do a better job!");
// }
//
// console.log("THIS IS AFTER THE CONDITIONAL STATEMENT!");



// const nmrOfUsers = 1000;
//
// if(nmrOfUsers >= 10000){
//     console.log("Okay, that's too many users. Please tell marketing to stop");
// } else if(nmrOfUsers >= 200) {
//    console.log("That's a lot of users!");
// }
// else {
//     console.log("Marketing needs to do a better job!");
// }
//
// console.log("THIS IS AFTER THE CONDITIONAL STATEMENT!");



// const userRole = "admin"
//
// if (userRole === "student") {
//     console.log("Let them see the curricilum")
// } else if (userRole === "admin") {
//     console.log("Let them see the curr and the instructor portal");
// } else {
//     console.log("Don't let them see anything")
// }
// console.log("THIS IS AFTER THE CONDITIONAL STATEMENT!")



// const isTwo = (number) => {
//     if(typeof number !== "number") {
//         return false;
//     }
//
//     let result = number === 2;
//     return result;
// }


//
// const calculateTip = (tipPercentage, billTotal) => {
//     // if(tipPercentage > 1) {
//     //     return "You so extra";
//     // }
//
//     let tipDecimal = parseFloat(tipPercentage) / 100;
//     let result = parseFloat(billTotal) * parseFloat(tipDecimal);
//     return result.toLocaleString("en-US", {style: "currency", currency: "USD"});
// }
//
// const myTotal = prompt("What was your bill total?");
// const myTipPercentage = prompt("What PERCENTAGE would you like to tip?");
//
// let myTip = calculateTip(20, 145.67)
// console.log(`the tip is ${myTip}`);
//
// console.log("THIS IS AFTER THE CONDITIONAL STATEMENT!")



// //TERNARY OPERATOR (Shorthand If/Else)
// const isLoggedIn = true;
// //
// // if(isLoggedIn) {
// //     let message = "Welcome back!";
// // } else {
// //     let message = "Please log in!";
// // }
//
// let message = isLoggedIn ? "Welcome back!" : "Please log in!";
//
// console.log(message);



// let pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference.toLowerCase()) {
//     case "cheese":
//         console.log("I love cheese pizza too!");
//         break;
//     case "hawaiian":
//         console.log("I dig it. Sweet and Salty!");
//         break;
//     case "supreme":
//         console.log("Why choose when you can have it all?!");
//         break;
//     case "pepperoni":
//         console.log("Always a classic!");
//         break;
//     default:
//         console.log("What a weirdo...");
//         break;
// }




