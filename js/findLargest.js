// // Function to find the largest number in an array
//
//
// (() => {
//
//     // const findLargestNumber = (arr) => {
//     // };
//     // Sample array of numbers
//     const numbers = [42, 17, 8, 94, 23, 61, 12, 51, 6];
//     // Call the function and display the result
//     const result = findLargestNumber(numbers);
//     console.log(result);
//
//     const findLargestNumber = (arr) => {
//         if (arr.length === 0)
//     };
//
//     let largest = arr[0];
//
//
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i];
//         }
//     }
//
//
// })();

const findLargestNumber = (arr) => {
    if (arr.length === 0) {
        // Handle the case when the array is empty
        return undefined;
    }

    let largest = arr[0]; // Assume the first element is the largest

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]; // Update largest if a larger number is found
        }
    }

    return largest;
};

(() => {
    // Sample array of numbers
    const numbers = [42, 17, 8, 94, 23, 61, 12, 51, 6];
    // Call the function and display the result
    const result = findLargestNumber(numbers);
    console.log(result); // This will print the largest number in the array
})();



