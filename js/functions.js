


//  * TODO:
//  * Create a function called 'sayHello' that takes a parameter 'name'.
//  * When called, the function should return a message that says hello to the passed in name.
const sayHello = (name) => {
    return "hello, " + name;
};
// name("Spencer")
//  * Example
//  * > sayHello("codeup") // returns "Hello, codeup!"
//  */

//
// /**
//  * TODO:
//  * Call the function 'sayHello' and pass your name as a string literal argument.
//  * Store the result of the function call in a variable named 'helloMessage'.
const greeting = sayHello("Spencer")
console.log(greeting);

//  * console.log 'helloMessage' to check your work
//  */
//
// /**




//  * TODO:
//  * Store your name as a string in a variable named 'myName', and pass that
//  * variable to the 'sayHello' function. You should see the same output in the
//  * console.
const myName = "Spencer"
const greetname = sayHello(myName);
console.log(greetname)
// // Don't modify the following line, it generates a random number between 1 and 3
// // and stores it in a variable named random
const random = Math.floor((Math.random() * 3) + 1);
//
// /**
//  * TODO:
//  * Create a function called 'isTwo' that takes a number as a parameter.
//  * The function should return a boolean value based on whether or not the passed
//  * number is the number 2.
const isTwo = (maybe2) => {
    return maybe2 === 2
}

const randomNumber = isTwo(random);
console.log(randomNumber)

//  * Example
//  * > isTwo(1) // returns false
//  * > isTwo(2) // returns true
//  * > isTwo(3) // returns false
//  *
//  * Call the function 'isTwo' passing the variable 'random' as a argument.
//  *
//  * console.log *outside of the function* to check your work (you should see a
//  * different result everytime you refresh the page if you are using the random
//  * number)
//  */
//
// /**
//  * TODO:
//  * Create a function named 'calculateTip' to calculate a tip on a bill at a
//  * restaurant. The function should accept a tip percentage and the total of the
//  * bill, and return the amount to tip
const calculateTip = (tipPercent, BillTotal) => {
    const tipTotal = tipPercent * BillTotal;
    return tipTotal
}

const percent = 0.25;
const bill = 25.50;

const percents = 0.2;
const bills = 20;

// calculateTip(percents,bills)
console.log(calculateTip(percents,bills));

//  * Examples:
//  * > calculateTip(0.20, 20) // returns 4
//  * > calculateTip(0.25, 25.50) // returns 6.375
//  * > calculateTip(0.15, 33.42) // returns 5.013
//  */
//
// /**
//  * TODO:
//  * Use prompt and alert in combination with your calculateTip function to
//  * prompt the user for the bill total and a percentage they would like to tip,
//  * then display the dollar amount they should tip

// let userInput = prompt('How much was your bill?');
// console.log(`The user entered: ${userInput}`);
//
// let userInput1 = prompt('');
// console.log(`The user entered: ${userInput1}`);
// const calculateTipp = (tipPercent, billTotal) => {
//     return tipPercent * billTotal;
// };
//
// const billTotal = parseInt(prompt("What is the total on the bill?"));
// const tipPercent = parseFloat(prompt("What percent tip will you do?"));
//
// const total = calculateTipp(tipPercent, billTotal);
//
// alert(`You should tip $${total.toFixed(2)}`);
//
// /**
//  * TODO:
//  * Create a function named `applyDiscount`. This function should accept a price
//  * (before a discount is applied), and a discount percentage (a number between 0
//  * and 1). It should return the result of applying the discount to the original
//  * price.
const applyDiscount = (price, discount) => {
   return (1 - discount) * price;
};

const discount = applyDiscount(45.99, 0.12);

console.log(discount);
//  * Example:
//  * > let originalPrice = 100;
//  * > let discountPercent = .2; // 20%
//  * > applyDiscount(originalPrice, discountPercent) // 80
//  *
//  * > applyDiscount(45.99, 0.12) // 40.4712
//  */