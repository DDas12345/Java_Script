# Arrays

Arrays are ordered collections of values. They are useful for storing lists of data such as numbers, strings, objects, or mixed values.

## 1. Creating Arrays

```javascript
const fruits = ["Apple", "Banana", "Orange"];
const numbers = [1, 2, 3, 4, 5];
const mixed = ["A", 2, true, null];
```

## 2. Accessing Elements

```javascript
const fruits = ["Apple", "Banana", "Orange"];

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
```

Array indices start at 0.

## 3. Array Length

```javascript
const arr = [10, 20, 30];
console.log(arr.length); // 3
```

## 4. Adding and Removing Elements

```javascript
const numbers = [1, 2, 3];
numbers.push(4);       // adds to end
numbers.unshift(0);    // adds to beginning
numbers.pop();         // removes last element
numbers.shift();       // removes first element
```

## 5. Array Methods

### `map()`
Creates a new array by transforming each element.

```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map((n) => n * 2);
console.log(doubled); // [2, 4, 6]
```

### `filter()`
Creates a new array with elements that pass a condition.

```javascript
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter((n) => n % 2 === 0);
console.log(evens); // [2, 4]
```

### `reduce()`
Combines array values into one result.

```javascript
const numbers = [1, 2, 3, 4];
const total = numbers.reduce((sum, num) => sum + num, 0);
console.log(total); // 10
```

### `forEach()`
Runs a function for each array element.

```javascript
const fruits = ["Apple", "Banana"];
fruits.forEach((fruit) => console.log(fruit));
```

### `find()`
Returns the first matching element.

```javascript
const numbers = [3, 8, 12, 20];
const found = numbers.find((n) => n > 10);
console.log(found); // 12
```

## 6. Array Destructuring

```javascript
const [first, second] = ["A", "B"];
console.log(first); // A
console.log(second); // B
```

## 7. Multidimensional Arrays

Arrays can contain arrays.

```javascript
const matrix = [
  [1, 2],
  [3, 4]
];

console.log(matrix[1][0]); // 3
```

## 8. Spread and Rest with Arrays

```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]
```

## 9. Checking Arrays

```javascript
const numbers = [1, 2, 3];
console.log(Array.isArray(numbers)); // true
```

## Summary
Arrays are one of JavaScript’s most important structures. They store multiple values in order and provide powerful built-in methods for transformation, filtering, and reduction.
