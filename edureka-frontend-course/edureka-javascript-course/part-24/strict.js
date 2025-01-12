// functional strict mode

const myFunc = () => {
  "use strict";
  x = 10;
  console.log("hello", x);
};

// myFunc();

const myFunc2 = () => {
  x = 10;
  console.log("hello", x);
};

myFunc2();
