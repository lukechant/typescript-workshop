// Interfaces

// VSCode uses TypeScript to infer the types here! JS won't do it by default

// Imagine the values below have been input my a user from a form...

const person1 = {
  name: "Brian",
  height: 6,
  age: "45",
  occupation: "actor",
  pets: "cat",
};

const person2 = {
  name: "James",
  height: "5 foot, 11 inches",
  age: 22,
  occupation: "astronaut",
  pets: ["cat", "dog", "fish"],
};

// You can probably see fairly quickly that the value types are different and will likely cause problems in our application

// Imagine we had to check an object with 100s of values to debug the problem?

// Writing a function to check values
// We shouldn't have to do this, but hey ho...
const person1Values = Object.entries(person1);
const person2Values = Object.entries(person2);

const differentValues = person1Values
  .map(([_, person1Value], index) => {
    return typeof person1Value !== typeof person2Values[index][1]
      ? person1Values[index][0]
      : null;
  })
  .filter((value) => !!value);

differentValues.forEach((differentValueIs) => {
  console.log({ differentValueIs });
});

// If only there was a better way to make sure values contain the correct data structure
