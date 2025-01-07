// Edureka course day-59, class-42 (Javascript-16, Wednesday, 06/03/2024)

// date object
const now = new Date();
console.log(now);

// customize date
const dateAndTime = new Date(2025, 0, 7, 5, 17);
console.log(dateAndTime);

// string to date
const date = new Date("January 07, 2025, 05:17:00");
console.log(date);

// date mothods

// getFullYear: Returns the year
const year = date.getFullYear();
console.log(year);

// getMonth: Returns the month
const month = date.getMonth();
console.log(month);

// getDate: Returns the day of the month
const day = date.getDate();
console.log(day);

// getDay: Returns the day of the week
const dayName = date.getDay();
console.log(dayName);

// getHours: Returns the hours
const hours = date.getHours();
console.log(hours);

// getMinutes: Returns the minutes
const minutes = date.getMinutes();
console.log(minutes);

// getSeconds: Returns the seconds
const seconds = date.getSeconds();
console.log(seconds);

// getMilliseconds: Returns the milliseconds
const milliseconds = date.getMilliseconds();
console.log(milliseconds);

// getTime: Returns the time in milliseconds
const time = date.getTime();
console.log(time);

// setFullYear: Sets the year
date.setFullYear(2024);
console.log(date);

console.log("***************");

// Math object

// abs: Returns the absolute value of a number
const absoluteValue = Math.abs(-10);
console.log(absoluteValue);

// ceil: Returns the smallest integer greater than or equal to a number
const ceilValue = Math.ceil(10.1);
console.log(ceilValue);

// floor: Returns the largest integer less than or equal to a number
const floorValue = Math.floor(10.9);
console.log(floorValue);

// random: Returns a random number between 0 (inclusive) and 1 (exclusive)
const randomValue = Math.random();
console.log(randomValue);

// round: Returns the nearest integer
const roundValue = Math.round(10.5);
console.log(roundValue);

// sqrt: Returns the square root of a number
const sqrtValue = Math.sqrt(25);
console.log(sqrtValue);

// pow: Returns the value of a number raised to a power
const powValue = Math.pow(2, 10);
console.log(powValue);

// min: Returns the minimum value of all arguments
const minValue = Math.min(1, 2, 3, 4, 5);
console.log(minValue);

// max: Returns the maximum value of all arguments
const maxValue = Math.max(1, 2, 3, 4, 5);
console.log(maxValue);

// PI: Returns the value of PI
const piValue = Math.PI;
console.log(piValue);
