// Edureka course day-52, class-37 (Javascript-11, Wednesday, 28/02/2024)

// create an array
var arr = [1, 2, 3, 4, 5];
console.log(arr);

// access array element
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

console.log("***************");

var arr2 = new Array("Pranjal", 2, 3, 4, 5);
console.log(arr2);

// access array element
console.log(arr2[0]);
console.log(arr2[1]);
console.log(arr2[2]);
console.log(arr2[3]);
console.log(arr2[4]);

console.log("***************");

// length of array
console.log(arr.length);

console.log("***************");

// for loop in array
let sum = 0;
for (var i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log("sum of all elements in arr1 is =>", sum);

console.log("***************");

// slice array
var arr1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
var arr2 = arr1.slice(0, 3);
console.log(arr2);

console.log("***************");

// sort array
arr.sort();
console.log(arr);

console.log("***************");

// reverse array
arr.reverse();
console.log(arr);

console.log("***************");

// push element in array
arr.push(6);
console.log(arr);

console.log("***************");

// unshift element in array
arr.unshift(0);
console.log(arr);
