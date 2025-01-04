// Edureka course day-58, class-41 (Javascript-15, Tuesday, 05/03/2024)

// object

const car = {
  // property : value
  color: "red",
  model: "BMW",
  topSpeed: 200,
  motion: function () {
    console.log(`${this.model} is moving`);
  },
  drive: function () {
    return `${this.model} is driving on the road`;
  },
};

console.log(car, typeof car);

console.log(typeof null);

// access object property
console.log(car.color);
car.motion();
console.log(car.drive());

// new Object syntax
const newCar = new Object();
newCar.color = "blue";
newCar.model = "Audi";
newCar.topSpeed = 300;
newCar.motion = function () {
  console.log(`${this.model} is moving again`);
};

console.log(newCar, typeof newCar);
newCar.motion();

// class
class Car {
  // constructor => used to initialize the properties of the class
  constructor(color, model, topSpeed) {
    // this keyword is used to access the properties of the class
    // this represent the current object/instance
    this.color = color;
    this.model = model;
    this.topSpeed = topSpeed;
  }
  getInfo() {
    console.log(`${this.model} is a ${this.color} car`);
  }
  motion() {
    console.log(`${this.model} is moving inside class`);
  }
}

// let/var/const objectName = new ClassName(arguments);
const car1 = new Car("red", "BMW", 200);
const car2 = new Car("blue", "Audi", 300);

console.log(car1, typeof car1);
console.log(car2, typeof car2);

car1.motion();
car2.motion();

car1.getInfo();
car2.getInfo();
