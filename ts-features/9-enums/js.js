// Enum

// VSCode uses TypeScript to infer the types here! JS won't do it by default

// Enums are useful to group together a group of related constants - they are used as a type -
// Enums don't exist in JavaScript :(

const fruit = {
  TOMATO: "tomato",
  PEAR: "pear",
  STRAWBERRY: "strawberry",
};

const vegetables = {
  PARSNIP: "parsnip",
  POTATO: "potato",
  ONION: "onion",
};

const fruitOrVeg = (fruitOrVeg) => {
  switch (fruitOrVeg) {
    case fruit.STRAWBERRY:
    case fruit.PEAR:
    case fruit.TOMATO:
      console.log(`'${fruitOrVeg}' is totally a fruit.`);
      break;
    case vegetables.ONION:
    case vegetables.PARSNIP:
    case vegetables.POTATO:
      console.log(`'${fruitOrVeg}' is totally a vegetable.`);
      break;
    default:
      console.log(`I don't know what "${fruitOrVeg}" is`);
      break;
  }
};

console.log(fruitOrVeg("onion"));
console.log(fruitOrVeg("pear"));
console.log(fruitOrVeg("meat"));
