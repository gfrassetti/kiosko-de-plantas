const items = document.getElementById("items");
const templateCard = document.getElementById("template-card").content;
const fragment = document.createDocumentFragment();

document.addEventListener("DOMContentLoaded", () => fetchData());

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
    const clone = templateCard.cloneNode(true);
    fragment.appendChild(clone);
  });
  items.appendChild(fragment);
}
