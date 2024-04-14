let toSlice = 0;

const getPizza = async () => {
  toSlice += 6;
  const res = await fetch("https://api.npoint.io/28c4e6b272c5c1f2a691");
  const picat = await res.json();
  console.log("Picat jane", picat);
  const foodContainer = document.getElementById("foodContainer");
  //
  foodContainer.innerHTML = "";

  picat.pizza.slice(0, toSlice).forEach((currentPizza) => {
    foodContainer.innerHTML += renderPizza(currentPizza);
  });

  //   const mapedPizzs = picat.map(currentPizza=>renderPizza(currentPizza))
};

const renderPizza = (pizzaObj) => {
  return ` <div class="foodItem">
    <div class="price">${pizzaObj.price}</div>
    <img src="${pizzaObj.image}" alt="" />
    <div class="foodName">${pizzaObj.name}</div>
    <div class="foodDesc">${pizzaObj.description}</div>
  </div>`;
};

async function getSandwich() {
  const res = await fetch("https://api.npoint.io/96cde51098094fdb17c2");
  const sandwich = await res.json();
  console.log("sandwichet jane", sandwich);
  const foodContainer = document.getElementById("foodContainer");
  //
  foodContainer.innerHTML = "";

  const sandwichedMapped = sandwich.sandwich.map((currentSandwich) => renderSandwich(currentSandwich));
  sandwichedMapped.forEach((sandwichString) => {
    foodContainer.innerHTML += sandwichString;
  });
}

const renderSandwich = (obj) => {
  return ` <div class="foodItem sandwich">
      <div class="price">${obj.price}</div>
      <img src="${obj.image}" alt="" />
      <div class="foodName">${obj.name}</div>
      <div class="foodDesc">${obj.description}</div>
    </div>`;
};
