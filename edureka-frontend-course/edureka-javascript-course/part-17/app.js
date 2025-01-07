// Edureka course day-60, class-43 (Javascript-17, Thursday, 07/03/2024)

// Document object model (DOM)

// get elements
const heading = document.getElementById("heading");
console.log(heading.innerHTML);

const container = document.getElementsByClassName("container");
console.log(typeof container);

console.log(container[0]);

const button = document.getElementsByTagName("button");
console.log(button);

const input = document.getElementsByName("name");
console.log(input);

// by id
const heading2 = document.querySelector("#heading");
console.log(heading2);

// by class
const container2 = document.querySelectorAll(".container");
console.log(container2);

// by tag
const button2 = document.querySelector("button");
console.log(button2);
