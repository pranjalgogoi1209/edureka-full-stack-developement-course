// Edureka course day-54, class-39 (Javascript-13, Friday, 01/03/2024)

// find method => It is used to find an element in an array.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr);
let result = arr.find((element) => {
  return element === 7;
});
console.log(result);

console.log("***************");

// negative index in slice => It is used to cutout/slice a part of a string, but the endIndex is exclusive, i.e we don't cut the character present at end index.
let str = "Pranjal";
let result2 = str.slice(-2);
console.log(result2);

console.log("***************");

// findIndex => It is used to find the index of an element in an array.
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr2);
let result3 = arr2.findIndex((element) => {
  return element === 7;
});
console.log(result3);

console.log("***************");

// includes => It is used to check if an element is present in an array.
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr3);
let result4 = arr3.includes(7);
console.log(result4);

console.log("***************");
