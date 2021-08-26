export {};

// Generics
// When you want to allow your functions or classes to do multiple things with different data types, rather than create multiple similar functions or classes!

const getRandomItemFromArray = <Type>(items: Type[]): Type => {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
};

const randomItemNumber = getRandomItemFromArray<number>([1, 2, 3, 4, 5]);
console.log(`Random item from number array: ${randomItemNumber}`);

const randomItemString = getRandomItemFromArray<string>([
  "hello",
  "mum",
  "hope",
  "you",
  "are",
  "well",
]);
console.log(`Random item from string array: ${randomItemString}`);

// Looking at randomItemMixed and getRandomItemFromArray, we have no control over what gets passed into the `getRandomItemFromArray` and we can't predict what will be returned from that function, this leads to a lot of potential problems.

// If only there was a convenient way to gives us more predictive, manageable *testable* code
