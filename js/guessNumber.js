console.log("GUESS NUMBER GAME")
// // Generate a random number between 1 and 100 (inclusive)
// const targetNumber = Math.floor(Math.random() * 100) + 1;
//
// // Initialize the number of attempts
// let attempts = 0;

// Function to handle the user's guess
//function checkGuess() {
    // Get the user's guess from the input field
 //   const userGuess = parseInt(prompt("Guess a number between 1 and 100:"));
//---------------------------------------
/* if/else if/else example
    if (condition1) {
        // code here gets executed if condition1 evaluates to true
    } else if (condition2) {
        // code here gets executed only if condition1 is false *and* condition2 evaluates to true
    } else {
        // code here gets executed if neither condition1 nor condition2 evaluate to true
    }
*/

const targetNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

 = 0





    // Check if the guess is valid

    // Increment the number of attempts

    // Check if the guess is correct
    // if true, display a winning message

    // if false, provide a hint and call checkGuess() again




// // Start the game
// checkGuess();

//console.log("GUESS NUMBER GAME")
// Generate a random number between 1 and 100 (inclusive)
const targetNumber = Math.floor(Math.random() * 100) + 1;

// Initialize the number of attempts
let attempts = 0;

// Function to handle the user's guess
const checkGuess = () => {
    // Get the user's guess from the input field
    const userGuess = parseInt(prompt("Guess a number between 1 and 100:"));

    // Check if the guess is valid
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        alert("Please enter a valid number between 1 and 100.");
    } else {
        // Increment the number of attempts
        attempts++;

        // Check if the guess is correct
        if (userGuess === targetNumber) {
            // if true, display a winning message
            alert(`Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`);
        } else {
            // if false, provide a hint and call checkGuess() again
            let message = userGuess < targetNumber ? "Try a higher number." : "Try a lower number.";
            alert(message);
            checkGuess(); // Recursive call to continue the game
        }
    }
}

// Start the game
checkGuess();