// ************* Day-4 | JavaScript | Functions ************* //


// ************* Task-1 ************* //

// Question: Create a function greet(name) that gives output like "Hello, Pawan!".
//           Write it in three ways — declaration, expression, and arrow function.


// --- Way 1: Function Declaration ---
// can be called BEFORE it is defined — because of hoisting

function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Pawan")); // output: Hello, Pawan!


// --- Way 2: Function Expression ---
// cannot be called before this line — no hoisting
// ❌ Wrong: let fun = function greet(name){} — do not give a name in expression
// ✅ Correct: anonymous function assigned to a variable

const greet2 = function (name) {
  return "Hello, " + name + "!";
};
console.log(greet2("Pawan")); // output: Hello, Pawan!


// --- Way 3: Arrow Function ---
// shortest syntax — best for simple one-liner functions

const greet3 = (name) => {
  return "Hello, " + name + "!";
};
console.log(greet3("Pawan")); // output: Hello, Pawan!


// ************* Task-2 ************* //

// Question: Create function add(a, b) that returns the sum.
//           Create function multiply(a, b) that returns the product.
//           Call both and print the result.

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

console.log(add(10, 20));      // output: 30
console.log(multiply(10, 20)); // output: 200


// ************* Task-3 ************* //

// Question: Create an arrow function isEven(num) that returns true if even, false if odd.

// num%2===0 itself returns true or false — no need for if/else

const isEven = (num) => {
  return num % 2 === 0; // directly return the boolean expression
};

console.log(isEven(10)); // output: true
console.log(isEven(15)); // output: false


// ************* Task-4 ************* //

// Question: Create greetUser(name, role = "Guest") with a default parameter.
//           If role is not passed, "Guest" is used by default.

const greetUser = (name, role = "Guest") => {
  return "Hello " + name + ", your role is " + role;
};

console.log(greetUser("Pawan", "Admin")); // output: Hello Pawan, your role is Admin
console.log(greetUser("Rahul"));           // output: Hello Rahul, your role is Guest


// ************* Task-5 ************* //

// Question: Create calculator(a, b, operator) that returns the result based on operator.
//           "+" → add | "-" → subtract | "*" → multiply | "/" → divide | else → "Invalid operator"

// ❌ Wrong approach: a + operator + b — gives "2+3" (string), not 5 (number)
// ✅ Correct: use switch to run the actual math operation

function calculator(a, b, operator) {
  switch (operator) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return a / b;
    default:  return "Invalid operator";
  }
}

console.log(calculator(10, 5, "+"));  // output: 15
console.log(calculator(10, 5, "-"));  // output: 5
console.log(calculator(10, 5, "*"));  // output: 50
console.log(calculator(10, 5, "/"));  // output: 2
console.log(calculator(10, 5, "%"));  // output: Invalid operator


// ************* Task-6 (Extra) ************* //

// Question: Create getFullName that returns the full name.
//           Pass its return value directly into greetFullName — in one line.

// ❌ Your mistake: getFullName had no return statement — it returned undefined
// ✅ Fix: always return the value — otherwise the caller gets undefined

const getFullName = (firstName, lastName) => {
  return firstName + " " + lastName;
};

const greetFullName = (name) => {
  return "Welcome, " + name + "!";
};

console.log(greetFullName(getFullName("Pawan", "Tripathi")));
// output: Welcome, Pawan Tripathi!