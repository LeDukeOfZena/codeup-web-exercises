console.log("Loop")

/* TRADITIONAL FOR LOOP
    for(initialization; condition; increment) {

    }
 */



// for (let i = 10;i > 0;i-- ) {
//     /* the code that will repeat */
//     console.log(`The code ran at index ${i}`);
// }

/* WHILE LOOP

while(condition){

}

 */

// let index = 0;
// while(index < 10) {
//     console.log(`The code ran at index ${index}`);
//     index++;
// }
//
// let favPizza = prompt("What is your favorite pizza");
// while(favPizza !== "pepperoni") {
//     favPizza = prompt("WRONG, try again");
// }
// alert("That's what I thought. That's a good choice.");



/*DO WHILE

do {
//body
} while(condition)

 */

// let myNumber = 0;
//
// do {
//     console.log(myNumber);
//     myNumber++;
// } while(myNumber <= 10);



//write a function called buildPyramid that takes a number as an argument
//the function should return an asterik pyramid that has as many rows as the number
//LOOP IN A LOOP


// const buildRow = (num) => {
//     let result = "";
//     for(let i = 0; i < num; i++) {
//         result += "*";
//     }
//     result += "\n"
//     return result;
// }
//
// const buildPyramid = (rows) => {
//     let result = "";
//     //first loop
//     for( let i = 0; i < rows; i++){
//         result += buildRow(i);
//     }
//
//     return result;
// };
//
// let pyramid = buildPyramid(5);
// console.log(pyramid);


//BREAK AND CONTINUE
// for(let i = 0; i <=10; i++){
//     if (i !== 5) {
//         console.log(`The current index is ${i}`);
//     } else {
//         console.log(`OMG it's 5`);
//     }
// }