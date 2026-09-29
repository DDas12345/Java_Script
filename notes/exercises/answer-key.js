// JavaScript Exercise Answer Key

// 00 - Introduction to JavaScript
console.log("JavaScript is a scripting language used to add interactivity and logic to websites.");

// 01 - Variables and Data Types
const name = "Debanshika";
let age = 20;
age = 21;
console.log(name);
console.log(age);
console.log(typeof 100);
console.log(typeof true);

// 02 - Operators and Expressions
const result = 15 + 5;
console.log(result);
console.log(8 === "8");

const userAge = 18;
const status = userAge >= 18 ? "Adult" : "Minor";
console.log(status);

// 03 - Control Flow and Loops
let score = 80;
if (score >= 75) {
  console.log("Pass");
} else {
  console.log("Fail");
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

let count = 0;
while (count < 3) {
  console.log("Count:", count);
  count++;
}

// 04 - Functions and Scope
function getName() {
  return "Ash";
}

function multiply(a, b = 2) {
  return a * b;
}

console.log(getName());
console.log(multiply(4));

if (true) {
  let message = "Block scoped";
  console.log(message);
}

// 05 - Arrays and Iteration
const nums = [2, 4, 6];
const doubled = nums.map((n) => n * 2);
const filtered = nums.filter((n) => n > 2);

console.log(nums);
console.log(doubled);
console.log(filtered);

// 06 - Objects and Classes
const trainer = { name: "Misty", city: "Cerulean" };
console.log(trainer.name, trainer.city);

class Pokemon {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  intro() {
    return `${this.name} is a ${this.type} type.`;
  }
}

const pikachu = new Pokemon("Pikachu", "Electric");
console.log(pikachu.intro());

// 07 - Strings and Number Methods
const text = "hello world";
console.log(text.toUpperCase());
console.log(text.replace("world", "JavaScript"));
console.log(Math.round(12.7));

// 08 - Dates, Math, and Regex
const today = new Date();
console.log(today.getFullYear());
console.log(Math.sqrt(25));

const emailPattern = /^[\w.-]+@[\w.-]+\.\w+$/;
console.log(emailPattern.test("ash@example.com"));

// 09 - Collections and Maps
const uniqueValues = new Set([1, 2, 2, 3, 3]);
console.log(uniqueValues);

const skillMap = new Map();
skillMap.set("language", "JavaScript");
console.log(skillMap.get("language"));

// 10 - DOM and Events
console.log("DOM practice example: attach event listeners to elements.");

// 11 - Error Handling and Debugging
try {
  const value = 10;
  console.log(value);
} catch (error) {
  console.log(error.message);
}

function validatePositive(number) {
  if (number < 0) {
    throw new Error("Number must be positive");
  }
  return number;
}

try {
  console.log(validatePositive(5));
} catch (error) {
  console.log(error.message);
}

// 12 - Modules and Modern JavaScript
const sum = (a, b) => a + b;
console.log(sum(2, 3));

const person = { name: "Ash", age: 16 };
const { name: userName, age: userAgeValue } = person;
console.log(userName, userAgeValue);

const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2);

console.log("All exercises completed successfully.");
