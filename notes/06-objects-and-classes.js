// Objects and Classes in JavaScript

const trainer = {
  name: "Ash",
  age: 16,
  region: "Kanto",
  greet() {
    return `Hello, I'm ${this.name}.`;
  },
};

console.log(trainer.name);
console.log(trainer.greet());

// Object destructuring
const { name, age } = trainer;
console.log(name, age);

// Class syntax
class Pokemon {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  intro() {
    return `${this.name} is a ${this.type} type Pokemon.`;
  }
}

const pikachu = new Pokemon("Pikachu", "Electric");
console.log(pikachu.intro());

// Inheritance
class ElectricPokemon extends Pokemon {
  constructor(name) {
    super(name, "Electric");
  }
}

const raichu = new ElectricPokemon("Raichu");
console.log(raichu.intro());
