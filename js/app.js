const items = document.getElementById("items");
const templateCard = document.getElementById("template-card").content;
const fragment = document.createDocumentFragment();
const addBtns = document.querySelectorAll(".add-btn");
const shoppingCartitemContainer = document.querySelector(".cart-items");

document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

items.addEventListener("click", addToCart);

const fetchData = async () => {
  try {
    const response = await fetch("../js/api.json");
    const data = await response.json();
    /* console.log(data); */
    createItem(data);
  } catch (error) {
    alert("Error");
    console.log("Error");
  }
};

function createItem(data) {
  data.forEach((item) => {
    console.log(item);
    templateCard.querySelector("h2").textContent = item.title;
    templateCard.querySelector("img").src = item.img;
    templateCard.querySelector("p").textContent = `$ ${item.precio}`;
    templateCard.querySelector(".add-btn").dataset.id = item.id;
    const clone = templateCard.cloneNode(true);
    fragment.appendChild(clone);
  });
  items.appendChild(fragment);
}

function addToCart(event) {
  const itemCaptured = event.target.closest(".item");

  if (
    event.target.classList.contains("add-btn") ||
    event.target.classList.contains("icon-btn")
  ) {
    console.log("click");
    const itemTitle = itemCaptured.querySelector(".item-title").textContent;
    const itemPrice = itemCaptured.querySelector(".item-price").textContent;
    const itemImage = itemCaptured.querySelector(".item-image").src;

    addItemToShoppingCart(itemTitle, itemPrice, itemImage);
  }
}

function addItemToShoppingCart(itemTitle, itemPrice, itemImage) {
  const shoppingCartRow = document.createElement("div");
  const shoppingCartContent = `<article class="grid-items">
  <div class="prod">
    <img src=${itemImage} alt="" class="onCartImg">
  </div>
  <div class="prod">
    <h3>${itemTitle}</h3>
  </div>
  <div class="prod">
    <div class="quantity">
      <span>-</span>
      <span>1</span>
      <span>+</span>
    </div>
    <button class="remove">Quitar</button>
  </div>
  <div class="prod">
    <h3>${itemPrice}</h3>
  </div>
</article>`;

  shoppingCartRow.innerHTML = shoppingCartContent;
  shoppingCartitemContainer.append(shoppingCartRow);
}
