# Control Flow

Control flow determines the order in which JavaScript code executes. It allows you to make decisions and repeat blocks of code.

## 1. If Statements

```javascript
let age = 18;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

### Else If

```javascript
let score = 75;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else {
  console.log("Fail");
}
```

## 2. Switch Statements

Use a switch statement when you have many possible values.

```javascript
let day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Another day");
}
```

## 3. For Loops

A for loop repeats code a fixed number of times.

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

## 4. While Loops

A while loop runs as long as a condition is true.

```javascript
let count = 0;

while (count < 5) {
  console.log(count);
  count++;
}
```

## 5. Do While Loops

A do/while loop always runs at least once before checking the condition.

```javascript
let num = 0;

do {
  console.log(num);
  num++;
} while (num < 3);
```

## 6. For...of Loops

Used for iterating over arrays and iterable values.

```javascript
const fruits = ["Apple", "Banana", "Orange"];

for (const fruit of fruits) {
  console.log(fruit);
}
```

## 7. For...in Loops

Used for iterating over object keys.

```javascript
const person = { name: "Alice", age: 25 };

for (const key in person) {
  console.log(key + ": " + person[key]);
}
```

## 8. Break and Continue

### Break
Stops the loop completely.

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}
```

### Continue
Skips the current iteration.

```javascript
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}
```

## 9. Ternary Operator

A compact alternative to an if/else statement.

```javascript
let isAdult = true;
let message = isAdult ? "Welcome" : "Access denied";
console.log(message);
```

## 10. Logical Conditions

```javascript
if (age >= 18 && age < 60) {
  console.log("Working age");
}
```

## Summary
Control flow helps your program decide what to do and when to do it. Conditions and loops are core building blocks in JavaScript.
