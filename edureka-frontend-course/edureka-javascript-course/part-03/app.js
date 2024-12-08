// global variable

const globalVar = "I am a global variable";

// Accessing globalVar inside a function
function firstFunction() {
  console.log(globalVar);
}

// Accessing globalVar inside another function
function secondFunction() {
  console.log(globalVar);
}

firstFunction();
secondFunction();

// Accessing globalVar in the global scope
console.log(globalVar);

// local variable
function myFunction() {
  const localVar = "I am a local variable";
  // Accessing localVar inside the function
  console.log(localVar);
}

myFunction();

// Error: localVar is not defined
// console.log(localVar);

// lexical scope
function outerFunction() {
  const outerVar = "I am from outerFunction";
  function innerFunction() {
    // Can access 'outerVar' because of lexical scope
    console.log(outerVar);
  }
  innerFunction();
}

outerFunction();
