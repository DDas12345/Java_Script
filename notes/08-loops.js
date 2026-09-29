// Loops in JavaScript

// 1. for loop
for (let i = 0; i < 5; i++) {
  console.log("for loop:", i);
}

// 2. for...of loop for arrays
const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log(color);
}

// 3. for...in loop for objects
const product = {
  name: "Laptop",
  price: 800,
  brand: "Dell",
};

for (const key in product) {
  console.log(key, product[key]);
}

// 4. while loop
let counter = 0;
while (counter < 3) {
  console.log("while:", counter);
  counter++;
}

// 5. do...while loop
let tries = 0;
do {
  console.log("do while:", tries);
  tries++;
} while (tries < 2);

// Summary
// Loops repeat blocks of code until a condition is met or the iteration ends.
