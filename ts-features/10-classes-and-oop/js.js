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

  calculateAgeInFuture(futureYears) {
    return this.age + futureYears;
  }

  ageInXYears(futureYears) {
    console.log(
      `In ${futureYears} years, ${
        this.name
      } will be ${this.calculateAgeInFuture(futureYears)}`
    );
  }
}

// JS child class
class NicePerson extends Person {
  sayAge() {
    console.log(
      `${this.name}: Wow, I am ${this.age} years old, how did that happen?`
    );
  }
}

const frank = new Person("Frank", "6 foot", "49");
frank.sayHello();

// 1.
// What is the expected output from the below? Uncomment and find out
//frank.sayAge();

// 2.
// What is the expected output from the below? Uncomment and find out
//frank.ageInXYears(4);

const jane = new NicePerson("Jane", "5 foot, 4 inches", 30);
jane.sayAge();
jane.ageInXYears(5);
jane.calculateAgeInFuture(10);

// 3.
// Describe what happens with jane.calculateAgeInFuture(10) - what's the problem here?
