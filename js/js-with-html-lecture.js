// console.log("Testing");
//
// let easyMath = 2 + 2;
// console.log(easyMath);



//let x = 1;
// x = x + 1;
// //2
// x += 1
// //3
// x += 2
// //5

//x*=1
//x = x * 1

// x/=1;
// //x = x / 1;

// //Unary Operators
// let y = 5;
// y++;
// //y = y + 1
// y--;
// //y = y - 1
// console.log(y);



// //method to turn number to string
// let pi = 3.14;
// // let piString = "" + pi
// let piString = pi.toString()
// console.log(pi)
// console.log(piString)

// //from a string to number
// let nmrOfStudents = "19.37"
// nmrOfStudents = parseFloat(nmrOfStudents);
//
// console.log(nmrOfStudents)



// let bankAccount = "19.23656";
// console.log("Original Value ==> " + bankAccount);
// bankAccount = parseFloat(bankAccount);
// console.log("Parse Float ==> " + bankAccount);
// bankAccount = parseFloat(bankAccount.toFixed(2));
// console.log("toFixed ==> " + bankAccount);
// bankAccount = parseInt(bankAccount);
// console.log("parseInt ==> " + bankAccount)

let x = "griffin";
let xNumber = Number(x);
console.log(xNumber);
//WILL BE USED ON THE ASSESSMENT
let isEqual = xNumber === NaN;
console.log("NaN strict comparison")
let isReallyEqual = isNaN(xNumber);
console.log("isNaN function" + isReallyEqual);

/// truthy/falsey

let emptyString = "" == false;
console.log(emptyString)
let zero = 0 == false;
console.log("zero ==> ", zero);
let noValue; //undefined
console.log(noValue)
let noData = null; //null: the intentional absense of data

let middleName = "Adam"



if(middleName) {
    console.log("YUP, IT'S TRUTHY");
} else {
    console.log("NOPE, IT'S FALSE");
}


//STRING METHODS
let username = "Justino(Nova)";
let guildName;

let nameLength = username.length;
console.log("nameLength ==> ", nameLength);
let guildNameStart = username.indexOf("(");
console.log("guildNameStart ==> ", guildNameStart)
let guildNameEnd = nameLength - 1;
guildName = username.substring(guildNameStart + 1, guildNameEnd);
console.log("guildName ==> ", guildName);
username = username.replace("(" + guildName + ")", "").trim();
console.log("username ==> ", username);



//TEMPLATE STRINGS
let channelMessage = "username from guildName guild has logged in.";
channelMessage = username + " from the " + guildName + " guild has logged in";
channelMessage = `${username} from the ${guildName} guild has logged in.`;
console.log(channelMessage);

let i = 35;
console.log(i++);
i++;
console.log(++i);


