alert("external js");

// defining variables

var question = "what is your name?";
var answer = "my name is ankit";
var scors = 100;

// defining variables with different methods

// var

// var can be redeclared and can be updated

var name = "ankit";
let age = 21;
const isMarried = false;

// var has function scope and global scope

// var defined in if block is accessible outside that if block but var defined in function is not accessible outside the function, that's why var is called functional scope.

// var defined in global scope is called global scope and accessible everywhere.

var x = 25;

function myFunc() {
  var x = 50;
  console.log(x);
  if (x == 50) {
    var age = 100;
  }
  console.log("age=>", age);
}

myFunc();
console.log(x);

// let

// let cann't be redeclared but can be updated.

// let defined in block scope is accessible only inside that block.

// let defined in global scope is also accessible outside that block.

// unlike var, let doesnot hoist the variable

function carFunc() {
  if (true) {
    let name = "honda";
  }

  //   console.log(name);
}

carFunc();
// console.log(name);

// cost =>

// A constant is a variable whose value cannot be changed.

// const is block scope and also cannot be redeclared.
const nameCompany = "edureka";
console.log(nameCompany);
