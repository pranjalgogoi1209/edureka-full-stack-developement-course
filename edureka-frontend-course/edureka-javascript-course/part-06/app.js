// === check value and datatype
console.log(1 === "1");

// == check only value
console.log(1 == "1");

// logical operators

// and
console.log(true && false);
console.log(10 > 20 && 10 < 20);

// or
console.log(true || false);
console.log(10 > 20 || 10 < 20);

// not
console.log(!false);
console.log(!(10 > 20 || 10 < 20));

// conditional statements

// if statement
let a = 10;
let b = 20;

if (a > b) {
  // when condition is true then execute all the line of code inside the block
  console.log("a is greater than b");
}

// if else statement
if (a > b) {
  // when condition is true then execute all the line of code inside the block
  console.log("a is greater than b");
} else {
  // when condition is false then execute all the line of code inside the block
  console.log("a is less than b");
}

// else if statement
const age = 35;
if (age > 50) {
  // when condition is true then execute all the line of code inside the block
  console.log("age is greater than 50");
} else if (age > 30) {
  // when condition is true then execute all the line of code inside the block
  console.log("age is greater than 30");
} else {
  // when condition is false then execute all the line of code inside the block
  console.log("age is less than 30");
}

// switch statement
const color = "green";
switch (color) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;
  case "green":
    console.log("color is green");
    break;
  default:
    console.log("color is not red, blue or green");
    break;
}
