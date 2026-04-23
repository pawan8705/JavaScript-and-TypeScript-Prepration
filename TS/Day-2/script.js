"use strict";
// ************* Day-2 | TypeScript | Conditions ************* //
// ************* Task-1 ************* //
// Question: Rewrite JS Task 1 in TypeScript — add type annotation to age.
//           The function parameter and variable must have :number type.
// ❌ Wrong: return type was :string but nothing was returned (undefined returned)
// ✅ Fix: use :void when function does not return anything
function checkAge(age) {
    if (age >= 18) {
        console.log("You can vote"); // output: You can vote
    }
    else {
        console.log("You cannot vote");
    }
}
checkAge(20);
// ************* Task-2 ************* //
// Question: Write a function getGrade(marks: number): string
//           that returns the grade based on marks.
function getGrade(marks) {
    if (marks >= 90) {
        return "A";
    }
    else if (marks >= 75) { // no need for && marks<=89
        return "B";
    }
    else if (marks >= 60) {
        return "C";
    }
    else {
        return "Fail";
    }
}
console.log(getGrade(89)); // output: B
// ************* Task-3 ************* //
// Question: Rewrite TS Task 1 using ternary. Result variable must be :string type.
let age5 = 20;
let result = age5 >= 18 ? "You can vote" : "You cannot vote";
console.log(result); // output: You can vote
// ************* Task-4 ************* //
// Question: Write a function checkNumber(num: number): string
//           that returns "Positive", "Negative", or "Zero".
function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    }
    else if (num < 0) {
        return "Negative";
    }
    else {
        return "Zero";
    }
}
console.log(checkNumber(-5)); // output: Negative
// ************* Task-5 ************* //
// Question: Same switch as JS Task 5 but inside a function getDayType(day: string): string
//           Return the result instead of console.log.
// ❌ Wrong: case "Monday" || "Friday" — evaluates to just case "Monday"
// ✅ Fix: stack the cases
function getDayType(day) {
    switch (day) {
        case "Monday":
        case "Friday":
            return "Weekday";
        case "Saturday":
        case "Sunday":
            return "Weekend";
        default:
            return "Invalid day";
    }
}
console.log(getDayType("Monday")); // output: Weekday
console.log(getDayType("Sunday")); // output: Weekend
// ************* Task-6 ************* //
// Question: Write a function getMax(a: number, b: number): number
//           Return the larger number using ternary. No if/else allowed.
// ❌ Wrong: return type was :number but returning a template string — TypeScript error
// ✅ Fix: just return the number directly
function getMax(a, b) {
    return a > b ? a : b; // returns the actual number, not a sentence
}
console.log(getMax(30, 20)); // output: 30
// ************* Task-7 ************* //
// Question: What is the difference between null and undefined in TypeScript?
//           Write one example of each and handle them using an if condition.
// null      → developer intentionally set "no value" — it is assigned on purpose
// undefined → variable declared but no value was ever assigned to it
let myNull = null; // intentionally empty
let myUndefined = undefined; // declared but no value
if (myNull === null) {
    console.log("myNull is null — intentionally empty"); // output: this runs
}
if (myUndefined === undefined) {
    console.log("myUndefined is undefined — never assigned a value"); // output: this runs
}
// ************* Task-8 ************* //
// Question: Explain the error and fix it.
//           function isAdult(age: number): boolean {
//             if (age >= 18) { return true; }
//           }
// Error: function says it returns boolean, but if age < 18
//        nothing is returned — TypeScript gives error:
//        "Function lacks ending return statement and return type does not include undefined"
// ✅ Fix: add else block to cover all cases
function isAdult(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false; // now every case is covered
    }
}
console.log(isAdult(19)); // output: true
console.log(isAdult(15)); // output: false
// ************* Task-9 ************* //
// Question: Write a function getResult(score: number): string
//           with nested if/else — Merit, Pass, or Fail logic.
function getResult(score) {
    if (score >= 50) {
        if (score >= 75) {
            return "Merit";
        }
        else {
            return "Pass";
        }
    }
    else {
        return "Fail";
    }
}
console.log(getResult(67)); // output: Pass
// ************* Task-10 ************* //
// Question: Explain what is happening in this function and why
//           .toUpperCase() works inside the if block but not outside.
function printValue(val) {
    if (typeof val === "string") {
        console.log(val.toUpperCase()); // ✅ allowed — TypeScript knows val is string here
    }
    else {
        console.log(val.toFixed(2)); // ✅ allowed — TypeScript knows val is number here
    }
}
// Why .toUpperCase() works inside but not outside:
// Outside the if block, val can be string OR number — TypeScript is not sure
// Inside the if block, typeof check "narrows" the type — TypeScript now knows
// for certain that val is a string, so string methods are allowed
// This concept is called TYPE NARROWING
printValue("pawan"); // output: PAWAN
printValue(3.14159); // output: 3.14
