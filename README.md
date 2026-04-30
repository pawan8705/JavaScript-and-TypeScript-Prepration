# JavaScript & TypeScript — 21 Day Mastery

A 21-day self-learning challenge to master JavaScript and TypeScript from scratch with a focus on logic building and interview preparation.

---

## Goal

- Build strong logic in JavaScript and TypeScript
- Solve 6 JS + 6 TS tasks every day (1 extra bonus task included)
- Be ready for frontend/fullstack interviews

---

## Folder Structure

```
JS With TS/
├── JS/
│   ├── Day-1/
│   │   └── script.js
│   ├── Day-2/
│   │   └── script.js
│   └── ...
├── TS/
│   ├── Day-1/
│   │   └── script.ts
│   ├── Day-2/
│   │   └── script.ts
│   └── ...
└── README.md
```

---

## 21-Day Plan

| Day | Topic |
|-----|-------|
| Day 1 | Variables & Data Types |
| Day 2 | Conditions — if/else, ternary, switch |
| Day 3 | Loops — for, while, for...of |
| Day 4 | Functions Basics |
| Day 5 | Revision — Day 1 to Day 4 |
| Day 6 | String Methods |
| Day 7 | Math & Numbers |
| Day 8 | Week 1 Full Revision |
| Day 9 | Arrays Basics |
| Day 10 | Array Methods |
| Day 11 | Objects Basics |
| Day 12 | Object Methods |
| Day 13 | Spread & Rest |
| Day 14 | Destructuring |
| Day 15 | Week 2 Revision |
| Day 16 | Promises & Async/Await |
| Day 17 | Error Handling |
| Day 18 | Classes & OOP |
| Day 19 | TS Interfaces & Types |
| Day 20 | Generics (TypeScript) |
| Day 21 | Mock Interview + Final Challenge |

---

## Progress Tracker

| Day | Topic | Tasks | JS Score | TS Score | Status |
|-----|-------|-------|----------|----------|--------|
| Day 1 | Variables & Data Types | 5 JS + 5 TS | 3/5 | 4/5 | ✅ Done |
| Day 2 | Conditions — if/else, ternary, switch | 10 JS + 10 TS | 6/10 | 6/10 | ✅ Done |
| Day 3 | Loops — for, while, for...of | 6 JS + 6 TS | 5/6 | 3/6 | ✅ Done |
| Day 4 | Functions Basics | 6 JS + 6 TS | 4/6 | 3/6 | ✅ Done |
| Day 5 | Revision — Day 1 to Day 4 | 20 JS + 20 TS | 9/20 | 7/20 | ✅ Done |
| Day 6 | String Methods | 6 JS + 6 TS | 4/6 | 1.5/6 | ✅ Done |
| Day 7 | Math & Numbers | 6 JS + 6 TS | 4/6 | 3/6 | ✅ Done |
| Day 8 | Week 1 Full Revision | 6 JS + 6 TS | 3.5/6 | 2.5/6 | ✅ Done |
| Day 9 | Arrays Basics | — | — | — | ⬜ Pending |
| Day 10 | Array Methods | — | — | — | ⬜ Pending |
| Day 11 | Objects Basics | — | — | — | ⬜ Pending |
| Day 12 | Object Methods | — | — | — | ⬜ Pending |
| Day 13 | Spread & Rest | — | — | — | ⬜ Pending |
| Day 14 | Destructuring | — | — | — | ⬜ Pending |
| Day 15 | Week 2 Revision | — | — | — | ⬜ Pending |
| Day 16 | Promises & Async/Await | — | — | — | ⬜ Pending |
| Day 17 | Error Handling | — | — | — | ⬜ Pending |
| Day 18 | Classes & OOP | — | — | — | ⬜ Pending |
| Day 19 | TS Interfaces & Types | — | — | — | ⬜ Pending |
| Day 20 | Generics (TypeScript) | — | — | — | ⬜ Pending |
| Day 21 | Mock Interview + Final Challenge | — | — | — | ⬜ Pending |

---

## What Was Taught — Day by Day

### Day 1 — Variables & Data Types
- `var`, `let`, `const` — difference and when to use each
- Primitive data types: string, number, boolean, null, undefined
- `typeof` operator
- Why `var` is avoided — redeclaration problem
- TypeScript type annotations: `: string`, `: number`, `: boolean`
- Union types: `number | null`
- `any` vs `unknown` — why `any` destroys type safety

### Day 2 — Conditions
- `if`, `else if`, `else` — basic conditions
- Ternary operator — one-line conditions
- Switch-case — stacking multiple cases correctly
- Short-circuit operators: `&&`, `||`, `??` (nullish coalescing)
- Falsy values in JavaScript: `false`, `0`, `""`, `null`, `undefined`, `NaN`
- TypeScript: `:void` return type, type narrowing with `typeof`

### Day 3 — Loops
- `for` loop — index-based iteration
- `while` loop — condition-based iteration
- `for...of` — getting values from arrays
- `for...in` — getting keys from objects (avoid for arrays)
- `break` — stop the loop
- `continue` — skip current iteration
- Nested loops — building patterns
- TypeScript: typed arrays `number[]`, return type `number[]`

### Day 4 — Functions
- Function declaration vs function expression vs arrow function
- Hoisting — declaration is hoisted, expression is not
- Default parameters
- Return vs console.log — when to use which
- Callback functions — passing a function as a parameter
- Rest parameters: `...args`
- TypeScript: `:void` for no return, type-safe callbacks, `type` alias

### Day 5 — Revision (Day 1 to Day 4)
- 20 JS + 20 TS revision questions covering all 4 topics
- Key corrections: `var` scope leak, accumulating sum in loops, `for...of` vs `for...in`
- Closures concept introduced
- `pipe()` and `reduce()` introduced
- `??` nullish coalescing vs `||` difference
- TypeScript `type` alias for function signatures

### Day 6 — String Methods
- `trim()` — remove whitespace from both ends
- `toUpperCase()`, `toLowerCase()` — case conversion
- `includes()`, `startsWith()`, `endsWith()` — checking substrings
- `slice(start, end)` — extract part of string
- `replace(old, new)` — replace substring
- `split(separator)` — split string into array
- `indexOf()` — find position of substring
- `length` — string length
- `split("").reverse().join("")` — palindrome technique
- TypeScript: string methods work the same, types enforced on parameters and returns

### Day 7 — Math & Numbers
- `Math.round()`, `Math.floor()`, `Math.ceil()` — rounding methods
- `Math.abs()` — absolute value
- `Math.max()`, `Math.min()` — with spread operator `...array`
- `Math.pow()` — power / exponent
- `Math.sqrt()` — square root
- `Math.PI` — pi constant
- `Math.random()` — random number formula: `Math.floor(Math.random() * (max - min + 1)) + min`
- `parseInt()`, `parseFloat()`, `Number()` — string to number conversion
- `isNaN()` — check if value is not a number
- `toFixed(n)` — round to n decimal places (returns string — use `Number()` to convert back)
- Floating point precision issue: `0.1 + 0.2 !== 0.3`
- TypeScript: `type Stats = {}` — type alias for object shape

### Day 8 — Week 1 Full Revision
- `typeof typeof 42` = `"string"` — interview trick question
- `null == undefined` is `true` — loose equality special rule
- `null === undefined` is `false` — strict equality fails (different types)
- `??` vs `||` difference revisited — `??` only reacts to null/undefined
- FizzBuzz — check FizzBuzz condition FIRST before Fizz or Buzz
- Closure concept — inner functions remember outer function variables
- `slugify` — `trim + toLowerCase + split + filter + join` pattern
- OTP generation — loop `length` times, add one digit per iteration
- TypeScript: `type` alias must be defined BEFORE it is used
- TypeScript: `push(String(i))` — convert number to string when array is `string[]`
- TypeScript: `unknown` still requires type check before calling methods

---

## Key Concepts Learned So Far

| Concept | Learned On |
|---------|-----------|
| `var` vs `let` vs `const` | Day 1 |
| Type annotations in TypeScript | Day 1 |
| Union types `\|` | Day 1 |
| `any` vs `unknown` | Day 1 |
| Falsy values | Day 2 |
| Short-circuit `&&` `\|\|` `??` | Day 2 |
| Switch case stacking | Day 2 |
| Type narrowing | Day 2 |
| `for...of` vs `for...in` | Day 3 |
| `break` and `continue` | Day 3 |
| Hoisting | Day 4 |
| Callback functions | Day 4 |
| Rest parameters `...args` | Day 4 |
| Closures | Day 5 + Day 8 |
| `reduce()` | Day 5 |
| String methods | Day 6 |
| Math methods | Day 7 |
| Floating point precision issue | Day 7 |
| `toFixed()` returns string | Day 7 |
| Spread with Math.max/min | Day 7 |
| `type` alias for objects | Day 7 + Day 8 |
| `typeof typeof` trick | Day 8 |
| FizzBuzz logic order | Day 8 |
| OTP generation with loop | Day 8 |
| slugify pattern | Day 8 |

---

## Common Mistakes Fixed

- `const` cannot be reassigned — it crashes the code
- `toLowerCase` without `()` prints the function, not the result
- `split("")` splits every letter — use `split(" ")` for words
- `for...in` gives index as string — use `for...of` for array values
- Function return type must match what is actually returned
- `return` inside a loop exits on first iteration — think before using
- `continue` and `break` are keywords — writing them as strings does nothing
- `Math.max(array)` does not work — use `Math.max(...array)` with spread
- `Math.parseInt` does not exist — `parseInt` is a global function
- `toFixed()` returns a string — wrap with `Number()` if number type is needed
- `0.1 + 0.2 === 0.3` is false — never compare floats directly in JavaScript
- `typeof typeof 42` is `"string"` not `"number"` — typeof always returns a string
- `null == undefined` is `true` — special loose equality rule
- Return `0` for free tickets, not the string `"Free"` — match the return type
- `unknown` type still requires type check before calling any methods
- `type` alias must be defined before the function that uses it
- In FizzBuzz, always check `i % 3 === 0 && i % 5 === 0` FIRST

---

## Tools Used

- JavaScript (ES6+)
- TypeScript
- VS Code
- Node.js
- Git & GitHub
- Live Server (VS Code extension)

---

## About

**Name:** Pawan Tripathi
**Goal:** Frontend / Fullstack Developer
**Started:** Day 1 — Variables & Data Types
**Current Day:** Day 8 — Week 1 Full Revision
**Total Tasks Completed:** 71 JS + 71 TS = 142 tasks