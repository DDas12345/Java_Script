// Strings in JavaScript

const message = "JavaScript is fun";
console.log(message.length);
console.log(message.toUpperCase());
console.log(message.toLowerCase());

// 1. Concatenation
const firstName = "Debanshika";
const lastName = "Das";
const fullName = firstName + " " + lastName;
console.log(fullName);

// 2. Template literals
const intro = `Hello, my name is ${firstName} ${lastName}.`;
console.log(intro);

// 3. Common string methods
const sentence = "   Learn JavaScript every day    ";
console.log(sentence.trim());
console.log(sentence.includes("JavaScript"));
console.log(sentence.slice(0, 11));
console.log(sentence.split(" "));

// 4. String indexing
console.log(message[0]);
console.log(message.charAt(0));

// 5. Replacing text
console.log(message.replace("fun", "powerful"));

// Summary
// Strings are sequences of characters and come with many built-in methods.
