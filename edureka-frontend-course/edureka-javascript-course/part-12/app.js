// Edureka course day-53, class-38 (Javascript-12, Thursday, 29/02/2024)

// array methods

// pop => It is used to remove the last element of an array.
let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr.pop());
console.log(arr);

console.log("***************");

// shift => It is used to remove the first element of an array.
let arr2 = [1, 2, 3, 4, 5];
console.log(arr2);
console.log(arr2.shift());
console.log(arr2);

console.log("***************");

// concat => It is used to merge two arrays.
let arr3 = [1, 2, 3, 4, 5];
let arr4 = [6, 7, 8, 9, 10];
let arr5 = arr3.concat(arr4);
console.log(arr5);

console.log("***************");

// for loop
let newArr = [];
for (let i = 0; i < arr5.length; i++) {
  //   newArr[i] = arr5[i] ** 2;
  newArr.push(arr5[i] ** 2);
}
console.log(arr5);
console.log(newArr);

// forEach => It is used to iterate over an array.
let arr6 = [1, 2, 3, 4, 5];
arr6.forEach((element, idx, array) => {
  if (idx === 2) {
    array[idx] = 10;
  }
  console.log(element);
});
console.log(arr6, "after changing foreach");

console.log("***************");

// map => It is used to iterate over an array.
let arr7 = [1, 2, 3, 4, 5];
let arr8 = arr7.map((element) => {
  return element ** 2;
});
console.log(arr7);
console.log(arr8);

console.log("***************");

// filter => It is used to filter an array.
let arr9 = [1, 2, 3, 4, 5];
let arr10 = arr9.filter((element) => {
  return element % 2 === 0;
});
console.log(arr9);
console.log(arr10);

console.log("***************");

// reduce => It is used to reduce an array.
let arr11 = [1, 2, 3, 4, 5];
let sum = arr11.reduce((acc, element) => {
  console.log(acc, element);
  return acc + element;
});
console.log(arr11);
console.log(sum);

console.log("***************");

// sort => It is used to sort an array.
let arr12 = [1, 2, 3, 4, 5];

// It will work as it's default behaviour,
// i.e it will sort the array in asscending order
// it works in single digit numbers array
// converts => numbers to strings, string are compared on unicode values
// arr12.sort();

let arr13 = arr12.sort((a, b) => {
  console.log(a, b);
  return a - b;
});
console.log(arr12);
console.log(arr13);
