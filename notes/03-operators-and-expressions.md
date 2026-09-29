# Operators and Expressions

Operators are symbols that perform operations on values and variables.

## Arithmetic Operators
```javascript
let a = 10;
let b = 5;

console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0
console.log(a ** b); // 100000
```

## Assignment Operators
```javascript
let x = 10;
x += 5;  // x = x + 5
x -= 2;  // x = x - 2
x *= 3;  // x = x * 3
```

## Comparison Operators
```javascript
console.log(5 > 3);     // true
console.log(5 < 3);     // false
console.log(5 >= 5);    // true
console.log(5 <= 4);    // false
console.log(5 === 5);   // true
console.log(5 !== 4);   // true
```

## Logical Operators
```javascript
const hasAccess = true;
const isAdmin = false;

console.log(hasAccess && isAdmin); // false
console.log(hasAccess || isAdmin); // true
console.log(!hasAccess); // false
```

## Unary Operators
```javascript
let num = 5;
console.log(++num); // 6
console.log(num--); // 6 then num becomes 5
```

## String Concatenation
```javascript
const firstName = "Ash";
const lastName = "Ketchum";
console.log(firstName + " " + lastName);
```

## Template Literals
```javascript
const name = "Pikachu";
console.log(`My favorite Pokémon is ${name}.`);
```

## Operator Precedence
JavaScript evaluates expressions according to precedence rules. Multiplication and division happen before addition and subtraction.

```javascript
console.log(10 + 5 * 2); // 20
```

## Expressions
An expression is any valid unit of code that resolves to a value.

```javascript
const total = 10 + 5;
```

## Summary
Operators allow you to manipulate and compare values. Understanding them is essential for writing logic and calculations in JavaScript.
