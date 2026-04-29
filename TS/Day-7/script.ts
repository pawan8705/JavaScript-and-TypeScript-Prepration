// ************* Day-7 | TypeScript | Math & Numbers ************* //


// ************* Task-1 ************* //

// Question: Same as JS Task 1 — store each result in a properly typed variable.

let numx: number = -7.8;

let absValue: number   = Math.abs(numx);    // 7.8
let rounded: number    = Math.round(numx);  // -8
let floored: number    = Math.floor(numx);  // -8
let ceiled: number     = Math.ceil(numx);   // -7
let squareRoot: number = Math.sqrt(144);    // 12
let power: number      = Math.pow(2, 8);    // 256

console.log(absValue);
console.log(rounded);
console.log(floored);
console.log(ceiled);
console.log(squareRoot);
console.log(power);


// ************* Task-2 ************* //

// Question: getRandomNumber(min: number, max: number): number

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let Ax: number = getRandomNumber(1, 10);
let Bx: number = getRandomNumber(50, 100);
console.log(Ax);
console.log(Bx);


// ************* Task-3 ************* //

// Question: parseAndValidate(value: string): number | null
//           Convert to number — if NaN return null, else return the number.

// ❌ Your mistake 1: Math.parseInt — does not exist, parseInt is a global function
// ❌ Your mistake 2: empty if condition — syntax error
// ✅ Use Number(value) — then check with isNaN()

function parseAndValidate(value: string): number | null {
  let converted: number = Number(value); // Number("42") = 42 | Number("hello") = NaN

  if (isNaN(converted)) {
    return null; // not a valid number
  }

  return converted; // valid number — return it
}

console.log(parseAndValidate("42"));    // output: 42
console.log(parseAndValidate("3.14"));  // output: 3.14
console.log(parseAndValidate("hello")); // output: null


// ************* Task-4 ************* //

// Question: circleArea(radius: number): number
//           Use Math.PI, Math.pow(), toFixed() — return type is number.

// ❌ Your mistake: toFixed() returns a STRING — but return type is :number
//    TypeScript gives error: Type 'string' is not assignable to type 'number'
// ✅ Fix: wrap with Number() to convert string back to number

function circleArea(radius: number): number {
  return Number((Math.PI * Math.pow(radius, 2)).toFixed(2));
  //     ^^^^^^ converts "78.54" (string) back to 78.54 (number)
}

let X: number = circleArea(5);
let Y: number = circleArea(7);

console.log(X); // output: 78.54
console.log(Y); // output: 153.94


// ************* Task-5 ************* //

// Question: clampAndRound(num, min, max): number — same logic as JS Task 5.

function clampAndRound(num: number, min: number, max: number): number {
  if (num < min) {
    return min;
  } else if (num > max) {
    return max;
  } else {
    return Math.round(num);
  }
}

let P: number = clampAndRound(3.7, 1, 10); // output: 4
let Q: number = clampAndRound(-5, 1, 10);  // output: 1
let R: number = clampAndRound(15, 1, 10);  // output: 10

console.log(P);
console.log(Q);
console.log(R);


// ************* Task-6 (Extra) ************* //

// Question: Define Stats type, then write getStats(numbers: number[]): Stats

// type alias defines the shape of the object this function must return
// TypeScript will error if we return something that doesn't match Stats

type Stats = {
  min: number;
  max: number;
  sum: number;
  average: number;
};

function getStats(numbers: number[]): Stats {
  let min: number = Math.min(...numbers); // spread sends all elements as arguments
  let max: number = Math.max(...numbers);

  let sum: number = 0;
  for (let num of numbers) {
    sum += num;
  }

  let average: number = parseFloat((sum / numbers.length).toFixed(2));

  return { min, max, sum, average }; // must match Stats shape exactly
}

console.log(getStats([10, 20, 30, 40, 50]));
// output: { min: 10, max: 50, sum: 150, average: 30 }