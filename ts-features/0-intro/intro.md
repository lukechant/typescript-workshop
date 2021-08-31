# What is TypeScript?

`"TypeScript is a strongly typed programming language which builds on JavaScript giving you better tooling at any scale."`

☝️ from the website

## What does that mean?

TypeScript is a "superset" of JavaScript. It includes everything that is available in JavaScript, but expands upon it and adds new features.

![img](https://4.bp.blogspot.com/-pYn2LAUvMNQ/WtWXBIT2IRI/AAAAAAAACK8/n9pH7ikTpo4xqIl8odqkJ7kfnbfpcsbxACLcBGAs/s640/typescript.png)

## How does it work?

TypeScript adds a number of features (we'll go through the most common ones later) to ordinary JavaScript, but browsers (or JS runtime environments such as Node) won't be able to run TypeScript. JS transpilers/compilers such as `Babel` allow developers to use the latest features of JS, but will transpile/compile the code down to a different format to allow the most browsers to support it - TypeScript also does this.

TypeScript provides both the language syntax to code in, and the compiler to change TypeScript into JavaScript that can used by browsers (and anything else that can run JS).

## Static Type (TS) vs Dynamic Type (JS)

JavaScript is a dynamically typed language, meaning types exist, i.e. `typeof(myNumber); // "number"`, but will only be checked at run time (i.e. in the browser). This means JS developers won't get immediate type errors to the code they're working on. TypeScript is statically typed (known at compile/authoring time) and encourages developers to declare the types of the data they're working with, i.e. `let myNumber: number = "hello";`. This example would result in an immediate TS error (in their code editor) as we're assigning a `string` to a `number` variable.

## Strongly Typed (TS) vs Weakly Typed (JS)

JavaScript if referred to as a weakly typed, or untyped language, meaning developers don't have to manually declare their data types as the JavaScript compiler will interpret and assign the type. In JavaScript, this means variables can be coerced into changing it's type. TypeScript being strongly typed, it will (mostly) warn you immediately that you're trying to perform a invalid operation on different types of data.

### JS coercsion example

```
const var1 = 10
const var2 = "2"

console.log(var1 + var2); // outputs: "102"
console.log(var1 * var2); // outputs: 20
console.log(var1 - var2); // outputs: 8
```
 
In the first `+` example, JS has coerced the number 10 into being a `string`, then concatenated it (joined it) to "2".

In the `-` example, the string of "2" as been coerced into being a `number`, resulting in a calculation.

### TS coercsion example

```
const var1: number = 10
const var2: string = "2"

console.log(var1 + var2); // outputs: "102" still coerces!
console.log(var1 * var2); // Error!
console.log(var1 - var2); // Error!
```


### What types can we use in TypeScript?
We've got:

* **string** - e.g. `"Hello world!"`
* **number** - e.g. `100` or `1.5`. _(other languages such as Java or C# will split number into `int`, `float`, `double`, etc. but we just have `number` for all)_
* **boolean** - e.g. `true` or `false`
* **array** - e.g. `[1,2,3]`
* **tuple** - e.g. `[string, number]` - arrays of fixed length with known values
* **object type** .e.g. `{x: number, y: number}`
* **union type** .e.g. `number | string` - number OR string in this example
* **enum** e.g. `enum TrueOrFalse { TRUE, FALSE }` - related list of constants
* **type alias** e.g. `type NumOrStr = number | string`
* **interface** e.g. `interface Coordinates {x: number, y: number}`
* **utility** e.g. `Partial<Type>`, `Required<Type>`, `Readonly<Type>`, etc...
* **any** - where we're telling TypeScript we don't care about the types (should be avoided)
* **unknown** - where we're telling TypeScript we can't know what the types are

...and more!