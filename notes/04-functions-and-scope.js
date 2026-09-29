// Functions and Scope in JavaScript

// Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Brock"));

// Function expression
const welcome = function (name) {
  return `Welcome, ${name}!`;
};
console.log(welcome("Misty"));

// Arrow function
const sum = (a, b) => a + b;
console.log(sum(20, 10));

// Default parameters
function multiply(a, b = 2) {
  return a * b;
}
console.log(multiply(5));
console.log(multiply(5, 4));

// Rest parameters
function total(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(total(1, 2, 3, 4, 5));

// Function scope
function showScope() {
  const local = "Local variable";
  console.log(local);
}
showScope();

// Block scope
if (true) {
  let blockValue = "Visible only here";
  console.log(blockValue);
}

// Hoisting note: var is hoisted, let and const are not initialized before declaration.
