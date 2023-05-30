async function getStoko() {
  const data = await fetch("./stoko.json");
  const stoko = await data.json();

  console.log(stoko);
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
