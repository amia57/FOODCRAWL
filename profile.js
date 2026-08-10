let profileUsername = document.getElementById("profileUsername");

let profileImage = document.getElementById("profileImage");

let defaultProfile = document.getElementById("defaultProfile");

let pictureInput = document.getElementById("pictureInput");

let changePicture = document.getElementById("changePicture");

let logoutButton = document.getElementById("logoutButton");


// Try to get logged-in username
let loggedInUsername = localStorage.getItem("loggedInUser");


// If there is a logged-in user, show their username
if (loggedInUsername) {

  profileUsername.innerHTML = loggedInUsername;

} else {

  profileUsername.innerHTML = "Username";

}


// Load saved profile picture
let savedPicture = localStorage.getItem("profilePicture");

if (savedPicture) {

  profileImage.src = savedPicture;

  profileImage.style.display = "block";

  defaultProfile.style.display = "none";

}


// Open file picker
changePicture.addEventListener("click", function() {

  pictureInput.click();

});


// Change profile picture
pictureInput.addEventListener("change", function() {

  let file = pictureInput.files[0];

  if (file) {

    let reader = new FileReader();

    reader.onload = function(event) {

      let image = event.target.result;

      profileImage.src = image;

      profileImage.style.display = "block";

      defaultProfile.style.display = "none";


      // Save picture
      localStorage.setItem("profilePicture", image);

    };

    reader.readAsDataURL(file);

  }

});


// Log out
logoutButton.addEventListener("click", function() {

  localStorage.removeItem("loggedInUser");

  profileUsername.innerHTML = "Username";

  alert("Logged out!");

});
