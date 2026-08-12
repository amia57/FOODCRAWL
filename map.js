// ==========================================
// FOODCRAWL MAP
// ==========================================

const map = L.map("map").setView([40.7282, -73.7949], 12);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
        '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);


// ==========================================
// CATEGORY LAYERS
// ==========================================

const layers = {
    "Pizza": L.layerGroup().addTo(map),
    "Cafes": L.layerGroup().addTo(map),
    "Delis & Bagels": L.layerGroup().addTo(map),
    "Desserts & Bakeries": L.layerGroup().addTo(map),
    "East & Southeast Asian": L.layerGroup().addTo(map),
    "South Asian": L.layerGroup().addTo(map),
    "Latin American": L.layerGroup().addTo(map),
    "American & Brunch": L.layerGroup().addTo(map),
    "Other Restaurants": L.layerGroup().addTo(map)
};


// ==========================================
// HAND-PICKED FOOD SPOTS
// ==========================================

const foodPlaces = [

    // 🍕 PIZZA

    {
        name: "Daro’s Pizza & Chicken",
        address: "44-25 Kissena Blvd, Flushing, NY 11355",
        lat: 40.753601,
        lng: -73.82244,
        category: "Pizza"
    },

    {
        name: "Daro’s Pizza & Chicken",
        address: "68-14 Roosevelt Ave, Woodside, NY 11377",
        lat: 40.746132,
        lng: -73.8970442,
        category: "Pizza"
    },

    {
        name: "Singa’s Famous Pizza",
        address: "260-21 Hillside Ave, Queens, NY 11004",
        lat: 40.7377216,
        lng: -73.7076345,
        category: "Pizza"
    },

    {
        name: "Singa’s Famous Pizza",
        address: "65-53 108th St, Forest Hills, NY 11375",
        lat: 40.7289532,
        lng: -73.8475536,
        category: "Pizza"
    },

    {
        name: "Mr Bruno’s Pizzeria",
        address: "75-63 31st Ave, East Elmhurst, NY 11370",
        lat: 40.7602669,
        lng: -73.8761975,
        category: "Pizza"
    },

    {
        name: "Delicias Pizza and Fried Chicken",
        address: "141-20 Holly Ave, Flushing, NY 11355",
        lat: 40.751387,
        lng: -73.81784,
        category: "Pizza"
    },

    {
        name: "Jax Pizza Joint",
        address: "27-20 Jackson Ave, Long Island City, NY 11101",
        lat: 40.7475601,
        lng: -73.9403215,
        category: "Pizza"
    },

    {
        name: "Soho Pizza",
        address: "42-27 35th Ave Store, Long Island City, NY 11101",
        lat: 40.746821,
        lng: -73.92929,
        category: "Pizza"
    },

    {
        name: "Pizza Veloce Astoria",
        address: "34-01 36th Ave, Astoria, NY 11106",
        lat: 40.75546,
        lng: -73.927352,
        category: "Pizza"
    },

    {
        name: "R & R Pizza Connection",
        address: "32-20 34th Ave, Astoria, NY 11106",
        lat: 40.758891,
        lng: -73.9259607,
        category: "Pizza"
    },

    {
        name: "Freddy’s Pizza Astoria",
        address: "25-27 Broadway, Astoria, NY 11106",
        lat: 40.763296,
        lng: -73.928095,
        category: "Pizza"
    },

    {
        name: "Andrew Bellucci’s Pizzeria",
        address: "37-08 30th Ave, Astoria, NY 11103",
        lat: 40.7644002,
        lng: -73.9163838,
        category: "Pizza"
    },

    {
        name: "La Mozzarella Pizzeria",
        address: "51-21 43rd Ave, Woodside, NY 11377",
        lat: 40.7444511,
        lng: -73.912816,
        category: "Pizza"
    },

    {
        name: "Leonardo’s Pizza",
        address: "41-10 49th St, Sunnyside, NY 11104",
        lat: 40.7459008,
        lng: -73.915424,
        category: "Pizza"
    },

    {
        name: "Due Fratelli",
        address: "42-18 43rd Ave, Sunnyside, NY 11104",
        lat: 40.7451463,
        lng: -73.9215425,
        category: "Pizza"
    },

    {
        name: "Due Fratelli",
        address: "76-23 37th Ave, Jackson Heights, NY 11372",
        lat: 40.7506258,
        lng: -73.876055,
        category: "Pizza"
    },

    {
        name: "Silvano Pasta/Pizza",
        address: "45-08 46th St, Sunnyside, NY 11104",
        lat: 40.7427606,
        lng: -73.9189002,
        category: "Pizza"
    },

    {
        name: "Phil & Sons",
        address: "57-29 Main St, Flushing, NY 11355",
        lat: 40.746014,
        lng: -73.826001,
        category: "Pizza"
    },

    {
        name: "Lucia Pizza",
        address: "136-55 Roosevelt Ave, Flushing, NY 11354",
        lat: 40.759961,
        lng: -73.829185,
        category: "Pizza"
    },

    {
        name: "Champion Pizza",
        address: "31-12 Broadway, Astoria, NY 11106",
        lat: 40.761861,
        lng: -73.925345,
        category: "Pizza"
    },

    {
        name: "Champion Pizza",
        address: "37-61 82nd St, Jackson Heights, NY 11372",
        lat: 40.7517315,
        lng: -73.8846737,
        category: "Pizza"
    },

    {
        name: "Il Miglio Brick Oven Pizzeria & Italian Restaurant",
        address: "11-03 36th Ave, Queens, NY 11106",
        lat: 40.7611575,
        lng: -73.9396459,
        category: "Pizza"
    },

    {
        name: "Louie’s Pizza",
        address: "81-34 Baxter Ave, Elmhurst, NY 11373",
        lat: 40.746068,
        lng: -73.883647,
        category: "Pizza"
    },

    {
        name: "Sunnyside Pizza",
        address: "40-01A Queens Blvd, Sunnyside, NY 11104",
        lat: 40.743808,
        lng: -73.924258,
        category: "Pizza"
    },

    {
        name: "Macoletta",
        address: "28-15 24th Ave, Astoria, NY 11102",
        lat: 40.7731535,
        lng: -73.9163771,
        category: "Pizza"
    },

    {
        name: "Philomena’s Pizza",
        address: "41-16 Queens Blvd, Sunnyside, NY 11104",
        lat: 40.743608,
        lng: -73.923235,
        category: "Pizza"
    },

    {
        name: "GoodFellas Pizzeria of L.I.C.",
        address: "25-19 40th Ave, Long Island City, NY 11101",
        lat: 40.7532471,
        lng: -73.9372587,
        category: "Pizza"
    },

    {
        name: "Traze",
        address: "21-03 45th Rd, Long Island City, NY 11101",
        lat: 40.7467047,
        lng: -73.9475051,
        category: "Pizza"
    },

    {
        name: "Lucky Pizzeria & Cafe Inc",
        address: "27-10 Queens Plaza S, Long Island City, NY 11101",
        lat: 40.7499601,
        lng: -73.9396159,
        category: "Pizza"
    },

    {
        name: "Bella Donna Pizza",
        address: "44-12 31st Ave, Astoria, NY 11103",
        lat: 40.7594636,
        lng: -73.9135945,
        category: "Pizza"
    },

    {
        name: "Bella Donna Pizza",
        address: "60-91 54th St, Maspeth, NY 11378",
        lat: 40.7134516,
        lng: -73.9106798,
        category: "Pizza"
    },

    {
        name: "sLICe LIC Pizzeria",
        address: "2-47 50th Ave, Long Island City, NY 11101",
        lat: 40.7411488,
        lng: -73.9459942,
        category: "Pizza"
    },

    {
        name: "Lupo Rosso",
        address: "43-69 11th St, Long Island City, NY 11101",
        lat: 40.7532272,
        lng: -73.9467109,
        category: "Pizza"
    },

    {
        name: "Reg’z New York Pizza",
        address: "28-17 36th Ave, Astoria, NY 11106",
        lat: 40.757712,
        lng: -73.932013,
        category: "Pizza"
    },

    {
        name: "Napoli Pizza & Pasta",
        address: "33-02 35th Ave, Astoria, NY 11106",
        lat: 40.7571794,
        lng: -73.9268784,
        category: "Pizza"
    },

    {
        name: "Regina’s Pizzeria",
        address: "176-49 Union Tpke, Flushing, NY 11366",
        lat: 40.726008,
        lng: -73.7915889,
        category: "Pizza"
    },

    {
        name: "Nick’s Pizza",
        address: "108-26 Ascan Ave, Forest Hills, NY 11375",
        lat: 40.71797,
        lng: -73.84048,
        category: "Pizza"
    },


    // ☕ CAFES

    {
        name: "Café Coco",
        address: "21-52 44th Dr, Long Island City, NY 11101",
        lat: 40.7475171,
        lng: -73.9454951,
        category: "Cafes"
    },

    {
        name: "Little Flower Cafe",
        address: "25-35 36th Ave, Astoria, NY 11106",
        lat: 40.758142,
        lng: -73.932998,
        category: "Cafes"
    },

    {
        name: "MOKAFE",
        address: "25-73 Steinway St, Astoria, NY 11103",
        lat: 40.766099,
        lng: -73.912741,
        category: "Cafes"
    },

    {
        name: "Forest Cafe",
        address: "68-04 Burns Street, Forest Hills, NY 11375",
        lat: 40.7212527,
        lng: -73.8518796,
        category: "Cafes"
    },

    {
        name: "Moka & Co",
        address: "28-54 Steinway St, Astoria, NY 11103",
        lat: 40.764644,
        lng: -73.914304,
        category: "Cafes"
    },

    {
        name: "Eli’s Cafe and Creperie",
        address: "23-61 31st St, Astoria, NY 11105",
        lat: 40.7728642,
        lng: -73.9142218,
        category: "Cafes"
    },

    {
        name: "Bodhi Cafe",
        address: "136-20 Booth Memorial Ave, Flushing, NY 11355",
        lat: 40.7468645,
        lng: -73.8282738,
        category: "Cafes"
    },

    {
        name: "GREY Cafe",
        address: "Flushing, NY",
        lat: 40.758025,
        lng: -73.786528,
        category: "Cafes"
    },

    {
        name: "Cafe W & Bakery",
        address: "35-29 154th St, Flushing, NY 11354",
        lat: 40.7673146,
        lng: -73.8106413,
        category: "Cafes"
    },

    {
        name: "T-swirl Crepe Astoria",
        address: "36-16 30th Ave, Astoria, NY 11103",
        lat: 40.7645742,
        lng: -73.9169963,
        category: "Cafes"
    },

    {
        name: "El Café at Ora",
        address: "42-08 43rd Ave, Sunnyside, NY 11104",
        lat: 40.7451765,
        lng: -73.9218079,
        category: "Cafes"
    },

    {
        name: "Café 1 of a Kind",
        address: "255-13 Northern Blvd, Little Neck, NY 11362",
        lat: 40.7724274,
        lng: -73.7343477,
        category: "Cafes"
    },

    {
        name: "Elm Roastery",
        address: "83-30A Broadway, Elmhurst, NY 11373",
        lat: 40.7403897,
        lng: -73.8792685,
        category: "Cafes"
    },

    {
        name: "Prince Tea House",
        address: "36-39 Prince St, Flushing, NY 11354",
        lat: 40.7617705,
        lng: -73.8330002,
        category: "Cafes"
    },

    {
        name: "Prince Tea House Forest Hills",
        address: "15 Station Square, Forest Hills, NY 11375",
        lat: 40.7191379,
        lng: -73.845192,
        category: "Cafes"
    },

    {
        name: "Cafe Bench",
        address: "194-07 Northern Blvd, Flushing, NY 11358",
        lat: 40.757976,
        lng: -73.8235483,
        category: "Cafes"
    },

    {
        name: "The Queensboro",
        address: "80-02 Northern Blvd, Jackson Heights, NY 11372",
        lat: 40.7552023,
        lng: -73.8870197,
        category: "Cafes"
    },

    {
        name: "Caffé Bene",
        address: "80-25 37th Ave, Jackson Heights, NY 11372",
        lat: 40.7506258,
        lng: -73.876055,
        category: "Cafes"
    },

    {
        name: "The French Workshop",
        address: "38-39 Bell Blvd, Bayside, NY 11361",
        lat: 40.766103,
        lng: -73.772285,
        category: "Cafes"
    },

    {
        name: "Partners Coffee",
        address: "26-25 Jackson Ave, Long Island City, NY 11101",
        lat: 40.7476282,
        lng: -73.9415736,
        category: "Cafes"
    },

    {
        name: "Cannelle Patisserie",
        address: "75-59 31st Ave, East Elmhurst, NY 11370",
        lat: 40.7600992,
        lng: -73.8920175,
        category: "Cafes"
    },


    // 🥪 DELIS

    {
        name: "Sal Kris & Charlie’s Deli",
        address: "33-12 23rd Ave, Astoria, NY 11105",
        lat: 40.7732144,
        lng: -73.9115737,
        category: "Delis & Bagels"
    },

    {
        name: "Tony’s Beechhurst Deli",
        address: "11-18 154th St, Whitestone, NY 11357",
        lat: 40.7917681,
        lng: -73.8075443,
        category: "Delis & Bagels"
    },

    {
        name: "Mars Deli",
        address: "44-47 Kissena Blvd, Flushing, NY 11355",
        lat: 40.753299,
        lng: -73.822159,
        category: "Delis & Bagels"
    },

    {
        name: "Mars Deli Woodside",
        address: "44-06 48th Ave, Woodside, NY 11377",
        lat: 40.7392755,
        lng: -73.9208789,
        category: "Delis & Bagels"
    },

    {
        name: "Grand Mars",
        address: "69-62 Grand Ave, Maspeth, NY 11378",
        lat: 40.7267939,
        lng: -73.8933484,
        category: "Delis & Bagels"
    },

    {
        name: "Bagel Oasis",
        address: "183-12 Horace Harding Expy, Fresh Meadows, NY 11365",
        lat: 40.739251,
        lng: -73.8906252,
        category: "Delis & Bagels"
    },

    {
        name: "N & R Delicatessen",
        address: "77-19 25th Ave, East Elmhurst, NY 11370",
        lat: 40.7627563,
        lng: -73.790869,
        category: "Delis & Bagels"
    },

    {
        name: "LIC Bagels and Deli",
        address: "41-04 27th St, Astoria, NY 11101",
        lat: 40.7425803,
        lng: -73.9409055,
        category: "Delis & Bagels"
    },

    {
        name: "D & F Italian Deli",
        address: "35-17 Broadway, Astoria, NY 11106",
        lat: 40.760478,
        lng: -73.922057,
        category: "Delis & Bagels"
    },

    {
        name: "Neel Deli & Convenience",
        address: "137-11 Northern Blvd, Flushing, NY 11354",
        lat: 40.763293,
        lng: -73.831016,
        category: "Delis & Bagels"
    },

    {
        name: "Wide Lake 4",
        address: "33-02 31st Ave, Astoria, NY 11106",
        lat: 40.7633973,
        lng: -73.9218391,
        category: "Delis & Bagels"
    },

    {
        name: "Leo’s Latticini",
        address: "46-02 104th St, Corona, NY 11368",
        lat: 40.746346,
        lng: -73.859966,
        category: "Delis & Bagels"
    },

    {
        name: "Benateri’s Italian Gourmet Deli",
        address: "129-21 14th Ave, College Point, NY 11356",
        lat: 40.7860052,
        lng: -73.8384748,
        category: "Delis & Bagels"
    },

    {
        name: "Ben’s Kosher Delicatessen",
        address: "211-37 26th Ave, Bayside, NY 11360",
        lat: 40.778074,
        lng: -73.778365,
        category: "Delis & Bagels"
    },

    {
        name: "Friendly 2.0 Deli & Grill",
        address: "12-12 36th Ave, Long Island City, NY 11106",
        lat: 40.7605829,
        lng: -73.938888,
        category: "Delis & Bagels"
    },


    // 🍰 DESSERTS

    {
        name: "Carvel Woodside",
        address: "58-26 Roosevelt Ave, Woodside, NY 11377",
        lat: 40.745317,
        lng: -73.906401,
        category: "Desserts & Bakeries"
    },

    {
        name: "Sweet Cakes",
        address: "137-06 Northern Blvd, Flushing, NY 11354",
        lat: 40.762918,
        lng: -73.831906,
        category: "Desserts & Bakeries"
    },

    {
        name: "Martha’s Country Bakery",
        address: "70-28 Austin St, Forest Hills, NY 11375",
        lat: 40.720566,
        lng: -73.845895,
        category: "Desserts & Bakeries"
    },

    {
        name: "Shinpuru Baking",
        address: "42-29 162nd St, Flushing, NY 11358",
        lat: 40.759827,
        lng: -73.80397,
        category: "Desserts & Bakeries"
    },

    {
        name: "Wildflower Cakery",
        address: "44th Ave, Long Island City, NY 11101",
        lat: 40.744622,
        lng: -73.934502,
        category: "Desserts & Bakeries"
    },

    {
        name: "HANA Gelateria",
        address: "27-20 42nd Rd, Long Island City, NY 11101",
        lat: 40.7490063,
        lng: -73.9401344,
        category: "Desserts & Bakeries"
    },

    {
        name: "Louki’s",
        address: "26-19 Jackson Ave, Long Island City, NY 11101",
        lat: 40.7475864,
        lng: -73.9417972,
        category: "Desserts & Bakeries"
    },

    {
        name: "Cookies and Cream Pastry Shop",
        address: "119-28 Metropolitan Ave, Kew Gardens, NY 11415",
        lat: 40.7056989,
        lng: -73.8310167,
        category: "Desserts & Bakeries"
    },

    {
        name: "Doughnut Plant",
        address: "31-00 47th Ave, Long Island City, NY 11101",
        lat: 40.7421437,
        lng: -73.935502,
        category: "Desserts & Bakeries"
    },

    {
        name: "NaiSnow Tea and Bakery",
        address: "27-53 Jackson Ave, Long Island City, NY 11101",
        lat: 40.74817,
        lng: -73.93972,
        category: "Desserts & Bakeries"
    },

    {
        name: "NaiSnow Tea and Bakery Flushing",
        address: "39-07 Prince St, Flushing, NY 11354",
        lat: 40.759665,
        lng: -73.83226,
        category: "Desserts & Bakeries"
    },

    {
        name: "MIXUE",
        address: "41-01 Kissena Blvd, Flushing, NY 11355",
        lat: 40.758514,
        lng: -73.829623,
        category: "Desserts & Bakeries"
    },

    {
        name: "Paris Baguette Sunnyside",
        address: "45-22 46th St, Queens, NY 11104",
        lat: 40.7424541,
        lng: -73.9189728,
        category: "Desserts & Bakeries"
    },

    {
        name: "Paris Baguette Corona",
        address: "37-38 Junction Blvd, Corona, NY 11368",
        lat: 40.7507,
        lng: -73.870604,
        category: "Desserts & Bakeries"
    },

    {
        name: "Paris Baguette Elmhurst",
        address: "40-22 82nd St, Elmhurst, NY 11373",
        lat: 40.7468976,
        lng: -73.884047,
        category: "Desserts & Bakeries"
    },


    // 🥟 EAST / SOUTHEAST ASIAN

    {
        name: "Nan Xiang Soup Dumplings",
        address: "39-16 Prince St, Flushing, NY 11354",
        lat: 40.7595751,
        lng: -73.8324134,
        category: "East & Southeast Asian"
    },

    {
        name: "Shanghai You Garden",
        address: "135-33 40th Rd, Flushing, NY 11354",
        lat: 40.7588918,
        lng: -73.8304711,
        category: "East & Southeast Asian"
    },

    {
        name: "JUQI",
        address: "133-36 37th Ave, Flushing, NY 11354",
        lat: 40.7602271,
        lng: -73.8334674,
        category: "East & Southeast Asian"
    },

    {
        name: "Kimganae",
        address: "39-12 Union St, Flushing, NY 11354",
        lat: 40.760719,
        lng: -73.826941,
        category: "East & Southeast Asian"
    },

    {
        name: "NIPPON CHA",
        address: "39-34 Bell Blvd, Bayside, NY 11361",
        lat: 40.7643237,
        lng: -73.7716762,
        category: "East & Southeast Asian"
    },

    {
        name: "Bangkok Avenue",
        address: "Little Neck, NY 11362",
        lat: 40.771279,
        lng: -73.7352722,
        category: "East & Southeast Asian"
    },


    // 🍛 SOUTH ASIAN

    {
        name: "Jackson Diner",
        address: "37-40B 74th St, Jackson Heights, NY 11372",
        lat: 40.7478752,
        lng: -73.8917792,
        category: "South Asian"
    },

    {
        name: "Red Chilli",
        address: "76-05 37th Ave, Jackson Heights, NY 11372",
        lat: 40.7493499,
        lng: -73.8896651,
        category: "South Asian"
    },

    {
        name: "Cardamom Indian Cuisine",
        address: "43-45 43rd St, Sunnyside, NY 11104",
        lat: 40.7438763,
        lng: -73.9212182,
        category: "South Asian"
    },

    {
        name: "Seva Indian Cuisine",
        address: "34-11 30th Ave, Astoria, NY 11103",
        lat: 40.76505,
        lng: -73.91862,
        category: "South Asian"
    },


    // 🌮 LATIN

    {
        name: "Taqueria Coatzingo",
        address: "76-05 Roosevelt Ave, Jackson Heights, NY 11372",
        lat: 40.7472806,
        lng: -73.8893611,
        category: "Latin American"
    },

    {
        name: "Birria-Landia",
        address: "Roosevelt Ave, Jackson Heights, NY 11372",
        lat: 40.7472312,
        lng: -73.8885518,
        category: "Latin American"
    },


    // 🍔 AMERICAN

    {
        name: "Mom’s Kitchen & Bar",
        address: "33-01 31st Ave, Astoria, NY 11106",
        lat: 40.7636111,
        lng: -73.9216667,
        category: "American & Brunch"
    },


    // 🍽️ OTHER

    {
        name: "Maiella",
        address: "46-10 Center Blvd, Long Island City, NY 11109",
        lat: 40.7473788,
        lng: -73.9569208,
        category: "Other Restaurants"
    },

    {
        name: "Neo Restaurant",
        address: "212-04 Union Tpke, Hollis Hills, NY 11364",
        lat: 40.733597,
        lng: -73.758913,
        category: "Other Restaurants"
    },

    {
        name: "Lighthouse Rooftop",
        address: "45-15 37th St, Long Island City, NY 11101",
        lat: 40.7435646,
        lng: -73.9278172,
        category: "Other Restaurants"
    },

    {
        name: "Vetro Restaurant & Lounge",
        address: "164-49 Cross Bay Blvd, Howard Beach, NY 11414",
        lat: 40.6600359,
        lng: -73.8399647,
        category: "Other Restaurants"
    },

    {
        name: "Rafaelis Palace",
        address: "113-09 Queens Blvd, Forest Hills, NY 11375",
        lat: 40.7177579,
        lng: -73.8352739,
        category: "Other Restaurants"
    },

    {
        name: "Christos Steak House",
        address: "41-08 23rd Ave, Astoria, NY 11105",
        lat: 40.7703505,
        lng: -73.9074267,
        category: "Other Restaurants"
    },

    {
        name: "Il Falco Restaurant",
        address: "21-50 44th Dr, Long Island City, NY 11101",
        lat: 40.747501,
        lng: -73.9455565,
        category: "Other Restaurants"
    },

    {
        name: "Blue Bay Diner",
        address: "58-50 Francis Lewis Blvd, Flushing, NY 11365",
        lat: 40.7465244,
        lng: -73.7773301,
        category: "Other Restaurants"
    },

    {
        name: "Buccaneer Diner",
        address: "93-01 Astoria Blvd, East Elmhurst, NY 11369",
        lat: 40.76318,
        lng: -73.876328,
        category: "Other Restaurants"
    },

    {
        name: "Taverna Kyclades",
        address: "36-01 Ditmars Blvd, Astoria, NY 11105",
        lat: 40.77432,
        lng: -73.90873,
        category: "Other Restaurants"
    }

];


// ==========================================
// ADD HARDCODED MARKERS
// ==========================================

foodPlaces.forEach(place => {

    const marker = L.marker([
        place.lat,
        place.lng
    ]);

    marker.bindPopup(`
        <div class="food-popup">
            <b>${place.name}</b><br>
            ${place.address}<br>
            <small>${place.category}</small>
        </div>
    `);

    marker.addTo(
        layers[place.category]
    );

});


// ==========================================
// CATEGORY FILTER
// ==========================================

const categoryControls = {

    "🍕 Pizza":
        layers["Pizza"],

    "☕ Cafes":
        layers["Cafes"],

    "🥪 Delis & Bagels":
        layers["Delis & Bagels"],

    "🍰 Desserts & Bakeries":
        layers["Desserts & Bakeries"],

    "🥟 East & Southeast Asian":
        layers["East & Southeast Asian"],

    "🍛 South Asian":
        layers["South Asian"],

    "🌮 Latin American":
        layers["Latin American"],

    "🍔 American & Brunch":
        layers["American & Brunch"],

    "🍽️ Other Restaurants":
        layers["Other Restaurants"]

};


L.control.layers(
    null,
    categoryControls,
    {
        collapsed: false
    }
).addTo(map);


// ==========================================
// HELPER FUNCTIONS
// ==========================================

function normalizeFoodName(name) {

    return (name || "")
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");

}


function categoryFromOSM(tags = {}) {

    const name =
        (tags.name || "").toLowerCase();

    const cuisine =
        (tags.cuisine || "").toLowerCase();

    const amenity =
        (tags.amenity || "").toLowerCase();

    const shop =
        (tags.shop || "").toLowerCase();

    const combined =
        `${name} ${cuisine}`;


    if (
        combined.includes("pizza") ||
        combined.includes("pizzeria")
    ) {
        return "Pizza";
    }


    if (
        shop === "bakery" ||
        amenity === "ice_cream" ||
        combined.includes("bakery") ||
        combined.includes("dessert") ||
        combined.includes("ice cream") ||
        combined.includes("gelato") ||
        combined.includes("donut") ||
        combined.includes("doughnut") ||
        combined.includes("pastry") ||
        combined.includes("cake") ||
        combined.includes("boba") ||
        combined.includes("bubble tea")
    ) {
        return "Desserts & Bakeries";
    }


    if (
        amenity === "cafe" ||
        combined.includes("coffee") ||
        combined.includes("cafe") ||
        combined.includes("café") ||
        combined.includes("tea house") ||
        combined.includes("teahouse")
    ) {
        return "Cafes";
    }


    if (
        combined.includes("deli") ||
        combined.includes("bagel") ||
        combined.includes("delicatessen")
    ) {
        return "Delis & Bagels";
    }


    if (
        cuisine.includes("indian") ||
        cuisine.includes("pakistani") ||
        cuisine.includes("bangladeshi") ||
        cuisine.includes("nepal") ||
        cuisine.includes("sri_lankan") ||
        combined.includes("biryani") ||
        combined.includes("tandoor")
    ) {
        return "South Asian";
    }


    if (
        cuisine.includes("chinese") ||
        cuisine.includes("japanese") ||
        cuisine.includes("korean") ||
        cuisine.includes("thai") ||
        cuisine.includes("vietnamese") ||
        cuisine.includes("filipino") ||
        cuisine.includes("malaysian") ||
        cuisine.includes("indonesian") ||
        cuisine.includes("taiwanese") ||
        cuisine.includes("asian") ||
        combined.includes("ramen") ||
        combined.includes("sushi") ||
        combined.includes("dumpling") ||
        combined.includes("dim sum") ||
        combined.includes("hotpot") ||
        combined.includes("hot pot") ||
        combined.includes("pho")
    ) {
        return "East & Southeast Asian";
    }


    if (
        cuisine.includes("mexican") ||
        cuisine.includes("colombian") ||
        cuisine.includes("ecuadorian") ||
        cuisine.includes("peruvian") ||
        cuisine.includes("brazilian") ||
        cuisine.includes("argentinian") ||
        cuisine.includes("salvadoran") ||
        cuisine.includes("dominican") ||
        cuisine.includes("puerto_rican") ||
        cuisine.includes("venezuelan") ||
        cuisine.includes("latin_american") ||
        combined.includes("taqueria") ||
        combined.includes("taco") ||
        combined.includes("arepa")
    ) {
        return "Latin American";
    }


    if (
        cuisine.includes("american") ||
        combined.includes("burger") ||
        combined.includes("brunch") ||
        combined.includes("diner") ||
        combined.includes("bbq") ||
        combined.includes("barbecue")
    ) {
        return "American & Brunch";
    }


    return "Other Restaurants";
}


// ==========================================
// BUILD ADDRESS
// ==========================================

function buildOSMAddress(tags = {}) {

    const street =
        [
            tags["addr:housenumber"],
            tags["addr:street"]
        ]
        .filter(Boolean)
        .join(" ");


    const city =
        tags["addr:city"] || "Queens";

    const state =
        tags["addr:state"] || "NY";

    const zip =
        tags["addr:postcode"] || "";


    if (street) {

        return `${street}, ${city}, ${state} ${zip}`;

    }


    return `${city}, ${state}`;

}


// ==========================================
// QUEENS ZONES
// ==========================================

const queensZones = [

    {
        name: "Astoria / LIC",
        south: 40.735,
        north: 40.790,
        west: -73.965,
        east: -73.900,
        max: 20
    },

    {
        name: "Jackson Heights / Elmhurst / Corona",
        south: 40.720,
        north: 40.770,
        west: -73.910,
        east: -73.845,
        max: 45
    },

    {
        name: "Flushing / College Point / Whitestone",
        south: 40.735,
        north: 40.805,
        west: -73.850,
        east: -73.790,
        max: 55
    },

    {
        name: "Bayside / Auburndale / Little Neck",
        south: 40.730,
        north: 40.790,
        west: -73.800,
        east: -73.690,
        max: 45
    },

    {
        name: "Forest Hills / Rego Park / Kew Gardens",
        south: 40.690,
        north: 40.750,
        west: -73.880,
        east: -73.820,
        max: 45
    },

    {
        name: "Fresh Meadows / Jamaica / Hollis",
        south: 40.680,
        north: 40.750,
        west: -73.830,
        east: -73.710,
        max: 55
    },

    {
        name: "Ridgewood / Maspeth / Middle Village",
        south: 40.690,
        north: 40.740,
        west: -73.930,
        east: -73.860,
        max: 45
    },

    {
        name: "Richmond Hill / Woodhaven / Ozone Park",
        south: 40.650,
        north: 40.710,
        west: -73.890,
        east: -73.790,
        max: 45
    },

    {
        name: "Howard Beach / South Ozone Park",
        south: 40.620,
        north: 40.680,
        west: -73.860,
        east: -73.770,
        max: 35
    },

    {
        name: "Rockaways",
        south: 40.525,
        north: 40.620,
        west: -73.950,
        east: -73.730,
        max: 40
    }

];


// ==========================================
// FIND ZONE
// ==========================================

function findQueensZone(lat, lng) {

    return queensZones.find(zone => {

        return (
            lat >= zone.south &&
            lat <= zone.north &&
            lng >= zone.west &&
            lng <= zone.east
        );

    });

}


// ==========================================
// LOAD A TON MORE QUEENS FOOD
// ==========================================

async function loadMoreQueensFood() {

    console.log(
        "🍜 Loading restaurants from all over Queens..."
    );


    const queensBBox =
        "40.52,-73.97,40.81,-73.69";


    const query = `

        [out:json][timeout:45];

        (

            nwr["amenity"="restaurant"]["name"]
            (${queensBBox});

            nwr["amenity"="cafe"]["name"]
            (${queensBBox});

            nwr["amenity"="fast_food"]["name"]
            (${queensBBox});

            nwr["amenity"="ice_cream"]["name"]
            (${queensBBox});

            nwr["shop"="bakery"]["name"]
            (${queensBBox});

        );

        out center tags;

    `;


    const url =

        "https://overpass-api.de/api/interpreter?data=" +

        encodeURIComponent(query);


    try {

        const response =
            await fetch(url);


        if (!response.ok) {

            throw new Error(
                `Food request failed: ${response.status}`
            );

        }


        const data =
            await response.json();


        // =====================================
        // EXISTING PLACES
        // =====================================

        const existingPlaces =
            new Set();


        foodPlaces.forEach(place => {

            const key =

                normalizeFoodName(place.name) +

                "_" +

                place.lat.toFixed(3) +

                "_" +

                place.lng.toFixed(3);


            existingPlaces.add(key);

        });


        // =====================================
        // CLEAN RESULTS
        // =====================================

        const possiblePlaces =

            data.elements

                .map(element => {

                    const lat =
                        element.lat ??
                        element.center?.lat;


                    const lng =
                        element.lon ??
                        element.center?.lon;


                    return {

                        lat: lat,

                        lng: lng,

                        tags:
                            element.tags || {}

                    };

                })


                .filter(place => {

                    return (

                        place.lat &&
                        place.lng &&
                        place.tags.name

                    );

                });


        // =====================================
        // SHUFFLE RESULTS
        // =====================================

        possiblePlaces.sort(
            () => Math.random() - 0.5
        );


        // =====================================
        // CREATE BUCKETS
        // =====================================

        const zoneBuckets = {};


        queensZones.forEach(zone => {

            zoneBuckets[zone.name] = [];

        });


        // =====================================
        // SORT PLACES BY AREA
        // =====================================

        possiblePlaces.forEach(place => {

            const zone =
                findQueensZone(
                    place.lat,
                    place.lng
                );


            if (!zone) {
                return;
            }


            zoneBuckets[
                zone.name
            ].push(place);

        });


        // =====================================
        // ADD BALANCED AMOUNTS
        // =====================================

        let totalAdded = 0;


        queensZones.forEach(zone => {

            const places =
                zoneBuckets[
                    zone.name
                ];


            let addedInZone = 0;


            const usedInZone =
                new Set();


            for (
                const place
                of places
            ) {


                if (
                    addedInZone >=
                    zone.max
                ) {

                    break;

                }


                const name =
                    place.tags.name.trim();


                const locationKey =

                    normalizeFoodName(name) +

                    "_" +

                    place.lat.toFixed(3) +

                    "_" +

                    place.lng.toFixed(3);


                if (
                    existingPlaces.has(
                        locationKey
                    )
                ) {

                    continue;

                }


                if (
                    usedInZone.has(
                        locationKey
                    )
                ) {

                    continue;

                }


                const category =

                    categoryFromOSM(
                        place.tags
                    );


                const address =

                    buildOSMAddress(
                        place.tags
                    );


                const marker =

                    L.marker([
                        place.lat,
                        place.lng
                    ]);


                marker.bindPopup(`

                    <div class="food-popup">

                        <b>
                            ${name}
                        </b>

                        <br>

                        ${address}

                        <br>

                        <small>
                            ${category}
                        </small>

                        <br>

                        <small>
                            📍 ${zone.name}
                        </small>

                    </div>

                `);


                marker.addTo(
                    layers[
                        category
                    ]
                );


                usedInZone.add(
                    locationKey
                );


                existingPlaces.add(
                    locationKey
                );


                addedInZone++;

                totalAdded++;

            }


            console.log(
                `${zone.name}: ${addedInZone} places`
            );

        });


        console.log(
            `🍕🍜🌮 Added ${totalAdded} extra places across Queens!`
        );


    }

    catch (error) {

        console.error(
            "Could not load extra Queens food:",
            error
        );

    }

}


// ==========================================
// LOAD EXTRA RESTAURANTS
// ==========================================

loadMoreQueensFood();
