// Type inference is great as it saves you manually declaring the types, but some types, i.e. objects or types which might change, are difficult for TS to infer

// Let's practice writing types
// Manually write the types for the variables below!

const const1 = "Hello";
const const2 = 33;
const const3 = [1, 2, 3];
const const4 = ["a", "b", "c"];
const const5 = [1, "b", 3];
const const6 = 10 + 5;

// Let's practice writing THE WRONG types
// Manually write the wrong for the variables below!

const const7 = "Hello";
const const8 = 33;
const const9 = [1, 2, 3];
const const10 = 10 + 5;

// 'any' type
// TypeScript has an 'any' type, meaning you're telling TypeScript that you're happy for _any_ type to be stored in the variable. 99% of the time you should *AVOID* using 'any' as type as you lose the benefit of strong typing.

let const11: any = "I like cats";
const11 = 40;
const11 = null;

// Often use of 'any' will be disallowed in your `tsconfig.json` file (the file which sets all of TypeScript settings)
