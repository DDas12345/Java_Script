# Strings and Number Methods

JavaScript provides many helpful built-in methods for strings and numbers.

## Strings
```javascript
const text = "JavaScript is fun";
```

### length
```javascript
console.log(text.length);
```

### toUpperCase() and toLowerCase()
```javascript
console.log(text.toUpperCase());
console.log(text.toLowerCase());
```

### slice()
```javascript
console.log(text.slice(0, 10));
```

### substring()
```javascript
console.log(text.substring(0, 10));
```

### replace()
```javascript
console.log(text.replace("fun", "powerful"));
```

### split()
```javascript
const words = text.split(" ");
console.log(words);
```

### trim()
```javascript
const value = "   JavaScript   ";
console.log(value.trim());
```

### includes()
```javascript
console.log(text.includes("Java"));
```

## Template Literals
```javascript
const name = "Ash";
console.log(`Hello, ${name}!`);
```

## Numbers
```javascript
const num = 42.678;
```

### Number.isInteger()
```javascript
console.log(Number.isInteger(num));
```

### Math.round()
```javascript
console.log(Math.round(num));
```

### Math.floor() and Math.ceil()
```javascript
console.log(Math.floor(num));
console.log(Math.ceil(num));
```

### Math.max() and Math.min()
```javascript
console.log(Math.max(6, 4, 9));
console.log(Math.min(6, 4, 9));
```

### toFixed()
```javascript
console.log(num.toFixed(2));
```

## Number Conversion
```javascript
const str = "100";
console.log(Number(str));
console.log(parseInt(str));
console.log(parseFloat("12.5"));
```

## Summary
String and number methods help format, inspect, convert, and manipulate data in practical ways.
