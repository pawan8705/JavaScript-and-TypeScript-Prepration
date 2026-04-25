"use strict";
// ************* Day-4 | TypeScript | Functions ************* //
// ************* Task-1 ************* //
// Question: Rewrite JS Task 1 in TypeScript — arrow function version only.
//           Add type annotation to both the parameter and return type.
const greet = (name) => {
    return "Hello, " + name + "!";
};
console.log(greet("Pawan")); // output: Hello, Pawan!
// ************* Task-2 ************* //
// Question: Write add and multiply functions in TypeScript with proper types.
function add(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}
console.log(add(10, 20)); // output: 30
console.log(multiply(10, 20)); // output: 200
// ************* Task-3 ************* //
// Question: Write isEven as an arrow function — num: number parameter, boolean return type.
const isEven = (num) => {
    return num % 2 === 0; // directly return boolean — no if/else needed
};
console.log(isEven(10)); // output: true
console.log(isEven(15)); // output: false
// ************* Task-4 ************* //
// Question: Write greetUser with a default parameter in TypeScript.
// ❌ Your mistake: return type was :string but you used console.log and returned nothing
// ✅ Fix: return the string — let the caller decide to console.log it
function greetUser(name, role = "Guest") {
    return "Hello " + name + ", your role is " + role;
}
console.log(greetUser("Pawan", "Admin")); // output: Hello Pawan, your role is Admin
console.log(greetUser("Rahul")); // output: Hello Rahul, your role is Guest
// ************* Task-5 ************* //
// Question: Write calculator(a, b, operator): number | string
//           Explain in comment why the return type is number | string.
// Return type is number | string because:
// when the operator is valid (+, -, *, /) the result is a number
// when the operator is invalid the result is the string "Invalid operator"
// TypeScript forces us to declare all possible return types using union type
function calculator(a, b, operator) {
    switch (operator) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return a / b;
        default: return "Invalid operator";
    }
}
console.log(calculator(10, 5, "+")); // output: 15
console.log(calculator(10, 5, "-")); // output: 5
console.log(calculator(10, 5, "*")); // output: 50
console.log(calculator(10, 5, "/")); // output: 2
console.log(calculator(10, 5, "%")); // output: Invalid operator
// ************* Task-6 (Extra) ************* //
// Question: Understand and write function as a parameter (callback concept).
// operation parameter type is: (x: number, y: number) => number
// This means: operation is a FUNCTION that accepts two numbers and returns a number
// We are not passing a value — we are passing a function itself as an argument
// This pattern is called a CALLBACK FUNCTION — very common in real projects
function applyOperation(a, b, operation // type of operation is a function
) {
    return operation(a, b); // call the passed function with a and b
}
console.log(applyOperation(10, 5, (x, y) => x + y)); // output: 15
console.log(applyOperation(10, 5, (x, y) => x * y)); // output: 50
