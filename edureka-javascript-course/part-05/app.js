// conditional operator (if)

var condition = false;

if (condition) {
  console.log("condition is true");
} else {
  console.log("condition is false");
}

// else if

var condition2 = 10;

if (condition2 === 5) {
  console.log("equal to 5");
} else if (condition2 > 5) {
  console.log("greather than 5");
} else {
  console.log("less than 5");
}

// break statement and switch

var a = "green";
switch (a) {
  case "red":
    console.log("red is stored in a");
    break;

  case "blue":
    console.log("blue is stored in a");
    break;

  case "green":
    console.log("yellow or Green is stored in a");
    break;

  default:
    console.log("black is stored in a");
    break;
}

// loops in javascript

// for loop =>
for (let i = 0; i <= 5; i++) {
  console.log(i);
}

console.log("*****");

// while loop =>
var a = 1;
while (a <= 5) {
  console.log(a);
  a++;
}

console.log("*****");

// do while loop =>
var b = 1;
do {
  console.log(b);
  if (b == 3) {
    break;
  }
  b++;
} while (b <= 5);

// for in =>

// for of =>
