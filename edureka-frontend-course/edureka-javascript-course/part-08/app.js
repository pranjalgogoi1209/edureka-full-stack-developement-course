// Edureka course day-47, class-34 (Javascript-08, Friday, 23/02/2024)

// function =>

// function definition with parameters
function myFunc(age) {
  console.log(age);
  if (age >= 18) {
    console.log("you can drive");
  } else {
    console.log("you can't drive");
  }
}

// function call with arguments
myFunc(18);
myFunc(10);

function alertFunc(num) {
  console.log("alert", num);
  alert("You are clicking on alert button" + " " + num);
}
