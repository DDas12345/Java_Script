// Variables and Data Types in JavaScript

// 1. var, let, const
var oldStyle = "function-scoped";
let userName = "Debanshika";
const USER_AGE = 25;

console.log(oldStyle);
console.log(userName);
console.log(USER_AGE);

// 2. Primitive data types
const stringValue = "Hello JavaScript";
const numberValue = 42;
const floatValue = 3.14;
const booleanValue = true;
const nullValue = null;
const undefinedValue = undefined;
const bigintValue = 12345678901234567890n;
const symbolValue = Symbol("id");

console.log(typeof stringValue);
console.log(typeof numberValue);
console.log(typeof floatValue);
console.log(typeof booleanValue);
console.log(typeof nullValue);
console.log(typeof undefinedValue);
console.log(typeof bigintValue);
console.log(typeof symbolValue);

// 3. Non-primitive data type
const arrayExample = [1, 2, 3];
const objectExample = { name: "Ash", role: "Trainer" };

console.log(Array.isArray(arrayExample));
console.log(typeof objectExample);

// 4. Type conversion
const numericString = "100";
const parsedNumber = Number(numericString);
const boolValue = Boolean(0);

console.log(parsedNumber + 50);
console.log(boolValue);

// Summary
// - let is preferred for values that can change.
// - const is preferred for fixed values.
// - var is old style and should generally be avoided.
