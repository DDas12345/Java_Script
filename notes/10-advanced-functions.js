// Advanced Functions in JavaScript

// 1. Higher-order functions
const numbers = [1, 2, 3, 4];
const squared = numbers.map((number) => number * number);
console.log(squared);

const evens = numbers.filter((number) => number % 2 === 0);
console.log(evens);

const total = numbers.reduce((sum, number) => sum + number, 0);
console.log(total);

// 2. Closures
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());

// 3. Callback functions
function doTask(task) {
  task();
}

doTask(() => console.log("Task completed"));

// 4. Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("IIFE executed immediately");
})();

// Summary
// Advanced functions let you write reusable, modular, and expressive code patterns.
