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
console.log({ myObject });

// 3.
// Oh wait... there's NOT an error... hmm... 🤔
const addingValues = myObject.c + myObject.d;
console.log({ addingValues });

// TASK
// Without changing the values of myObject...
// How can we get the output of "myObject.c + myObject.d" to equal 3?

const addingValuesTask = myObject.c + myObject.d;
console.log({ addingValuesTask });
