// Edureka course day-67, class-48 (Javascript-22, Thursday, 14/03/2024)

const handleSubmit = (event) => {
  event.preventDefault();

  const name = event.target.name.value;
  const password = event.target.password.value;
  const age = event.target.age.value;
  const gender = event.target.gender.value;
  const dob = event.target.dob.value;
  const email = event.target.email.value;
  const feedback = event.target.feedback.value;

  if (!name || !password || !age || !gender || !dob || !email || !feedback) {
    return alert("Please fill all the fields");
  }

  console.log(name, password, age, gender, dob, email, feedback);

  const body = document.querySelector("body");
  body.innerHTML = `<h1>Thanks for submitting the form ${name}</h1>`;
};
