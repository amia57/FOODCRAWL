// ==========================================
// FOODCRAWL LOGIN PAGE
// ==========================================


// ==========================================
// GET THE LOGIN FORM
// ==========================================

const loginForm =
    document.getElementById("loginForm") ||
    document.querySelector("form");


// ==========================================
// GET INPUTS
// ==========================================

// This works whether your input is called
// username, email, identifier, etc.

const usernameInput =
    document.getElementById("username") ||
    document.getElementById("loginUsername") ||
    document.getElementById("identifier") ||
    document.querySelector('input[name="username"]') ||
    document.querySelector('input[type="text"]');


const emailInput =
    document.getElementById("email") ||
    document.getElementById("loginEmail") ||
    document.querySelector('input[name="email"]');


const passwordInput =
    document.getElementById("password") ||
    document.getElementById("loginPassword") ||
    document.querySelector('input[type="password"]');


// Message area if you have one
const loginMessage =
    document.getElementById("loginMessage") ||
    document.getElementById("message");


// ==========================================
// LOGIN
// ==========================================

if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            // Get all registered users

            const users =
                JSON.parse(
                    localStorage.getItem("users")
                ) || [];


            // ==================================
            // GET WHAT USER TYPED
            // ==================================

            let loginValue = "";


            if (usernameInput) {

                loginValue =
                    usernameInput.value
                        .trim()
                        .toLowerCase();

            } else if (emailInput) {

                loginValue =
                    emailInput.value
                        .trim()
                        .toLowerCase();

            }


            const password =
                passwordInput
                    ? passwordInput.value
                    : "";


            // ==================================
            // CHECK USER
            // ==================================

            const foundUser =
                users.find(
                    function (user) {

                        const savedUsername =
                            user.username
                                ? user.username
                                    .toLowerCase()
                                : "";


                        const savedEmail =
                            user.email
                                ? user.email
                                    .toLowerCase()
                                : "";


                        return (

                            (
                                savedUsername ===
                                loginValue

                                ||

                                savedEmail ===
                                loginValue
                            )

                            &&

                            user.password ===
                            password

                        );

                    }
                );


            // ==================================
            // SUCCESSFUL LOGIN
            // ==================================

            if (foundUser) {

                // Save logged-in user

                localStorage.setItem(
                    "currentUser",
                    JSON.stringify(foundUser)
                );


                // Optional success message

                if (loginMessage) {

                    loginMessage.textContent =
                        "Login successful!";

                    loginMessage.style.color =
                        "green";

                }


                // Send them to profile

                window.location.href =
                    "profile.html";

            }


            // ==================================
            // WRONG LOGIN
            // ==================================

            else {

                if (loginMessage) {

                    loginMessage.textContent =
                        "Incorrect username/email or password.";

                    loginMessage.style.color =
                        "red";

                }

                else {

                    alert(
                        "Incorrect username/email or password."
                    );

                }

            }

        }
    );

}