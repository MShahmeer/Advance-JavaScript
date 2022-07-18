// Hoisting in javascript is the mechanisim where variables and the function declarations are moved to the top of their scope before the code

// there is the execution and creation phase

// Example

console.log(myName);
var myName;
myName = "Shahmeer";

// This will output undefined because myName is not defined in first line

// Implement Hoisting

// 1: var myName;
// 2: myName = "Shahmeer";
// 3: console.log(myName);

// How to avoid hosing?
// Using the let keyword we can avoid the hosing

console.log(myName);
let myName;
myName = "Shahmeer";

// This will give error
