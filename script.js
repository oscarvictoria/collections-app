let sneakers = [];

let form = document.querySelector(".shoe-form");

let brandInput = document.querySelector("#brand");
let modelInput = document.querySelector("#model");
let sizeInput = document.querySelector("#size");
let colorwayInput = document.querySelector("#colorway");

let brandFilter = document.querySelector("#brand-filter");

let searchSelector = document.querySelector("#shoe-search");

searchSelector.addEventListener("input", function (e) {
  let searchTerm = e.target.value.toLowerCase();

  let filteredSneakers = sneakers.filter(function (shoe) {
    return (
      shoe.brand.toLowerCase().includes(searchTerm) ||
      shoe.model.toLowerCase().includes(searchTerm) ||
      shoe.colorway.toLowerCase().includes(searchTerm)
    );
  });

  displayShoes(filteredSneakers);
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let newShoe = {
    brand: brandInput.value,
    model: modelInput.value,
    size: sizeInput.value,
    colorway: colorwayInput.value,
    favorite: false,
    id: crypto.randomUUID(),
  };

  sneakers.push(newShoe);

  displayShoes(sneakers);
  console.log(sneakers);
});

let modelOne = {
  id: 1,
  brand: "Jordan",
  model: "Retro 6",
  colorway: "Black",
  size: 8,
  favorite: false,
};

let modelTwo = {
  id: 2,
  brand: "Jordan",
  model: "Retro 3",
  colorway: "True Blue",
  size: 8,
  favorite: false,
};

let modelThree = {
  id: 3,
  brand: "New Balance",
  model: "9060",
  colorway: "Grey",
  size: 8,
  favorite: false,
};

sneakers.push(modelOne);
sneakers.push(modelTwo);
sneakers.push(modelThree);

let shoeList = document.querySelector(".shoe-list");

function displayShoes(arr) {
  shoeList.textContent = "";

  arr.forEach(function (shoe, index) {
    let shoeCard = document.createElement("div");

    let h2 = document.createElement("h2");
    h2.textContent = shoe.brand + " " + "- " + shoe.model;
    shoeCard.appendChild(h2);

    let size = document.createElement("p");
    size.textContent = "Size: " + shoe.size;
    shoeCard.appendChild(size);

    let color = document.createElement("p");
    color.textContent = "Color: " + shoe.colorway;
    shoeCard.appendChild(color);

    // Favorite button
    let favoriteButton = document.createElement("button");
    favoriteButton.className = "favorite";
    if (shoe.favorite) {
      favoriteButton.textContent = "★ Favorited";
      favoriteButton.classList.add("is-active");
    } else {
      favoriteButton.textContent = "☆ Favorite";
      favoriteButton.classList.remove("is-active");
    }

    favoriteButton.value = shoe.id;
    shoeCard.appendChild(favoriteButton);

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete";
    deleteButton.value = shoe.id;

    shoeCard.appendChild(deleteButton);

    shoeList.appendChild(shoeCard);
  });
}

shoeList.addEventListener("click", function (e) {
  if (e.target.className === "delete") {
    let id = e.target.value;
    sneakers = sneakers.filter(function (shoe) {
      return String(shoe.id) !== id;
    });
    displayShoes(sneakers);
  } else if (e.target.classList.contains("favorite")) {
    let id = e.target.value;
    let selectedShoe = sneakers.find(function (shoe) {
      return String(shoe.id) === id;
    });

    if (selectedShoe) {
      selectedShoe.favorite = !selectedShoe.favorite;
      displayShoes(sneakers);
    }
  }
});

displayShoes(sneakers);

brandFilter.addEventListener("change", function (e) {
  let selectedBrand = e.target.value;

  if (selectedBrand === "all") {
    displayShoes(sneakers);
  } else {
    let filteredShoe = sneakers.filter(function (shoe) {
      return shoe.brand === selectedBrand;
    });

    displayShoes(filteredShoe);
  }
});
