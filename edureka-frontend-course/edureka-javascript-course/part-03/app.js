// primitive datatypes

// string
var str1 = "hi";
var str2 = new String("helow");
console.log(str1, str2);

// number
var num1 = 12;
var num2 = new Number(67);
console.log(num1, num2);

// bool
var bool1 = true;
var bool2 = new Boolean(false);
console.log(bool1, bool2);

// bigInt
var big1 = 7878n;
var big2 = BigInt(898);
console.log(big1, big2);

// symbol
// symbols are unique
var sys1 = Symbol("key");
var sys2 = Symbol("key");
console.log(sys1, sys2, sys1 === sys2);

// reference datatypes

// object
var obj = {
  name: "pranjal",
  age: 24,
};

console.log(obj);
console.log(obj.name);

// function
function myFunc() {
  var x = 12;
  var y = 15;
  console.log("inside the function, sum =>", x + y);
  // return
  return x + y;
}

var sum = myFunc();
console.log("function is returning, sum =>", sum);

// function expression
var myFuncExp = function () {
  var a = 12;
  var b = 7;
  console.log("inside the function, substraction =>", a - b);
  // return
  return a - b;
};

var substraction = myFuncExp();
console.log("function is returning, substraction =>", substraction);

// arrow function
var myArrowFunc = name => {
  console.log("inside the function =>", name);
};

myArrowFunc("pranjal gogoi");
myArrowFunc("upama bora");

// iife function
(function () {
  console.log("i am iife");
})();

// return in iifee function
var value = (function () {
  return 100;
})();
console.log(value);
