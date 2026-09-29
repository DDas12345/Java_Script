// Arrays and Iteration in JavaScript

const numbers = [10, 20, 30, 40, 50];
console.log(numbers[0]);
console.log(numbers.length);

// Adding and removing elements
numbers.push(60);
numbers.pop();
console.log(numbers);

// Iteration
for (let i = 0; i < numbers.length; i++) {
  console.log("Index:", i, "Value:", numbers[i]);
}

for (const number of numbers) {
  console.log("For-of:", number);
}

// Array methods
const doubled = numbers.map((n) => n * 2);
const evens = numbers.filter((n) => n % 2 === 0);
const total = numbers.reduce((sum, n) => sum + n, 0);

console.log(doubled);
console.log(evens);
console.log(total);

// Destructuring
const [first, second, ...rest] = numbers;
console.log(first, second, rest);

// Multi-dimensional arrays
const matrix = [[1, 2], [3, 4]];
console.log(matrix[1][0]);
