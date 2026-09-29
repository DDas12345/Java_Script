// Practice: Modules and Modern JavaScript
// 1. Write an arrow function.
// 2. Use destructuring.
// 3. Use spread syntax.

const sum = (a, b) => a + b;
console.log(sum(2, 3));

const person = { name: "Ash", age: 16 };
const { name, age } = person;
console.log(name, age);

const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2);
