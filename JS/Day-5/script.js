// ************* Day-5 | JavaScript | Revision Day 1 to Day 4 ************* //


// ===================== Day 1 Revision — Variables & Data Types ===================== //


// ************* JS R1-1 ************* //

// Question: What will be the output of this code? Explain why.
// console.log(x);
// var x = 5;
// console.log(x);

// var is HOISTED — the declaration moves to the top but the value does not
// JavaScript internally reads it like this:
// var x;           → declaration hoisted to top (value is undefined)
// console.log(x);  → undefined (declared but not yet assigned)
// x = 5;
// console.log(x);  → 5

var x = 5;
// output line 1: undefined
// output line 2: 5


// ************* JS R1-2 ************* //

// Question: What will be the output? Explain why.

let a = "5";
let b = 5;
console.log(a == b);  // true  — == checks value only, ignores type ("5" becomes 5)
console.log(a === b); // false — === checks value AND type (string !== number)


// ************* JS R1-3 ************* //

// Question: Find all mistakes and fix them.
// const user = "Pawan"; → const cannot be reassigned — change to let
// let age = 20;
// let age = 25;         → let cannot be redeclared — remove second let

let user = "Pawan"; // changed const to let — value needs to change
user = "Rahul";
let age = 20;
age = 25;           // reassign — not redeclare
console.log(user, age); // output: Rahul 25


// ************* JS R1-4 ************* //

// Question: What will typeof return for each?

console.log(typeof null);      // "object"    — known JS bug, null is not really an object
console.log(typeof undefined); // "undefined"
console.log(typeof []);        // "object"    — arrays are objects in JS
console.log(typeof {});        // "object"
console.log(typeof NaN);       // "number"    — NaN stands for Not a Number but its type is number


// ************* JS R1-5 ************* //

// Question: Create variables using the correct keyword for each case.

const PI = 3.14159;       // const — PI never changes
let counter = 0;           // let — counter will increase
const fullName = "Pawan Tripathi"; // const — name will not change
let isOnline = true;       // let — online status can change
const MAX_AGE = 100;       // const — maximum age limit never changes


// ===================== Day 2 Revision — Conditions ===================== //


// ************* JS R2-1 ************* //

// Question: What will be the output? Explain each line.

console.log(0 || "hello");    // "hello"   — 0 is falsy so || moves to right side
console.log(1 && "hello");    // "hello"   — 1 is truthy so && evaluates right side
console.log(null ?? "default"); // "default" — ?? only checks null/undefined (not all falsy)
console.log("" || "fallback"); // "fallback" — "" is falsy so || moves to right side


// ************* JS R2-2 ************* //

// Question: Rewrite using ternary — one line only.

// ❌ Your mistake: weather = "Hot" inside ternary — wrong, assign directly
// ✅ Ternary returns a value — assign that value directly to the variable

let temperature = 35;
let weather = temperature > 30 ? "Hot" : "Cool"; // one clean line
console.log(weather); // output: Hot


// ************* JS R2-3 ************* //

// Question: Find the bug — why does switch never match "friday"?

// Bug: the variable holds "friday" (lowercase f)
// but the case checks "Friday" (uppercase F)
// JavaScript switch is case-sensitive — "friday" !== "Friday"

let day = "friday";
switch (day) {
  case "friday":             // ✅ fixed — lowercase to match the variable
    console.log("End of week");
    break;
  default:
    console.log("Other day");
}


// ************* JS R2-4 ************* //

// Question: Output of nested ternary? Then rewrite as if/else.

let marks = 72;
let grade = marks >= 90 ? "A" : marks >= 75 ? "B" : marks >= 60 ? "C" : "Fail";
console.log(grade); // output: C — 72 is >= 60 but not >= 75

// Rewritten as if/else — easier to read
if (marks >= 90) {
  console.log("A");
} else if (marks >= 75) {
  console.log("B");
} else if (marks >= 60) {
  console.log("C"); // output: C
} else {
  console.log("Fail");
}


// ************* JS R2-5 ************* //

// Question: Write getFeeDiscount(age, isStudent) that returns a discount percentage.
// Student AND age below 18 → 50%  |  Student but age 18+ → 30%  |  Not a student → 0%

// ❌ Your mistake 1: used console.log instead of return — task said "returns"
// ❌ Your mistake 2: test case getFreeDescount(8, false) → isStudent is false → should be 0%

function getFeeDiscount(age, isStudent) {
  if (age < 18 && isStudent) {
    return 50; // return the number, not a string
  } else if (age >= 18 && isStudent) {
    return 30;
  } else {
    return 0;  // not a student → 0% discount
  }
}

console.log(getFeeDiscount(15, true));  // output: 50
console.log(getFeeDiscount(20, true));  // output: 30
console.log(getFeeDiscount(8, false));  // output: 0 — not a student, age doesn't matter


// ===================== Day 3 Revision — Loops ===================== //


// ************* JS R3-1 ************* //

// Question: Explain the difference between let and var in a for loop.

// --- let version ---
for (let i = 0; i < 3; i++) {
  console.log(i); // output: 0, 1, 2
}
// console.log(i); // ❌ ReferenceError: i is not defined
// let is block-scoped — i only exists inside the for block

// --- var version ---
for (var j = 0; j < 3; j++) {
  console.log(j); // output: 0, 1, 2
}
console.log(j); // ✅ output: 3 — NOT 0, the loop ran until j=3 then condition failed
// var is function-scoped — j leaks outside the for block


// ************* JS R3-2 ************* //

// Question: Print the sum of all numbers from 1 to 100.

// ❌ Your mistake: you printed each number — task asked for the TOTAL sum

let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i; // accumulate — add each number to sum
}
console.log(sum); // output: 5050


// ************* JS R3-3 ************* //

// Question: Use for...of to find and print all numbers greater than 50.

let numbers = [12, 67, 34, 89, 23, 91, 45, 78];

for (let num of numbers) {
  if (num > 50) {
    console.log(num); // output: 67, 89, 91, 78
  }
}


// ************* JS R3-4 ************* //

// Question: Print 1 to 20 — skip multiples of 3, stop at multiple of 7 that is > 10.

// ❌ Your mistake: ternary returns strings 'continue' and 'break' — they do nothing
// actual continue and break keywords must be inside if blocks

for (let i = 1; i <= 20; i++) {
  if (i % 7 === 0 && i > 10) break;    // stop — 14 is first multiple of 7 > 10
  if (i % 3 === 0) continue;           // skip multiples of 3
  console.log(i);
}
// output: 1, 2, 4, 5, 7, 8, 10, 11, 13


// ************* JS R3-5 ************* //

// Question: Nested loop — multiplication tables for numbers 1 to 5 (each from 1 to 5).

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 5; j++) { // 1 to 5, not 1 to 10
    row += i + " X " + j + " = " + (i * j) + "   ";
  }
  console.log(row);
}
// output: 1 X 1 = 1  1 X 2 = 2 ... 5 X 5 = 25


// ===================== Day 4 Revision — Functions ===================== //


// ************* JS R4-1 ************* //

// Question: Output and why — hoisting.

// function sayHi() — HOISTED fully — can be called before declaration
// const sayBye — NOT hoisted — calling before declaration throws ReferenceError

// console.log(sayHi());  // output: "Hi!"  — works because of hoisting
// console.log(sayBye()); // ReferenceError: Cannot access 'sayBye' before initialization

function sayHi() { return "Hi!"; }
const sayBye = function () { return "Bye!"; };

console.log(sayHi());  // output: Hi!
console.log(sayBye()); // output: Bye! — works fine when called AFTER declaration


// ************* JS R4-2 ************* //

// Question: Arrow function clamp(num, min, max) using ternary only.

// ❌ Your syntax was incomplete and broken
// ✅ Chain two ternaries — first check if too small, then if too big, else in range

const clamp = (num, min, max) => {
  return num < min ? min : num > max ? max : num;
};

console.log(clamp(5, 10, 20));  // output: 10 — too small, returns min
console.log(clamp(25, 10, 20)); // output: 20 — too big, returns max
console.log(clamp(15, 10, 20)); // output: 15 — in range, returns num


// ************* JS R4-3 ************* //

// Question: Output and explain what is happening.

// ❌ Your answer: "use var not let" — completely wrong
// ✅ This is a CLOSURE — inner() remembers the count variable even after outer() finishes
// Each fn() call increments the SAME count because fn holds a reference to it

function outer() {
  let count = 0;          // count lives here — in outer's scope
  function inner() {
    count++;              // inner can access count — this is closure
    console.log(count);
  }
  return inner;
}

const fn = outer();
fn(); // output: 1
fn(); // output: 2
fn(); // output: 3 — count keeps increasing, it is NOT reset


// ************* JS R4-4 ************* //

// Question: Write repeat(str, times) — returns string repeated that many times.

// Use a loop — add str to result 'times' number of times

function repeat(str, times) {
  let result = "";
  for (let i = 0; i < times; i++) {
    result += str;
  }
  return result;
}

console.log(repeat("ha", 3)); // output: hahaha
console.log(repeat("ab", 4)); // output: abababab


// ************* JS R4-5 ************* //

// Question: Write pipe(value, ...fns) — passes value through each function one by one.

// ...fns is a rest parameter — collects all extra arguments as an array of functions
// reduce goes through each function and passes the result to the next one

function pipe(value, ...fns) {
  return fns.reduce((acc, fn) => fn(acc), value);
  // acc starts as value, each fn receives the previous result
}

console.log(pipe(5,
  x => x * 2,  // 5 * 2 = 10
  x => x + 3,  // 10 + 3 = 13
  x => x - 1   // 13 - 1 = 12
));
// output: 12