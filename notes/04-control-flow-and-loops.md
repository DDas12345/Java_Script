# Control Flow and Loops

Control flow determines the order in which statements are executed.

## If Statements
```javascript
const score = 80;

if (score >= 75) {
  console.log("Pass");
} else {
  console.log("Fail");
}
```

## Else If
```javascript
const marks = 88;

if (marks >= 90) {
  console.log("A");
} else if (marks >= 80) {
  console.log("B");
} else {
  console.log("C");
}
```

## Switch Statement
```javascript
const day = 2;

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

## Ternary Operator
```javascript
const age = 18;
const status = age >= 18 ? "Adult" : "Minor";
console.log(status);
```

## For Loop
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

## While Loop
```javascript
let count = 0;

while (count < 3) {
  console.log(count);
  count++;
}
```

## Do While Loop
```javascript
let value = 0;

do {
  console.log(value);
  value++;
} while (value < 3);
```

## For...of Loop
Used for arrays and iterable values:

```javascript
const names = ["Ash", "Misty", "Brock"];

for (const name of names) {
  console.log(name);
}
```

## For...in Loop
Used for iterating object keys:

```javascript
const person = { name: "Ash", age: 16 };

for (const key in person) {
  console.log(key, person[key]);
}
```

## Break and Continue
```javascript
for (let i = 0; i < 10; i++) {
  if (i === 3) continue;
  if (i === 7) break;
  console.log(i);
}
```

## Summary
Control flow lets you make decisions and repeat instructions. Loops are useful when processing repeated tasks or arrays.
