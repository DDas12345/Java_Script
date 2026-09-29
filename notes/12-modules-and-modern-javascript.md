# Modules and Modern JavaScript

Modern JavaScript introduced many features that improve code structure and readability.

## ES6 Features
### let and const
```javascript
let score = 10;
const name = "Ash";
```

### Arrow Functions
```javascript
const multiply = (a, b) => a * b;
```

### Template Literals
```javascript
const message = `Hello, ${name}!`;
```

### Destructuring
```javascript
const person = { name: "Misty", age: 16 };
const { name, age } = person;
```

### Spread Operator
```javascript
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
```

## Modules
JavaScript files can be split into modules and imported as needed.

### Exporting
```javascript
// math.js
export function add(a, b) {
  return a + b;
}
```

### Importing
```javascript
import { add } from "./math.js";
console.log(add(2, 3));
```

## Default Exports
```javascript
// greet.js
export default function greet() {
  return "Hi";
}
```

```javascript
import greet from "./greet.js";
```

## Optional Chaining
```javascript
const user = { profile: { name: "Brock" } };
console.log(user.profile?.name);
```

## Nullish Coalescing
```javascript
const value = 0 ?? 10;
console.log(value); // 0
```

## Summary
Modern JavaScript provides cleaner syntax, better structure, and more maintainable code through features like modules, destructuring, arrow functions, and the spread operator.
