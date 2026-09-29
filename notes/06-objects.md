# Objects

Objects are collections of properties. Each property has a key and a value, and they are often used to represent real-world data.

## 1. Creating Objects

```javascript
const person = {
  name: "Alice",
  age: 25,
  city: "New York"
};
```

## 2. Accessing Properties

```javascript
console.log(person.name); // Alice
console.log(person["age"]); // 25
```

## 3. Updating Properties

```javascript
person.age = 26;
person.city = "Boston";
```

## 4. Adding New Properties

```javascript
person.email = "alice@example.com";
```

## 5. Deleting Properties

```javascript
delete person.city;
```

## 6. Nested Objects

```javascript
const student = {
  name: "Bob",
  address: {
    city: "London",
    postcode: "SW1A"
  }
};

console.log(student.address.city); // London
```

## 7. Object Methods

Methods are functions stored inside objects.

```javascript
const person = {
  name: "Alice",
  greet() {
    return `Hello, I am ${this.name}`;
  }
};

console.log(person.greet()); // Hello, I am Alice
```

## 8. Object Destructuring

```javascript
const { name, age } = person;
console.log(name, age);
```

## 9. Object Spread

```javascript
const person2 = { ...person, age: 30 };
console.log(person2);
```

## 10. Object.keys(), Object.values(), Object.entries()

```javascript
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
```

## 11. JSON

JavaScript objects are commonly serialized to JSON.

```javascript
const jsonString = JSON.stringify(person);
const parsed = JSON.parse(jsonString);
```

## Summary
Objects store related data together and are central to JavaScript programming. They help model complex entities, group data, and encapsulate behavior.
