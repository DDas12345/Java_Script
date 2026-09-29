// Dates, Math, and Regular Expressions in JavaScript

// Date
const now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());

// Math
console.log(Math.PI);
console.log(Math.sqrt(16));
console.log(Math.random());
console.log(Math.pow(2, 5));

// Regular Expressions
const pattern = /[A-Z]+/;
console.log(pattern.test("HELLO"));
console.log("JavaScript".match(/[a-z]+/i));

const email = "ash@example.com";
const emailPattern = /^[\w.-]+@[\w.-]+\.\w+$/;
console.log(emailPattern.test(email));
