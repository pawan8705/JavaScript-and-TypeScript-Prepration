// ************* Day-3 | TypeScript | Loops ************* //


// ************* Task-1 ************* //

// Question: Same as JS Task 1 — loop variable i must have :number type.

// In TypeScript, for loop variable can be typed explicitly
// TypeScript can also infer it — but writing :number is better practice here

for (let i: number = 1; i <= 10; i++) {
  console.log(i); // output: 1 2 3 4 5 6 7 8 9 10
}


// ************* Task-2 ************* //

// Question: Create function countdown(start: number): void
//           Inside, use while loop to count down from start to 1.

// :void means the function does not return anything — it just prints

function countdown(start: number): void {
  while (start >= 1) {
    console.log(start);
    start--;
  }
}

countdown(10); // output: 10 9 8 7 6 5 4 3 2 1


// ************* Task-3 ************* //

// Question: Create function getEvenNumbers(limit: number): number[]
//           Collect all even numbers from 1 to limit in an array and return it.

// ❌ Your mistake 1: i-- instead of i++ — loop never ends, browser hangs
// ❌ Your mistake 2: console.log instead of push — nothing collected in array
// ❌ Your mistake 3: no return statement — function returned undefined, not number[]

// number[] means the function returns an array of numbers

function getEvenNumbers(limit: number): number[] {
  let evens: number[] = [];       // empty array to collect even numbers

  for (let i: number = 1; i <= limit; i++) { // i++ not i--
    if (i % 2 !== 0) continue;   // skip odd numbers
    evens.push(i);                // add even number to the array
  }

  return evens;                   // return the collected array
}

console.log(getEvenNumbers(10)); // output: [2, 4, 6, 8, 10]


// ************* Task-4 ************* //

// Question: for...of loop use karke check karo — pehla score jo 90 se >=
//           ho usse print karo aur loop band karo.

// ❌ Your mistake: no condition written — you printed all scores instead of first >=90

let scores: number[] = [45, 78, 23, 90, 55, 100, 12];

for (let score of scores) {
  if (score >= 90) {      // check the condition first
    console.log(score);   // output: 90  (first match found)
    break;                // stop — we only want the first one
  }
}


// ************* Task-5 ************* //

// Question: Create function multiplicationTable(num: number): void
//           Print num's table from 1 to 10.

function multiplicationTable(num: number): void {
  for (let j = 1; j <= 10; j++) {
    console.log(num + " X " + j + " = " + num * j);
  }
}

multiplicationTable(5);
// output: 5 X 1 = 5 ... 5 X 10 = 50


// ************* Task-6 (Extra) ************* //

// Question: Create function sumOfArray(numbers: number[]): number
//           Use for...of to return the sum of all numbers in the array.

// ❌ Your mistake 1: for...in used instead of for...of
//    for...in  → gives INDEX as string ("0","1","2"...) — used for objects
//    for...of  → gives VALUE (1, 2, 3...) — used for arrays

// ❌ Your mistake 2: i + num — i was 0 (number), num was "0" (string index)
//    "0" + 0 = "00" — string concat, not addition

// ❌ Your mistake 3: no return statement — function returned undefined

function sumOfArray(numbers: number[]): number {
  let sum: number = 0;        // start with 0

  for (let num of numbers) {  // for...of gives actual value, not index
    sum += num;               // add each value to sum
  }

  return sum;                 // return the total
}

console.log(sumOfArray([1, 2, 3, 4, 5])); // output: 15