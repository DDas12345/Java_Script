// Arrays in JavaScript

const numbers = [10, 20, 30, 40];
console.log(numbers[0]);

// 1. Array methods
console.log(numbers.length);
console.log(numbers.push(50));
console.log(numbers);

console.log(numbers.pop());
console.log(numbers);

console.log(numbers.unshift(5));
console.log(numbers);

console.log(numbers.shift());
console.log(numbers);

// 2. Iteration
for (const value of numbers) {
  console.log("Value:", value);
}

// 3. map, filter, reduce
const doubled = numbers.map((number) => number * 2);
const evens = numbers.filter((number) => number % 2 === 0);
const total = numbers.reduce((sum, number) => sum + number, 0);

console.log(doubled);
console.log(evens);
console.log(total);

// 4. Array destructuring
const [first, second, ...rest] = numbers;
console.log(first, second, rest);

// 5. Nested arrays
const matrix = [
  [1, 2],
  [3, 4],
];

console.log(matrix[1][0]);

// Summary
// Arrays store ordered collections and support powerful built-in methods.
