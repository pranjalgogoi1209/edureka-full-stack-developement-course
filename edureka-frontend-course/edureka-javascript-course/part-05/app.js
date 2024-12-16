// Edureka course day-44, class-31 (Javascript-05, Tuesday, 20/02/2024)

let a = 3;
let b = 2;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// increment and decrement
const c = a++; // post increment
console.log(a); // a gets increment bcz of post increment
const d = ++a; // pre increment
console.log(c, d);

const e = b--; // post decrement
console.log(b); // b gets decrement bcz of post decrement
const f = --b; // pre decrement
console.log(e, f);

// assignment operators
let apple = 10;
let orange = 20;
apple += 10; // apple = apple + 10
apple -= 10; // apple = apple - 10
apple *= 10; // apple = apple * 10
apple /= 10; // apple = apple / 10
apple %= 10; // apple = apple % 10

apple = apple + orange;

console.log(apple);

// comparison operators
console.log(10 > 20);
console.log(10 < 20);
console.log(10 >= 20);
console.log(10 <= 20);
console.log(10 == 20);
console.log(10 === 20);
console.log(10 != 20);
console.log(10 !== 20);
