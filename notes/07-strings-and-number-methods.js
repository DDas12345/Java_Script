// Strings and Number Methods in JavaScript

const sentence = "JavaScript is awesome";
console.log(sentence.length);
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());
console.log(sentence.includes("Script"));
console.log(sentence.slice(0, 10));
console.log(sentence.replace("awesome", "powerful"));

const fullName = "Ash Ketchum";
const parts = fullName.split(" ");
console.log(parts);

const numberValue = 42.456;
console.log(Math.round(numberValue));
console.log(Math.floor(numberValue));
console.log(Math.ceil(numberValue));
console.log(Math.abs(-10));
console.log(Math.max(4, 9, 1));

const numString = "123";
console.log(Number(numString));
console.log(parseInt("45.67"));
console.log(parseFloat("45.67"));
