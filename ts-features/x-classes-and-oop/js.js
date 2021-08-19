// Classes and OOP (Object Orientated Programming)

// VSCode uses TypeScript to infer the types here! JS won't do it by default

// JS parent class
class Person {
  constructor(name, height, age) {
    this.name = name;
    this.height = height;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

// JS child class
class NicePerson extends Person {
  sayAge() {
    console.log(`Wow, I am ${this.age} years old, how did that happen?`);
  }
}

const frank = new Person("Frank", "6 foot", "49");
frank.sayHello();

const jane = new NicePerson("Jane");
jane.sayAge();
