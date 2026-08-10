const signupForm = document.getElementById("signupForm");
const message = document.getElementById("message");

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const usernameTaken = users.some(function (user) {
    return user.username.toLowerCase() === username.toLowerCase();
  });

  const emailTaken = users.some(function (user) {
    return user.email.toLowerCase() === email.toLowerCase();
  });

  if (usernameTaken) {
    message.textContent = "That username is already taken.";
    return;
  }

  if (emailTaken) {
    message.textContent = "That email already has an account.";
    return;
  }

  const newUser = {
    name: name,
    email: email,
    username: username,
    password: password
  };

  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));



  message.textContent = "Account created successfully!";
signupForm.reset();

});
