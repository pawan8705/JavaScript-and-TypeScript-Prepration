"use strict";
// ************* Day-7 | TypeScript | Math & Numbers ************* //
// ************* Task-1 ************* //
// Question: Same as JS Task 1 — store each result in a properly typed variable.
let numx = -7.8;
let absValue = Math.abs(numx); // 7.8
let rounded = Math.round(numx); // -8
let floored = Math.floor(numx); // -8
let ceiled = Math.ceil(numx); // -7
let squareRoot = Math.sqrt(144); // 12
let power = Math.pow(2, 8); // 256
console.log(absValue);
console.log(rounded);
console.log(floored);
console.log(ceiled);
console.log(squareRoot);
console.log(power);
// ************* Task-2 ************* //
// Question: getRandomNumber(min: number, max: number): number
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let Ax = getRandomNumber(1, 10);
let Bx = getRandomNumber(50, 100);
console.log(Ax);
console.log(Bx);
// ************* Task-3 ************* //
// Question: parseAndValidate(value: string): number | null
//           Convert to number — if NaN return null, else return the number.
// ❌ Your mistake 1: Math.parseInt — does not exist, parseInt is a global function
// ❌ Your mistake 2: empty if condition — syntax error
// ✅ Use Number(value) — then check with isNaN()
function parseAndValidate(value) {
    let converted = Number(value); // Number("42") = 42 | Number("hello") = NaN
    if (isNaN(converted)) {
        return null; // not a valid number
    }
    return converted; // valid number — return it
}
console.log(parseAndValidate("42")); // output: 42
console.log(parseAndValidate("3.14")); // output: 3.14
console.log(parseAndValidate("hello")); // output: null
// ************* Task-4 ************* //
// Question: circleArea(radius: number): number
//           Use Math.PI, Math.pow(), toFixed() — return type is number.
// ❌ Your mistake: toFixed() returns a STRING — but return type is :number
//    TypeScript gives error: Type 'string' is not assignable to type 'number'
// ✅ Fix: wrap with Number() to convert string back to number
function circleArea(radius) {
    return Number((Math.PI * Math.pow(radius, 2)).toFixed(2));
    //     ^^^^^^ converts "78.54" (string) back to 78.54 (number)
}
let X = circleArea(5);
let Y = circleArea(7);
console.log(X); // output: 78.54
console.log(Y); // output: 153.94
// ************* Task-5 ************* //
// Question: clampAndRound(num, min, max): number — same logic as JS Task 5.
function clampAndRound(num, min, max) {
    if (num < min) {
        return min;
    }
    else if (num > max) {
        return max;
    }
    else {
        return Math.round(num);
    }
}
let P = clampAndRound(3.7, 1, 10); // output: 4
let Q = clampAndRound(-5, 1, 10); // output: 1
let R = clampAndRound(15, 1, 10); // output: 10
console.log(P);
console.log(Q);
console.log(R);
function getStats(numbers) {
    let min = Math.min(...numbers); // spread sends all elements as arguments
    let max = Math.max(...numbers);
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    let average = parseFloat((sum / numbers.length).toFixed(2));
    return { min, max, sum, average }; // must match Stats shape exactly
}
console.log(getStats([10, 20, 30, 40, 50]));
// output: { min: 10, max: 50, sum: 150, average: 30 }
