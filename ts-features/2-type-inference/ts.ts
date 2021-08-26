export {};

// TS type inference

// We're not manually declaring the types here, but typescript will infer them based on the value assigned

let let0;
let let1 = 5;
let let2 = "Hello";
let let3 = [];
let let4 = [1, 2, 3];
let let5 = [1, "2", []];
let let6 = { a: 1, b: 2, c: 3 };

let0 = "string"; // let0 did have an assignment when declared, so types are 'any'
let0 = 0; // let0 did have an assignment when declared, so types are 'any'

let1 = "hello"; // As this was assigned to a number when declared, it will error as we're now attempting to change the type
let2 = 3; // As this was assigned to a string when declared, it will error as we're now attempting to change the type
let3 = [3]; // it's fine to change the value here as the primary type (and array) remains the same

// To be fair, JS introduced 'consts' to avoid reassigning value types to variables, but you may still be able to change the values of arrays and objects, etc.
const const1 = 5; // can't change
const const2 = "Hello"; // can't change
const const3 = true; // can't change
const const4 = [];
const const5 = [1, 2, 3];
const const6 = [1, "2", []];
const const7 = { a: 1, b: 2, c: 3 };

const4.push(5); // I'm changing the data here, but not the type primary type (array)
