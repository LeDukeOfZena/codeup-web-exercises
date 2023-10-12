(function(){
    "use strict";

    console.log("iterating arrays exercise")
    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
const names = ["Bobby", "Steven", "Juno", "Spencer"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
const NumOfNames = names.length;
console.log(NumOfNames);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

for(let i = 0; i < names.length; i++){
    console.log(`Name #${i + 1} is ${names[i]}`);
}
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
//someArray.forEach((element, index, array) => {
//     // ...
// })
// names.forEach((name, index) => {
//     console.log(`Name #${index + 1} is ${name}`);
// })
//REVIEW
names.forEach((name, i)=>{
        console.log(`name #${i + 1} is ${name}`)
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
const numbers = [1, 2, 3, 4, 5];
// 1:
const first1 = (inputFirst) => {
    return inputFirst[0];
}
    console.log(first1(numbers));
// const first = (array) => {
//     let result = array[0];
//     return result;
// }


const second2 = (inputSecond) => {
    return inputSecond[1];
}
console.log(second2(numbers));


const last3 = (inputLast) => {
    return inputLast[inputLast.length - 1];
}
console.log(last3(numbers));

})();
//git add -A or git add .           (a period at the end)
// git commit -m 'your message here'
// git push origin main