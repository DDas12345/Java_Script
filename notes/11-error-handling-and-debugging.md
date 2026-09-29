# Error Handling and Debugging

Errors are a normal part of development. JavaScript provides mechanisms to catch and handle them.

## try...catch
```javascript
try {
  const value = JSON.parse("{ invalid json }");
} catch (error) {
  console.error("Something went wrong:", error.message);
}
```

## finally
```javascript
try {
  console.log("Executing code");
} catch (error) {
  console.error(error);
} finally {
  console.log("This always runs");
}
```

## Throwing Errors
```javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }

  return a / b;
}
```

## Console Methods
```javascript
console.log("Info");
console.warn("Warning");
console.error("Error");
console.table({ name: "Ash", age: 16 });
```

## Debugging Techniques
- use `console.log()` to inspect values
- use `debugger;` statements
- inspect browser DevTools
- test small sections of code at a time

## Common Error Types
- `SyntaxError`: invalid syntax
- `ReferenceError`: variable not defined
- `TypeError`: wrong type used
- `RangeError`: number outside allowed range

## Summary
Error handling helps your code fail gracefully, while debugging tools make it easier to find and fix issues.
