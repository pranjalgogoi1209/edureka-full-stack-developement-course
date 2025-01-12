// Edureka course day-68, class-49 (Javascript-23, Friday, 15/03/2024)

// global scope
const c = 5;
function num() {
  // local scope
  let a = 1;

  // var is function scoped
  var b = 1;
  console.log(a, b);
}

if (true) {
  var z = 5;

  // let is block scoped
  let y = 10;
  // const is block scoped
  const x = 10;
}

console.log(z);
// console.log(y);
// console.log(x);

// console.log(a);
// console.log(b);
console.log(c);

num();

// arrow function
/* const arrowFunc = () => {
  console.log("arrow function");
}; */
const arrowFunc = (parameter) => console.log("arrow function", parameter);

arrowFunc("Hi");

// template string
const name = "Pranjal";
const age = 20;
const str = `My name is ${name} and I am ${age} years old.`;
console.log(str);

// spread operator
const arr = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const arr3 = [...arr, ...arr2];
console.log(arr3);

// rest operator
const arr4 = [1, 2, 3, 4, 5];
const [a, b, ...d] = arr4;
console.log(a, b, d);

// object destructuring
const car = {
  color: "red",
  model: "BMW",
  topSpeed: 200,
};
const { color, model, topSpeed } = car;
console.log(color, model, topSpeed);
