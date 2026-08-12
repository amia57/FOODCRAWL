// ==========================================
// FOODCRAWL PROFILE PAGE
// ==========================================


// ==========================================
// GET CURRENT USER
// ==========================================

const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
);


// If nobody is logged in, send them to login

if (!currentUser) {
    window.location.href = "login.html";
}


// ==========================================
// USERNAME
// ==========================================

const profileUsername =
    document.getElementById("profileUsername");

if (profileUsername && currentUser) {
    profileUsername.textContent =
        currentUser.username;
}


// ==========================================
// PROFILE PICTURE ELEMENTS
// ==========================================

const profileImage =
    document.getElementById("profileImage");

const defaultProfile =
    document.getElementById("defaultProfile");

const pictureInput =
    document.getElementById("pictureInput");

const changePicture =
    document.getElementById("changePicture");


// ==========================================
// LOAD SAVED PROFILE PICTURE
// ==========================================

if (
    currentUser &&
    currentUser.profilePicture &&
    profileImage
) {

    profileImage.src =
        currentUser.profilePicture;

    profileImage.style.display =
        "block";

    if (defaultProfile) {
        defaultProfile.style.display =
            "none";
    }

} else {

    if (profileImage) {
        profileImage.style.display =
            "none";
    }

    if (defaultProfile) {
        defaultProfile.style.display =
            "flex";
    }

}


// ==========================================
// CHANGE PROFILE PICTURE BUTTON
// ==========================================

if (
    changePicture &&
    pictureInput
) {

    changePicture.addEventListener(
        "click",
        function () {

            pictureInput.click();

        }
    );

}


// ==========================================
// USER PICKS A NEW IMAGE
// ==========================================

if (pictureInput) {

    pictureInput.addEventListener(
        "change",
        function () {

            const file =
                pictureInput.files[0];


            if (!file) {
                return;
            }


            const reader =
                new FileReader();


            reader.onload =
                function () {

                    const imageData =
                        reader.result;


                    // Show image

                    if (profileImage) {

                        profileImage.src =
                            imageData;

                        profileImage.style.display =
                            "block";

                    }


                    // Hide default profile

                    if (defaultProfile) {

                        defaultProfile.style.display =
                            "none";

                    }


                    // Save to current user

                    currentUser.profilePicture =
                        imageData;


                    localStorage.setItem(
                        "currentUser",
                        JSON.stringify(currentUser)
                    );


                    // ==================================
                    // UPDATE USER IN USERS ARRAY
                    // ==================================

                    const users =
                        JSON.parse(
                            localStorage.getItem("users")
                        ) || [];


                    const userIndex =
                        users.findIndex(
                            function (user) {

                                return (
                                    user.username ===
                                    currentUser.username
                                );

                            }
                        );


                    if (userIndex !== -1) {

                        users[userIndex].profilePicture =
                            imageData;


                        localStorage.setItem(
                            "users",
                            JSON.stringify(users)
                        );

                    }

                };


            reader.readAsDataURL(file);

        }
    );

}


// ==========================================
// LOG OUT
// ==========================================

const logoutButton =
    document.getElementById("logoutButton");


if (logoutButton) {

    logoutButton.addEventListener(
        "click",
        function () {

            localStorage.removeItem(
                "currentUser"
            );


            window.location.href =
                "login.html";

        }
    );

}