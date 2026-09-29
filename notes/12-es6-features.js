// ES6+ Features in JavaScript

// 1. let and const
let count = 1;
const fixedValue = 100;
count += 1;
console.log(count, fixedValue);

// 2. Template literals
const user = "Ash";
console.log(`Welcome back, ${user}!`);

// 3. Destructuring
const person = { firstName: "Misty", lastName: "Water" };
const { firstName, lastName } = person;
console.log(firstName, lastName);

const numbers = [10, 20, 30];
const [first, second] = numbers;
console.log(first, second);

// 4. Spread and rest
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);

function totalValues(...values) {
  return values.reduce((sum, value) => sum + value, 0);
}

console.log(totalValues(1, 2, 3, 4));

// 5. Arrow functions
const square = (n) => n * n;
console.log(square(6));

// 6. Default parameters
const greetUser = (name = "Guest") => `Hello, ${name}!`;
console.log(greetUser());
console.log(greetUser("Brock"));

// Summary
// ES6+ introduced cleaner, more readable, and more powerful JavaScript syntax.
