# Functions

Functions are reusable blocks of code that perform a specific task. They help keep code organized, modular, and easier to maintain.

## 1. Function Declaration

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Alice"));
```

### Features
- Can be called later
- Reusable
- Can accept parameters
- Can return a value

## 2. Function Expression

```javascript
const greet = function (name) {
  return `Hello, ${name}!`;
};
```

Function expressions are often assigned to variables.

## 3. Arrow Functions

Arrow functions provide a shorter syntax.

```javascript
const add = (a, b) => a + b;
console.log(add(3, 4)); // 7
```

### When to use arrow functions
- Short functions
- Callback functions
- Modern JavaScript style

## 4. Parameters and Arguments

```javascript
function sayHello(name, profession) {
  console.log(`Hello ${name}, you are a ${profession}.`);
}

sayHello("Ash", "Pokemon Trainer");
```

- `name` and `profession` are parameters.
- Values passed when calling the function are arguments.

## 5. Return Values

A function can return a value.

```javascript
function multiply(a, b) {
  return a * b;
}

const result = multiply(4, 5);
console.log(result); // 20
```

## 6. Default Parameters

```javascript
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(greet()); // Hello, Guest!
```

## 7. Rest Parameters

The rest parameter collects multiple arguments into an array.

```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
```

## 8. Callback Functions

Functions can be passed as arguments.

```javascript
function processNumbers(numbers, callback) {
  for (const num of numbers) {
    callback(num);
  }
}

processNumbers([1, 2, 3], (n) => console.log(n * 2));
```

## 9. Higher-Order Functions

A higher-order function either:
- accepts another function as an argument, or
- returns a function

```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map((n) => n * 2);
console.log(doubled); // [2, 4, 6]
```

## 10. Scope in Functions

Functions create their own scope.

```javascript
let globalVar = "I am global";

function demo() {
  let localVar = "I am local";
  console.log(globalVar);
  console.log(localVar);
}
```

## Summary
Functions make code reusable and organized. JavaScript supports function declarations, expressions, arrow functions, callbacks, and rest parameters, all of which are essential for modern programming.
