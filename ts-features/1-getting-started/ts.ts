export {};

// TS to the rescue
// Modern Editors/IDEs and linters help, but TS is helps a lot more

// ===============
// Example 1 - Access to non-existent properties
// ===============
const obj = { width: 3, height: 5 };
const area = obj.width * obj.heigth;

// What is the output of 'area'?
console.log({ area });

// ===============
// Example 2 - Type coercion
// ===============
const isEqual = "" == 0; // 🤔 is this ts(2367) a bug?
const isEqualYet = "" === 0;

// Are these two items equal?
console.log({ isEqual, isEqualYet });

// ===============
// Example 3 - Operations
// ===============

const weirdCalculation = 4 / [];

// What do you expect the output to be?
console.log({ weirdCalculation });
