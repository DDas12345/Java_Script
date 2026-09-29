// Collections: Set and Map in JavaScript

// Set
const uniqueNumbers = new Set([1, 2, 2, 3, 4, 4]);
console.log(uniqueNumbers);
uniqueNumbers.add(5);
console.log(uniqueNumbers.has(3));

// Map
const userMap = new Map();
userMap.set("name", "Misty");
userMap.set("age", 18);
console.log(userMap.get("name"));
console.log(userMap.size);

// WeakSet and WeakMap are also useful for special cases.
