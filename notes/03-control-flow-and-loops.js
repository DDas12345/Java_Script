// Control Flow and Loops in JavaScript

// if / else
let score = 75;
if (score >= 90) {
  console.log("Excellent");
} else if (score >= 70) {
  console.log("Good");
} else {
  console.log("Try again");
}

// switch
const day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Other day");
}

// for loop
for (let i = 0; i < 5; i++) {
  console.log("Loop iteration:", i);
}

// while loop
let counter = 0;
while (counter < 3) {
  console.log("While count:", counter);
  counter++;
}

// do...while loop
let x = 0;
do {
  console.log("Do while count:", x);
  x++;
} while (x < 2);

// for...of
const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log(color);
}

// break and continue
for (let i = 0; i < 6; i++) {
  if (i === 2) continue;
  if (i === 5) break;
  console.log("Value:", i);
}
