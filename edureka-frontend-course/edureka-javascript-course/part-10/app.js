//Edureka course day-51, class-36 (Javascript-10, Tuesday, 27/02/2024)

// string methods

// let str = new String("I am Pranjal");
let str = "pRaNjal";
let length = str.length;
console.log(length);

// charAt
let char = str.charAt(0);
console.log(char);

// slice
let slice1 = str.slice(0, 2);
// by default endIndex is endIndex-1
let slice2 = str.slice(2);
console.log("slice1 =>", slice1);
console.log("slice2 =>", slice2);

// toLowerCase
let lower = str.toLowerCase();
console.log(lower);

// toUpperCase
let upper = str.toUpperCase();
console.log(upper);

// replace
let string = "Rockz Rockz the world";
let replace = string.replace("Rockz", "Pranjal");
console.log(replace);

// concat
let str1 = "Pranjal";
let str2 = "Gogoi";
let add = str1 + " " + str2;
console.log(add);
let concat = str1.concat(" ", str2);
console.log(concat);

// trim
let str3 = "   Pranjal   ";
let trim = str3.trim();
console.log(trim);
