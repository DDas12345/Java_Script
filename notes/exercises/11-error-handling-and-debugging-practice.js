// Practice: Error Handling and Debugging
// 1. Wrap code in a try/catch.
// 2. Throw an error if a number is negative.

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
