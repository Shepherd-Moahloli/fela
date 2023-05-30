async function getStoko() {
  const data = await fetch("./stoko.json");
  const stoko = await data.json();

  console.log(stoko);

  stoko.forEach((group) => {
    console.log(group);
  });

  const itemHTML = `
  <li>
            <h3 class="name">RICE</h3>
            <a href="#starch-rice" class="picture">
              <img
                src="https://picsum.photos/seed/rice/200/200"
                width="200px"
                height="200px"
              />
            </a>
            <span class="price">R12.00</span>
            <span class="quantity">100g</span>
          </li>`;
  const groupHTML = `
  <div class="food-group">
        <ul>
         ${itemHTML}
          </ul>
          </div>
          `;

  console.log(itemHTML);
}

window.addEventListener("DOMContentLoaded", (event) => {
  let counter = 0;

  const stokoInterval = setInterval(() => {
    if (counter === 5) {
      clearInterval(stokoInterval);
    }
    getStoko();
    console.log("Getting stoko, again-again: ${counter} ");
    counter++;
  }, 7000);
  getStoko();
});
