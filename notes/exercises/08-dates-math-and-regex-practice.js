// Practice: Dates, Math, and Regex
// 1. Print the current year.
// 2. Find the square root of 25.
// 3. Test a regex for a valid email.

const today = new Date();
console.log(today.getFullYear());
console.log(Math.sqrt(25));

const emailPattern = /^[\w.-]+@[\w.-]+\.\w+$/;
console.log(emailPattern.test("ash@example.com"));
