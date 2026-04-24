// ************* Day-3 | JavaScript | Loops ************* //


// ************* Task-1 ************* //

// Question: for loop use karke 1 se 10 tak ke numbers print karo.

for (let i = 1; i <= 10; i++) {
  console.log(i); // output: 1 2 3 4 5 6 7 8 9 10
}


// ************* Task-2 ************* //

// Question: while loop use karke 10 se 1 tak ulta count karo (countdown).

let i = 10;
while (i >= 1) {
  console.log(i); // output: 10 9 8 7 6 5 4 3 2 1
  i--;
}


// ************* Task-3 ************* //

// Question: for loop use karke 1 se 20 tak sirf even numbers print karo.
//           continue use karo odd ko skip karne ke liye.

// i%2 != 0 means odd number — continue skips it and moves to next iteration

for (let i = 1; i <= 20; i++) {
  if (i % 2 != 0) continue; // skip odd numbers
  console.log(i); // output: 2 4 6 8 10 12 14 16 18 20
}


// ************* Task-4 ************* //

// Question: for...of loop use karke har fruit print karo.
//           Jab "Banana" aaye toh break karo — uske baad kuch print na ho.

// Note: break is written BEFORE console.log — so "Banana" itself is also not printed
// only Apple and Mango are printed

let fruits = ["Apple", "Mango", "Banana", "Orange", "Grapes"];

for (let fruit of fruits) {
  if (fruit === "Banana") break; // stop the loop before printing Banana
  console.log(fruit);            // output: Apple, Mango
}


// ************* Task-5 ************* //

// Question: for loop use karke multiplication table print karo 5 ka — 5x1=5 se 5x10=50 tak.

let num = 5;
for (let j = 1; j <= 10; j++) {
  console.log(num + " X " + j + " = " + num * j);
}
// output: 5 X 1 = 5 ... 5 X 10 = 50


// ************* Task-6 (Extra) ************* //

// Question: Nested loop use karke yeh pattern print karo:
// *
// * *
// * * *
// * * * *
// * * * * *

// Outer loop controls the row number (1 to 5)
// Inner loop runs i times per row — adds one more star each row
// We collect stars in a string first, then print the whole row

for (let i = 1; i <= 5; i++) {
  let row = "";               // empty string for each row
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