

// let a = 1;
// console.log("a =", a);
// let b = a++;
// console.log("b =", b);
// console.log("a again = ", a);
// let c = ++a;
// console.log("c =", c);
//
// let d = "hello";
// let e = false;
// let incrementD = d++;
// console.log(incrementD);
// let incrementE = e++;
// console.log(incrementE);
//
// let perplexed; // perplexed is undefined (no value is assigned)
// perplexed + 2;
// console.log(perplexed + 2);
//
// let price = 2.7;
// console.log("price", price);
// let priceFixed = price.toFixed(2);
// console.log("price fixed", priceFixed);
// let Price = "2.7";
// console.log("Price", Price);
// let PriceFixed = parseFloat(Price).toFixed(2);
// console.log("Price fixed", PriceFixed);
//
//
// let poopyCaCa = isNaN(0)
// console.log("poopyCaCa", poopyCaCa);
// let one = isNaN(1)
// console.log("one", one);
// let empty = isNaN("")
// console.log("empty", empty);
// let theWordString = isNaN("string")
// console.log("theWordString", theWordString)
// let theString0 = isNaN("0")
// console.log("theString0",theString0);
// let theString1 = isNaN("1")
// console.log("theString1", theString1)
// let theString3dot145 = isNaN("3.145")
// console.log("theString3dot145", theString3dot145);
// let MAX_VALUE = isNaN(Number.MAX_VALUE);
// console.log("MAX_VALUE", MAX_VALUE);
// let Infinitee = isNaN(Infinity)
// console.log("Infinitee",Infinitee);
// let theStringTrue = isNaN("true")
// console.log("theStringTrue", theStringTrue);
// let booleanTrue = isNaN(true)
// console.log("booleanTrue", booleanTrue);
// let theStringFalse = isNaN("false")
// console.log("theStringFalse", theStringFalse);
// let booleanFalse = isNaN(false)
// console.log("booleanFalse", booleanFalse);
//
// // to illustrate why the isNaN() function is needed:
// console.log("NaN == NaN", NaN == NaN);
//
// console.log("!true", !true);
//
// console.log("!false", !false);
//
// console.log("!!true", !!true);
//
// console.log("!!false", !!false);
//
// console.log("!!0", !!0);
//
// console.log("!!-0", !!-0);
//
// console.log("!!1", !!1);
//
// console.log("!!-1", !!-1);
//
// console.log("!!0.1", !!0.1);
//
// console.log("!!'hello'", !!"hello");
//
// console.log("!!''", !!"");
//
// console.log("!!''", !!'');
//
// console.log("!!'false'", !!"false");
//
// console.log("!!'0'", !!"0");
//
//
//
// let sample = "Hello Codeup";
// //Use .length to find the number of characters in the string.
// let sampleLength = sample.length;
// console.log(sampleLength);
// //Try to make the sample string all upper or all lower case.
// let sampleUpperCase = sample.toUpperCase();
// console.log(sampleUpperCase);
//
// console.log(sample.toLowerCase());
// //Update the variable sample via concatenation so that it contains "Hello Codeup Students".
// let sampleStudents = sample + " Students";
// console.log(sample + " Students");
// //Replace "Students" with "Class".
// let sampleClass = sampleStudents.replace("Students", "Class");
// console.log(sampleClass);
// //Find the index of "c" using .indexOf(). What do you observe?
// let indexOfc = sample.indexOf("c")
// console.log(indexOfc)
// //Find the index of "C" using .indexOf().
// let indexOfC = sample.indexOf("C");
// console.log(indexOfC);
// //Retrieve a substring that contains only the word "Codeup" by using indexOf() and substring().
// let CodeupSubstring = sample.substring(indexOfC , sampleLength);
// console.log(CodeupSubstring);


// let mermaid = 3;
// let bear = 5;
// let hercules = 1;
// let pricePerMovie = 3
// let totalMoviePrice = pricePerMovie * (mermaid + bear + hercules);
// console.log("$" + totalMoviePrice);
// const mrd = 3
// const brthbr = 5
// const hrcls = 1
//
// const prprd = 3
//
// const mrdCost = mrd * prprd;
// const brthbrCost = brthbr * prprd;
// const hrclsCost = hrcls * prprd;
//
// let totalCost = mrdCost + brthbrCost + hrclsCost
// // totalCost = `$${totalCost.toFixed(2)}`;
// totalCost = totalCost.toLocaleString("en-US", { style: "currency", currency: "USD"});
// console.log(`The total cost is: ${totalCost}`);


// let Gpay = 400;
// let Apay = 380;
// let Fpay = 350;
// let GHours = 6;
// let AHours = 4;
// let FHours = 10;
// let Google = Gpay * GHours;
// let Amazon = Apay * AHours;
// let Facebook = Fpay * FHours;
// let totalPay = Google + Amazon + Facebook;
// console.log("$" + totalPay);


// let username = 'codeup';
// let password = 'notastrongpassword';
// //Create a variable that holds a boolean value for each of the following conditions:
// //the password must be at least 5 characters
// console.log(password.length >= 5);
// //the password must not include the username
// console.log(password.includes(username))
// //the username must be no more than 20 characters
// console.log(username.length <= 20);
// //neither the username or password can start or end with whitespace
// let userWhite = username.includes(" ");
// console.log(userWhite);
// let passWhite = password.includes(" ");
// console.log(passWhite);
// //separate concerns yo

const username = "Codeup";
const password = "notastrongpassword";
//the password must be at least 5 characters
const is5char = password.length >= 5;
//the password must not include the username
const passContainUsername = password.toLowerCase().includes(username.toLowerCase());
console.log(passContainUsername);
const userLengthTooBig = username.length > 20;
const usernameWithWhite = username.trim() !== username;
const passwordWithWhite = password.trim() !== password;

const validPassword = is5char && !passContainUsername;
const validUsername = null;
const validInput = var1 && var2 && var3





