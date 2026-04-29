// ************* Day-7 | JavaScript | Math & Numbers ************* //


// ************* Task-1 ************* //

// Question: Using only Math methods — log absolute value, round, floor, ceil,
//           square root of 144, and 2 to the power of 8.

let num = -7.8;

console.log(Math.abs(num));    // output: 7.8  — removes negative sign
console.log(Math.round(num));  // output: -8   — nearest integer (-7.8 rounds to -8)
console.log(Math.floor(num));  // output: -8   — always goes lower
console.log(Math.ceil(num));   // output: -7   — always goes higher
console.log(Math.sqrt(144));   // output: 12
console.log(Math.pow(2, 8));   // output: 256


// ************* Task-2 ************* //

// Question: getRandomNumber(min, max) — returns random whole number between min and max (inclusive).

// Standard formula: Math.floor(Math.random() * (max - min + 1)) + min
// Why +1 ? — Math.random() gives 0 to 0.9999, multiplying by (max-min+1) covers all values
// Why + min at the end? — shifts the range to start from min

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(getRandomNumber(1, 10));   // any number from 1 to 10
console.log(getRandomNumber(50, 100)); // any number from 50 to 100


// ************* Task-3 ************* //

// Question: Predict the output of each line and explain why.

console.log(0.1 + 0.2);
// output: 0.30000000000000004
// NOT 0.3 — JavaScript uses floating point (binary) math
// Decimals cannot always be stored exactly in binary — tiny precision errors occur

console.log(0.1 + 0.2 === 0.3);
// output: false
// Because 0.30000000000000004 is NOT equal to 0.3
// Fix: use toFixed(1) or Math.round() before comparing

console.log(parseInt("42px"));
// output: 42 — parseInt reads numbers from the start, stops at first non-number character

console.log(parseInt("px42"));
// output: NaN — starts with letters, no number found at beginning

console.log(isNaN("hello"));
// output: true — "hello" cannot be converted to a number

console.log(isNaN("42"));
// output: false — "42" can be converted to number 42, so it IS a number


// ************* Task-4 ************* //

// Question: circleArea(radius) — use Math.PI, Math.pow(), toFixed(2).

// Formula: area = π × r²

function circleArea(radius) {
  return (Math.PI * Math.pow(radius, 2)).toFixed(2);
  // toFixed(2) rounds to 2 decimal places and returns a string — fine for JS
  // In TypeScript this needs Number() to convert back — see TS Task 4
}

console.log(circleArea(5)); // output: 78.54
console.log(circleArea(7)); // output: 153.94


// ************* Task-5 ************* //

// Question: clampAndRound(num, min, max)
//           below min → return min | above max → return max | in range → Math.round()

// ❌ Your mistake: Math.floor(min) and Math.floor(max) — min/max are already integers
// ✅ Just return min or max directly — no Math.floor needed there

function clampAndRound(num, min, max) {
  if (num < min) {
    return min;            // too small — return min as-is
  } else if (num > max) {
    return max;            // too large — return max as-is
  } else {
    return Math.round(num); // in range — round to nearest integer
  }
}

console.log(clampAndRound(3.7, 1, 10));  // output: 4
console.log(clampAndRound(-5, 1, 10));   // output: 1
console.log(clampAndRound(15, 1, 10));   // output: 10


// ************* Task-6 (Extra) ************* //

// Question: getStats(numbers) — return object with min, max, sum, average.

// ❌ Your mistake: Math.max(numbers[i]) — single value diya, not the full array
// ✅ Math.max(...numbers) — spread operator sends all elements as separate arguments

function getStats(numbers) {
  let min = Math.min(...numbers);  // spread: Math.min(10, 20, 30, 40, 50)
  let max = Math.max(...numbers);  // spread: Math.max(10, 20, 30, 40, 50)

  let sum = 0;
  for (let num of numbers) {
    sum += num;                    // accumulate total
  }

  let average = parseFloat((sum / numbers.length).toFixed(2)); // round to 2 decimals

  return { min, max, sum, average }; // return as object
}

console.log(getStats([10, 20, 30, 40, 50]));
// output: { min: 10, max: 50, sum: 150, average: 30 }