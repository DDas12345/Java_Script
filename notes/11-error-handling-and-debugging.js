// Error Handling and Debugging in JavaScript

try {
  const result = 10 / 0;
  console.log("Result:", result);
} catch (error) {
  console.log("Caught an error:", error.message);
} finally {
  console.log("This always runs.");
}

// Throwing custom errors
function validateAge(age) {
  if (age < 0) {
    throw new Error("Age cannot be negative.");
  }
  return age;
}

try {
  console.log(validateAge(-2));
} catch (error) {
  console.log(error.message);
}

// Debugging techniques
console.log("Use console.log, breakpoints, and browser devtools to inspect code.");
