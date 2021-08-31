export {}
// Objects

const myObject = {
  a: "hello",
  b: "world",
  c: 1,
  d: "2",
  food: 10,
};

// 1.
// Oh look! There's an error!
console.log({ z: myObject.z });

// 2.
// Oh look! There's an error!
myObject.food = "pizza is great";

// 3.
// Oh wait... there's NOT an error... hmm... 🤔
// Oh yeah, concatenation (joining two strings together) is still value JS/TS
const addingValues = myObject.c + myObject.d;
// Ah, now we get an error, as TypeScrpt knows we're expecting a number, not a string
const addingNumberValues: number = myObject.c + myObject.d;

// TASK
// Without changing the values of myObject...
// How can we get the output of "myObject.c + myObject.d" to equal 3?

const addingValuesTask: number = myObject.c + Number(myObject.d);
