// for in loop

const obj = {
  name: "pranjal",
  age: 24,
  education: "b-tech",
};

for (let key in obj) {
  console.log(`${key} => ${obj[key]}`);
}

// for of loop

const arr = ["honda", "bmw", "audi", "lambo"];

for (let i of arr) {
  console.log(i);
}

// for of and for in,in a string
const str = "alphabates";
for (let letter of str) {
  console.log(letter);
}
for (let letter in str) {
  console.log(str[letter]);
}

// innerHTML
const change = () => {
  const element = document.getElementById("id");
  element.innerHTML = "INTERNSHIP PROGRAM";
};

// prompt
const name = prompt("enter your name");
document.write(name);
