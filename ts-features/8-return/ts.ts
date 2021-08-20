export {};

// Return Types

// VSCode uses TypeScript to infer the types here! JS won't do it by default

// We can add a return type here to make sure the data we're returning from our `getProfileOfKiller` function returns the correct data / data structure

// Commonly, you will see return type declarations written after the parentheses of a function i.e. `const getSquare = (inputNum: number): number => inputNum * inputNum`;

// Return Type 1 (primitive return type)

const getSquare = (inputNum: number): string => inputNum * inputNum;
// Fix the above return type!

// Return Type 2 (primitive array return type)

const turnNumberIntoArrayOfStrings = (inputNum: number): string => [
  ...inputNum.toString(),
];
// Fix the above return type!

// Return Type 3 (interface return type)

interface ProfileOfKiller {
  name: string;
  age: number;
  job: string;
}

const getProfileOfKiller = ({
  name,
  age,
  job,
}: ProfileOfKiller): ProfileOfKiller => {
  const profileOfKiller = {
    name,
    age,
    job,
  };
};

const profileOfKiller = getProfileOfKiller({
  name: "Brian",
  age: 44,
  job: "Killer of things",
});

console.log({ profileOfKiller });

// Task! Fix the above!
