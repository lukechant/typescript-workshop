export {};

// Optional Parameters / Properties
// VSCode uses TypeScript to infer the types here! JS won't do it by default

// =====================
// 1. Object Properties
// Fix the above errors

interface Saved {
  highScore?: number;
}

interface GameData {
  score: number; // Always needs to be a number
  timeTaken?: number; // Equivalent to: number | undefined
  saved?: Saved; // Equivalent to: Saved | undefined
}

const gameData: GameData = {
  score: 0,
  timeTaken: 60,
  // highScore is not declared, but the GameData interface lets TS know that it could exist, but is currently undefined
  averageScore: 10, // this isn't in our interface, so TS will shout at us
};

// Imagine we're creating a game that keeps track of our score, remembers how long it took to complete, and remembers our high score

const { score, timeTaken, saved } = gameData; // destructure our required data
console.log(
  `My score is: ${score}, it took me ${timeTaken}, and my high score is ${saved.highScore}`
);

// TS should give you an error that you're trying to access a property in something that is potentially undefined - JS will let you attempt to access it, and will likely fail in the browser or return `undefined`

// =====================
// 2. Params

const calculateAverageScore = (maxScore?: number, scores: number[]) => {
  const scoresTotal = scores.reduce(
    (currentValue, totalValue) => currentValue + totalValue,
    0
  ); //?
  return `Average score is: ${
    scoresTotal / scores.length
  } of a possible maximum of ${maxScore}`;
};

calculateAverageScore(100, [23, 6, 76, 54]); //?

// Fix the above errors
// Explain why there would be a problem here with optional arguments
