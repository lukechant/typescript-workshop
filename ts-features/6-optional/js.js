// Optional Parameters / Properties

// VSCode uses TypeScript to infer the types here! JS won't do it by default

const newGameData = {
  score: 0,
  timeTaken: 60,
};

// Imagine we're creating a game that keeps track of our score, remembers how long it took to complete, and remembers our high score

const { score, timeTaken, highScore } = newGameData; // destructure our required data
console.log(
  `My score is: ${score}, it took me ${timeTaken}, and my high score is ${highScore}`
);

// If you run this js file in the terminal, you'd see our game would likely be fairly buggy
// If we don't know what a value on an object is, or what the type would be, it makes things difficult to predict...
