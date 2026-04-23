// ************* Day-2 | JavaScript | Conditions ************* //


// ************* Task-1 ************* //

// Question: Create a variable age = 20. Write an if/else that prints
//           "You can vote" if age is 18 or above, otherwise "You cannot vote".

let age1 = 20;

if (age1 >= 18) {
  console.log("You can vote");   // output: You can vote
} else {
  console.log("You cannot vote");
}


// ************* Task-2 ************* //

// Question: Create a variable marks = 85. Write conditions for grades:
//           90 and above → "A" | 75 to 89 → "B" | 60 to 74 → "C" | below 60 → "Fail"

// Note: no need to write marks<=89 in the second condition
// because if marks was >=90, it would have already matched the first if
// else if only runs when all previous conditions are false

let marks = 85;

if (marks >= 90) {
  console.log("A");
} else if (marks >= 75) {  // no need for && marks<=89 — already handled above
  console.log("B");        // output: B
} else if (marks >= 60) {
  console.log("C");
} else {
  console.log("Fail");
}


// ************* Task-3 ************* //

// Question: Rewrite JS Task 1 using a ternary operator in one line.

let age2 = 20;
let result3 = age2 >= 18 ? "You can vote" : "You cannot vote";
console.log(result3); // output: You can vote


// ************* Task-4 ************* //

// Question: Create a variable num = -5. Check if it is positive, negative, or zero.

let num = -5;

if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative"); // output: Negative
} else {
  console.log("Zero");
}


// ************* Task-5 ************* //

// Question: Write a switch for let day = "Monday".
//           "Monday" / "Friday" → "Weekday"
//           "Saturday" / "Sunday" → "Weekend"
//           anything else → "Invalid day"

// ❌ Wrong way: case "Monday" || "Friday" — this evaluates to just case "Monday"
//               Friday will never match

// ✅ Correct way: stack two cases together — they share the same block

let day = "Monday";

switch (day) {
  case "Monday":
  case "Friday":               // stacking cases — both lead to same result
    console.log("Weekday");    // output: Weekday
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend");
    break;
  default:
    console.log("Invalid day");
}


// ************* Task-6 ************* //

// Question: Print the larger number using ternary — no if/else allowed.

const a = 10;
const b = 20;
let result6 = a > b ? a : b;  // just return the number, not a sentence
console.log(result6);          // output: 20


// ************* Task-7 ************* //

// Question: Using short-circuit (&&, ||) — print "Welcome back!" if logged in,
//           otherwise "Please login". No if/else, ternary, or switch allowed.

// Short-circuit rules:
// &&  → if left side is false, right side never runs
// ||  → if left side is true, right side never runs

let isLoggedIn = false;

isLoggedIn && console.log("Welcome back!"); // false && anything = skip
!isLoggedIn && console.log("Please login"); // !false = true → runs
// output: Please login


// ************* Task-8 ************* //

// Question: Predict the output and explain why.
//           let x = 0;
//           if (x) { console.log("Truthy") } else { console.log("Falsy") }

// Output: "Falsy"
// Why: 0 is a falsy value in JavaScript
// if(0) is treated as if(false) — so else block runs

let x = 0;
if (x) {
  console.log("Truthy");
} else {
  console.log("Falsy"); // output: Falsy
}


// ************* Task-9 ************* //

// Question: Create a variable score = 70. Write a nested if/else:
//           score >= 50 → check again: score >= 75 → "Merit", else → "Pass"
//           score < 50 → "Fail"

let score = 70;

if (score >= 50) {
  if (score >= 75) {
    console.log("Merit");
  } else {
    console.log("Pass"); // output: Pass
  }
} else {
  console.log("Fail");
}


// ************* Task-10 ************* //

// Question: What are falsy values in JavaScript? List all of them with one example each.

// There are exactly 6 falsy values in JavaScript:
// false, 0, "" (empty string), null, undefined, NaN
// Everything else is truthy

if (false) {
   console.log("truthy")
  } else {
    console.log("false is falsy")
  }
  if (0) { console.log("truthy") } else { console.log("0 is falsy") }
if ("") { console.log("truthy") } else { console.log("empty string is falsy") }
if (null) { console.log("truthy") } else { console.log("null is falsy") }
if (undefined) { console.log("truthy") } else { console.log("undefined is falsy") }
if (NaN) { console.log("truthy") } else { console.log("NaN is falsy") }