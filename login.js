const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const loginInput = document
    .getElementById("loginInput")
    .value
    .trim()
    .toLowerCase();

  const password = document.getElementById("loginPassword").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const matchedUser = users.find(function (user) {
    const usernameMatches =
      user.username.toLowerCase() === loginInput;

    const emailMatches =
      user.email.toLowerCase() === loginInput;

    const passwordMatches =
      user.password === password;

    return (usernameMatches || emailMatches) && passwordMatches;
  });

  if (!matchedUser) {
    loginMessage.textContent = "Incorrect username, email, or password.";
    return;
  }

  // Save who is logged in
  localStorage.setItem("currentUser", JSON.stringify(matchedUser));

  loginMessage.textContent = "Login successful!";
  loginForm.reset();

  // Uncomment this later when your group connects the pages
  /*
  setTimeout(function () {
    window.location.href = "home.html";
  }, 1000);
  */
});
