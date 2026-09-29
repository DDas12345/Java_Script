// Control Flow in JavaScript

// 1. if / else
const score = 80;

if (score >= 90) {
  console.log("Excellent");
} else if (score >= 70) {
  console.log("Good");
} else {
  console.log("Needs improvement");
}

// 2. switch statement
const day = 2;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  default:
    dayName = "Another day";
}

console.log(dayName);

// 3. ternary operator
const isLoggedIn = true;
const message = isLoggedIn ? "Welcome back" : "Please log in";
console.log(message);

// 4. for loop
for (let i = 0; i < 5; i++) {
  console.log("Loop value:", i);
}

// 5. while loop
let count = 0;
while (count < 3) {
  console.log("Count is", count);
  count++;
}

// 6. do...while loop
let attempt = 0;
do {
  console.log("Attempt:", attempt);
  attempt++;
} while (attempt < 2);

// 7. break and continue
for (let i = 0; i < 6; i++) {
  if (i === 3) continue;
  if (i === 5) break;
  console.log("Current i:", i);
}

// Summary
// Control flow decides which code runs and when.
