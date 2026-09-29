// Objects in JavaScript

const student = {
  name: "Brock",
  age: 18,
  city: "Pewter City",
  hobbies: ["Rock climbing", "Training"],
};

console.log(student.name);
console.log(student["city"]);

// 1. Add and update properties
student.grade = "A";
student.age = 19;
console.log(student);

// 2. Object methods
const trainer = {
  name: "Ash",
  greet() {
    return `Hello, I am ${this.name}.`;
  },
};

console.log(trainer.greet());

// 3. Object destructuring
const { name, age } = student;
console.log(name, age);

// 4. Nested objects
const team = {
  leader: {
    name: "Ash",
    region: "Kanto",
  },
};

console.log(team.leader.region);

// 5. Object.keys, values, entries
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));

// Summary
// Objects are used to store related data and behavior together.
