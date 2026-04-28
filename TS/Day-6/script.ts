// ************* Day-6 | TypeScript | String Methods ************* //


// ************* Task-1 ************* //

// Question: Same as JS Task 1 — variable must be :string, length must be :number.

// ❌ Your mistake: declared str1 but logged str — always match the name

let str: string = "  Hello, Pawan Tripathi!  ";

console.log(str.trim());        // output: Hello, Pawan Tripathi!
console.log(str.toUpperCase()); // output:   HELLO, PAWAN TRIPATHI!  
console.log(str.toLowerCase()); // output:   hello, pawan tripathi!  

let trimmedLength: number = str.trim().length;
console.log(trimmedLength);     // output: 23


// ************* Task-2 ************* //

// Question: validateEmail(email: string): boolean
//           Return true if includes "@" AND ends with ".com"

// ❌ Your mistake: console.log("pawan@gmail.com") — logged a string, not called the function

function validateEmail(email: string): boolean {
  if (email.includes("@") && email.endsWith(".com")) {
    return true;
  } else {
    return false;
  }
}

console.log(validateEmail("pawan@gmail.com")); // output: true
console.log(validateEmail("pawangmail.com"));  // output: false — no @
console.log(validateEmail("pawan@gmail.org"));  // output: false — not .com


// ************* Task-3 ************* //

// Question: formatName("pawan tripathi") → "Pawan Tripathi"
//           First letter of each word should be uppercase.

// ❌ Mistake 1: function keyword missing
// ❌ Mistake 2: split("") splits every single letter — split(" ") splits words
// ✅ Steps:
//    1. split sentence by " " to get words array
//    2. for each word: take first letter, uppercase it, add rest of word
//    3. join words back with " "

function formatName(fullName: string): string {
  let words = fullName.split(" "); // ["pawan", "tripathi"]

  let formatted = words.map((word) => {
    return word[0].toUpperCase() + word.slice(1); // "P" + "awan" = "Pawan"
  });

  return formatted.join(" "); // ["Pawan", "Tripathi"] → "Pawan Tripathi"
}

console.log(formatName("pawan tripathi")); // output: Pawan Tripathi
console.log(formatName("hello world"));    // output: Hello World


// ************* Task-4 ************* //

// Question: countWords(sentence: string): number — return word count using split().

// ❌ Mistake 1: split("") splits every letter — need split(" ") for words
// ❌ Mistake 2: loop with return inside — returns on first iteration always
// ✅ Simple: split by space and return the length — no loop needed at all

function countWords(sentence: string): number {
  return sentence.split(" ").length; // split gives array of words, .length is the count
}

console.log(countWords("Pawan Tripathi"));               // output: 2
console.log(countWords("JavaScript is the best"));       // output: 4
console.log(countWords("I love TypeScript so much"));    // output: 5


// ************* Task-5 ************* //

// Question: truncate(str, maxLength): string
//           If longer than maxLength → cut and add "..."
//           If shorter or equal → return as is

// Steps:
//    1. check if str.length > maxLength
//    2. if yes → slice(0, maxLength) + "..."
//    3. if no  → return str as is

function truncate(str: string, maxLength: number): string {
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + "..."; // cut at maxLength, add ...
  }
  return str; // short enough — return unchanged
}

console.log(truncate("Hello Pawan Tripathi", 10)); // output: Hello Pawa...
console.log(truncate("Hi", 10));                    // output: Hi


// ************* Task-6 (Extra) ************* //

// Question: reverseWords(sentence: string): string
//           Reverse the ORDER of words — not the letters.

// Steps:
//    1. split by " " to get words array
//    2. reverse the array
//    3. join back with " "

function reverseWords(sentence: string): string {
  return sentence.split(" ").reverse().join(" ");
  // "I love JavaScript" → ["I","love","JavaScript"] → ["JavaScript","love","I"] → "JavaScript love I"
}

console.log(reverseWords("I love JavaScript")); // output: JavaScript love I
console.log(reverseWords("Hello World"));        // output: World Hello