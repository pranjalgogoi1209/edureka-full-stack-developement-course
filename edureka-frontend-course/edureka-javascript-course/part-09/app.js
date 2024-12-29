// Edureka course day-50, class-35 (Javascript-09, Monday, 26/02/2024)

// output methods/functions in javascript

// innerHTML
function updateDom(name) {
  const headingElement = document.getElementById("heading");
  headingElement.innerHTML = `How are you, <span style="color: red">${name}</span>`;
}

// document.write
function writeToDom() {
  document.write("Hello World");
}

// window.alert
function alertMessage() {
  window.alert("Hello World");
}

// console.log
function consoleLog() {
  console.log("Hello World");
}

// input methods/functions in javascript

// window.prompt
function promptMessage() {
  const name = window.prompt("Enter your name", "Pranjal");
  const nameArea = document.getElementById("name");
  nameArea.innerHTML = name;
}

// window.confirm
function confirmMessage() {
  const isConfirmed = window.confirm("Are you sure?");
  console.log(isConfirmed);
  const result = document.getElementById("result");
  if (isConfirmed) {
    result.innerHTML = "Confirmed";
  } else {
    result.innerHTML = "Not Confirmed";
  }
}
