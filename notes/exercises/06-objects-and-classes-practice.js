// Practice: Objects and Classes
// 1. Create an object with name and city.
// 2. Create a class Pokemon with a method.

const trainer = { name: "Misty", city: "Cerulean" };
console.log(trainer.name, trainer.city);

class Pokemon {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  intro() {
    return `${this.name} is a ${this.type} type.`;
  }
}

const pikachu = new Pokemon("Pikachu", "Electric");
console.log(pikachu.intro());
