// ************* Day-6 | JavaScript | String Methods ************* //


// ************* Task-1 ************* //

// Question: Create str = "  Hello, Pawan Tripathi!  ". Log:
//           trim | toUpperCase | toLowerCase | length after trim

let str = "  Hello, Pawan Tripathi!  ";

console.log(str.trim());        // output: Hello, Pawan Tripathi!
console.log(str.toUpperCase()); // output:   HELLO, PAWAN TRIPATHI!  
console.log(str.toLowerCase()); // ✅ toLowerCase() — brackets required, it is a function call
                                // ❌ str.toLowerCase without () prints the function itself, not the result

let trimmed = str.trim();
console.log(trimmed.length);    // output: 23


// ************* Task-2 ************* //

// Question: Check includes, startsWith, endsWith on email.

let email = "pawan@gmail.com";

console.log(email.includes("gmail"));    // output: true
console.log(email.startsWith("pawan"));  // output: true
console.log(email.endsWith(".com"));     // output: true


// ************* Task-3 ************* //

// Question: Replace "best", extract "JavaScript" with slice(), find index of "best".

let sentence = "JavaScript is the best language";

console.log(sentence.replace("best", "most popular")); // output: JavaScript is the most popular language
console.log(sentence.slice(0, 10));                    // output: JavaScript
console.log(sentence.indexOf("best"));                 // output: 18


// ************* Task-4 ************* //

// Question: Split fullName into first and last name — store separately.

let fullName = "Pawan Tripathi";
let nameParts = fullName.split(" "); // split by space — gives ["Pawan", "Tripathi"]

let firstName = nameParts[0];
let lastName = nameParts[1];

console.log(firstName); // output: Pawan
console.log(lastName);  // output: Tripathi


// ************* Task-5 ************* //

// Question: maskEmail("pawan@gmail.com") → "p***n@gmail.com"
//           First and last char of username visible, middle replaced with ***

// ❌ Your mistake: manually added "@gmail.com" — email already contains it
// ✅ Steps:
//    1. split by "@" to separate username and domain
//    2. take first and last char of username
//    3. join with "***" in between + "@" + domain

const maskEmail = (email) => {
  let parts = email.split("@");         // ["pawan", "gmail.com"]
  let username = parts[0];              // "pawan"
  let domain = parts[1];               // "gmail.com"

  let masked = username[0] + "***" + username[username.length - 1]; // "p***n"
  return masked + "@" + domain;        // "p***n@gmail.com"
};

console.log(maskEmail("pawan@gmail.com"));   // output: p***n@gmail.com
console.log(maskEmail("rahul@yahoo.com"));   // output: r***l@yahoo.com


// ************* Task-6 (Extra) ************* //

// Question: isPalindrome(str) — true if string reads same forwards and backwards.

// ❌ Your mistake: for loop logic was completely wrong
// ✅ Simple approach:
//    1. reverse the string
//    2. compare reversed with original
//    3. if same → palindrome

const isPalindrome = (str) => {
  let reversed = str.split("").reverse().join(""); // split letters, reverse, join back
  return str === reversed; // returns true or false directly
};

console.log(isPalindrome("racecar")); // output: true
console.log(isPalindrome("hello"));   // output: false
console.log(isPalindrome("madam"));   // output: true