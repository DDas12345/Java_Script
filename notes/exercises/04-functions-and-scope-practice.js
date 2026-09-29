// Practice: Functions and Scope
// 1. Write a function that returns your name.
// 2. Use default parameter values.
// 3. Show block scope with let.

function getName() {
  return "Ash";
}

function multiply(a, b = 2) {
  return a * b;
}

console.log(getName());
console.log(multiply(4));

if (true) {
  let message = "Block scoped";
  console.log(message);
}
