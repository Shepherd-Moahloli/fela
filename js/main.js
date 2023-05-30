async function getStoko() {
  const data = await fetch("./stoko.json");
  const stoko = await data.json();

  const listOfItems = "";

  stoko.starch.forEach((foodItem) => {
    const itemHTML = `
      <li>
      <h3 class="name">${foodItem}</h3>
      <a href="#starch-rice" class="picture">
      <img
      src="${foodItem.picture}"
      width="200px"
      height="200px"
      />
      </a>
      <span class="price">R${foodItem.price}</span>
      <span class="quantity">${foodItem.weight}g</span>
      </li>`;
    console.log(foodItem, itemHTML);
  });

  const groupsHTML = `
      <div class="food-group">
      <ul>
      </ul>
      </div>
      `;

  console.log(groupHTML);
}

window.addEventListener("DOMContentLoaded", (event) => {
  getStoko();
});
let counter = 0;
// This code helps with setting the time interval
/*const stokoInterval = setInterval(() => {
    if (counter === 5) {
        clearInterval(stokoInterval);
    }
    getStoko();
    console.log("Getting stoko, again-again: ${counter} ");
    counter++;
}, 7000);*/
