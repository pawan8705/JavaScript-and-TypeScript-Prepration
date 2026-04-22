"use strict";
// ************* Task-1 *********************  //
const myname = "Pawan Tripathi";
let age = 20;
const city = "Khatima";
console.log(myname);
console.log(age);
console.log(city);
// ************* Task-2 *********************  //
let price = 100;
// price = "hello";  
// Error: The type of Price is number and now assign string so give an error.
// ************* Task-3 *********************  //
// let isLoggedIn: boolean = "yes"; {Change into TypeScript}
let isLoggedIn = true;
// yes is not a boolean value in boolean have two value true or false. Yes is a string
// ************* Task-4 *********************  //
let py = null; // | = Union symbol
console.log(py); // output: null
py = 23;
console.log(py); // output: 23
// ************* Task-5 *********************  //
// Question: What is any type.
//  Any type means the type of variable is anything between number, boolean, string, array, null etc. example : let ax:any = 24;
// Any type distroye the safety of TypeScript so We need to avoid any type and use Unknown type. 
