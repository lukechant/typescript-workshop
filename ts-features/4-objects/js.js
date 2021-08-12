// Objects

// VSCode uses TypeScript to infer the types here! JS won't do it by default

const myObject = {
  a: "hello",
  b: "world",
  c: 1,
  d: "2",
  food: 10,
};

// 1.
// What will the output of myObject.d be?
console.log({ z: myObject.z });

// 2.
// What will the output of myObject be after mutating?
myObject.food = "pizza is great";
console.log({ myObject });

// 3.
// What will the output be?
const addingValues = myObject.c + myObject.d;
console.log({ addingValues });
