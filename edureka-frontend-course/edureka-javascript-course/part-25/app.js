// Edureka course day-72, class-51 (Javascript-25, Tuesday, 19/03/2024)

// synchronous => It means our program gets executed in a sequence or in the same order that we have defined.

const func1 = () => {
  console.log("func1 is called");
};
const func2 = () => {
  console.log("func2 is called");
};
const func3 = () => {
  console.log("func3 is called");
};

func1();
func2();
func3();

// asynchronous => It means our program gets executed in a sequence or in the same order that we have defined.

setTimeout(() => {
  console.log("func1 async is called");
}, 0);
setTimeout(() => {
  console.log("func2 async is called");
}, 1000);
setTimeout(() => {
  console.log("func3 is called");
}, 2000);

// callback => It is a function passed to another function as a parameter/argument.
const greet = (name, callback) => {
  console.log(`hello ${name}`);
  callback();
};

greet("Pranjal", () => {
  console.log("callback is called");
});
function greeting(name) {
  console.log("Hello " + name);
}
function processUserInput(callback) {
  var name = "John";
  callback(name);
}
processUserInput(greeting);

function repeat(operation, num) {
  if (num <= 0) return;
  operation();
  repeat(operation, --num);
}
repeat(() => console.log("Hi"), 3);
