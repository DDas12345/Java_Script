# ES6+ Features

ES6 (ECMAScript 2015) introduced several major improvements to JavaScript syntax and functionality.

## 1. Let and Const

```javascript
let count = 0;
count += 1;

const url = "https://example.com";
```

- `let` allows reassignment
- `const` prevents reassignment
- Both are block-scoped

## 2. Template Literals

```javascript
const name = "Alice";
console.log(`Hello, ${name}!`);
```

Template strings allow easy interpolation and multi-line strings.

## 3. Arrow Functions

```javascript
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5
```

Arrow functions are shorter and keep lexical `this` binding.

## 4. Default Parameters

```javascript
function greet(name = "Guest") {
  return `Hello, ${name}`;
}
```

## 5. Rest Parameters

```javascript
function total(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}
```

## 6. Spread Operator

```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]
```

The spread operator expands an iterable into individual values.

## 7. Destructuring

```javascript
const person = { name: "Alice", age: 25 };
const { name, age } = person;
console.log(name, age);
```

Also works for arrays:

```javascript
const [first, second] = ["A", "B"];
```

## 8. Promises

```javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Done"), 1000);
  });
};

fetchData().then((data) => console.log(data));
```

## 9. Async/Await

```javascript
async function loadData() {
  const data = await fetchData();
  console.log(data);
}
```

## 10. Modules

```javascript
// file: math.js
export function add(a, b) {
  return a + b;
}
```

```javascript
import { add } from "./math.js";
console.log(add(2, 3));
```

## Summary
ES6+ introduced cleaner and more powerful syntax, making JavaScript easier to read, maintain, and scale for modern applications.
