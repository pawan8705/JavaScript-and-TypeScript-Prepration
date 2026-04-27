// ************* Day-5 | TypeScript | Revision Day 1 to Day 4 ************* //


// ===================== Day 1 Revision — Variables & Data Types ===================== //


// ************* TS R1-1 ************* //

// Question: Fix the TypeScript errors in this code.
// let score: number = "100";  → string assigned to number
// const name: string = 50;    → number assigned to string
// let isActive: boolean = 1;  → number assigned to boolean

let score: number = 100;        // ✅ number value for number type
const myName: string = "50";    // ✅ string value for string type
let isActive: boolean = true;   // ✅ boolean value for boolean type


// ************* TS R1-2 ************* //

// Question: What is the problem and how to fix it?
// let userId: number | string = 101;
// userId = "USR_101";
// userId = true;   ← this is the problem

// userId is declared as number | string — boolean is not in the union
// Fix: add boolean to the union type OR do not assign true

let userId: number | string | boolean = 101; // ✅ added boolean to union
userId = "USR_101"; // allowed — string
userId = true;      // now allowed — boolean added to union


// ************* TS R1-3 ************* //

// Question: Create config that can hold string, number, or null.
//           Assign all three values one by one and log each.

// ❌ Your mistake 1: console.log(a) — wrong variable name, should be config
// ❌ Your mistake 2: only assigned once — task said assign all three

let config: string | number | null = 20;
console.log(config); // output: 20

config = "production";
console.log(config); // output: production

config = null;
console.log(config); // output: null


// ************* TS R1-4 ************* //

// Question: Explain any, unknown, and never — write one example of each.

// any → accepts everything, type safety is completely off — avoid it
let ax: any = 42;
ax = "hello";  // no error — TypeScript is blind with any
ax = true;     // no error

// unknown → also accepts everything BUT forces a type check before use — safe version of any
let bx: unknown = 42;
if (typeof bx === "number") {
  console.log(bx.toFixed(2)); // allowed — type checked first
}
// console.log(bx.toFixed(2)); // ❌ error without type check

// never → a function that never returns (always throws or runs forever)
function throwError(message: string): never {
  throw new Error(message); // function never completes normally — return type is never
}


// ************* TS R1-5 ************* //

// Question: Will TypeScript give an error here? Explain why.
// const PI: number = 3.14;
// let radius: number = 5;
// let area: number = PI * radius * radius;
// console.log(area);

// No error — all types are correct
// PI is number, radius is number, number * number = number
// area is declared as number — types match perfectly

const PI: number = 3.14;
let radius: number = 5;
let area: number = PI * radius * radius;
console.log(area); // output: 78.5


// ===================== Day 2 Revision — Conditions ===================== //


// ************* TS R2-1 ************* //

// Question: Write getDiscount(age, isStudent): number — same logic as JS R2-5.

// ❌ Your mistake: console.log used — return type is number so must return a number

function getDiscount(age: number, isStudent: boolean): number {
  if (age < 18 && isStudent) {
    return 50; // return number, not string
  } else if (age >= 18 && isStudent) {
    return 30;
  } else {
    return 0;
  }
}

console.log(getDiscount(15, true));  // output: 50
console.log(getDiscount(20, true));  // output: 30
console.log(getDiscount(8, false));  // output: 0


// ************* TS R2-2 ************* //

// Question: Fix the TypeScript error and explain what was wrong.

// Error: function says it returns string but if speed <= 120, nothing is returned
// TypeScript requires ALL code paths to return a value

function checkSpeed(speed: number): string {
  if (speed > 120) {
    return "Over speed";
  } else {
    return "Normal speed"; // ✅ else block added — all paths now return a string
  }
}

console.log(checkSpeed(430)); // output: Over speed
console.log(checkSpeed(80));  // output: Normal speed


// ************* TS R2-3 ************* //

// Question: Write classify(val: number | string): string
//           number → "number: " + value | string → "string: " + uppercase value

// ❌ Mistake 1: typeof.val — wrong syntax, no dot, it is typeof val
// ❌ Mistake 2: === number — number is not a string, should be === "number"
// ❌ Mistake 3: val.toUpperCase — missing () — it is a function call not a property

function classify(val: number | string): string {
  if (typeof val === "number") {          // "number" as a string — not the type itself
    return "number: " + val;
  } else {
    return "string: " + val.toUpperCase(); // toUpperCase() with brackets
  }
}

console.log(classify(35));      // output: number: 35
console.log(classify("pawan")); // output: string: PAWAN


// ************* TS R2-4 ************* //

// Question: What is ?? (nullish coalescing)? When is it better than ||?

// ?? only triggers when the left side is null or undefined
// || triggers when the left side is ANY falsy value (0, "", false, null, undefined)

// Example where ?? is better than ||:
let userScore: number | null = 0;

console.log(userScore || 100);  // output: 100 — wrong! 0 is falsy, || replaced it
console.log(userScore ?? 100);  // output: 0   — correct! 0 is a valid score, not null

// Use ?? when 0 or "" or false are valid values — use || only when any falsy means "missing"


// ************* TS R2-5 ************* //

// Question: getDayName(day: number): string using switch.
//           1 = Monday ... 7 = Sunday, else = Invalid.

// ❌ Your mistake: let day = 1 inside function — conflicts with the parameter 'day'
// The parameter IS the day — use it directly in switch

function getDayName(day: number): string {
  switch (day) {
    case 1: return "Monday";
    case 2: return "Tuesday";
    case 3: return "Wednesday";
    case 4: return "Thursday";
    case 5: return "Friday";
    case 6: return "Saturday";
    case 7: return "Sunday";
    default: return "Invalid";
  }
}

console.log(getDayName(1)); // output: Monday
console.log(getDayName(5)); // output: Friday
console.log(getDayName(9)); // output: Invalid


// ===================== Day 3 Revision — Loops ===================== //


// ************* TS R3-1 ************* //

// Question: sumRange(start, end): number — return sum of all numbers from start to end.

function sumRange(start: number, end: number): number {
  let sum: number = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumRange(1, 10));  // output: 55
console.log(sumRange(1, 100)); // output: 5050


// ************* TS R3-2 ************* //

// Question: findFirst(numbers, target): number — return index of first number > target.
//           Return -1 if none found.

function findFirst(numbers: number[], target: number): number {
  let index: number = 0;
  for (let num of numbers) {
    if (num > target) return index; // found — return current index
    index++;
  }
  return -1; // not found
}

console.log(findFirst([10, 20, 30, 40], 25)); // output: 2 (30 is first > 25)
console.log(findFirst([1, 2, 3], 100));        // output: -1


// ************* TS R3-3 ************* //

// Question: reverseArray(arr): number[] — reverse using for loop, no .reverse() allowed.

function reverseArray(arr: number[]): number[] {
  let reversed: number[] = [];
  for (let i = arr.length - 1; i >= 0; i--) { // start from last index
    reversed.push(arr[i]);
  }
  return reversed;
}

console.log(reverseArray([1, 2, 3, 4, 5])); // output: [5, 4, 3, 2, 1]


// ************* TS R3-4 ************* //

// Question: countVowels(str): number — count vowels using for...of.

function countVowels(str: string): number {
  let count: number = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let char of str.toLowerCase()) {  // toLowerCase to handle uppercase letters
    if (vowels.includes(char)) count++;
  }
  return count;
}

console.log(countVowels("Pawan Tripathi")); // output: 5


// ************* TS R3-5 ************* //

// Question: Difference between for, for...of, for...in — one example each.

// for → use when you need the index/counter and control over iterations
for (let i = 0; i < 3; i++) {
  console.log("for loop index:", i); // output: 0, 1, 2
}

// for...of → use to get VALUES from arrays or strings
let colors: string[] = ["red", "green", "blue"];
for (let color of colors) {
  console.log("for...of value:", color); // output: red, green, blue
}

// for...in → use to get KEYS from objects (avoid for arrays)
let person = { name: "Pawan", age: 20 };
for (let key in person) {
  console.log("for...in key:", key); // output: name, age
}


// ===================== Day 4 Revision — Functions ===================== //


// ************* TS R4-1 ************* //

// Question: clamp(num, min, max): number — ternary only, no if/else.

function clamp(num: number, min: number, max: number): number {
  return num < min ? min : num > max ? max : num;
}

console.log(clamp(5, 10, 20));  // output: 10
console.log(clamp(25, 10, 20)); // output: 20
console.log(clamp(15, 10, 20)); // output: 15


// ************* TS R4-2 ************* //

// Question: Fix the return type error.

// ❌ Error: return type is number but one path returns a string
// ✅ Fix: change return type to number | string

function divide(a: number, b: number): number | string {
  if (b === 0) return "Cannot divide by zero"; // string
  return a / b;                                 // number
}

console.log(divide(10, 2)); // output: 5
console.log(divide(10, 0)); // output: Cannot divide by zero


// ************* TS R4-3 ************* //

// Question: addAll(...numbers: number[]): number — rest parameter, return sum.

// ...numbers collects all arguments into an array
function addAll(...numbers: number[]): number {
  let sum: number = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
}

console.log(addAll(1, 2, 3));         // output: 6
console.log(addAll(10, 20, 30, 40));  // output: 100


// ************* TS R4-4 ************* //

// Question: Create type MathOperation, use it in calculate function.

type MathOperation = (a: number, b: number) => number;
// MathOperation is a type alias for a function that takes two numbers and returns a number

function calculate(a: number, b: number, operation: MathOperation): number {
  return operation(a, b);
}

console.log(calculate(10, 5, (a, b) => a + b)); // output: 15 — add
console.log(calculate(10, 5, (a, b) => a - b)); // output: 5  — subtract
console.log(calculate(10, 5, (a, b) => a * b)); // output: 50 — multiply


// ************* TS R4-5 ************* //

// Question: Difference between function declaration and arrow function — when to use which.

// Option A — function declaration
function greet(name: string): string {
  return "Hello " + name;
}

// Option B — arrow function
const greetArrow = (name: string): string => {
  return "Hello " + name;
};

// Difference:
// function declaration → hoisted, can be called before it is defined
// arrow function       → not hoisted, must be defined before calling
// arrow function       → does not have its own 'this' — important in classes and objects
// arrow function       → preferred for callbacks, array methods, and short inline functions

// Real use case where arrow is preferred — array methods:
let names: string[] = ["pawan", "rahul", "amit"];
let upper = names.map((name) => name.toUpperCase()); // arrow keeps code clean here
console.log(upper); // output: ["PAWAN", "RAHUL", "AMIT"]