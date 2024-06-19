// 1. Strings are texts
console.log("hello"); // hello

// 2. Concatenating multiple strings
console.log("hello" + "there" + "buddy"); // hellotherebuddy

// Automatic Type Conversion
// if we add a string to a number, javascript will convert the number
// into a string
console.log("hello" + 3); // hello3

// 3. Escape character (\") or (\')
console.log("I\"m' learning JavaScript"); // I"m' learning JavaScript

// 4. Escape character (\n) - new line
console.log("Dear Tim, \nHow are you?");
/*
Dear Tim, 
How are you?
*/

// 5. Template string - gives ability of interpolation
// interpolation - using a value directly inside a string using ${}

console.log(`Sum of two and two is = ${2 + 2}`);
// Sum of two and two is = 4

// 6. Template string multiline string feature
console.log(`Hello John,
How are you doing today?`);
/*
Hello John,
How are you doing today?
*/
