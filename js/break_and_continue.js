console.log("break and continue");
//BREAK AND CONTINUE
// 2: Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.

// while (true) {
//     // Prompt the user for an odd number between 1 and 50
//     let PickNum1odd50 = prompt("Please enter an odd number between 1 and 50:");
//
//     // Convert the user input to an integer
//     let number = parseInt(PickNum1odd50);
//
//     // Check if the input is a valid odd number within the specified range
//     if (!isNaN(number) && number >= 1 && number <= 50 && number % 2 !== 0) {
//         // Valid input
//         console.log("You entered a valid odd number.");
//         break; // Exit the loop
//     } else {
//         // Invalid input
//         alert("Invalid input. Please try again.");
//     }
// }

// 3: Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

// Prompt the user for an odd number between 1 and 50
// let userInput;
// while (true) {
//     userInput = prompt("Please enter an odd number between 1 and 50:");
//     let number = parseInt(userInput);
//
//     if (!isNaN(number) && number >= 1 && number <= 50 && number % 2 !== 0) {
//         break;
//     } else {
//         alert("Invalid input. Please try again.");
//     }
// }
//
// // Convert the user's input to an integer
// let userNumber = parseInt(userInput);
//
// // Output all odd numbers between 1 and 50, except for the user's number
// for (let i = 1; i <= 50; i++) {
//     if (i % 2 === 0) {
//         // Skip even numbers
//         continue;
//     } else if (i === userNumber) {
//         console.log(`Yikes! Skipping number: ${userNumber}`)
//         // Skip the user's number
//         continue;
//     } else {
//         console.log(`Here is an odd number: ${i}`);
//     }
// };








