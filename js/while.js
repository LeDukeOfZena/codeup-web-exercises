console.log("WHILE");
// 2. Create a while loop that uses console.log() to create the output shown below.
// let i = 2;
//
// while (i <= 65536 ) {
//     console.log(i);
//     i+= i;
// }



// 3. An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.

// This is how you get a random number between 50 and 100
// let allCones = Math.floor(Math.random() * 50) + 50;
// // This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;

// The output should be similar to the following:

// 5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
// Yay! I sold them all! // If there are no more cones

// Generate a random number of cones to sell between 50 and 100
// const totalConesToSell = Math.floor(Math.random() * 51) + 50;
//
// // Initialize the remaining cones to the total cones to sell
// let remainingCones = totalConesToSell;
//
// console.log(`Starting with ${totalConesToSell} cones to sell.`);
//
// do {
//     // Generate a random number of cones to be bought by the client (between 1 and 5)
//     const conesBoughtByClient = Math.floor(Math.random() * 5) + 1;
//
//     if (conesBoughtByClient <= remainingCones) {
//         // If the client buys fewer or equal cones than remaining, sell that many and update the remaining cones.
//         console.log(`Sold ${conesBoughtByClient} cone(s) to a client.`);
//         remainingCones -= conesBoughtByClient;
//     } else {
//         // If the client wants more cones than remaining, sell the remaining cones and inform that the stock is empty.
//         console.log(`Sold ${remainingCones} cone(s) to a client. Sorry, we're out of stock.`);
//         remainingCones = 0;
//     }
//
// } while (remainingCones > 0);
//
// console.log("All cones have been sold, and the seller can go home now!");




// To achieve the desired output format, you can modify the code as follows:
// Generate a random number of cones to sell between 50 and 100
// const totalConesToSell = Math.floor(Math.random() * 51) + 50;
//
// // Initialize the remaining cones to the total cones to sell
// let remainingCones = totalConesToSell;
//
// console.log(`Starting with ${totalConesToSell} cones to sell.`);
//
// do {
//     // Generate a random number of cones to be bought by the client (between 1 and 5)
//     const conesBoughtByClient = Math.floor(Math.random() * 5) + 1;
//
//     if (conesBoughtByClient <= remainingCones) {
//         // If the client buys fewer or equal cones than remaining, sell that many and update the remaining cones.
//         console.log(`${conesBoughtByClient} cones sold...`);
//         remainingCones -= conesBoughtByClient;
//     } else {
//         // If the client wants more cones than remaining, sell the remaining cones and inform that the stock is empty.
//         console.log(`Cannot sell you ${conesBoughtByClient} cones, I only have ${remainingCones}...`);
//         remainingCones = 0;
//     }
//
// } while (remainingCones > 0);
//
// if (remainingCones === 0) {
//     console.log("Yay! I sold them all!");
// }
//
// console.log("All cones have been sold, and the seller can go home now!");



//REVIEW

//random number generator function:
// const randomNum = (min, max) => {
//     return parseInt(Math.random() * (max - min) + min);
// }
//
// let conesLeft = randomNum(50, 100);
// console.log(`I'm starting with ${conesLeft} cones`)
// do {
//     const conesToSell = randomNum(1, 5);
//     if(conesLeft >= conesToSell){
//         //sell the cones
//         console.log(`${conesToSell} cones sold...`);
//         conesLeft = conesLeft - conesToSell
//     }else {
//         //don't have that many cones
//         console.log(`I don't have that many cones. I only have ${conesLeft} cones`);
//         //sell them the remaining cones if you have them
//         conesLeft = 0;
//         console.log(`Yay! I have sold all of the cones.`);
//     }
// } while(conesLeft > 0);

//git add -A or git add .           (a period at the end)
// git commit -m 'your message here'
// git push origin main
