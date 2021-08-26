// Generics

// VSCode uses TypeScript to infer the types here! JS won't do it by default

const getRandomItemFromArray = (items) => {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
};

const randomItemNumber = getRandomItemFromArray([1, 2, 3, 4, 5]);
console.log(`Random item from number array: ${randomItemNumber}`);

const randomItemMixed = getRandomItemFromArray([
  { hello: "you" },
  [],
  () => null,
  "hello",
  5,
]);
console.log(`Random item from mixed array: ${randomItemMixed}`);

// Looking at randomItemMixed and getRandomItemFromArray, we have no control over what gets passed into the `getRandomItemFromArray` and we can't predict what will be returned from that function, this leads to a lot of potential problems.

// If only there was a convenient way to gives us more predictive, manageable *testable* code
