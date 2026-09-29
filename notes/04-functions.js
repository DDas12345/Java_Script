// Functions in JavaScript

// 1. Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Ash"));

// 2. Function expression
const sayBye = function (name) {
  return `Goodbye, ${name}!`;
};

console.log(sayBye("Misty"));

// 3. Arrow function
const add = (a, b) => a + b;
console.log(add(10, 20));

// 4. Default parameters
function multiply(a, b = 2) {
  return a * b;
}

console.log(multiply(5));
console.log(multiply(5, 4));

// 5. Rest parameter
function sumAll(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

console.log(sumAll(1, 2, 3, 4, 5));

// 6. Callback function
function processNumber(value, callback) {
  callback(value * 2);
}

processNumber(10, (result) => console.log("Result:", result));

// Summary
// Functions help reuse code and organize logic into smaller blocks.
