# Objects and Classes

Objects store data as key-value pairs.

## Object Literal
```javascript
const pokemon = {
  name: "Pikachu",
  type: "Electric",
  level: 25
};

console.log(pokemon.name); // Pikachu
```

## Accessing Properties
```javascript
console.log(pokemon["type"]);
console.log(pokemon.level);
```

## Adding and Updating Properties
```javascript
pokemon.level = 30;
pokemon.owner = "Ash";
```

## Deleting a Property
```javascript
delete pokemon.owner;
```

## Object Methods
```javascript
const trainer = {
  name: "Ash",
  greet() {
    return `Hello, I am ${this.name}.`;
  }
};

console.log(trainer.greet());
```

## Destructuring
```javascript
const { name, type } = pokemon;
console.log(name, type);
```

## Spread and Rest with Objects
```javascript
const basePokemon = { name: "Bulbasaur", type: "Grass" };
const fullPokemon = { ...basePokemon, level: 10 };
```

## Classes
Classes provide a blueprint for creating objects.

```javascript
class Pokemon {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  info() {
    return `${this.name} is a ${this.type} type.`;
  }
}

const pikachu = new Pokemon("Pikachu", "Electric");
console.log(pikachu.info());
```

## Inheritance
```javascript
class ElectricPokemon extends Pokemon {
  constructor(name) {
    super(name, "Electric");
  }
}
```

## Summary
Objects represent real-world entities and data structures. Classes are a cleaner way to create reusable object blueprints.
