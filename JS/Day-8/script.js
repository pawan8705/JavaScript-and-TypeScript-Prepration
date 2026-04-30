// ************* Day-8 | JavaScript | Week 1 Full Revision ************* //


// ************* Task-1 — Variables & Data Types ************* //

// Question: What is the output of each line? Explain why.

console.log(typeof typeof 42);
// Step 1: typeof 42       = "number"  (string)
// Step 2: typeof "number" = "string"  (typeof any string is "string")
// ✅ output: "string"  — NOT "number" — this is a common interview trick

console.log(null == undefined);
// ✅ output: true — special JS rule: null and undefined are loosely equal to each other only
// they are not equal to anything else (0, false, "")

console.log(null === undefined);
// ✅ output: false — strict equality checks type too — null and undefined are different types

let a = null;
console.log(a ?? "default");
// ?? = nullish coalescing — only triggers when left side is null or undefined
// a is null → returns "default"
// ✅ output: "default"

console.log(a || "default");
// || = logical OR — triggers when left side is ANY falsy value (0, "", false, null, undefined)
// a is null → null is falsy → returns "default"
// ✅ output: "default"
// Difference: ?? only reacts to null/undefined — || reacts to all falsy values
// Example: 0 ?? "x" = 0 (zero is valid) | 0 || "x" = "x" (zero is falsy)


// ************* Task-2 — Conditions ************* //

// Question: getTicketPrice(age, isVIP) — return ticket price based on age and VIP status.

// ❌ Mistake 1: return "Free" — task said return 0 for free tickets
// ❌ Mistake 2: if(age<=18 && age<=59) — wrong condition, should be else if(age>=18 && age<=59)

function getTicketPrice(age, isVIP) {
  let price;

  if (age < 5) {
    return 0; // Free — VIP does not apply here, stays 0
  } else if (age >= 5 && age <= 17) {
    price = 200;
  } else if (age >= 18 && age <= 59) {
    price = 500;
  } else {
    price = 300; // age 60 and above
  }

  return isVIP ? price + 1000 : price; // add 1000 if VIP
}

console.log(getTicketPrice(3, true));   // output: 0    — free, VIP ignored
console.log(getTicketPrice(10, false)); // output: 200
console.log(getTicketPrice(10, true));  // output: 1200
console.log(getTicketPrice(30, false)); // output: 500
console.log(getTicketPrice(67, true));  // output: 1300


// ************* Task-3 — Loops ************* //

// Question: fizzbuzz(n) — print Fizz, Buzz, FizzBuzz, or the number.

// Check FizzBuzz FIRST — if you check Fizz first, multiples of both will print "Fizz" only

function fizzbuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz"); // check both together FIRST
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzbuzz(15);
// output: 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz


// ************* Task-4 — Functions ************* //

// Question: What is the output? What concept does this demonstrate?

// This demonstrates CLOSURE — inner functions remember the variables of their outer function
// even after the outer function has finished running
// count lives inside makeCounter but increment/decrement/reset can still access and modify it

function makeCounter(start = 0) {
  let count = start;
  return {
    increment: () => ++count,  // pre-increment — adds 1 then returns
    decrement: () => --count,  // pre-decrement — subtracts 1 then returns
    reset: () => { count = start; return count; },
    value: () => count
  };
}

const counter = makeCounter(10);
console.log(counter.increment()); // output: 11 — count was 10, now 11
console.log(counter.increment()); // output: 12 — count was 11, now 12
console.log(counter.decrement()); // output: 11 — count was 12, now 11
console.log(counter.value());     // output: 11 — just reads count, no change
console.log(counter.reset());     // output: 10 — count reset to start (10)
console.log(counter.value());     // output: 10 — confirms reset worked


// ************* Task-5 — String Methods ************* //

// Question: slugify(title) — convert title to URL slug.

// ❌ Mistake 1: toLowerCase() missing — "Hello-World" not "hello-world"
// ❌ Mistake 2: replaceAll(" ", "-") fails with multiple spaces — use split/filter/join

function slugify(title) {
  return title
    .trim()                          // remove leading and trailing spaces
    .toLowerCase()                   // convert all to lowercase
    .split(" ")                      // split by space — may create empty strings for extra spaces
    .filter(word => word !== "")     // remove empty strings from extra spaces
    .join("-");                      // join words with hyphen
}

console.log(slugify("Hello World"));            // output: hello-world
console.log(slugify("  JavaScript is Fun  "));  // output: javascript-is-fun
console.log(slugify("My Blog Post Title"));     // output: my-blog-post-title


// ************* Task-6 — Math & Numbers (Extra) ************* //

// Question: generateOTP(length) — returns random numeric OTP of given length as string.

// ❌ Mistake: no loop — only generated one digit regardless of length
// ✅ Fix: loop 'length' times, each time add one random digit (0-9) to result string

function generateOTP(length) {
  let otp = "";
  for (let i = 0; i < length; i++) {
    otp += Math.floor(Math.random() * 10); // random digit 0-9
  }
  return otp; // return as string
}

console.log(generateOTP(4)); // output: e.g. "4823"
console.log(generateOTP(6)); // output: e.g. "938201"