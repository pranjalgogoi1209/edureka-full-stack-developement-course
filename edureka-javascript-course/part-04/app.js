// generator function =>

function* genAdd(a) {
  var b = 10;
  yield a + b;

  b++;
  yield a + b;

  b++;
  yield a + b;
}

const app = genAdd(10);
console.log(app.next());
console.log(app.next().value);
console.log(app.next().value);
console.log(app.next().value);

// operators

// arithmatic operators
console.log(4 + 5);
console.log(4 - 5);
console.log(4 * 5);
console.log(4 / 5);
console.log(40 % 5);
console.log(2 ** 2);

var i = 8;
i++;
console.log(i);
i--;
console.log(i);

// assignment operator
var a = 10;
a += 5;
console.log(a);

// comparison operator
console.log(55 == "55");
console.log(55 != "55");

// strict check, also checking datatypes
console.log(55 === "55");
console.log(55 !== "55");

// logical operators

// and operator
if (true && true) {
  console.log("return true");
} else {
  console.log("return false");
}

// or operator
if (5 > 2 || 2 > 5) {
  console.log("return true");
} else {
  console.log("return false");
}

// not operator
if (!5 > 2) {
  console.log("return true");
} else {
  console.log("return false");
}

// ternary operator
console.log(4 < 6 ? "true" : "false");
