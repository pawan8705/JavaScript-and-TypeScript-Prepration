// ************* Day-3 | JavaScript | Loops ************* //


// ************* Task-1 ************* //

// Question: Use a for loop to print numbers from 1 to 10.

for (let i = 1; i <= 10; i++) {
  console.log(i); // output: 1 2 3 4 5 6 7 8 9 10
}


// ************* Task-2 ************* //

// Question: Use a while loop to count down from 10 to 1 (countdown).

let i = 10;
while (i >= 1) {
  console.log(i); // output: 10 9 8 7 6 5 4 3 2 1
  i--;
}


// ************* Task-3 ************* //

// Question: Use a for loop to print only even numbers from 1 to 20.
//           Use continue to skip odd numbers.

// i%2 != 0 means the number is odd — continue skips it and moves to next iteration

for (let i = 1; i <= 20; i++) {
  if (i % 2 != 0) continue; // skip odd numbers
  console.log(i);            // output: 2 4 6 8 10 12 14 16 18 20
}


// ************* Task-4 ************* //

// Question: Use for...of loop to print every fruit.
//           When "Banana" is reached, break the loop — nothing should print after it.

// Note: break is written BEFORE console.log — so "Banana" itself is also not printed
// only Apple and Mango are printed

let fruits = ["Apple", "Mango", "Banana", "Orange", "Grapes"];

for (let fruit of fruits) {
  if (fruit === "Banana") break; // stop the loop before printing Banana
  console.log(fruit);            // output: Apple, Mango
}


// ************* Task-5 ************* //

// Question: Use a for loop to print the multiplication table of 5 — from 5x1=5 to 5x10=50.

let num = 5;
for (let j = 1; j <= 10; j++) {
  console.log(num + " X " + j + " = " + num * j);
}
// output: 5 X 1 = 5 ... 5 X 10 = 50


// ************* Task-6 (Extra) ************* //

// Question: Use a nested loop to print this pattern:
// *
// * *
// * * *
// * * * *
// * * * * *

// Outer loop controls the row number (1 to 5)
// Inner loop runs i times per row — adds one more star each row
// Stars are collected in a string first, then the whole row is printed at once

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";              // add one star per inner loop run
  }
  console.log(row);           // print the full row
}
// output:
// *
// * *
// * * *
// * * * *
// * * * * *