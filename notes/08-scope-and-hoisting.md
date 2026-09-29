# Scope and Hoisting

Scope determines where variables and functions are accessible in a program. Hoisting is a JavaScript behavior where declarations are moved to the top of their scope during execution.

## 1. Global Scope

Variables declared outside of functions are in the global scope.

```javascript
let globalVar = "I am global";

function display() {
  console.log(globalVar);
}
```

## 2. Local or Function Scope

Variables declared inside a function are not available outside it.

```javascript
function demo() {
  const localVar = "I am local";
  console.log(localVar);
}
```

## 3. Block Scope

Variables created with `let` and `const` are block-scoped.

```javascript
if (true) {
  let blockVar = "I exist only here";
  console.log(blockVar);
}
```

## 4. Lexical Scope

Inner functions can access variables from outer functions.

```javascript
function outer() {
  const message = "Hello";

  function inner() {
    console.log(message);
  }

  inner();
}
```

## 5. Hoisting

Variable and function declarations are hoisted, but their initialization behavior differs.

### Function Hoisting

```javascript
sayHello();

function sayHello() {
  console.log("Hello");
}
```

This works because function declarations are hoisted.

### `var` Hoisting

```javascript
console.log(name); // undefined
var name = "Alice";
```

This happens because `var` is hoisted and initialized to `undefined`.

### `let` and `const` Hoisting

```javascript
console.log(age); // ReferenceError
let age = 25;
```

These are hoisted to the temporal dead zone before initialization.

## 6. Temporal Dead Zone (TDZ)

The TDZ is the period between entering a scope and the declaration being initialized.

```javascript
console.log(value); // TDZ error
const value = 10;
```

## 7. Best Practices

- Prefer `let` and `const` over `var`
- Keep variable scope as small as possible
- Avoid using variables before they are initialized

## Summary
JavaScript scope controls access to variables. Hoisting affects how declarations are processed before execution, and understanding both helps avoid many bugs.
