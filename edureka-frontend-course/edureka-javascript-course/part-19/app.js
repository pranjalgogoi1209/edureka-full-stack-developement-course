// Edureka course day-64, class-45 (Javascript-19, Monday, 11/03/2024)

const container = document.querySelector(".container");

// first child: It is used to get the first child of an element.
console.log(container.firstChild);

// last child: It is used to get the last child of an element.
console.log(container.lastChild);

// first element child: It is used to get the first element child of an element.
console.log(container.firstElementChild);

// last element child: It is used to get the last element child of an element.
console.log(container.lastElementChild);

// child nodes: It is used to get all the child nodes of an element.
console.log(container.childNodes);

// child elements: It is used to get all the child elements of an element.
console.log(container.children);

// next sibling: It is used to get the next sibling of an element.
console.log(container.nextSibling);

// next element sibling: It is used to get the next element sibling of an element.
console.log(container.nextElementSibling);

// create element: It is used to create an element.
const h1 = document.createElement("h2");
h1.textContent = "New Created Element";
container.appendChild(h1);
