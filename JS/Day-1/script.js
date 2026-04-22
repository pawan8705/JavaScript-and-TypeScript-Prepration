// ************* Day-1 | JavaScript | Variables & Data Types ************* //




// ************* Task-1 ************* //

// Question: Create three variables — your name (const), your age (let),
//           and your city (const). Log all three using console.log.

// Rule: const = value never changes, let = value can change, var = old way (avoid it)

const myName = "Pawan Tripathi"; // const because name will never change
let age = 20;                    // let because age can change
const city = "Khatima";         // const because city will never change

console.log(myName); // output: Pawan Tripathi
console.log(age);    // output: 20
console.log(city);   // output: Khatima





// ************* Task-2 ************* //

// Question: Create a let variable score = 10. Then change its value to 20.
//           Log both values using console.log.

// let allows reassignment — we can change the value after declaration

let score = 10;
console.log(score); // output: 10

score = 20; // reassigning — allowed because it's let
console.log(score); // output: 20




// ************* Task-3 ************* //

// Question: Write this code and explain — what will be the output and why?
//           const x = 5;
//           x = 10;
//           console.log(x);

// if we try to reassign a const variable, the code crashes immediately
// it never reaches console.log

const x = 5;
// x = 10; // TypeError: Assignment to constant variable.
           // const is locked after first assignment

console.log(x); // output: 5  (only works if we don't reassign)




// ************* Task-4 ************* //

// Question: Create three variables — your height (number), your name (string),
//           isStudent (true/false). Print the typeof each variable.

// typeof is an operator that tells us the data type of a variable
// typeof is an operator, not a function — brackets are optional

let height = 6.1;
const naam = "Pawan"; // using 'naam' to avoid conflict with 'myName' above
let isStudent = true;

console.log(typeof height);    // output: "number"
console.log(typeof naam);      // output: "string"
console.log(typeof isStudent); // output: "boolean"




// ************* Task-5 ************* //

// Question: Look at this code and explain what the problem is —
//           var a = 1;
//           var a = 2;
//           let b = 1;
//           let b = 2;

// var allows redeclaration — no error but it's bad practice
// let does not allow redeclaration — gives SyntaxError

var a = 1;
var a = 2; // no error — var allows this (but never do this in real code)
console.log(a); // output: 2

let b = 1;
// let b = 2; // SyntaxError: Identifier 'b' has already been declared
              // let and const both block redeclaration in the same scope