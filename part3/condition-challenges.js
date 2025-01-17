// Checking if a number is greater than the another number: 

let num1 = 5
let num2 = 8

if ( num1 < num2 ) {
    console.log("num1 is greater than num 2");
} else {
    console.log("Nope, num1 is not greater");
}

// Checking if a string is equal to another string:

let username = "chai"
let anotherUsername = "chai"

if ( username == anotherUsername) {
    console.log(" Pick another username!");
}

// Checking if a variable is number or not:

let score = 44;

if (typeof score === "number"){
    console.log("This is a number");
} else {
    console.log("No that is not a number");
}

// Checking if a boolean value is true or false:

let isTeaReady = false;

if(isTeaReady) {
    console.log("Tea is ready");
}else {
    console.log("Tea is not ready yet.");
}

// Checking if an array is empty or not:

let items = [];

if(items.length == 0) {
    console.log("Array is empty");
}else{
    console.log("Array is not empty");
}