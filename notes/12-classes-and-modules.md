# Classes and Modules

JavaScript supports object-oriented programming using classes, and it also supports modular code organization through ES modules.

## 1. Classes

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name}`;
  }
}

const person = new Person("Alice", 25);
console.log(person.greet());
```

### Class features
- Blueprint for creating objects
- Constructor method initializes properties
- Methods define behavior

## 2. Inheritance

```javascript
class Employee extends Person {
  constructor(name, age, role) {
    super(name, age);
    this.role = role;
  }
}

const employee = new Employee("Bob", 30, "Developer");
console.log(employee.greet());
```

## 3. Static Methods

```javascript
class MathHelper {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathHelper.add(2, 3));
```

Static methods are called on the class itself, not an instance.

## 4. Modules

JavaScript modules let you split code across files.

### `math.js`

```javascript
export function add(a, b) {
  return a + b;
}
```

### `main.js`

```javascript
import { add } from "./math.js";

console.log(add(3, 4));
```

## 5. Default Export

```javascript
export default function greet() {
  return "Hello";
}
```

```javascript
import greet from "./greet.js";
```

## 6. Benefits of Modules

- Better code organization
- Less global pollution
- Easier maintenance and reuse

## Summary
Classes provide a structured way to model objects and inheritance, while modules help organize JavaScript projects into reusable, maintainable files.
