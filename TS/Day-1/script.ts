// ************* Day-1 | TypeScript | Variables & Data Types ************* //

// Main difference from JS: we write the type of every variable explicitly
// Syntax: let variableName: type = value


// ************* Task-1 ************* //

// Question: Write the JS Task-1(Day-1) in TypeScript — add the correct type
// annotation to every variable (:string, :number etc.)

// Same as JS but with type annotations — : string, : number, : boolean

const myName1: string = "Pawan Tripathi"; // string type
let age1: number = 20;                    // number type
const city1: string = "Khatima";         // string type

console.log(myName); // output: Pawan Tripathi
console.log(age);    // output: 20
console.log(city);   // output: Khatima


// ************* Task-2 ************* //

// Question: Create a variable price: number = 100. Then try to assign "hello"
// to it. What error do you get? Explain why.

// TypeScript does not compile if we assign the wrong type to a variable
// This is the real power of TypeScript — it catches errors before running

let price: number = 100;
// price = "hello"; // Error: Type 'string' is not assignable to type 'number'
                    // price is declared as number, so string is not allowed

price = 200; // allowed — 200 is a number
console.log(price); // output: 200


// ************* Task-3 ************* //

// Question: Try to write this in TypeScript and explain why it gives an error —
// let isLoggedIn: boolean = "yes";

// boolean only accepts true or false — nothing else
// "yes", "no", 1, 0 are not boolean values in TypeScript

// let isLoggedIn: boolean = "yes"; // Error: Type 'string' is not assignable to type 'boolean'
                                    // "yes" is a string, not a boolean

let isLoggedIn: boolean = true; // only true or false allowed
console.log(isLoggedIn); // output: true


// ************* Task-4 ************* //

// Question: Create a variable that can hold both null and number using union type.
//           First assign null, then assign 42. Log both values.

// Union Type ( | ) — when a variable needs to hold more than one type
// Syntax: let varName: type1 | type2 = value

let py: null | number = null; // currently holding null
console.log(py);              // output: null

py = 23; // now assigning a number — allowed because of union type
console.log(py); // output: 23


// ************* Task-5 ************* //

// Question: What is the any type in TypeScript? Write an example using any.
//  Then explain why using any is a bad practice.

// any type — accepts everything: string, number, boolean, null, array etc.
// Problem: it completely destroys TypeScript's type safety
// it becomes just like JavaScript — no error checking at all

let ax: any = 24;
ax = "hello"; // no error
ax = true;    // no error
ax = null;    // no error
// TypeScript is now blind — it won't catch any mistakes

// Better option: unknown
// unknown also accepts any value but forces us to check the type before using it

let bx: unknown = 24;
// console.log(bx.toFixed(2)); // Error — cannot use directly without type check
if (typeof bx === "number") {
  console.log(bx.toFixed(2)); // allowed — we checked the type first
}

// Interview answer: "any destroys TypeScript's type safety so we should avoid it.
// unknown is the safer alternative because it forces a type check before use."