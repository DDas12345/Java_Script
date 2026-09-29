# Strings

Strings are sequences of characters used to represent text.

## 1. Creating Strings

```javascript
const name = "Alice";
const city = 'London';
const greeting = `Hello, ${name}!`;
```

## 2. String Length

```javascript
const text = "JavaScript";
console.log(text.length); // 10
```

## 3. String Methods

### `toUpperCase()` and `toLowerCase()`

```javascript
const word = "hello";
console.log(word.toUpperCase()); // HELLO
console.log(word.toLowerCase()); // hello
```

### `slice()`

```javascript
const text = "JavaScript";
console.log(text.slice(0, 4)); // Java
```

### `substring()`

```javascript
const text = "JavaScript";
console.log(text.substring(4, 10)); // Script
```

### `replace()`

```javascript
const message = "I love cats";
console.log(message.replace("cats", "dogs"));
```

### `includes()`

```javascript
const text = "JavaScript";
console.log(text.includes("Script")); // true
```

### `split()`

```javascript
const sentence = "I love JavaScript";
const words = sentence.split(" ");
console.log(words); // ["I", "love", "JavaScript"]
```

### `trim()`

```javascript
const name = "   Alice   ";
console.log(name.trim()); // Alice
```

## 4. Template Literals

Template literals make string interpolation easy.

```javascript
const user = "Sam";
const hello = `Welcome, ${user}!`;
console.log(hello);
```

## 5. Concatenation

```javascript
const first = "Hello";
const second = "World";
console.log(first + " " + second);
```

## 6. Escape Characters

```javascript
const quote = "He said, \"Hello\".";
console.log(quote);
```

## 7. String Comparison

```javascript
console.log("A" < "B"); // true
```

## Summary
Strings are fundamental for text processing in JavaScript. They support many built-in methods for formatting, searching, splitting, and transforming data.
