// ==========================================
// FOODCRAWL FAVORITES PAGE
// USER-SPECIFIC FAVORITES
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
// USER-SPECIFIC STORAGE KEYS
// ==========================================

const favoritesKey =
    "favorites_" + currentUser.username;

const customFavoritesKey =
    "customFavorites_" + currentUser.username;


// ==========================================
// GET SAVED FAVORITES
// ==========================================

let favorites =
    JSON.parse(
        localStorage.getItem(favoritesKey)
    ) || [];


// ==========================================
// ALL CATEGORY SECTIONS
// ==========================================

let categorySections =
    document.querySelectorAll(".favsubsecs");


// ==========================================
// NO FAVORITES MESSAGE
// ==========================================

let noFavoritesMessage =
    document.createElement("p");

noFavoritesMessage.innerHTML =
    "You haven't added any favorites yet!";

noFavoritesMessage.classList.add(
    "no-favorites"
);


// Put message under Favorites title

let favoritesTitle =
    document.getElementById(
        "h1favmajortitle"
    );

if (favoritesTitle) {

    favoritesTitle.insertAdjacentElement(
        "afterend",
        noFavoritesMessage
    );

}


// ==========================================
// CHECK EACH CATEGORY
// ==========================================

let totalFavoritesShown = 0;


categorySections.forEach(function(section) {

    let restaurantNames =
        section.querySelectorAll(".resname");

    let categoryHasFavorite = false;


    restaurantNames.forEach(
        function(nameElement) {


            // ======================================
            // RESTAURANT NAME
            // ======================================

            let restaurantName =
                nameElement.innerText.trim();


            // Check unfinished placeholders

            let isPlaceholder =

                restaurantName.includes(
                    "NAME_OF_STORE"
                )

                ||

                restaurantName.includes(
                    "RESTUARANT"
                );


            // ======================================
            // GET ALL ELEMENTS FOR RESTAURANT
            // ======================================

            let restaurantElements = [];

            restaurantElements.push(
                nameElement
            );


            let nextElement =
                nameElement.nextElementSibling;


            while (
                nextElement &&
                !nextElement.classList.contains(
                    "resname"
                )
            ) {

                restaurantElements.push(
                    nextElement
                );

                nextElement =
                    nextElement.nextElementSibling;

            }


            // ======================================
            // HIDE PLACEHOLDERS
            // ======================================

            if (isPlaceholder) {

                restaurantElements.forEach(
                    function(element) {

                        element.style.display =
                            "none";

                    }
                );

                return;

            }


            // ======================================
            // FAVORITED RESTAURANT
            // ======================================

            if (
                favorites.includes(
                    restaurantName
                )
            ) {


                // Show restaurant

                restaurantElements.forEach(
                    function(element) {

                        element.style.display =
                            "";

                    }
                );


                categoryHasFavorite = true;

                totalFavoritesShown++;


                // ==================================
                // REMOVE FAVORITE BUTTON
                // ==================================

                let removeButton =
                    document.createElement(
                        "button"
                    );

                removeButton.innerHTML =
                    "Remove Favorite";

                removeButton.classList.add(
                    "remove-favorite"
                );


                let description = null;


                restaurantElements.forEach(
                    function(element) {

                        if (
                            element.classList.contains(
                                "resdescribe"
                            )
                        ) {

                            description =
                                element;

                        }

                    }
                );


                if (description) {

                    description.insertAdjacentElement(
                        "afterend",
                        removeButton
                    );

                }


                // ==================================
                // REMOVE FAVORITE
                // ==================================

                removeButton.addEventListener(
                    "click",
                    function() {


                        favorites =
                            favorites.filter(
                                function(favorite) {

                                    return (
                                        favorite !==
                                        restaurantName
                                    );

                                }
                            );


                        // SAVE TO THIS USER ONLY

                        localStorage.setItem(
                            favoritesKey,
                            JSON.stringify(
                                favorites
                            )
                        );


                        // Hide restaurant

                        restaurantElements.forEach(
                            function(element) {

                                element.style.display =
                                    "none";

                            }
                        );


                        // Hide button

                        removeButton.style.display =
                            "none";


                        totalFavoritesShown--;


                        // Show empty message if needed

                        if (
                            totalFavoritesShown === 0
                        ) {

                            noFavoritesMessage.style.display =
                                "block";

                        }


                        checkCategory(
                            section
                        );

                    }
                );


            }

            else {


                // ==================================
                // NOT FAVORITED
                // ==================================

                restaurantElements.forEach(
                    function(element) {

                        element.style.display =
                            "none";

                    }
                );

            }

        }
    );


    // ======================================
    // HIDE CATEGORY IF EMPTY
    // ======================================

    if (!categoryHasFavorite) {

        section.style.display =
            "none";

        hideCategoryTitle(
            section
        );

    }

});


// ==========================================
// EMPTY FAVORITES MESSAGE
// ==========================================

if (
    totalFavoritesShown === 0
) {

    noFavoritesMessage.style.display =
        "block";

} else {

    noFavoritesMessage.style.display =
        "none";

}


// ==========================================
// CHECK CATEGORY VISIBILITY
// ==========================================

function checkCategory(section) {

    let restaurantNames =
        section.querySelectorAll(
            ".resname"
        );


    let hasVisibleRestaurant =
        false;


    restaurantNames.forEach(
        function(nameElement) {

            if (
                nameElement.style.display !==
                "none"
            ) {

                hasVisibleRestaurant =
                    true;

            }

        }
    );


    if (!hasVisibleRestaurant) {

        section.style.display =
            "none";

        hideCategoryTitle(
            section
        );

    }

}


// ==========================================
// HIDE CATEGORY TITLE
// ==========================================

function hideCategoryTitle(section) {

    let previousElement =
        section.previousElementSibling;


    while (previousElement) {

        if (
            previousElement.classList.contains(
                "rescate"
            )
        ) {

            previousElement.style.display =
                "none";

            break;

        }


        previousElement =
            previousElement.previousElementSibling;

    }

}


// ==========================================
// GO EXPLORING BUTTON
// ==========================================

let exploreButton =
    document.querySelector(
        ".btnformap"
    );


if (exploreButton) {

    exploreButton.addEventListener(
        "click",
        function() {

            window.location.href =
                "map.html";

        }
    );

}


// ==========================================
// CUSTOM FAVORITES
// ==========================================

let addButton =
    document.getElementById(
        "addFavoriteButton"
    );

let nameInput =
    document.getElementById(
        "restaurantName"
    );

let websiteInput =
    document.getElementById(
        "restaurantWebsite"
    );

let descriptionInput =
    document.getElementById(
        "restaurantDescription"
    );

let userFavorites =
    document.getElementById(
        "userFavorites"
    );


// LOAD CUSTOM FAVORITES FOR CURRENT USER ONLY

let customFavorites =

    JSON.parse(
        localStorage.getItem(
            customFavoritesKey
        )
    ) || [];


// ==========================================
// SHOW CUSTOM FAVORITES
// ==========================================

function showFavorites() {

    if (!userFavorites) {
        return;
    }


    userFavorites.innerHTML =
        "";


    customFavorites.forEach(
        function(restaurant, index) {


            let restaurantBox =
                document.createElement(
                    "div"
                );

            restaurantBox.classList.add(
                "user-favorite"
            );


            // ==================================
            // NAME
            // ==================================

            let name =
                document.createElement(
                    "h3"
                );


            if (restaurant.website) {

                let link =
                    document.createElement(
                        "a"
                    );

                link.innerHTML =
                    restaurant.name;

                link.href =
                    restaurant.website;

                link.target =
                    "_blank";

                name.appendChild(
                    link
                );

            } else {

                name.innerHTML =
                    restaurant.name;

            }


            // ==================================
            // DESCRIPTION
            // ==================================

            let description =
                document.createElement(
                    "p"
                );

            description.innerHTML =
                restaurant.description || "";


            // ==================================
            // REMOVE CUSTOM FAVORITE BUTTON
            // ==================================

            let removeButton =
                document.createElement(
                    "button"
                );

            removeButton.innerHTML =
                "♥ Remove Favorite";

            removeButton.classList.add(
                "remove-favorite"
            );


            removeButton.addEventListener(
                "click",
                function() {


                    customFavorites.splice(
                        index,
                        1
                    );


                    localStorage.setItem(
                        customFavoritesKey,
                        JSON.stringify(
                            customFavorites
                        )
                    );


                    showFavorites();

                }
            );


            restaurantBox.appendChild(
                name
            );

            restaurantBox.appendChild(
                description
            );

            restaurantBox.appendChild(
                removeButton
            );


            userFavorites.appendChild(
                restaurantBox
            );

        }
    );

}


// ==========================================
// ADD CUSTOM FAVORITE
// ==========================================

if (
    addButton &&
    nameInput &&
    websiteInput &&
    descriptionInput
) {

    addButton.addEventListener(
        "click",
        function() {


            let name =
                nameInput.value.trim();

            let website =
                websiteInput.value.trim();

            let description =
                descriptionInput.value.trim();


            if (name === "") {

                alert(
                    "Please enter a restaurant name!"
                );

                return;

            }


            // Add https:// if missing

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
                    "https://" + website;

            }


            let restaurant = {

                name: name,

                website: website,

                description: description

            };


            customFavorites.push(
                restaurant
            );


            // SAVE TO THIS USER ONLY

            localStorage.setItem(
                customFavoritesKey,
                JSON.stringify(
                    customFavorites
                )
            );


            nameInput.value =
                "";

            websiteInput.value =
                "";

            descriptionInput.value =
                "";


            showFavorites();

        }
    );

}


// ==========================================
// DISPLAY CUSTOM FAVORITES
// ==========================================

showFavorites();