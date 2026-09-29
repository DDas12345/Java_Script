# Functions and Scope

Functions allow you to group reusable code.

## Function Declaration
```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Ash"));
```

## Function Expression
```javascript
const greetUser = function (name) {
  return `Hello, ${name}!`;
};
```

## Arrow Functions
```javascript
const add = (a, b) => a + b;
console.log(add(3, 4)); // 7
```

## Parameters and Arguments
```javascript
function sayHello(name, profession) {
  console.log(`Hello, ${name}. Your profession is ${profession}.`);
}

sayHello("Misty", "Gym Leader");
```

## Default Parameters
```javascript
function greetPerson(name = "Guest") {
  console.log(`Hello, ${name}`);
}

greetPerson();
greetPerson("Brock");
```

## Return Statement
```javascript
function multiply(a, b) {
  return a * b;
}

const result = multiply(4, 5);
console.log(result); // 20
```

## Rest Parameters
```javascript
function sum(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3, 4)); // 10
```

## Scope
Scope determines where variables can be accessed.

### Global Scope
```javascript
const value = 10;
```

### Function Scope
```javascript
function test() {
  const localValue = 20;
  console.log(localValue);
}
```

### Block Scope
```javascript
if (true) {
  let blockValue = 5;
  console.log(blockValue);
}
```

## Hoisting
Function declarations are hoisted, but `let` and `const` are not initialized before declaration.

## Summary
Functions make code reusable and modular. Scope controls variable visibility and helps prevent bugs.
