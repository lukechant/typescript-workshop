// Interfaces

// We can create a TypeScript interface to create a 'contract' for the data it oversees, essentially everything that agrees to the contract must adhere to it's structure

// Note: The convention for interfaces is to use Pascal case for the first letter of the interface (capital first letter for each word)

interface Person {
  name: string;
  height: number;
  age: number;
  occupation: string;
  pets: string[];
}

// JS Object
const person1: Person = {
  name: "Brian",
  height: 6,
  age: 45,
  occupation: "actor",
  pets: "cat",
};

// JS Object
const person2: Person = {
  name: "James",
  height: "5 foot, 11 inches",
  age: "22",
  occupation: "astronaut",
  pets: ["cat", "dog", "fish"],
};

// 1.
// Based on our Person interface, change `person1` and `person2` to fix the errors

// 2.
// Create a new person object using the Person interface below, and try to add a new field

// <-- CREATE person3 HERE -->

// 3.
// Create your own new interface and create an object based on it
