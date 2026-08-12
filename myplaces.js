// ==========================================
// FOODCRAWL MY PLACES
// ==========================================


// ==========================================
// CURRENT USER
// ==========================================

const currentUser =
  JSON.parse(
    localStorage.getItem(
      "currentUser"
    )
  );


// Nobody logged in

if (!currentUser) {

  window.location.href =
    "login.html";

}


// ==========================================
// USER-SPECIFIC STORAGE
// ==========================================

const placesKey =
  "myPlaces_" +
  currentUser.username;


const favoritesKey =
  "favorites_" +
  currentUser.username;


// ==========================================
// GET SAVED PLACES
// ==========================================

let myPlaces =
  JSON.parse(
    localStorage.getItem(
      placesKey
    )
  ) || [];


// ==========================================
// HTML ELEMENTS
// ==========================================

const placeForm =
  document.getElementById(
    "placeForm"
  );


const placeName =
  document.getElementById(
    "placeName"
  );


const placeAddress =
  document.getElementById(
    "placeAddress"
  );


const placeCategory =
  document.getElementById(
    "placeCategory"
  );


const placeWebsite =
  document.getElementById(
    "placeWebsite"
  );


const placeDescription =
  document.getElementById(
    "placeDescription"
  );


const placesList =
  document.getElementById(
    "placesList"
  );


const emptyPlaces =
  document.getElementById(
    "emptyPlaces"
  );


// ==========================================
// SAVE PLACES
// ==========================================

function savePlaces() {

  localStorage.setItem(
    placesKey,
    JSON.stringify(
      myPlaces
    )
  );

}


// ==========================================
// CATEGORY EMOJI
// ==========================================

function getCategoryEmoji(
  category
) {

  if (
    category === "Pizza"
  ) {
    return "🍕";
  }


  if (
    category === "Cafes"
  ) {
    return "☕";
  }


  if (
    category ===
    "Delis & Bagels"
  ) {
    return "🥪";
  }


  if (
    category ===
    "Desserts & Bakeries"
  ) {
    return "🍰";
  }


  if (
    category ===
    "East & Southeast Asian"
  ) {
    return "🥟";
  }


  if (
    category ===
    "South Asian"
  ) {
    return "🍛";
  }


  if (
    category ===
    "Latin American"
  ) {
    return "🌮";
  }


  if (
    category ===
    "American & Brunch"
  ) {
    return "🍔";
  }


  return "🍽️";

}


// ==========================================
// SHOW PLACES
// ==========================================

function showPlaces() {

  placesList.innerHTML =
    "";


  if (
    myPlaces.length === 0
  ) {

    emptyPlaces.style.display =
      "block";

    return;

  }


  emptyPlaces.style.display =
    "none";


  myPlaces.forEach(
    function(place, index) {


      // CARD

      const card =
        document.createElement(
          "div"
        );

      card.classList.add(
        "place-card"
      );


      // NAME

      const name =
        document.createElement(
          "h3"
        );

      name.textContent =
        place.name;


      // CATEGORY

      const category =
        document.createElement(
          "p"
        );

      category.classList.add(
        "place-category"
      );

      category.textContent =
        getCategoryEmoji(
          place.category
        ) +
        " " +
        place.category;


      // ADDRESS

      const address =
        document.createElement(
          "p"
        );

      address.classList.add(
        "place-address"
      );

      address.textContent =
        place.address ||
        "No address added";


      // DESCRIPTION

      const description =
        document.createElement(
          "p"
        );

      description.classList.add(
        "place-description"
      );

      description.textContent =
        place.description ||
        "No description added.";


      card.appendChild(
        name
      );

      card.appendChild(
        category
      );

      card.appendChild(
        address
      );

      card.appendChild(
        description
      );


      // WEBSITE

      if (
        place.website
      ) {

        const website =
          document.createElement(
            "a"
          );

        website.href =
          place.website;

        website.target =
          "_blank";

        website.textContent =
          "Visit Website";

        card.appendChild(
          website
        );

      }


      // ==================================
      // BUTTON AREA
      // ==================================

      const buttons =
        document.createElement(
          "div"
        );

      buttons.classList.add(
        "place-buttons"
      );


      // ==================================
      // FAVORITE BUTTON
      // ==================================

      const favoriteButton =
        document.createElement(
          "button"
        );

      favoriteButton.classList.add(
        "favorite-place"
      );

      favoriteButton.textContent =
        "♥ Favorite";


      favoriteButton.addEventListener(
        "click",
        function() {


          let favorites =
            JSON.parse(
              localStorage.getItem(
                favoritesKey
              )
            ) || [];


          if (
            !favorites.includes(
              place.name
            )
          ) {

            favorites.push(
              place.name
            );


            localStorage.setItem(
              favoritesKey,
              JSON.stringify(
                favorites
              )
            );


            favoriteButton.textContent =
              "♥ Favorited!";

          }

          else {

            favoriteButton.textContent =
              "Already Favorited";

          }

        }
      );


      // ==================================
      // DELETE BUTTON
      // ==================================

      const deleteButton =
        document.createElement(
          "button"
        );

      deleteButton.classList.add(
        "delete-place"
      );

      deleteButton.textContent =
        "Delete";


      deleteButton.addEventListener(
        "click",
        function() {


          myPlaces.splice(
            index,
            1
          );


          savePlaces();

          showPlaces();

        }
      );


      buttons.appendChild(
        favoriteButton
      );

      buttons.appendChild(
        deleteButton
      );


      card.appendChild(
        buttons
      );


      placesList.appendChild(
        card
      );

    }
  );

}


// ==========================================
// ADD NEW PLACE
// ==========================================

placeForm.addEventListener(
  "submit",
  function(event) {

    event.preventDefault();


    let website =
      placeWebsite.value.trim();


    // Automatically add https://

    if (
      website !== "" &&
      !website.startsWith(
        "http://"
      ) &&
      !website.startsWith(
        "https://"
      )
    ) {

      website =
        "https://" +
        website;

    }


    const newPlace = {

      name:
        placeName.value.trim(),

      address:
        placeAddress.value.trim(),

      category:
        placeCategory.value,

      website:
        website,

      description:
        placeDescription.value.trim()

    };


    myPlaces.push(
      newPlace
    );


    savePlaces();


    // Clear form

    placeForm.reset();


    // Refresh list

    showPlaces();

  }
);


// ==========================================
// INITIAL DISPLAY
// ==========================================

showPlaces();
