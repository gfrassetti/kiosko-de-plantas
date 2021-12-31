document.addEventListener("DOMContentLoaded", () => fetchData());

const fetchData = async () => {
  try {
    const response = await fetch("../js/api.json");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    alert("Error");
    console.log("Error");
  }
};
