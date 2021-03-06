// Vanilla JS can be sneaky
// Modern Editors/IDEs and linters help, but TS is helps a lot more

// ===============
// Example 1 - Access to non-existant properties
// ===============
const obj = { width: 3, height: 5 };
const area = obj.width * obj.heigth;

// What is the output of 'area'?
console.log({ area });

// ===============
// Example 2 - Type coercion
// ===============
const isEqual = "" == 0;

// Are these two items equal?
console.log({ isEqual });

// ===============
// Example 3 - Operations
// ===============

// What do you expect the output to be?
const weirdCalculation = 4 / [];
console.log({ weirdCalculation });

// ** NOTE: **
// You can `cd` (change directory) into the correct folder and run `node js.js` in each folder to see the output of any .js file
