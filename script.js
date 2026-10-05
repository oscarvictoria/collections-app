let sneakers = [];

let modelOne = {
  brand: "Jordan",
  model: "Reto 6",
  colorway: "Black",
  size: 8,
  favorite: false,
};

let modelTwo = {
  brand: "Jordan",
  model: "Retro 3",
  colorway: "True Blue",
  size: 8,
  favorite: false,
};

let modelThree = {
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

function displayShoes() {
  shoeList.textContent = "";

  sneakers.forEach(function (shoe) {
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

    shoeList.appendChild(shoeCard);
  });
}

displayShoes();
