// JavaScript Operators

// 1. Arithmetic operators
const sum = 10 + 5;
const difference = 10 - 5;
const product = 10 * 5;
const quotient = 10 / 5;
const remainder = 10 % 3;
const power = 2 ** 3;

console.log(sum, difference, product, quotient, remainder, power);

// 2. Assignment operators
let value = 10;
value += 5; // value = value + 5
value *= 2;
console.log(value);

// 3. Comparison operators
console.log(5 == "5"); // loose equality
console.log(5 === "5"); // strict equality
console.log(10 > 5);
console.log(10 >= 10);
console.log(3 < 7);

// 4. Logical operators
const hasAccess = true;
const isAdmin = false;
console.log(hasAccess && isAdmin);
console.log(hasAccess || isAdmin);
console.log(!isAdmin);

// 5. Bitwise operators
console.log(5 & 1);
console.log(5 | 1);
console.log(~5);

// 6. Ternary operator
const age = 18;
const status = age >= 18 ? "Adult" : "Minor";
console.log(status);

// 7. Nullish coalescing and optional chaining
const user = { profile: { name: "Misty" } };
const userName = user?.profile?.name ?? "Anonymous";
console.log(userName);

// Summary
// Operators help perform calculations, compare values, and control logic flow.
