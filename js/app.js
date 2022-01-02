const items = document.getElementById("items");
const templateCard = document.getElementById("template-card").content;
const templateRowCart = document.getElementById("template-row-cart").content;
const fragment = document.createDocumentFragment();
const addBtns = document.querySelectorAll(".add-btn");
const shoppingCartitemContainer = document.querySelector(".cart-items");
let cartObject = {};

//fetch api al iniciar pagina
document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

//capturar el item
items.addEventListener("click", addToCart);

//fecth
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

//crea el template al fetchear
function createItem(data) {
  data.forEach((item) => {
    console.log(item);
    templateCard.querySelector(".currency").textContent = item.currency;
    templateCard.querySelector("h2").textContent = item.title;
    templateCard.querySelector("img").src = item.img;
    templateCard.querySelector("p").textContent = item.precio;
    templateCard.querySelector(".add-btn").dataset.id = item.id;
    const clone = templateCard.cloneNode(true);
    fragment.appendChild(clone);
  });
  items.appendChild(fragment);
}

//añadir al carrito lo capturado del template fetcheado
function addToCart(event) {
  /* const itemCaptured = event.target.closest(".item"); */

  if (
    event.target.classList.contains("add-btn") ||
    event.target.classList.contains("icon-btn")
  ) {
    setCart(event.target.closest(".item"));
  }
}

const setCart = (object) => {
  console.log(object);
  const product = {
    id: object.querySelector(".add-btn").dataset.id,
    title: object.querySelector("h2").textContent,
    price: object.querySelector("p").textContent,
    image: object.querySelector("img").src,
    quantity: 1,
  };

  //Si el carrito ya tiene la misma propiedad (id) , que la misma viene del producto que estamos capturando
  if (cartObject.hasOwnProperty(product.id)) {
    product.quantity = cartObject[product.id].quantity + 1;
  }
  //pushemos el obecto, copiamos product
  cartObject[product.id] = { ...product };
  printItemsToCart();
};

function printItemsToCart() {
  //empieza vacio para que no se dupliquen los que ya estan agregados
  shoppingCartitemContainer.innerHTML = "";
  Object.values(cartObject).forEach((product) => {
    templateRowCart.querySelector("img").src = product.image;
    templateRowCart.querySelector("h3").textContent = product.title;
    templateRowCart.querySelector(".span-quantity-item").textContent =
      product.quantity;
    console.log(product.quantity);
    console.log(product.price);
    templateRowCart.querySelector(".h3-row-item-price").textContent =
      product.price * product.quantity;
    templateRowCart.querySelector(".remove").dataset.id = product.id;

    const clone = templateRowCart.cloneNode(true);
    fragment.appendChild(clone);
  });
  shoppingCartitemContainer.appendChild(fragment);

  //es como un for pero simplificado

  const nPrecio = Object.values(cartObject).reduce(
    (acc, { quantity, price }) => acc + 150 + quantity * price,
    0
  );

  document.getElementById("total-price").textContent = `$ ${nPrecio}`;
}
