// JavaScript Cheat Sheet

// 1. Variables
const name = "Ash";
let score = 10;
score += 5;
console.log(name, score);

// 2. Data types
console.log(typeof "Hello");
console.log(typeof 25);
console.log(typeof true);
console.log(typeof [1, 2, 3]);
console.log(typeof { id: 1 });

// 3. Operators
console.log(10 + 5);
console.log(10 > 5 ? "Yes" : "No");

// 4. Conditionals
if (score >= 15) {
  console.log("Pass");
} else {
  console.log("Retry");
}

// 5. Functions
function greet(user) {
  return `Hello, ${user}!`;
}
console.log(greet("Misty"));

const add = (a, b) => a + b;
console.log(add(3, 4));

// 6. Arrays
const nums = [1, 2, 3];
console.log(nums.map((n) => n * 2));
console.log(nums.filter((n) => n > 1));
console.log(nums.reduce((sum, n) => sum + n, 0));

// 7. Objects
const trainer = { name: "Brock", badge: "Boulder" };
console.log(trainer.name);

// 8. Strings
console.log("JavaScript".toUpperCase());
console.log("hello".replace("h", "H"));

// 9. Loops
for (let i = 0; i < 3; i++) {
  console.log(i);
}

// 10. Async
async function load() {
  return "Loaded";
}
load().then(console.log);

// 11. Error handling
try {
  throw new Error("Example error");
} catch (error) {
  console.log(error.message);
}

// 12. ES6+
const arr = [...[1, 2], 3];
console.log(arr);

const { name: userName } = { name: "Ash" };
console.log(userName);
