export {};

// Classes and OOP (Object Orientated Programming)

// Parent class
class Person {
  public readonly name: string;
  public readonly age: number;
  public readonly height: string;

  private readonly _accessModifier: string = "I'm Private";

  constructor(name: string, height: string, age: number) {
    this.name = name;
    this.height = height;
    this.age = age;
  }

  public get heightOfPerson(): string {
    return this.height;
  }

  public set heightOfPerson(height: string): void {
    this.height = height;
  }

  public sayHello(): void {
    console.log(`Hello, my name is ${this.name}`);
  }

  private _calculateAgeInFuture(futureYears: number): number {
    return this.age + futureYears;
  }

  public ageInXYears(futureYears): void {
    console.log(
      `In ${futureYears} years, ${
        this.name
      } will be ${this._calculateAgeInFuture(futureYears)}`
    );
  }
}

// JS child class
class NicePerson extends Person {
  sayAge(): void {
    console.log(
      `${this.name}: Wow, I am ${this.age} years old, how did that happen?`
    );
  }
}

const frank = new Person("Frank", "6 foot", "49");
frank.sayHello();
frank.sayAge();
frank._accessModifier; // check out 'static' access modifier

const jane = new NicePerson("Jane", 35, 30);
jane.sayAge(4);
jane.ageInXYears(5);
jane.calculateAgeInFuture(10);

// Task
// Fix the errors above and feel like a champ!
