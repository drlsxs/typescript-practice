class Calculate {
  public x: number;
  public y: number;


  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  add(): number {
    return this.x + this.y;
  }
}

const calculate = new Calculate(1, 2);
console.log(calculate.add());
console.log(typeof Calculate);
console.log(Calculate === Calculate.prototype.constructor);

class Animal {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}m`);
  }
}

class Dog extends Animal {

  constructor(name: string) {
    super(name);
  }

  move(distance: number = 10) {
    console.log("bark...");
    super.move(distance);
  }
}

const dog = new Dog("Coco");
dog.move();

class Cat extends Animal {
  constructor(name: string, age: number) {
    super(name);
    this.age = age;
  }



  public age: number;

  move(distance: number = 0) {
    super.move(distance);
  }
}