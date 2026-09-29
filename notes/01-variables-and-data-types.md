# Variables and Data Types

JavaScript is a dynamically typed language, which means variables do not need explicit type declarations. The runtime determines the type at execution time.

## 1. Declaring Variables

JavaScript provides three main ways to declare variables:

```javascript
var name = "Alice";   // older style, function-scoped
let age = 25;          // block-scoped, preferred for variables
const PI = 3.14;       // block-scoped, cannot be reassigned
```

### `var`
- Function-scoped
- Can be re-declared in the same scope
- Hoisted to the top of the function
- Not recommended in modern JavaScript

### `let`
- Block-scoped
- Can be reassigned
- Best choice for variables that change

### `const`
- Block-scoped
- Cannot be reassigned
- Best choice for fixed values
- Objects and arrays declared with `const` can still be mutated

## 2. Primitive Data Types

JavaScript primitive types include:

```javascript
let name = "Alice";      // string
let age = 25;             // number
let isStudent = true;     // boolean
let empty = null;         // null
let notAssigned;          // undefined
let id = Symbol("id");   // symbol
let big = 12345678901234567890n; // bigint
```

### String
A string is a sequence of characters enclosed in quotes.

```javascript
let message = "Hello, world!";
let template = `Hello, ${name}!`;
```

### Number
JavaScript numbers are floating-point values.

```javascript
let price = 19.99;
let total = 100 + 25;
```

### Boolean
Boolean values are either `true` or `false`.

```javascript
let hasAccess = true;
```

### Null vs Undefined
- `null` means an intentional absence of value.
- `undefined` means a variable was declared but not assigned.

```javascript
let x = null;
let y;
console.log(x); // null
console.log(y); // undefined
```

## 3. Non-Primitive Data Types

### Object
Objects are collections of key-value pairs.

```javascript
const person = {
  name: "Alice",
  age: 25,
  city: "New York"
};
```

### Array
Arrays are ordered lists of values.

```javascript
const numbers = [1, 2, 3, 4, 5];
```

## 4. Type Conversion

JavaScript can convert between types automatically or manually.

```javascript
let value = "42";
console.log(Number(value));  // 42
console.log(String(42));    // "42"
console.log(Boolean(0));    // false
```

### Implicit Conversion

```javascript
console.log("5" + 2); // "52"
console.log("5" - 2); // 3
```

## 5. Checking Types

Use `typeof` to identify a variable’s type.

```javascript
console.log(typeof "hello"); // string
console.log(typeof 42);        // number
console.log(typeof true);      // boolean
console.log(typeof {});        // object
console.log(typeof []);        // object
```

## 6. Best Practices

- Prefer `let` for variables that change.
- Prefer `const` for values that should not change.
- Avoid `var` in modern code.
- Use meaningful names.

## Summary
Variables store values, and JavaScript supports primitive and object-based data types. Understanding how values are declared, assigned, converted, and checked is fundamental to writing effective JavaScript.
