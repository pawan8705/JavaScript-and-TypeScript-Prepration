"use strict";
// ************* Day-8 | TypeScript | Week 1 Full Revision ************* //
// ************* Task-1 — Variables & Data Types ************* //
// Question: Fix all TypeScript errors and explain each fix.
// ❌ let username: string = 100;
let username = "Pawan";
// Fix: string type needs a string value — 100 is a number
// ❌ const MAX: number = "999";
const MAX = 999;
// Fix: number type needs a number value — "999" is a string
// ❌ let flag: boolean = 0;
let flag = true;
// Fix: boolean only accepts true or false — 0 is a number
// ❌ let data: number | string = true;
let data = true;
// Fix: true is boolean — union type must include boolean
// ❌ let val: unknown = "hello"; console.log(val.toUpperCase());
// unknown does not allow method calls directly — type must be checked first
let val = "hello";
if (typeof val === "string") {
    console.log(val.toUpperCase()); // ✅ allowed — TypeScript knows it's a string here
}
// ************* Task-2 — Conditions ************* //
// Question: getTicketPrice(age: number, isVIP: boolean): number
// ❌ Mistake: return "Free" — return type is number, must return 0
// TypeScript error: Type 'string' is not assignable to type 'number'
function getTicketPrice(age, isVIP) {
    let price;
    if (age < 5) {
        return 0; // Free — VIP bonus does not apply here
    }
    else if (age >= 5 && age <= 17) {
        price = 200;
    }
    else if (age >= 18 && age <= 59) {
        price = 500;
    }
    else {
        price = 300;
    }
    return isVIP ? price + 1000 : price;
}
console.log(getTicketPrice(3, true)); // output: 0
console.log(getTicketPrice(10, false)); // output: 200
console.log(getTicketPrice(10, true)); // output: 1200
console.log(getTicketPrice(30, false)); // output: 500
console.log(getTicketPrice(67, true)); // output: 1300
// ************* Task-3 — Loops ************* //
// Question: fizzbuzz(n: number): string[] — collect results in array and return it.
// ❌ Mistake 1: console.log used — task said collect in string[] and return
// ❌ Mistake 2: no array declared, nothing pushed, no return statement
function fizzbuzz(n) {
    let results = []; // collect here — not console.log
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            results.push("FizzBuzz");
        }
        else if (i % 3 === 0) {
            results.push("Fizz");
        }
        else if (i % 5 === 0) {
            results.push("Buzz");
        }
        else {
            results.push(String(i)); // convert number to string — array is string[]
        }
    }
    return results; // return the full array
}
console.log(fizzbuzz(15));
function makeCounter(start = 0) {
    let count = start;
    return {
        increment: () => ++count,
        decrement: () => --count,
        reset: () => { count = start; return count; },
        value: () => count
    };
}
const counter = makeCounter(10);
console.log(counter.increment()); // output: 11
console.log(counter.increment()); // output: 12
console.log(counter.decrement()); // output: 11
console.log(counter.value()); // output: 11
console.log(counter.reset()); // output: 10
console.log(counter.value()); // output: 10
// ************* Task-5 — String Methods ************* //
// Question: slugify(title: string): string — same logic as JS Task 5.
// ❌ Mistake: toLowerCase() missing — output was not all lowercase
function slugify(title) {
    return title
        .trim()
        .toLowerCase()
        .split(" ")
        .filter((word) => word !== "")
        .join("-");
}
console.log(slugify("Hello World")); // output: hello-world
console.log(slugify("  JavaScript is Fun  ")); // output: javascript-is-fun
console.log(slugify("My Blog Post Title")); // output: my-blog-post-title
// ************* Task-6 — Math & Numbers (Extra) ************* //
// Question: generateOTP(length: number): string — return random OTP as string.
// Return type is string — OTP is built digit by digit using a loop
// Each iteration adds one random digit (0-9) to the otp string
function generateOTP(length) {
    let otp = "";
    for (let i = 0; i < length; i++) {
        otp += Math.floor(Math.random() * 10); // random digit — auto converts to string
    }
    return otp;
}
console.log(generateOTP(4)); // output: e.g. "4823"
console.log(generateOTP(6)); // output: e.g. "938201"
