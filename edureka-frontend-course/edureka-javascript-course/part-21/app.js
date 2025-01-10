// Edureka course day-66, class-47 (Javascript-21, Wednesday, 13/03/2024)

const heading = document.getElementById("heading");

// functional event handler

/* heading.addEventListener("mouseover", () => {
  heading.style.color = "green";
});

heading.addEventListener("mouseout", () => {
  heading.style.color = "red";
}); */

// property event handler

heading.onmouseover = () => {
  heading.style.color = "green";
};

heading.onmouseout = () => {
  heading.style.color = "red";
};

// I don't know why this is not working
heading.click = () => {
  console.log("clicked");
  alert("You are clicking on heading");
};

const btn = document.querySelector("button");

btn.addEventListener("click", (event) => {
  console.log("button is clicked", event);
});

// event propagation

// event bubbling => child to parent

const body = document.querySelector("body");
const grandParent = document.getElementById("grand-parent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

/* body.addEventListener("click", () => {
  alert("body is clicked");
});

grandParent.addEventListener("click", () => {
  alert("grand parent is clicked");
});

parent.addEventListener("click", () => {
  alert("parent is clicked");
});

child.addEventListener("click", () => {
  alert("child is clicked");
}); */

// event capturing
body.addEventListener(
  "click",
  () => {
    alert("body is clicked");
  },
  true
);

grandParent.addEventListener(
  "click",
  () => {
    alert("grand parent is clicked");
  },
  true
);

parent.addEventListener(
  "click",
  () => {
    alert("parent is clicked");
  },
  true
);

child.addEventListener(
  "click",
  () => {
    alert("child is clicked");
  },
  true
);
