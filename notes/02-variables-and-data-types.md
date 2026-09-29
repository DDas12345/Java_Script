# Variables and Data Types

Variables store data for later use.

## Declaring Variables
JavaScript supports three main keywords:

```javascript
var name = "Alice";    // older style
let age = 25;          // block-scoped
const PI = 3.14;       // constant
```

### `var`
- function-scoped
- older style
- can cause confusion in some situations

### `let`
- block-scoped
- preferred for variables that change

### `const`
- block-scoped
- cannot be reassigned after initialization

## Primitive Data Types
JavaScript has primitive data types:

### 1. String
```javascript
const name = "Misty";
```

### 2. Number
```javascript
const score = 98;
const price = 19.99;
```

### 3. Boolean
```javascript
const isActive = true;
```

### 4. Undefined
```javascript
let value;
console.log(value); // undefined
```

### 5. Null
```javascript
const empty = null;
```

### 6. Symbol
```javascript
const unique = Symbol("id");
```

### 7. BigInt
```javascript
const largeNumber = 12345678901234567890n;
```

## Non-Primitive Data Types
### Object
```javascript
const student = {
  name: "Brock",
  age: 20
};
```

### Array
```javascript
const numbers = [1, 2, 3, 4];
```

## Type Checking
```javascript
console.log(typeof "JavaScript"); // string
console.log(typeof 42); // number
console.log(typeof true); // boolean
```

## Reassignment
```javascript
let count = 1;
count = count + 1;
console.log(count); // 2
```

## Constants
```javascript
const user = {
  name: "Ash"
};

user.name = "Gary"; // allowed for object property mutation
```

## Summary
Variables hold values, and data types define the kind of value stored. Choose `let` for changeable values and `const` for fixed values.
