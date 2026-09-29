# Operators and Expressions

Operators are symbols used to perform operations on values or variables. Expressions combine values and operators to produce a result.

## 1. Arithmetic Operators

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

### Examples
- `+` addition
- `-` subtraction
- `*` multiplication
- `/` division
- `%` remainder
- `**` exponentiation

## 2. Assignment Operators

```javascript
let x = 10;
x += 5;  // x = x + 5
x -= 2;  // x = x - 2
x *= 3;  // x = x * 3
x /= 2;  // x = x / 2
```

## 3. Comparison Operators

These return boolean values.

```javascript
console.log(5 > 3);   // true
console.log(5 < 3);   // false
console.log(5 >= 5);  // true
console.log(5 <= 4);  // false
console.log(5 == "5"); // true
console.log(5 === "5"); // false
```

### Important difference
- `==` compares values loosely
- `===` compares both value and type strictly

Use `===` and `!==` in modern JavaScript for safer comparisons.

## 4. Logical Operators

```javascript
let hasAccess = true;
let isAdmin = false;

console.log(hasAccess && isAdmin); // false
console.log(hasAccess || isAdmin); // true
console.log(!hasAccess);           // false
```

### Common logical operators
- `&&` logical AND
- `||` logical OR
- `!` logical NOT

## 5. Bitwise Operators

Bitwise operators work on 32-bit integers.

```javascript
console.log(5 & 1); // 1
console.log(5 | 1); // 5
console.log(5 ^ 1); // 4
console.log(~5);    // -6
```

These are mostly used in lower-level programming tasks and are less common in everyday web development.

## 6. Increment and Decrement

```javascript
let count = 0;
console.log(++count); // 1
console.log(count++); // 1, then count becomes 2
console.log(--count); // 1
```

### Notes
- `++count` increments before returning
- `count++` returns the current value, then increments

## 7. String Operators

```javascript
let firstName = "John";
let lastName = "Doe";
console.log(firstName + " " + lastName); // John Doe
```

The `+` operator concatenates strings.

## 8. Conditional (Ternary) Operator

```javascript
let age = 18;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // Adult
```

This is a short form of an if/else statement.

## 9. Operator Precedence

JavaScript evaluates operators based on precedence. Example:

```javascript
let result = 10 + 5 * 2;
console.log(result); // 20
```

Because multiplication is evaluated before addition.

## 10. Expressions

An expression is any valid combination of values and operators that produces a value.

```javascript
let x = 10;
let y = x + 5; // expression
console.log(y); // 15
```

## Summary
Operators let you perform arithmetic, comparisons, logic, assignment, and more. Expressions are the pieces of code that produce values and are central to JavaScript programming.
