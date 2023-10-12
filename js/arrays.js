console.log("ARRAY");
(function(){
const fruits = ["orange", "strawberry", "kiwi", "tomato", "banana", "blueberry"];

const firstFruit = fruits[0];
const nmrOfFruits = fruits.length;
//
// //TRADITIONAL FOR LOOP
// for(let i = 0; i < fruits.length; i++){
//     const fruit = fruits[i];
//     if (fruit.includes("berry")) {
//         console.log(fruit)
//     }
// }

// //FOR ... OF LOOP
// for(let fruit of fruits){
//     if (fruit.includes("berry")) {
//         console.log(fruit);
//     }
// }

//FOREACH METHOD:anonymous functions
fruits.forEach((fruit, index, array) => {
    if (fruit.includes("berry")) {
        console.log(fruit);
    }
})


//IIFE (Immediately Invoke Function Expression)
//Main Method
    (()=>{
       //START HERE
    })()






//The spread operator
//Helps to combine all of the values into one array
    const products = [
        ...fruits,
        ...saladDressings,
        "watermelon"
    ];

    })()

