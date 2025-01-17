// Number

let balance = 120;
let anotherBalance = new Number(120);

console.log(balance);
console.log(anotherBalance);

console.log( typeof balance); //number
console.log( typeof anotherBalance); //object

//boolean
let isActive = true
let isReallyActive = new Boolean(true)  //not recommended

// null and undefined

let firstname;
console.log(first); //null

//String

let myString = "hello"
let myStringOne = 'Hola'
let username = 'shreya'

let oldGreet = myString + "" + "shreya";
console.log(oldGreet);

let greetMessage = `Hello ${username}`; //string interpolation
let demoOne = `Value is ${ 2 * 2 }`;
console.log(demoOne);

let sm1 = Symbol();
let sm2 = Symbol();

console.log( sm1 == sm2); // false