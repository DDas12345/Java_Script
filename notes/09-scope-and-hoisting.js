// Scope and Hoisting in JavaScript

// 1. Global scope
const globalValue = "I am global";
console.log(globalValue);

// 2. Function scope
function demoFunction() {
  const localValue = "I am local";
  console.log(localValue);
}

demoFunction();

// 3. Block scope with let and const
if (true) {
  let blockValue = "Visible only inside this block";
  const anotherValue = 10;
  console.log(blockValue, anotherValue);
}

// 4. Hoisting behavior
console.log(hoistedVar); // undefined due to hoisting
var hoistedVar = "This is hoisted";

// function declarations are hoisted too
console.log(greet());
function greet() {
  return "Hello from hoisted function";
}

// Summary
// Scope controls visibility of variables, and hoisting affects initialization timing.
