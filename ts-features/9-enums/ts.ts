export {};

// Enum

// VSCode uses TypeScript to infer the types here! JS won't do it by default

// Enums are useful to group together a group of related constants - they are used as a type -
// Enums don't exist in JavaScript :(

// with enums, if you don't need to use the value directly, you don't need to set one, so...

// enum Stuff {
//   THING, // - this is given a value of 0
//   SOMETHING, // - this is given a value of 1
//   FLUFF // - this is given a value of 2
// }

enum Fruit {
  TOMATO = "Tomato",
  PEAR = "Pear",
  STRAWBERRY = "Strawberry",
}

enum Vegetables {
  PARSNIP = "Parsnip",
  POTATO = "Potato",
  ONION = "Onion",
}

type FruitOrVeg = Fruit | Vegetables;

const fruitOrVeg = (fruitOrVeg: FruitOrVeg) => {
  switch (fruitOrVeg) {
    case Fruit.STRAWBERRY:
    case Fruit.PEAR:
    case Fruit.TOMATO:
      console.log(`'${fruitOrVeg}' is totally a fruit.`);
      break;
    case Vegetables.ONION:
    case Vegetables.PARSNIP:
    case Vegetables.POTATO:
      console.log(`'${fruitOrVeg}' is totally a vegetable.`);
      break;
    default:
      break;
  }
};

console.log(fruitOrVeg(Vegetables.ONION));
console.log(fruitOrVeg(Fruit.PEAR));
console.log(fruitOrVeg("meat"));

// 1. Task 1
// Add more items to Fruit and Veg!
// Add a return type to our fruitOrVeg function
