// object
let obj = {
  key: "value",
  name: "pranjal gogoi",
};

console.log(obj);
console.log(obj.key);
console.log(obj["name"]);

// array
let arr = [1, 22, 33, 44];
console.log(arr[2]);

// function
function carwash(size) {
  if (size === "xxl") {
    return 1440;
  } else if (size === "xl") {
    return 1024;
  } else if (size == "l") {
    return 991;
  }
}

console.log(carwash("xxl"));
console.log(carwash("xl"));
console.log(carwash("l"));

// let

{
  let name = "pranjal";
  console.log(name);
}
// let is block scope, we cann't call it outside the block, also we cann't redeclre it, but we can update it.
// console.log(name);

// const
{
  const nameCompany = "edureka";
  console.log(nameCompany);
}
// const is block scope, we cann't call it outside the block, also we cann't redeclre it, also we cannot update it, it is a constant.
// console.log(nameCompany);

// hoisting

// internally defination of hoisting variable goes on top, application if variable is created using var keyword

console.log(hoisting);
var hoisting = true; // undefined
// let hoisting = true; // error
