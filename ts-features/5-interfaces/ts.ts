export {};

// Interfaces

// We can create a TypeScript interface to create a 'contract' for the data it oversees
// The convention is to use Pascal case for the first letter of the interface (capital letter for each word)

interface Person {
  name: string;
  height: number;
  age: number;
  occupation: string;
  pets: string[];
}

// We apply use
const person1: Person = {
  name: "Brian",
  height: 6,
  age: 45,
  occupation: "actor",
  pets: "cat",
};

const person2: Person = {
  name: "James",
  height: "5 foot, 11 inches",
  age: 22,
  occupation: "astronaut",
  pets: ["cat", "dog", "fish"],
};

// 1.
// Based on our Person interface, change `person1` and `person2` to fix the errors

// 2.
// Create a new person object using the Person interface below, and try to add a new field

// <-- CREATE person3 HERE -->
