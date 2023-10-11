// console.log("Loopy");


//TO-DO 2: Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
// const showMultiplicationTable = (number) => {
//     for (let i = 1; i <= 10; i++){
//         console.log(`${number} x ${i} = ${number * i}`)
//     }
// }
//
// showMultiplicationTable(5);





//TO-DO 3: Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.
// FROM PREVIOUS EXERCISE// Generate a random number between 0 and 6
// const luckyNumber = Math.floor(Math.random() * 6);


// const tenRandomNum = () => {
//     for (let i = 1; i <= 10; i++){
//         const randomNum = Math.floor(Math.random() * (200 - 20) + 20);
//         if(randomNum % 2 === 0) {
//         //TERNARY METHOD: const randomNumber = randomNumber % 2 === 0 ? "even" : "odd";
//             console.log(`${randomNum} is Even`)
//         } else {
//             console.log(`${randomNum} is Odd`);
//         }
//     }
    // cont isOdd = i % 2 !==0;
    // cont isEven = i % 2 ==0;
// };
//
// tenRandomNum();



//TO-DO 4:Create a for loop that uses console.log to create the output shown below.
const rowNumber = (RNum) => {
    for (let i = 1; i < RNum; i++) {
        return
    }
}

// const buildRow = (num) => {
//     let result = "";
//     for(let i = 0; i < num; i++) {
//         result += "*";
//     }
//     result += "\n"
//     return result;
// }
// //
// const buildPyramid = (rows) => {
//     let result = "";
//     //first loop
//     for( let i = 1; i < rows; i++){
//         result += buildRow(i);
//     }
//
//     return result;
// };
//
// let pyramid = buildPyramid(5);
// console.log(pyramid);



// function generatePyramid() {
//     let totalNumberofRows = 9;
//     let output = '';
//     for (let i = 1; i <= totalNumberofRows; i++) {
//         for (let j = 1; j <= i ; j++) {
//             output += i;
//         }
//         console.log(output);
//         output = '';
//     }
// }
//
// generatePyramid();



//ONE ON ONE ABOUT ARRAYS
// const fruits = [
//     "strawberry",
//     "banana",
//     "orange",
//     "kiwi"
// ];
//
// for(let i = 0; i < fruits.length; i++){
//     const fruit = fruits[i];
//     if (fruit.length >= 5) {
//         console.log(fruit);
//     }
// }

// let shoppers = [
//     {
//         name: 'Cameron',
//         amount: 180,
//         products: [
//             "milk",
//             "eggs"
//         ]
//     },
//     {
//         name: 'Ryan',
//         amount: 250,
//         products: ["potatoes"]
//     },
//     {
//         name: 'George',
//         amount: 320,
//         products: [
//             "corn",
//             "beans"
//         ]
//     }
// ];
//
// const boughtMilk = (products) => {
//     let result = false;
//     for(let i = 0; i < products.length; i++){
//         const product = products[i];
//         if(product.toLowerCase() === "milk"){
//             result = true;
//         }
//     }
//     return result;
// }
//
// // console log any shoppers that bought milk
// for(let i = 0; i < shoppers.length; i++){
//     const shopper = shoppers[i];
//     const didBuyMilk = boughtMilk(shopper.products);
//     if(didBuyMilk){
//         console.log(shopper);
//     }
// }



// 5: Create a for loop that uses console.log to create the output shown below.
// for (let i = 100; i >= 5; i -= 5) {
//     console.log(i);
// }
