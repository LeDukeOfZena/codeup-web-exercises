// "use strict";
//
// /* ########################################################################## */
//
// /**
//  * TODO:
//  * Create a function named `analyzeColor` that accepts a string that is a color
//  * name as input. This function should return a message which relates to the
//  * color stated in the argument of the function. For colors you do not have
//  * responses written for, return a string stating so
// const analyzeColor = (colorName) => {
//     console.log(colorName)
//     if(colorName === "blue") {
//         console.log("blue is neat");
//     } else if(colorName === "red") {
//         console.log("red is neat");
//     } else if(colorName === "green") {
//         console.log("green is the best color");
//     } else {
//         console.log("that is a bad color")
//     }
// }
// analyzeColor("purple");

// function analyzeColor(colorName){
//     if(colorName === "blue") {
//         console.log("blue is neat");
//     } else if(colorName === "red") {
//         console.log("red is neat");
//     } else if(colorname ===)
// }.......

// const analyzeColor = (colorName) => {
//     let message;
//     if (colorName === "blue") {
//         message = "Blue is the color of sky";
//     } else if (colorName === "cyan") {
//         message = "I don't know about Cyan";
//     } else if (colorName === "red") {
//         message = "red is red is red";
//     } else {
//         message = "no responce"
//     }
//     return message;
// };

// const myMessage = analyzeColor("cyan");
// console.log(myMessage);

//  * Example:
//  *  > analyzeColor('blue') // returns "blue is the color of the sky"
//  *  > analyzeColor('red') // returns "Strawberries are red"
//  *
//  *
//  *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
//  *
//  * You should use an if-else-if-else block to return different messages.
//  *
//  * Test your function by passing various string literals to it and
//  * console.logging the function's return value
//  */
//
// // Don't change the next two lines!
// // These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// const randomColor = colors[Math.floor(Math.random() * colors.length)];
// /**
//  * TODO:
//  * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
//  * You should see a different message every time you refresh the page
// console.log(analyzeColor(randomColor));
//
// /**
//  * TODO:
//  * Comment out the code above, and refactor your function to use a switch-case statement
// let analyzeColor = prompt("What is your favorite color?");
//
// switch(analyzeColor.toLowerCase()) {
//     case "blue":
//         console.log(analyzeColor)
//         console.log("blue is water good");
//         break;
//     case "green":
//         console.log(analyzeColor)
//         console.log("green is the best color");
//         break;
//     case "red":
//         console.log(analyzeColor)
//         console.log("red is firetruck an alright color");
//         break;
//     default:
//         console.log("User chose " + analyzeColor + " That is a bad color");
//         break;
// }


//
// /**
//  * TODO:
//  * Prompt the user for a color when the page loads, and pass the input from the
//  * user to your `analyzeColor` function. Alert the return value from your
//  * function to show it to the user.
// //  */
// const chosenColor = prompt("What is your favorite color?");
// alert("you chose " + analyzeColor + " as your color!")
//
// const userMessage = analyzeColor(chosenColor)
// alert(userMessage)
// /* ########################################################################## */
//
// /**
//  * TODO:
//  * Suppose there's a promotion in Walmart, each customer is given a randomly
//  * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
//  * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
//  * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
//  * everything for free!.
//  *
//  * Write a function named `calculateTotal` which accepts a lucky number and total
//  * amount, and returns the discounted price.
// const calculateTotal = (luckyNum, priceBefore) => {
// // let luck1 = priceBefore * .10
// if (luckyNum == 1) {
//     return priceBefore - (priceBefore * .10);
//     }
// else if (luckyNum == 2) {
//     return priceBefore - (priceBefore * .25);
// }
// else if (luckyNum == 3) {
//     return priceBefore - (priceBefore * .35);
// }
// else if (luckyNum == 4) {
//     return priceBefore - (priceBefore * .50);
// }
// else if (luckyNum == 5) {
//     return priceBefore - priceBefore
// }
// };
//
// console.log(calculateTotal (5, 100));


// const calculateTotal = (luckyNumber, totalAmount) => {
//     //validate
//     if(luckyNumber > 5) {
//         return false;
//     }
//     totalAmount = parseFloat(totalAmount);
//     if(isNaN(totalAmount)) {
//         return false;
//     }
//     //build and return
//     let discountPrice;
//     switch(luckyNumber) {
//         case 0:
//             discountPrice = totalAmount;
//             break;
//         case 1: //10%
//             discountPrice = totalAmount * 0.9;
//             break;
//         case 2: //25%
//             discountPrice = totalAmount * 0.75;
//             break;
//         case 3: //35%
//             discountPrice = totalAmount * .65;
//             break;
//         case 4: //50%
//             discountPrice = totalAmount * .50;
//             break;
//         case 5: //100%
//             discountPrice = 0;
//             break;
//     }
//     return discountPrice;
// }


//  * Example:
//  * calculateTotal(0, 100) // returns 100
//  * calculateTotal(4, 100) // returns 50
//  * calculateTotal(5, 100) // returns 0
//  *
//  * Test your function by passing it various values and checking for the expected
//  * return value.
//  */
//
// /**
//  * TODO:
//  * Uncomment the line below to generate a random number between 0 and 5.
//  * (In this line of code, 0 is inclusive, and 6 is exclusive)
//  * Prompt the user for their total bill, then use your `calculateTotal` function
//  * and alerts to display to the user what their lucky number was, what their
//  * price before the discount was, and what their price after the discount is.
//  */
// // Generate a random number between 0 and 6
// const luckyNumber = Math.floor(Math.random() * 6);
// alert("Your lucky number was: " + luckyNumber);
// const totalBill = prompt("What is your bill total?")
// alert("Your price before discount was: $" + totalBill + ".00")
// const discountPrice = calculateTotal(luckyNumber, totalBill);
// console.log(discountPrice);
// alert("Your price after discount is: $" + discountPrice + ".00");

// const userTotal = prompt("What was your bill's total?")
// const userDiscount = calculateTotal(luckyNumber, userTotal);
// alert(`Your lucky number was ${luckyNumber}`);
// alert(userDiscount);



// /**
//  * TODO:
//  * Write some JavaScript that uses a `confirm` dialog to ask the user if they
//  * would like to enter a number. If they click 'Ok', prompt the user for a
//  * number, then use 3 separate alerts to tell the user:
//  *
//  * - whether the number is even or odd
//  * - what the number plus 100 is
//  * - if the number is negative or positive
// const magicNum = confirm("Would you like to enter a number?")
//     if magicNum === "" {
//         return console.log("You chose: " + magicNum)
//     } else {
//         return alert("Come on! Give a Number!")
//         return magicNum
//     }



const doTheToDoThang = () => {
    const willEnterNumber = confirm("Would you like to enter a number?")
    if(willEnterNumber){
        const userNumber = prompt("Enter a number");
        const userNumberFloat = parseFloat(userNumber);
        if (isNaN(userNumberFloat)) {
            alert("Uh...I can't return");
        }
        const isEven = userNumberFloat % 2 === 0;
        const isEvenMessage = isEven ? "Your number is even": "Your number is odd";
        alert(isEvenMessage)
        const plus100 = userNumberFloat + 100;
        alert(`Your number plus 100 is: ${plus100}`);
        const isPositive = userNumberFloat >= 0;
        const isPositiveMessage = isPositive ? "Your number is positive": "Your number is negative";
        alert(isPositiveMessage);
    } else {
        alert("Okay bye")
    }
}

const doTheToDoThang = () => {

}




// const magicNum = confirm("Would you like to enter a number?")

//  * Do *NOT* display any of the above information
//  * if the user enters a value that is not of the number data type.
//  * Instead, use an alert to inform them of the incorrect input data type.
//  *
//  *
//  * Can you refactor your code to use functions?
//  * HINT: The way we prompt for a value could be improved