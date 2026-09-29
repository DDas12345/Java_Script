# Arrays and Iteration

Arrays are ordered collections of values.

## Creating Arrays
```javascript
const fruits = ["Apple", "Banana", "Orange"];
const numbers = [10, 20, 30];
```

## Accessing Elements
```javascript
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
```

## Array Length
```javascript
console.log(fruits.length); // 3
```

## Common Array Methods
### push()
```javascript
fruits.push("Mango");
```

### pop()
```javascript
const lastFruit = fruits.pop();
```

### shift()
```javascript
fruits.shift();
```

### unshift()
```javascript
fruits.unshift("Grapes");
```

### indexOf()
```javascript
console.log(fruits.indexOf("Banana"));
```

### includes()
```javascript
console.log(fruits.includes("Apple"));
```

### slice()
```javascript
const copy = fruits.slice(0, 2);
```

### splice()
```javascript
fruits.splice(1, 1, "Pear");
```

## Iterating Through Arrays
### for loop
```javascript
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

### forEach
```javascript
fruits.forEach((fruit) => console.log(fruit));
```

### map
```javascript
const upperFruits = fruits.map((fruit) => fruit.toUpperCase());
```

### filter
```javascript
const longNames = fruits.filter((fruit) => fruit.length > 5);
```

### reduce
```javascript
const total = numbers.reduce((sum, number) => sum + number, 0);
```

## Nested Arrays
```javascript
const matrix = [[1, 2], [3, 4]];
console.log(matrix[1][0]); // 3
```

## Summary
Arrays are extremely useful for storing and processing lists of data. JavaScript provides many built-in methods for iteration and transformation.
